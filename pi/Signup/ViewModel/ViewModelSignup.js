import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { doc, getDoc, getDocs, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAJFfi2a13nnF06wBOOBYI802R12dyTXDo",
    authDomain: "acessibee.firebaseapp.com",
    projectId: "acessibee",
    storageBucket: "acessibee.appspot.com",
    messagingSenderId: "382841945379",
    appId: "1:382841945379:web:1f37fda842e375fe1e6096",
    measurementId: "G-CZ9G2VP2Z3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app); 

const confirmButton = document.querySelector("#button");
confirmButton.addEventListener("click", function() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var passwordValue = document.getElementById("password").value;

    console.log(name);
    console.log(email);
    console.log(passwordValue);
    
    if (name != null && name != "") {
        if (email != null) {
            if (passwordValue != null && passwordValue != "") {
                signupUser(name, email, passwordValue)
            } else {
                showMessage("Preencha uma senha válida!")
            }
        } else {
            showMessage("Preencha um email válido!")
        }
    } else {
        showMessage("Preencha um nome válido!")
    }
});

async function signupUser(nameStr, emailStr, passwordStr) {
    await addDoc(collection(db, "User"), {
        name: nameStr,
        email: emailStr, 
        password: passwordStr
    });

    window.location.href = "../../Board/View/Board.html";
}

function showMessage(message) {
    window.alert(message)
}