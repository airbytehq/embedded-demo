require('dotenv').config();

const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');

const db = require('./db');
const api = require('./airbyte_api');
const {setAuthCookie, requirePasswordForAPI} = require("./utils");

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());
// Middleware to parse cookies
app.use(cookieParser());
// Apply password protection to API routes
app.use(requirePasswordForAPI);

// Serve static files from the static directory
app.use(express.static(path.join(__dirname, '..', 'static')));

// Route for the root path (no password protection)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'static', 'index.html'));
});

// Endpoint to handle login
app.post('/api/login', (req, res) => {
    const { password } = req.body;

    if (password === process.env.SONAR_AIRBYTE_WEBAPP_PASSWORD) {
        res.cookie('appPassword', password, {
            maxAge: 24 * 60 * 60 * 1000, // 24 hours
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict'
        });
        res.json({ success: true });
    } else {
        res.status(401).json({ error: 'Invalid password' });
    }
});

// Endpoint to handle logout
app.post('/api/logout', (req, res) => {
    res.clearCookie('userEmail', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict'
    });
    res.json({ message: 'Logged out successfully' });
});

// Endpoint to create a new user
app.post('/api/users', async (req, res) => {
    const { email } = req.body;
    
    // Validate input
    if (!email) {
        return res.status(400).json({ error: 'Email is required' });
    }

    try {
        // Check if user already exists
        let user = await db.findUser(email);
        if (!user) {
            user = await db.addUser(email);
        }

        setAuthCookie(res, email);
        res.status(201).json(user);
    } catch (error) {
        if (error.message === 'Email already exists') {
            return res.status(400).json({ error: error.message });
        }
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Failed to create user' });
    }
});

// Endpoint to get current user information
app.get('/api/users/me', (req, res) => {
    if (!req.user) {
        return res.status(401).json({ error: 'Not authenticated' });
    }
    res.json(req.user);
});

// Endpoint to generate a widget token that will be passed to the widget in the web app
app.post('/api/airbyte/token', async (req, res) => {
    // Check if user is authenticated
    if (!req.user) {
        return res.status(401).json({ error: 'User not authenticated' });
    }

    try {
        const { allowedOrigin } = req.body;
        const widgetToken = await api.generateWidgetToken(req.user.email, allowedOrigin);
        res.json({ token: widgetToken });
    } catch (error) {
        console.error('Error generating widget token:', error);
        res.status(500).json({ error: 'Failed to generate widget token' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    console.log('Environment variables loaded:');
    console.log('SONAR_AIRBYTE_ALLOWED_ORIGIN:', process.env.SONAR_AIRBYTE_ALLOWED_ORIGIN);
    console.log('SONAR_AIRBYTE_ORGANIZATION_ID:', process.env.SONAR_AIRBYTE_ORGANIZATION_ID);
    console.log('SONAR_AIRBYTE_CLIENT_ID:', process.env.SONAR_AIRBYTE_CLIENT_ID ? '***' : 'not set');
    console.log('SONAR_AIRBYTE_CLIENT_SECRET:', process.env.SONAR_AIRBYTE_CLIENT_SECRET ? '***' : 'not set');
    console.log('SONAR_AIRBYTE_WEBAPP_PASSWORD:', process.env.SONAR_AIRBYTE_WEBAPP_PASSWORD ? '***' : 'not set');
    console.log('REDIS_URL:', process.env.REDIS_URL ? '***' : 'not set');
});

module.exports = app;
