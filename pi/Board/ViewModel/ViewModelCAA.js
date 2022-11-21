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

let caaModel = [];

const querySnapshot = await getDocs(collection(db, "CaaBoard"));

querySnapshot.forEach((doc) => {
    caaModel.push({
        "name": doc.data().name,
        "audio": doc.data().audio,
        "img": doc.data().img});
       
});

const c = (el) => document.querySelector(el);
const cs = (el) => document.querySelectorAll(el);

var caaModelJson =JSON.parse(JSON.stringify(caaModel));
caaModelJson.map((item) => {
    let modelsItem = c(".models .card-single").cloneNode(true);
    modelsItem.querySelector(".card-name").innerHTML = item.name;
    modelsItem.querySelector(".card-img").src = item.img;

    var a = new Audio(item.audio);
    var time = new Date();
    var timeValue = "Prancha selecionada às " + formatDate(time) + "." 

    modelsItem.querySelector(".card-img").addEventListener("click", function() {
        a.play();
        reportCAA(item.name, timeValue);
    });

    c(".cards").append(modelsItem);

});

console.log(caaModelJson);

async function reportCAA(nameStr, timeStr) {
    await addDoc(collection(db, "Report"), {
        name: nameStr,
        time: timeStr
    });
 }

 function formatDate(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return (date.getMonth()+1) + "/" + date.getDate() + "/" + date.getFullYear() + "  " + strTime;
  }