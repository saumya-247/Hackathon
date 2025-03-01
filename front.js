// let slideIndex = 0;
// let slides = document.querySelectorAll('.slide');
// // Function to show the slide at the specified index
// function showSlide(index) {
//     // Reset all slides and dots
//     slides.forEach(slide => slide.style.display = 'none');
//     slides[index].style.display = 'block';
// }

// // Show the next slide
// function nextSlide() {
//     slideIndex = (slideIndex + 1) % slides.length;
//     showSlide(slideIndex);
// }

// // Show the previous slide
// function prevSlide() {
//     slideIndex = (slideIndex - 1 + slides.length) % slides.length;
//     showSlide(slideIndex);
// }
// // Automatically move to the next slide every 3 seconds
// setInterval(() => {
//     nextSlide();
// }, 5000);

// showSlide(slideIndex);

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, OAuthProvider, signInWithEmailAndPassword } 
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Firebase Config (Replace with your own)
const firebaseConfig = {
  apiKey: "YOUR_FIREBASE_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
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

