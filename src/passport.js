const passport = require('passport');
const FacebookTokenStrategy = require('passport-facebook-token');
const { Strategy: GoogleTokenStrategy } = require('passport-google-token');

// FACEBOOK STRATEGY
const FacebookTokenStrategyCallback = (accessToken, refreshToken, profile, done) => done(null, {
    accessToken,
    refreshToken,
    profile,
});

passport.use(new FacebookTokenStrategy({
    clientID: 'your-facebook-app-id',
    clientSecret: 'your-facebook-app-secret',
}, FacebookTokenStrategyCallback));

// GOOGLE STRATEGY
// access_token ya29.a0Adw1xeX1k3bOAmRBcUxjkYXPo2O8AdLiRasIJgdsMhYZB5GM_Z4U0TNfWG52dxTg0LxEUonImk3AiOJkNNygcmSqtOYyK94MpLvYqYhVaUXzK6TSORtpxfdrD2VYT441K0MV0hRPJ8sPOk0rnqFH9HKAS0AreUJkZe4
// refresh_token 1//04SecwerpiQPbCgYIARAAGAQSNwF-L9IrH_4lCam03kwb4ZIWR_VKwa2GiHYOF-ynwMwbWHyXoMNqJy5wTKjn4ZKs9QFV4_3BNqs
// Auth_code 4/xAHhAOfx0-yvhsUF13gvQ7ngaYN8PwjbaXrncunkROvBdBsRLPpLQrXn6aXgD9-At7Lvp5ZEv8Yju7xD_wnG5w8
const GoogleTokenStrategyCallback = (accessToken, refreshToken, profile, done) => done(null, {
    accessToken,
    refreshToken,
    profile,
});

passport.use(new GoogleTokenStrategy({
    clientID: '1001269359879-4j770smnpo9l5cotp0skdt7eao8edsu3.apps.googleusercontent.com',
    clientSecret: 'bPY4UnlIoWnrXZSn6kbWITmG',
}, GoogleTokenStrategyCallback));

// promisified authenticate functions
const authenticateFacebook = (req, res) => new Promise((resolve, reject) => {
    passport.authenticate('facebook-token', { session: false }, (err, data, info) => {
        if (err) reject(err);
        resolve({ data, info });
    })(req, res);
});

const authenticateGoogle = (req, res) => new Promise((resolve, reject) => {
    passport.authenticate('google-token', { session: false ,}, (err, data, info) => {
        if (err) reject(err);
        resolve({ data, info });
    })(req, res);
});

module.exports = { authenticateFacebook, authenticateGoogle };