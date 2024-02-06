const { getAuth } = require("firebase-admin/auth");

const application = require("./firebase.config.js");

const auth = getAuth(application);

module.exports = auth;
