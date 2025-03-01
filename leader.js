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
        tbody.appendChild(row);
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