<<<<<<< Updated upstream
// ✅ Ensure Firebase is properly initialized before using Firestore
if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: "AIzaSyCoDmlZIPcAMMJg5iz7lRIeyxfHCPcUj4M",
        authDomain: "learnx-1c84f.firebaseapp.com",
        projectId: "learnx-1c84f",
        storageBucket: "learnx-1c84f.appspot.com",
        messagingSenderId: "907250901075",
        appId: "1:907250901075:web:ff45b6eeaaadbba47ae6a6"
    });
}
=======
// // Sample leaderboard data
// let leaderboardData = [
//     { name: "Alice", score: 9500 },
//     { name: "Bob", score: 8700 },
//     { name: "Charlie", score: 8200 },
//     { name: "Diana", score: 7800 },
//     { name: "Eve", score: 7500 },
// ];

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
const db = firebase.firestore();
>>>>>>> Stashed changes

// ✅ Get Firestore instance
const db = firebase.firestore();

// ✅ Function to generate badges based on rank
function getBadge(rank) {
    if (rank === 1) return '<span class="badge gold">🥇 Gold</span>';
    if (rank === 2) return '<span class="badge silver">🥈 Silver</span>';
    if (rank === 3) return '<span class="badge bronze">🥉 Bronze</span>';
    return '';
}

// ✅ Function to populate the leaderboard from Firestore
function populateLeaderboard() {
    const tbody = document.querySelector('#leaderboard tbody');
    tbody.innerHTML = ''; // Clear existing rows

    // leaderboardData.sort((a, b) => b.score - a.score); // Sort by score (descending)

    // leaderboardData.forEach((player, index) => {
    //     const row = document.createElement('tr');
    //     row.innerHTML = `
    //         <td>${index + 1}</td>
    //         <td>${player.name}</td>
    //         <td>${player.score}</td>
    //         <td>${getBadge(index + 1)}</td>
    //     `;
    //     tbody.appendChild(row);
    // });
    db.collection("leaderboard").orderBy("score", "desc").get()
    .then((querySnapshot) => {
        let index = 0;
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            index++;
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${index}</td>
<<<<<<< Updated upstream
                 <td>${data.name}</td>
=======
                <td>${data.name}</td>
>>>>>>> Stashed changes
                <td>${data.score}</td>
                <td>${getBadge(index)}</td>
            `;
            tbody.appendChild(row);
        });
    })
    .catch((error) => console.error("❌ Error fetching leaderboard:", error));
}

// ✅ Function to add a new user to Firestore
function addUser(name, score) {
    db.collection("leaderboard").add({
        name: name,
        score: score
    })
    .then(() => {
        console.log("✅ User added successfully!");
        populateLeaderboard(); // Refresh leaderboard
    })
    .catch((error) => console.error("❌ Error adding user:", error));
}

db.collection("leaderboard").orderBy("score", "desc")
    .onSnapshot((snapshot) => {
        populateLeaderboard(); // Update leaderboard when data changes
    });


// Populate the leaderboard on page load
window.onload = populateLeaderboard;

// Example: Add new users dynamically
// setTimeout(() => {
//     addUser("Frank", 8800);
// }, 2000);

// setTimeout(() => {
//     addUser("Grace", 9200);
// }, 4000);

// setTimeout(() => {
//     addUser("Hank", 7900);
// }, 6000);

