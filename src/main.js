import { initData, data, getListOfAnimal, getImage } from "./module/faker.js";
import { generateCards } from "./module/view.js";
import { setSelectWithVoices, read } from "./module/voice.js";
import { initFeat2 } from "./module/feat2.js";

initData();
initFeat2();

window.speechSynthesis.onvoiceschanged = () => {
  setSelectWithVoices();
};


export const setRdmWord = () => {
  word = data[Math.floor(Math.random() * data.length)];
};

const card = document.getElementsByClassName("card");

export const win = () => {
  read("Bravo, tu as gagné");
};
export const loose = () => {
  read("Dommage, tu as perdu");
};


// fonctionnalite 1
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



export let word = null;