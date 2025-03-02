import { getFirestore, doc, setDoc } from "firebase/firestore";

// Firestore reference
const db = getFirestore();

async function signUpUser(email, password, name, userId) {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Store user data in Firestore with an initial score
        await setDoc(doc(db, "users", user.uid), {
            name: name,
            userId: userId,
            email: email,
            score: 0  // Initial score
        });

        console.log("User signed up and data stored in Firestore!");
    } catch (error) {
        console.error("Error signing up:", error.message);
    }
}
