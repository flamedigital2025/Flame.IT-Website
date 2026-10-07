/**
 * =========================================================================
 * FLAME.IT - AUDIT & LEAD CAPTURE GOOGLE APPS SCRIPT WEB APP
 * =========================================================================
 * 
 * Automatically captures website form submissions directly into Google Sheets
 * and sends an instant branded HTML email alert to enquiry.flamedigital@gmail.com,
 * plus a confirmation receipt to the practice/client.
 */

var NOTIFICATION_EMAIL = "enquiry.flamedigital@gmail.com";
var SENDER_NAME = "Flame.IT Team";
var SEND_ADMIN_NOTIFICATION = true;
var SEND_CLIENT_RECEIPT = true;

// OPTIONAL: If your Apps Script was created as a standalone script at script.google.com
// (instead of inside the sheet via Extensions > Apps Script), paste your Sheet ID below:
// E.g. https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID_HERE/edit
var SPREADSHEET_ID = "";

/**
 * Handle incoming POST requests from the website (Contact Audit & Territory Check)
 */
function doPost(e) {
  var lock = LockService.getScriptLock();
  // Wait up to 10 seconds for other concurrent requests before proceeding
  lock.tryLock(10000);

  try {
    var sheet = getOrCreateSheet();
    var data = parseRequestData(e);

    // Format Date & Time for Australia / Sydney timezone (AEST/AEDT)
    var now = new Date();
    var timestamp = Utilities.formatDate(now, "Australia/Sydney", "dd/MM/yyyy HH:mm:ss");

    // Extract submission details
    var submissionType = data.formType || (data.chairs ? "Free Clinic Audit" : "Website Inquiry");
    var sector         = data.sector ? capitalize(data.sector) : "Dental & Clinical";
    var doctorName     = data.doctorName || data.name || "N/A";
    var practiceName   = data.practiceName || data.clinicName || "N/A";
    var mobile         = data.mobile || data.phone || "N/A";
    var email          = data.email || "N/A";
    var cityState      = data.cityState || "N/A";
    var postcode       = data.postcode || data.pin || "N/A";
    var chairs         = data.chairs || data.capacity || data.surgeries || "N/A";
    var pms            = data.pms || "N/A";
    var budget         = data.budgetDisplay || data.budget || "N/A";
    var bottleneck     = data.bottleneck || data.notes || data.message || "N/A";

    var procedures = "";
    if (Array.isArray(data.procedures)) {
      procedures = data.procedures.join(", ");
    } else {
      procedures = data.procedures || "N/A";
    }

    // Append new row to Google Sheet
    sheet.appendRow([
      timestamp,
      submissionType,
      sector,
      doctorName,
      practiceName,
      mobile,
      email,
      cityState,
      postcode,
      chairs,
      pms,
      procedures,
      budget,
      bottleneck,
      "New Lead"
    ]);

    var leadPayload = {
      timestamp: timestamp,
      submissionType: submissionType,
      sector: sector,
      doctorName: doctorName,
      practiceName: practiceName,
      mobile: mobile,
      email: email,
      cityState: cityState,
      postcode: postcode,
      chairs: chairs,
      pms: pms,
      procedures: procedures,
      budget: budget,
      bottleneck: bottleneck
    };

    // 1. Send instant email alert to enquiry.flamedigital@gmail.com
    if (SEND_ADMIN_NOTIFICATION && NOTIFICATION_EMAIL) {
      sendAdminNotification(leadPayload);
    }

    // 2. Send instant confirmation email receipt to the client
    if (SEND_CLIENT_RECEIPT && email && email !== "N/A" && email.indexOf("@") !== -1) {
      sendClientConfirmation(leadPayload);
    }

    // Return success JSON
    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      message: "Lead recorded successfully in Google Sheet.",
      timestamp: timestamp
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    Logger.log("doPost Error: " + error.toString());
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);

  } finally {
    lock.releaseLock();
  }
}

/**
 * Handle GET requests (Health check endpoint)
 */
function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    status: "active",
    account: NOTIFICATION_EMAIL,
    message: "Flame.IT Google Sheets API is live and ready to receive form submissions."
  })).setMimeType(ContentService.MimeType.JSON);
}

/**
 * ONE-CLICK TEST & PERMISSION AUTHORIZATION:
 * Select "testSaveLead" in the Apps Script top toolbar and click "Run".
 * If Google shows "Authorization required", click Review Permissions -> Advanced -> Go to Flame.IT (unsafe) -> Allow.
 * This will immediately add a test row to your sheet!
 */
function testSaveLead() {
  var sheet = getOrCreateSheet();
  var timestamp = Utilities.formatDate(new Date(), "Australia/Sydney", "dd/MM/yyyy HH:mm:ss");
  sheet.appendRow([
    timestamp,
    "Test Verification",
    "Dental",
    "Dr. Test Clinician",
    "Flamex Test Clinic",
    "0400 123 456",
    NOTIFICATION_EMAIL,
    "Sydney, NSW",
    "2000",
    "4–6 Surgeries",
    "Dental4Windows",
    "Google Maps 3-Pack SEO",
    "A$3,500 – A$7,500/mo",
    "Verified direct connection from Apps Script",
    "Verified Active"
  ]);
  Logger.log("✅ Success! Test row written to sheet. Total rows now: " + sheet.getLastRow());
}

/**
 * Helper to ensure the active sheet has the correct column headers and styling
 */
function getOrCreateSheet() {
  var ss;
  try {
    ss = SpreadsheetApp.getActiveSpreadsheet();
  } catch (e) {
    Logger.log("getActiveSpreadsheet note: " + e.toString());
  }

  // Fallback for standalone scripts
  if (!ss && SPREADSHEET_ID) {
    try {
      ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    } catch (openErr) {
      Logger.log("openById note: " + openErr.toString());
    }
  }

  if (!ss) {
    throw new Error("Could not find Google Sheet. Please ensure you opened Apps Script via Extensions > Apps Script inside Flamex.IT, or set SPREADSHEET_ID in Code.gs.");
  }

  var sheet = ss.getSheetByName("Sheet1") || ss.getActiveSheet();

  // If sheet is completely blank, initialize column headers and styling
  if (sheet.getLastRow() === 0) {
    var headers = [
      "Timestamp (AEST)",
      "Submission Type",
      "Sector",
      "Doctor / Contact Name",
      "Practice / Facility Name",
      "Mobile Phone",
      "Email Address",
      "City & State",
      "Postcode",
      "Chairs / Capacity",
      "PMS Software",
      "Growth Targets / Procedures",
      "Monthly Budget",
      "Operational Bottleneck / Notes",
      "Lead Status"
    ];

    sheet.appendRow(headers);

    // Style the header row (Flame.IT Slate Navy)
    var headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setBackground("#0F172A");
    headerRange.setFontColor("#FFFFFF");
    headerRange.setFontWeight("bold");
    headerRange.setFontFamily("Inter");
    headerRange.setHorizontalAlignment("center");
    headerRange.setVerticalAlignment("middle");
    sheet.setRowHeight(1, 38);
    sheet.setFrozenRows(1);

    for (var i = 1; i <= headers.length; i++) {
      sheet.autoResizeColumn(i);
    }
  }

  return sheet;
}

/**
 * Parse incoming data from JSON or URL-encoded form parameters
 */
function parseRequestData(e) {
  if (!e) return {};
  if (e.postData && e.postData.contents) {
    try {
      return JSON.parse(e.postData.contents);
    } catch (err) {
      Logger.log("JSON parse fallback: " + err.toString());
    }
  }
  return e.parameter || {};
}

/**
 * Send branded HTML notification email to enquiry.flamedigital@gmail.com
 */
function sendAdminNotification(data) {
  var subject = "🔥 New Lead: " + data.doctorName + " (" + data.practiceName + ") - " + data.sector;

  var htmlBody =
    '<div style="font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Helvetica, Arial, sans-serif; max-width: 620px; margin: 0 auto; padding: 24px; border: 1px solid #E2E8F0; border-radius: 12px; background-color: #FFFFFF;">' +
      '<div style="background: linear-gradient(135deg, #0F172A 0%, #1E293B 100%); padding: 22px; border-radius: 8px 8px 0 0; color: #FFFFFF; text-align: center;">' +
        '<h2 style="margin: 0; font-size: 22px; font-weight: 700; letter-spacing: -0.5px;">🔥 Flame.IT Lead Alert</h2>' +
        '<p style="margin: 6px 0 0 0; font-size: 14px; opacity: 0.85;">' + data.submissionType + ' &bull; ' + data.sector + '</p>' +
      '</div>' +

      '<div style="padding: 24px 20px;">' +
        '<table style="width: 100%; border-collapse: collapse; font-size: 14px; line-height: 1.6;">' +
          '<tr><td style="padding: 9px 0; color: #64748B; width: 38%; font-weight: 600;">Doctor / Contact:</td><td style="padding: 9px 0; color: #0F172A; font-weight: 700;">' + data.doctorName + '</td></tr>' +
          '<tr style="border-top: 1px solid #F1F5F9;"><td style="padding: 9px 0; color: #64748B; font-weight: 600;">Clinic / Practice:</td><td style="padding: 9px 0; color: #0F172A; font-weight: 700;">' + data.practiceName + '</td></tr>' +
          '<tr style="border-top: 1px solid #F1F5F9;"><td style="padding: 9px 0; color: #64748B; font-weight: 600;">Mobile Phone:</td><td style="padding: 9px 0;"><a href="tel:' + data.mobile + '" style="color: #0284C7; font-weight: 700; text-decoration: none;">' + data.mobile + '</a></td></tr>' +
          '<tr style="border-top: 1px solid #F1F5F9;"><td style="padding: 9px 0; color: #64748B; font-weight: 600;">Email Address:</td><td style="padding: 9px 0;"><a href="mailto:' + data.email + '" style="color: #0284C7; font-weight: 700; text-decoration: none;">' + data.email + '</a></td></tr>' +
          '<tr style="border-top: 1px solid #F1F5F9;"><td style="padding: 9px 0; color: #64748B; font-weight: 600;">City, State & Postcode:</td><td style="padding: 9px 0; color: #0F172A;">' + data.cityState + ' (' + data.postcode + ')</td></tr>' +
          '<tr style="border-top: 1px solid #F1F5F9;"><td style="padding: 9px 0; color: #64748B; font-weight: 600;">Capacity / Chairs:</td><td style="padding: 9px 0; color: #0F172A;">' + data.chairs + '</td></tr>' +
          '<tr style="border-top: 1px solid #F1F5F9;"><td style="padding: 9px 0; color: #64748B; font-weight: 600;">Practice Software (PMS):</td><td style="padding: 9px 0; color: #0F172A;">' + data.pms + '</td></tr>' +
          '<tr style="border-top: 1px solid #F1F5F9;"><td style="padding: 9px 0; color: #64748B; font-weight: 600;">Target Focus Areas:</td><td style="padding: 9px 0; color: #0F172A;">' + data.procedures + '</td></tr>' +
          '<tr style="border-top: 1px solid #F1F5F9;"><td style="padding: 9px 0; color: #64748B; font-weight: 600;">Monthly Budget:</td><td style="padding: 9px 0; color: #10B981; font-weight: 700;">' + data.budget + '</td></tr>' +
          '<tr style="border-top: 1px solid #F1F5F9;"><td style="padding: 9px 0; color: #64748B; font-weight: 600; vertical-align: top;">Notes / Bottleneck:</td><td style="padding: 9px 0; color: #0F172A; white-space: pre-wrap;">' + data.bottleneck + '</td></tr>' +
          '<tr style="border-top: 1px solid #F1F5F9;"><td style="padding: 9px 0; color: #64748B; font-weight: 600;">Received At:</td><td style="padding: 9px 0; color: #64748B; font-size: 13px;">' + data.timestamp + ' (AEST)</td></tr>' +
        '</table>' +
      '</div>' +

      '<div style="background-color: #F8FAFC; padding: 14px 20px; border-radius: 0 0 8px 8px; text-align: center; font-size: 12px; color: #94A3B8; border-top: 1px solid #E2E8F0;">' +
        'Click "Reply" to email ' + data.doctorName + ' directly &bull; Sent via Flame.IT Google Apps Script Webhook' +
      '</div>' +
    '</div>';

  try {
    MailApp.sendEmail({
      to: NOTIFICATION_EMAIL,
      name: SENDER_NAME,
      replyTo: (data.email && data.email !== "N/A") ? data.email : NOTIFICATION_EMAIL,
      subject: subject,
      htmlBody: htmlBody
    });
  } catch (mailError) {
    Logger.log("Admin email dispatch failed: " + mailError.toString());
  }
}

/**
 * Send branded HTML confirmation receipt to the inquiring doctor/practice
 */
function sendClientConfirmation(data) {
  var subject = "We've received your Flame.IT audit request – " + (data.practiceName !== "N/A" ? data.practiceName : "Practice Diagnostic");

  var htmlBody =
    '<div style="font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Helvetica, Arial, sans-serif; max-width: 620px; margin: 0 auto; padding: 24px; border: 1px solid #E2E8F0; border-radius: 12px; background-color: #FFFFFF;">' +
      '<div style="background: linear-gradient(135deg, #0F172A 0%, #1E293B 100%); padding: 22px; border-radius: 8px 8px 0 0; color: #FFFFFF; text-align: center;">' +
        '<h2 style="margin: 0; font-size: 22px; font-weight: 700; letter-spacing: -0.5px;">Flame.IT Healthcare Solutions</h2>' +
        '<p style="margin: 6px 0 0 0; font-size: 14px; opacity: 0.85;">Confirmation: ' + data.submissionType + '</p>' +
      '</div>' +

      '<div style="padding: 24px 20px; color: #334155; font-size: 15px; line-height: 1.6;">' +
        '<p style="margin-top: 0;">Hi <strong>' + (data.doctorName !== "N/A" ? data.doctorName : "Doctor / Practice Manager") + '</strong>,</p>' +
        '<p>Thank you for requesting your free clinic growth and digital audit with Flame.IT for <strong>' + (data.practiceName !== "N/A" ? data.practiceName : "your practice") + '</strong>.</p>' +
        '<p>Our Australian healthcare strategists have received your details and are preparing a comprehensive assessment of:</p>' +
        '<ul style="padding-left: 20px; color: #475569;">' +
          '<li><strong>Google Maps 3-Pack Catchment:</strong> Your local search dominance and postcode radius exclusivity.</li>' +
          '<li><strong>Enquiry Leakage Diagnostic:</strong> Missed call volume and out-of-hours booking potential.</li>' +
          '<li><strong>AI Search Visibility:</strong> How AI search engines (ChatGPT, Google Gemini) perceive your clinicians.</li>' +
        '</ul>' +
        '<p>A Senior Australian Healthcare Strategist will review your catchment data and contact you via phone (<strong>' + data.mobile + '</strong>) or email within 24 business hours.</p>' +
        '<div style="margin: 24px 0; padding: 16px; background-color: #F8FAFC; border-left: 4px solid #0D9488; border-radius: 4px;">' +
          '<p style="margin: 0; font-size: 14px; color: #0F172A;"><strong>Need immediate assistance?</strong><br>You can reply directly to this email or call our Australian toll-free line at <strong>1300 352 634</strong>.</p>' +
        '</div>' +
        '<p style="margin-bottom: 0;">Warm regards,<br><strong>Flame.IT Healthcare Team</strong><br><span style="font-size: 13px; color: #64748B;">Level 28, 161 Castlereagh Street, Sydney NSW 2000</span></p>' +
      '</div>' +

      '<div style="background-color: #F8FAFC; padding: 14px 20px; border-radius: 0 0 8px 8px; text-align: center; font-size: 12px; color: #94A3B8; border-top: 1px solid #E2E8F0;">' +
        '&copy; Flame.IT Healthcare IT &amp; Marketing Solutions &bull; Strictly Confidential' +
      '</div>' +
    '</div>';

  try {
    MailApp.sendEmail({
      to: data.email,
      name: SENDER_NAME,
      replyTo: NOTIFICATION_EMAIL,
      subject: subject,
      htmlBody: htmlBody
    });
  } catch (clientMailError) {
    Logger.log("Client confirmation email failed: " + clientMailError.toString());
  }
}

function capitalize(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}
