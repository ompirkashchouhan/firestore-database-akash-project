// TODO: Replace the following with your app's Firebase project configuration
var firebaseConfig = {
  apiKey: "AIzaSyAyIwv5nEkmJh4bCYbuWNp_Inu0P464N6A",
  authDomain: "ilearner-93caa.firebaseapp.com",
  databaseURL: "https://ilearner-93caa-default-rtdb.firebaseio.com",
  projectId: "ilearner-93caa",
  storageBucket: "ilearner-93caa.appspot.com",
  messagingSenderId: "701143921529",
  appId: "1:701143921529:web:7faff75baecc24266db5a8",
  measurementId: "G-5VSH662VS6"
};
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();