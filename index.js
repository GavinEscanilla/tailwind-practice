import { IEMs } from "./list.js";
const IMGS = document.getElementById("about-img");
const SRC = document.getElementById("img-src");
const NAME = document.getElementById("img-name");

let index =0;
SRC.src = IEMs[index].img;
NAME.innerHTML = IEMs[index].name;

IMGS.addEventListener("click", () => {
    index = (index + 1) % IEMs.length;
    SRC.src = IEMs[index].img;
    NAME.innerHTML = IEMs[index].name;
})
