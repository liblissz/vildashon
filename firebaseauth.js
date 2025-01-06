 
 
 
 // Import necessary Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";

// Replace with your actual Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD9rdo1_fbEUbZmwqGubn9dMOiCJiBqXk8",
    authDomain: "vildash-a9de4.firebaseapp.com",
    projectId: "vildash-a9de4",
    storageBucket: "vildash-a9de4.firebasestorage.app",
    messagingSenderId: "320348519512",
    appId: "1:320348519512:web:169f0c7a179d48c763de2d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

// Function to display messages
function showMessage(message, divId) {
  const messageDiv = document.getElementById(divId);
  messageDiv.style.display = "block";
  messageDiv.innerHTML = message;
  messageDiv.style.opacity = 1;
  setTimeout(() => {
    messageDiv.style.opacity = 0;
  }, 5000);
}

// Sign Up Event Listener
const signUpButton = document.getElementById('submitSignUp');
signUpButton.addEventListener('click', (event) => {
  event.preventDefault();

  const email = document.getElementById('rEmail').value;
  const password = document.getElementById('rPassword').value;
  const firstName = document.getElementById('fName').value;
  const lastName = document.getElementById('lName').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      const userData = {
        email: email,
        firstName: firstName,
        lastName: lastName
      };

      // Store user data in Firestore
      setDoc(doc(db, "users", user.uid), userData)
        .then(() => {
          showMessage('Account Created Successfully', 'signUpMessage');
          // Redirect to the desired page after successful sign-up
          window.location.href = 'index.html'; 
        })
        .catch((error) => {
          console.error("Error writing document:", error);
          showMessage('Error creating user profile', 'signUpMessage');
        });
    })
    .catch((error) => {
      console.error("Error during sign-up:", error);
      const errorCode = error.code;
      if (errorCode === 'auth/email-already-in-use') {
        showMessage('Email Address Already Exists !!!', 'signUpMessage');
      } else if (errorCode === 'auth/weak-password') {
        showMessage('Password is too weak', 'signUpMessage');
      } else {
        showMessage('Unable to create User', 'signUpMessage');
      }
    });
});

// Sign In Event Listener
const signInButton = document.getElementById('submitSignIn');
signInButton.addEventListener('click', (event) => {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      showMessage('Login is successful', 'signInMessage');
      // Redirect to the desired page after successful sign-in
      window.location.href = 'homepage.html'; 
    })
    .catch((error) => {
      console.error("Error during sign-in:", error);
      const errorCode = error.code;
      if (errorCode === 'auth/invalid-email') {
        showMessage('Invalid email address', 'signInMessage');
      } else if (errorCode === 'auth/wrong-password') {
        showMessage('Incorrect password', 'signInMessage');
      } else if (errorCode === 'auth/user-not-found') {
        showMessage('Account does not Exist', 'signInMessage');
      } else {
        showMessage('Unable to sign in', 'signInMessage');
      }
    });
});

 
 
 
 /*
 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
 import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
 import{getFirestore, setDoc, doc} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js"
 
 /*const firebaseConfig = {
 //YOUR COPIED FIREBASE PART SHOULD BE HERE
 //WATCH THIS VIDEO TO LEARN WHAT TO PUT HERE   https://youtu.be/_Xczf06n6x0
 };*/
 /*
 const firebaseConfig = {
    apiKey: "AIzaSyD9rdo1_fbEUbZmwqGubn9dMOiCJiBqXk8",
    authDomain: "vildash-a9de4.firebaseapp.com",
    projectId: "vildash-a9de4",
    storageBucket: "vildash-a9de4.firebasestorage.app",
    messagingSenderId: "320348519512",
    appId: "1:320348519512:web:169f0c7a179d48c763de2d"
  };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);

 function showMessage(message, divId){
    var messageDiv=document.getElementById(divId);
    messageDiv.style.display="block";
    messageDiv.innerHTML=message;
    messageDiv.style.opacity=1;
    setTimeout(function(){
        messageDiv.style.opacity=0;
    },5000);
 }
 const signUp=document.getElementById('submitSignUp');
 signUp.addEventListener('click', (event)=>{
    event.preventDefault();
    const email=document.getElementById('rEmail').value;
    const password=document.getElementById('rPassword').value;
    const firstName=document.getElementById('fName').value;
    const lastName=document.getElementById('lName').value;

    const auth=getAuth();
    const db=getFirestore();

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>{
        const user=userCredential.user;
        const userData={
            email: email,
            firstName: firstName,
            lastName:lastName
        };
        showMessage('Account Created Successfully', 'signUpMessage');
        const docRef=doc(db, "users", user.uid);
        setDoc(docRef,userData)
        .then(()=>{
            window.location.href='index.html';
        })
        .catch((error)=>{
            console.error("error writing document", error);

        });
    })
    .catch((error)=>{
        const errorCode=error.code;
        if(errorCode=='auth/email-already-in-use'){
            showMessage('Email Address Already Exists !!!', 'signUpMessage');
        }
        else{
            showMessage('unable to create User', 'signUpMessage');
        }
    })
 });

 const signIn=document.getElementById('submitSignIn');
 signIn.addEventListener('click', (event)=>{
    event.preventDefault();
    const email=document.getElementById('email').value;
    const password=document.getElementById('password').value;
    const auth=getAuth();

    signInWithEmailAndPassword(auth, email,password)
    .then((userCredential)=>{
        showMessage('login is successful', 'signInMessage');
        const user=userCredential.user;
        localStorage.setItem('loggedInUserId', user.uid);
        window.location.href='homepage.html';
    })
    .catch((error)=>{
        const errorCode=error.code;
        if(errorCode==='auth/invalid-credential'){
            showMessage('Incorrect Email or Password', 'signInMessage');
        }
        else{
            showMessage('Account does not Exist', 'signInMessage');
        }
    })
 })*/