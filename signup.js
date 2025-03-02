// Import Firebase modules properly
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { getFirestore, doc, setDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js"; // 🔥 Fix: Import Firestore functions

// ✅ Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyCoDmlZIPcAMMJg5iz7lRIeyxfHCPcUj4M",
    authDomain: "learnx-1c84f.firebaseapp.com",
    projectId: "learnx-1c84f",
    storageBucket: "learnx-1c84f.appspot.com",
    messagingSenderId: "907250901075",
    appId: "1:907250901075:web:ff45b6eeaaadbba47ae6a6"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // 🔥 Fix: Initialize Firestore properly

document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.querySelector(".signup-form");

    signupForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        // Get input values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const userId = document.getElementById("userid").value.trim();
        const password = document.getElementById("password").value.trim();
        const confirmPassword = document.getElementById("confirm-password").value.trim();

        let hasError = false;

        // Function to show error message
        function showError(inputId, message) {
            const inputField = document.getElementById(inputId);
            const errorField = document.getElementById(inputId + "-error");
            inputField.style.border = "2px solid red";
            errorField.innerText = message;
            errorField.style.color = "red";
            hasError = true;
        }

        // Function to clear error message when typing
        function clearError(inputId) {
            const inputField = document.getElementById(inputId);
            const errorField = document.getElementById(inputId + "-error");
            inputField.style.border = "";
            errorField.innerText = "";
        }

        // Check for empty fields
        if (!name) showError("name", "⚠️ Name is required");
        else clearError("name");

        if (!email) showError("email", "⚠️ Email is required");
        else clearError("email");

        if (!userId) showError("userid", "⚠️ User ID is required");
        else clearError("userid");

        if (!password) showError("password", "⚠️ Password is required");
        else clearError("password");

        if (!confirmPassword) showError("confirm-password", "⚠️ Confirm Password is required");
        else clearError("confirm-password");

        // Check if passwords match
        if (password && confirmPassword && password !== confirmPassword) {
            showError("confirm-password", "❌ Passwords do not match!");
        }

        // Stop form submission if there's an error
        if (hasError) return;

        // ✅ Proceed with form submission (Firebase authentication)
        console.log("✅ Form submitted successfully!");
        alert("Account created successfully!");

        // You can now integrate Firebase sign-up logic here
    });
});
