import { IEMs } from "./list.js";
const IMGS = document.getElementById("about-img");
const SRC = document.getElementById("img-src");
const NAME = document.getElementById("img-name");
const Products = document.getElementById("product");
const container = document.getElementById("container");

let index =0;
SRC.src = IEMs[index].img;
NAME.innerHTML = IEMs[index].name;

IMGS.addEventListener("click", () => {
    index = (index + 1) % IEMs.length;
    SRC.src = IEMs[index].img;
    NAME.innerHTML = IEMs[index].name;
})

const render = ( list ) => {
    container.innerHTML = "";
    list.forEach((item) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.classList.add("flex");
        card.classList.add("flex-col");
        card.classList.add("items-center");
        card.classList.add("border-2");
        card.classList.add("w-96");
        card.classList.add("p-5");
        card.classList.add("m-10");
        card.innerHTML = `
        <img src="${item.img}" alt="" class="w-80">
        <a href="${item.link}">${item.name}</a>
        <p>${item.price}</p>
        <p>${item.bestFor}</p>
        <p>${item.features.join(", ")}</p>
        `;
        container.appendChild(card);
    });
}
render(IEMs);

Products.addEventListener("change", () => {
    container.innerHTML = "";
    if (Products.value === "alphabetical") {
        render([...IEMs].sort((a, b) => a.name.localeCompare(b.name)));
    } else if (Products.value === "reverse-alphabetical") {
        render(  [...IEMs].sort((a, b) => b.name.localeCompare(a.name)));
    } else if (Products.value === "Lowest price") {
        render( [...IEMs].sort((a, b) => a.price - b.price));
    } else if (Products.value === "Highest price") {
        render( [...IEMs].sort((a, b) =>b.price - a.price));
    }
})

