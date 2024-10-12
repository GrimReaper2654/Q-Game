// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBZF0229r22XqusWAM0lBJlJmwGS-jlTQs",
    authDomain: "q-game-d7d28.firebaseapp.com",
    projectId: "q-game-d7d28",
    storageBucket: "q-game-d7d28.appspot.com",
    messagingSenderId: "219011263013",
    appId: "1:219011263013:web:ab3a2cec7582a09d516dcc",
    measurementId: "G-DYXS6YG830"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export async function store(collection, documentId, value) {
    try {
        await setDoc(doc(db, collection, documentId), {
            value: value
        });
        return false;
    } catch (error) {
        return error;
    }
}

export async function retrieve(collection, documentId) {
    try {
        const docRef = doc(db, collection, documentId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return docSnap.data().value
        } else {
            return undefined
        }
    } catch (error) {
        return error;
    }
}

