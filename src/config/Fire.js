import firebase from 'firebase';
require("firebase/database");
require("firebase/auth");

const config = {

   apiKey: "AIzaSyBs0_abeWOl29TTa8FwvEgmnjUd5Q82wJk",
    authDomain: "food-receipe-dashboard.firebaseapp.com",
    databaseURL: "https://food-receipe-dashboard-default-rtdb.firebaseio.com",
    projectId: "food-receipe-dashboard",
    storageBucket: "food-receipe-dashboard.appspot.com",
    messagingSenderId: "621956029742",
    appId: "1:621956029742:web:6b357d9135cf97c518aebf",
    measurementId: "G-MYY59NEWQE"

};

const fire = firebase.initializeApp(config);

export const auth = firebase.auth();

export const storage = firebase.storage();

export const database = firebase.database();


export default fire;