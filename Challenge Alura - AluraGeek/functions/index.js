/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.requireAuth = functions.https.onRequest((req, res) => {
  const idToken = req.headers.authorization;

  if (!idToken) {
    return res.status(403).json({ error: 'Unauthorized' });
  }

  admin.auth().verifyIdToken(idToken)
    .then((decodedToken) => {
      // El token es válido, permitir el acceso a la página
      res.status(200).send('Acceso permitido');
    })
    .catch((error) => {
      // El token no es válido, denegar el acceso
      res.status(403).json({ error: 'Unauthorized' });
    });
});