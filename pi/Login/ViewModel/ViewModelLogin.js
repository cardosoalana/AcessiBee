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

const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");

const confirmButton = document.querySelector("#button");

togglePassword.addEventListener("click", function () {
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
});

//FIREBASE
const querySnapshot = await getDocs(collection(db, "User"));
let caaModel = [];

querySnapshot.forEach((doc) => {
    caaModel.push({
        "email": doc.data().email,
        "password": doc.data().password
    });

    console.log(doc.data())
});

var caaModelJson = JSON.parse(JSON.stringify(caaModel));
confirmButton.addEventListener("click", function() {
    var email = document.getElementById("email").value;
    var passwordValue = document.getElementById("password").value;

    caaModelJson.map((item) => {
        console.log(email.toString(), passwordValue.toString());
        console.log(item.email);

        if (email.toString() == item.email) {
            if (passwordValue == item.password) {
                validateAccount();
            } else {
                showMessage("senha incorreta")
            }
        } else {
            showMessage("email incorreto")
        }
    });
});

function validateAccount() {
    window.location.href = "../../Board/View/Board.html";
}

function showMessage(message) {
    window.alert(message)
}