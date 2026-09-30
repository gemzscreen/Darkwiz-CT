/* DARKWIZ CT (Construction Toolkit) — Firebase connection.
   Paste the values from Firebase console → Project settings → General → Your apps → Web app → SDK setup (Config).
   These keys identify your project; they are safe to publish. Your data is protected by firestore.rules.
   Leave the placeholders in place to run the app offline (data stays in each browser only). */
window.DWQS_FIREBASE = window.DWQS_FIREBASE || {
  apiKey: "PASTE_API_KEY",
  authDomain: "PASTE_PROJECT_ID.firebaseapp.com",
  projectId: "PASTE_PROJECT_ID",
  storageBucket: "PASTE_PROJECT_ID.appspot.com",
  messagingSenderId: "PASTE_SENDER_ID",
  appId: "PASTE_APP_ID"
};
