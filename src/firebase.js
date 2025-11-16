import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
        apiKey: "AIzaSyAw-I4o9pJeGIjwaV-y9ZHiwUd6xHTd2vQ",
        authDomain: "nathan-blog-ae577.firebaseapp.com",
        projectId: "nathan-blog-ae577",
        storageBucket: "nathan-blog-ae577.firebasestorage.app",
        messagingSenderId: "763110233860",
        appId: "1:763110233860:web:a58ea7cdc3565df3476251",
        measurementId: "G-HMGT8Q9R14"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// exports
export const auth = getAuth(app);
export const db = getFirestore(app);