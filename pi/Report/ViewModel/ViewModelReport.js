
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getFirestore, doc, getDoc, getDocs, collection } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";

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

let reportModel = [];

const querySnapshot = await getDocs(collection(db, "Report"));
querySnapshot.forEach((doc) => {
    reportModel.push({
        "name": doc.data().name,
        "time": doc.data().time
    });
        
});

var reportModelJson =JSON.parse(JSON.stringify(reportModel));

const c = (el) => document.querySelector(el);
const cs = (el) => document.querySelectorAll(el);

reportModelJson.map((item) => {
    let modelsItem = c(".models .data-single").cloneNode(true);
    modelsItem.querySelector(".data-name").innerHTML = item.name;
    modelsItem.querySelector(".data-time").src = item.img;

    c(".report").append(modelsItem);
});

console.log(reportModelJson);


