import { setRdmWord, word } from "../main.js";
import { getListOfAnimal } from "./faker.js";
import { generateCards } from "./view.js";
import { read } from "./voice.js";

export function initFeat1() {
  const apprendre = document.getElementById("suivant");
  apprendre.addEventListener("click",() => {
    setRdmWord();
    console.log(word);
    getListOfAnimal(1, word.en).then((animals) => {
      let img = document.getElementById("imgF1");
      img.innerHTML = generateCards(animals);
    })
  });
  const ecouter = document.getElementById("ecouter");
  ecouter.addEventListener("click",()=>{
    read(word.fr)
  })
}

