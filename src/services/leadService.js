/**
 * FlameX - Lead & Form Submission Service
 * Direct integration with Google Apps Script Web App (Google Sheets)
 *
 * Uses application/x-www-form-urlencoded — a "safe" content type that:
 * - Does NOT trigger a CORS preflight OPTIONS request
 * - Correctly follows Google's 302 redirect to script.googleusercontent.com
 * - Is reliably parsed by Apps Script via e.parameter
 * - Works from any origin including live production domains
 */

/**
 * Encodes a flat object as URL-encoded form data
 * e.g. { name: "John", email: "j@x.com" } → "name=John&email=j%40x.com"
 */
const encodeFormData = (obj) =>
    Object.entries(obj)
        .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v ?? '')}`)
        .join('&');

export const submitLeadToGoogleSheet = async (payload) => {
    const scriptUrl = (import.meta.env.VITE_GOOGLE_SCRIPT_URL || '').trim();

    // If no URL is configured yet in .env, simulate for local development
    if (!scriptUrl) {
        console.info(
            'ℹ️ [FlameX] No VITE_GOOGLE_SCRIPT_URL found in .env. Form submission simulated locally.'
        );
        await new Promise((resolve) => setTimeout(resolve, 800));
        return { success: true, simulated: true };
    }

    // Encode as URL-encoded form data — avoids preflight and redirect issues.
    // Apps Script receives this via e.parameter (flat key-value pairs).
    const body = encodeFormData(payload);

    try {
        await fetch(scriptUrl, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body
        });

        return { success: true };
    } catch (error) {
        console.warn('[FlameX] Primary submission failed, retrying:', error);
        // Retry once on transient network errors
        try {
            await fetch(scriptUrl, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body
            });
            return { success: true, fallback: true };
        } catch (fallbackError) {
            console.error('[FlameX] Submission failed completely:', fallbackError);
            throw fallbackError;
        }
    }
};
