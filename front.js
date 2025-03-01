
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


const firebaseConfig = {
  apiKey: "AIzaSyCoDmlZIPcAMMJg5iz7lRIeyxfHCPcUj4M",
  authDomain: "learnx-1c84f.firebaseapp.com",
  projectId: "learnx-1c84f",
  storageBucket: "learnx-1c84f.appspot.com",
  messagingSenderId: "907250901075",
  appId: "1:907250901075:web:ff45b6eeaaadbba47ae6a6"
};

// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// const auth = firebase.auth();

// Modal functionality
// const loginModal = document.getElementById("login-modal");
// const openModalBtn = document.getElementById("open-login-modal");
// const closeModalBtn = document.querySelector(".close");

// Open modal
// openModalBtn.addEventListener("click", () => {
//   loginModal.classList.add("show");
// });

// Close modal
// closeModalBtn.addEventListener("click", () => {
//   loginModal.classList.remove("show");
// });

// from gpt
// document.addEventListener("DOMContentLoaded", function() {
//   const modal = document.getElementById("login-modal");
//   const openModal = document.getElementById("open-modal");
//   const closeModal = document.querySelector(".close");

//   Open modal when button is clicked
//   openModal.addEventListener("click", () => {
//       modal.style.display = "flex";
//   });

//   Close modal when clicking "X"
//   closeModal.addEventListener("click", () => {
//       modal.style.display = "none";
//   });

//   Close modal when clicking outside the box
//   window.addEventListener("click", (event) => {
//       if (event.target === modal) {
//           modal.style.display = "none";
//       }
//   });
// });
// to gpt
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("login-modal");
  const closeBtn = document.querySelector(".close");
  const googleLogin = document.getElementById("google-login");
  const emailLogin = document.getElementById("email-login");

  // Function to open the modal
  function openModal() {
      modal.style.display = "block";
  }

  // Function to close the modal
  function closeModal() {
      modal.style.display = "none";
  }

  // Close modal when clicking the close button
  closeBtn.addEventListener("click", closeModal);

  // Close modal when clicking outside of the modal content
  window.addEventListener("click", function (event) {
      if (event.target === modal) {
          closeModal();
      }
  });

  // Handle Google login button click
  googleLogin.addEventListener("click", function () {
      alert("Google Login Clicked");
      // Implement Google authentication here
  });

  // Handle Email login button click
  emailLogin.addEventListener("click", function () {
      alert("Email Login Clicked");
      // Implement Email login functionality here
  });
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
