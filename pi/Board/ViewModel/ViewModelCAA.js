const c = (el) => document.querySelector(el);
const cs = (el) => document.querySelectorAll(el);


const result = modelsCAAJson.map((item) => {
    let modelsItem = c(".models .card-single").cloneNode(true);
    modelsItem.querySelector(".card-name").innerHTML = item.name;
    modelsItem.querySelector(".card-img").src = item.img;

    c(".cards").append(modelsItem);
});