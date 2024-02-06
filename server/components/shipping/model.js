const app = require('../../firebase/firebase.config.js')
const admin = require('firebase-admin');
const {
  getFirestore
} = require('firebase-admin/firestore');

const db = getFirestore(admin.apps[app]);

module.exports = db;