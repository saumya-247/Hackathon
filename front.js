import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, OAuthProvider, signInWithEmailAndPassword } 
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Firebase Config (Replace with your own)
const firebaseConfig = {
  apiKey: "AIzaSyCoDmlZIPcAMMJg5iz7lRIeyxfHCPcUj4M",
  authDomain: "learnx-1c84f.firebaseapp.com",
  projectId: "learnx-1c84f",
  storageBucket: "learnx-1c84f.appspot.com",
  messagingSenderId: "907250901075",
  appId: "1:907250901075:web:ff45b6eeaaadbba47ae6a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Modal functionality
const loginModal = document.getElementById("login-modal");
const openModalBtn = document.getElementById("open-login-modal");
const closeModalBtn = document.querySelector(".close");

// Open modal
openModalBtn.addEventListener("click", () => {
  loginModal.classList.add("show");
});

// Close modal
closeModalBtn.addEventListener("click", () => {
  loginModal.classList.remove("show");
});

// Google Login
document.getElementById("google-login").addEventListener("click", () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      alert("Logged in as " + result.user.displayName);
      loginModal.classList.remove("show"); // Close modal after login
    })
    .catch((error) => console.error(error));
});

// Apple Login
document.getElementById("apple-login").addEventListener("click", () => {
  const provider = new OAuthProvider("apple.com");
  signInWithPopup(auth, provider)
    .then((result) => {
      alert("Logged in as " + result.user.displayName);
      loginModal.classList.remove("show");
    })
    .catch((error) => console.error(error));
});

// Email Login
document.getElementById("email-login").addEventListener("click", () => {
  const email = prompt("Enter your email:");
  const password = prompt("Enter your password:");
  
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Logged in successfully!");
      loginModal.classList.remove("show");
    })
    .catch((error) => console.error(error));
});

