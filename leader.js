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

    db.collection("leaderboard").orderBy("score", "desc").get()
        .then((querySnapshot) => {
            let index = 0;
            querySnapshot.forEach((doc) => {
                const data = doc.data();
                index++;
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${index}</td>
                    <td>${data.name}</td>
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
    console.log("Adding user:", name, "with score:", score);
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

// ✅ Real-time Firestore updates for the leaderboard
db.collection("leaderboard").orderBy("score", "desc")
    .onSnapshot(() => {
        populateLeaderboard(); // Update leaderboard automatically
    });

// ✅ Populate leaderboard when page loads
window.onload = function () {
    console.log("✅ Leaderboard is loading...");
    populateLeaderboard();
};
