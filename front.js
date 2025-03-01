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

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyCoDmlZIPcAMMJg5iz7lRIeyxfHCPcUj4M",
  authDomain: "learnx-1c84f.firebaseapp.com",
  projectId: "learnx-1c84f",
  storageBucket: "learnx-1c84f.appspot.com",
  messagingSenderId: "907250901075",
  appId: "1:907250901075:web:ff45b6eeaaadbba47ae6a6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

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
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
      .then((result) => {
          alert("Logged in as " + result.user.displayName);
          loginModal.classList.remove("show"); // Close modal after login
      })
      .catch((error) => console.error(error));
});

// Email Login
document.getElementById("email-login").addEventListener("click", () => {
  const email = prompt("Enter your email:");
  const password = prompt("Enter your password:");
  
  firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
          alert("Logged in successfully!");
          loginModal.classList.remove("show");
      })
      .catch((error) => console.error(error));
});
