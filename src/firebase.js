import * as firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDm6hU4Dw61tiIPKivdLM0kytY6wkSKhZA",
    authDomain: "diary-617c6.firebaseapp.com",
    databaseURL: "https://diary-617c6.firebaseio.com",
    projectId: "diary-617c6",
    storageBucket: "",
    messagingSenderId: "624568013130"
};
firebase.initializeApp(config);

export const db = firebase.database().ref('/notes');