const c = (el) => document.querySelector(el);
const cs = (el) => document.querySelectorAll(el);

const result = modelsreportJson.map((item) => {
    let modelsItem = c(".models .data-single").cloneNode(true);
    modelsItem.querySelector(".data-name").innerHTML = item.name;
    modelsItem.querySelector(".data-time").src = item.img;

    c(".report").append(modelsItem);
});