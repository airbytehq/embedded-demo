/**
 * Generates a new access token from the Airbyte API
 * @returns {Promise<string>} The access token
 */
async function getAccessToken() {
    try {
        const response = await fetch('https://api.airbyte.com/v1/applications/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                client_id: process.env.SONAR_AIRBYTE_CLIENT_ID,
                client_secret: process.env.SONAR_AIRBYTE_CLIENT_SECRET,
                "grant-type": "client_credentials"
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`Failed to get access token: ${errorData.message || response.statusText}`);
        }

        const data = await response.json();
        return data.access_token;
    } catch (error) {
        console.error('Error getting access token:', error);
        throw error;
    }
}

/**
 * Generates a widget token for the Airbyte API
 * @param {string} externalUserId - The ID of the external user
 * @param {string} allowedOrigin - The allowed origin (optional, defaults to env variable)
 * @returns {Promise<string>} The widget token
 */
async function generateWidgetToken(externalUserId, allowedOrigin = null) {
    try {
        const accessToken = await getAccessToken();

        let origin = allowedOrigin != null ? allowedOrigin : process.env.SONAR_AIRBYTE_ALLOWED_ORIGIN;

        // Make the vercel preview work
        if (process.env.VERCEL_ENV === "preview") {
            origin = `https://${process.env.VERCEL_BRANCH_URL}`;
        }

        console.log(`Generating widget token for user ${externalUserId} with origin ${origin}`);

        const response = await fetch('https://api.airbyte.ai/api/v1/embedded/scoped-token', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                external_user_id: externalUserId,
                organization_id: process.env.SONAR_AIRBYTE_ORGANIZATION_ID,
                allowed_origin: origin,
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`Failed to get widget token: ${errorData.message || response.statusText}`);
        }

        const data = await response.json();
        return data.token;
    } catch (error) {
        console.error('Error generating widget token:', error);
        throw error;
    }
}

module.exports = {
    generateWidgetToken
};
