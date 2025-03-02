// Sample leaderboard data
let leaderboardData = [
    { name: "Alice", score: 9500 },
    { name: "Bob", score: 8700 },
    { name: "Charlie", score: 8200 },
    { name: "Diana", score: 7800 },
    { name: "Eve", score: 7500 },
];

// Function to generate badge based on rank
function getBadge(rank) {
    if (rank === 1) return '<span class="badge gold">🥇 Gold</span>';
    if (rank === 2) return '<span class="badge silver">🥈 Silver</span>';
    if (rank === 3) return '<span class="badge bronze">🥉 Bronze</span>';
    return '';
}

// Function to populate the leaderboard table
function populateLeaderboard() {
    const tbody = document.querySelector('#leaderboard tbody');
    tbody.innerHTML = ''; // Clear existing rows

    leaderboardData.sort((a, b) => b.score - a.score); // Sort by score (descending)

    leaderboardData.forEach((player, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${player.name}</td>
            <td>${player.score}</td>
            <td>${getBadge(index + 1)}</td>
        `;
        tbodya.appendChild(row);
    });
}

// Function to add a new user to the leaderboard
function addUser(name, score) {
    leaderboardData.push({ name, score });
    populateLeaderboard(); // Refresh the leaderboard
}

// Populate the leaderboard on page load
window.onload = populateLeaderboard;

// Example: Add new users dynamically
setTimeout(() => {
    addUser("Frank", 8800);
}, 2000);

setTimeout(() => {
    addUser("Grace", 9200);
}, 4000);

setTimeout(() => {
    addUser("Hank", 7900);
}, 6000);


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

// Firebase Config (Replace with your own)
// Firebase Config// Firebase Config
// const firebaseConfig = {
//     apiKey: "AIzaSyCoDmlZIPcAMMJg5iz7lRIeyxfHCPcUj4M",
//     authDomain: "learnx-1c84f.firebaseapp.com",
//     projectId: "learnx-1c84f",
//     storageBucket: "learnx-1c84f.appspot.com",
//     messagingSenderId: "907250901075",
//     appId: "1:907250901075:web:ff45b6eeaaadbba47ae6a6"
//   };
  
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   const auth = firebase.auth();
  
//   // Select modals and inputs
//   const loginModal = document.getElementById("login-modal");
//   const emailLoginModal = document.getElementById("email-login-modal");
//   const openModalBtn = document.getElementById("open-login-modal");
//   const closeModalBtns = document.querySelectorAll(".close");
//   const emailInput = document.getElementById("email-input");
//   const passwordInput = document.getElementById("password-input");
//   const errorText = document.getElementById("login-error");
  
//   // Open main login modal
//   openModalBtn.addEventListener("click", () => {
//     loginModal.style.display = "block";
//     resetEmailLoginForm(); // Ensure form is cleared when opening
//   });
  
//   // Close modals
//   closeModalBtns.forEach(btn => {
//     btn.addEventListener("click", () => {
//       loginModal.style.display = "none";
//       emailLoginModal.style.display = "none";
//       resetEmailLoginForm();
//     });
//   });
  
//   // Open Email Login Modal
//   document.getElementById("email-login").addEventListener("click", () => {
//     loginModal.style.display = "none"; // Hide main modal
//     emailLoginModal.style.display = "block"; // Show email login modal
//     resetEmailLoginForm(); // Clear previous inputs and error messages
//   });
  
//   // Email Login Handling
//   document.getElementById("submit-email-login").addEventListener("click", () => {
//     const email = emailInput.value.trim();
//     const password = passwordInput.value.trim();
  
//     if (!email || !password) {
//       showError("Both fields are required!");
//       return;
//     }
  
//     auth.signInWithEmailAndPassword(email, password)
//       .then(() => {
//         alert("Logged in successfully!");
//         emailLoginModal.style.display = "none"; // Close modal
//         resetEmailLoginForm(); // Reset form
//       })
//       .catch(() => {
//         showError("Invalid email or password");
//       });
//   });
  
//   // Google Login
//   document.getElementById("google-login").addEventListener("click", () => {
//     const provider = new firebase.auth.GoogleAuthProvider();
//     auth.signInWithPopup(provider)
//       .then((result) => {
//         alert("Logged in as " + result.user.displayName);
//         loginModal.style.display = "none"; // Close modal after login
//       })
//       .catch((error) => console.error(error));
//   });
  
//   // Function to clear input fields and errors
//   function resetEmailLoginForm() {
//     emailInput.value = "";
//     passwordInput.value = "";
//     errorText.style.display = "none";
//     errorText.innerText = "";
//   }
  
//   // Function to show error message and clear input fields
//   function showError(message) {
//     errorText.style.display = "block";
//     errorText.innerText = message;
    
//     // Clear fields after showing error
//     setTimeout(() => {
//       emailInput.value = "";
//       passwordInput.value = "";
//     }, 500); // Slight delay for better UX
//   }
//   document.addEventListener("DOMContentLoaded", function () {
//     const dropdown = document.querySelector(".dropdown");
//     dropdown.addEventListener("click", function (e) {
//         e.preventDefault(); // Prevent default link behavior
//         const dropdownContent = this.querySelector(".dropdown-content");
//         dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
//     });
//   });
  
  
  
//   // Close modal if clicked outside
//   window.addEventListener("click", (event) => {
//     if (event.target === loginModal) {
//       loginModal.style.display = "none";
//     }
//     if (event.target === emailLoginModal) {
//       emailLoginModal.style.display = "none";
//       resetEmailLoginForm();
//     }
//   });
  