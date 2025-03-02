import { updateDoc, doc, getFirestore, increment } from "firebase/firestore";

const db = getFirestore();

async function updateUserScore(userId, points) {
    try {
        const userRef = doc(db, "users", userId);
        await updateDoc(userRef, {
            score: increment(points)  // Adds points to the current score
        });
        console.log("Score updated!");
    } catch (error) {
        console.error("Error updating score:", error.message);
    }
}
