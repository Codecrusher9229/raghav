// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
// import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

// Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyCrL75HGXFSklX3mVeCUQWL1-o_Q-LEPvA",
//     authDomain: "einstien-club.firebaseapp.com",
//     databaseURL: "https://einstien-club-default-rtdb.firebaseio.com",
//     projectId: "einstien-club",
//     storageBucket: "einstien-club.firebasestorage.app",
//     messagingSenderId: "1027434745642",
//     appId: "1:1027434745642:web:2b000f059136368df75853",
//     measurementId: "G-M5SJREW15V",
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Handle form submission
// const form = document.getElementById("registration-form");
// form.addEventListener("submit", async (e) => {
//     e.preventDefault();

//     const data = {
//         event: form.event.value,
//         program: form.program.value, // Include selected program
//         name: form.name.value,
//         email: form.email.value,
//         phone: form.phone.value,
//         department: form.department.value, 
//         timestamp: new Date().toISOString(),
//     };
    

//     try {
//         await push(ref(database, "registrations"), data);
//         alert("Registration successful!");
//         form.reset();
//     } catch (error) {
//         console.error("Error saving data:", error);
//         alert("There was an error submitting your registration.");
//     }
// });
