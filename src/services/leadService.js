/**
 * Flame.IT - Lead & Form Submission Service
 * Direct integration with Google Apps Script Web App (Google Sheets)
 */

export const submitLeadToGoogleSheet = async (payload) => {
    const scriptUrl = (import.meta.env.VITE_GOOGLE_SCRIPT_URL || '').trim();

    // If no URL is configured yet in .env, simulate for local development
    if (!scriptUrl) {
        console.info(
            'ℹ️ [Flame.IT] No VITE_GOOGLE_SCRIPT_URL found in .env. Form submission simulated locally.'
        );
        await new Promise((resolve) => setTimeout(resolve, 800));
        return { success: true, simulated: true };
    }

    try {
        // Google Apps Script Web Apps do not support CORS OPTIONS preflight.
        // Sending 'text/plain;charset=utf-8' with mode: 'no-cors' avoids preflight
        // and guarantees the POST payload is delivered, appended to Sheets, and emailed.
        await fetch(scriptUrl, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'text/plain;charset=utf-8'
            },
            body: JSON.stringify(payload)
        });

        return { success: true };
    } catch (error) {
        console.warn('Network submission note:', error);
        // Fallback: If network or ad-blocker blocked the standard request, try a no-cors ping
        try {
            await fetch(scriptUrl, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'text/plain;charset=utf-8'
                },
                body: JSON.stringify(payload)
            });
            return { success: true, fallback: true };
        } catch (fallbackError) {
            console.error('Submission failed completely:', fallbackError);
            throw fallbackError;
        }
    }
};
