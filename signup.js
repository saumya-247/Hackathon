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

    signupForm.addEventListener("submit", async function (event) {
        event.preventDefault(); // Prevent default form submission

        // Get input values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const userId = document.getElementById("userid").value.trim();
        const password = document.getElementById("password").value.trim();
        const confirmPassword = document.getElementById("confirm-password").value.trim();

        // ✅ Basic Validation
        if (!name || !email || !userId || !password || !confirmPassword) {
            alert("⚠️ Please fill in all fields.");
            return;
        }

        if (password !== confirmPassword) {
            alert("❌ Passwords do not match!");
            return;
        }

        try {
            // ✅ Create User in Firebase Authentication
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // ✅ Store User Data in Firestore
            await setDoc(doc(db, "users", user.uid), { 
                name: name,
                email: email,
                userId: userId,
                createdAt: serverTimestamp()
            });

            alert("✅ Account created successfully!");
            window.location.href = "front.html"; // Redirect after signup

        } catch (error) {
            alert("❌ Error: " + error.message);
        }
    });
});
