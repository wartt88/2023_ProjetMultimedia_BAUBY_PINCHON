import { setRdmWord, word } from "../main.js";
import { getListOfAnimal } from "./faker.js";
import { generateCards } from "./view.js";
import { readSelectedWord } from "./voice.js";

export function initFeat1() {
  const apprendre = document.getElementById("suivant");
  apprendre.addEventListener("click", () => {
    changeImage();
  });
  const ecouter = document.getElementById("ecouter");
  ecouter.addEventListener("click", () => {
    readSelectedWord();
  });
}

export const changeImage = () => {
  setRdmWord();
  console.log(word);
  getListOfAnimal(1, word.en).then((animals) => {
    let img = document.getElementById("imgF1");
    img.innerHTML = generateCards(animals);
    readSelectedWord();
  });
};
