import { initializeApp }
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
getAuth
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
getFirestore
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {

apiKey: "AIzaSyB8VTVOL750GJiWrd0o979zI79ZN5aGdMU",

authDomain: "login-2b974.firebaseapp.com",

projectId: "login-2b974",

storageBucket: "login-2b974.firebasestorage.app",

messagingSenderId: "560611475312",

appId: "1:560611475312:web:f67fec6f2d8795af9019b5"

};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);
