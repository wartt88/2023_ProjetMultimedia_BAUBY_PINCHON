import { initData, data, getListOfAnimal, getImage } from "./module/faker.js";
import { generateCards } from "./module/view.js";
import { setSelectWithVoices, read } from "./module/voice.js";
import { initFeat2 } from "./module/feat2.js";
import { initFeat1 } from "./module/feat1.js";

initData();
initFeat2();
initFeat1();

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


document.getElementById("mode").addEventListener("change", ()=> {
  if(document.getElementById("mode").checked){
    document.getElementById("fonctionnalite_2").classList.remove("invisible");
    document.getElementById("fonctionnalite_1").classList.add("invisible");
  }else{
    document.getElementById("fonctionnalite_1").classList.remove("invisible");
    document.getElementById("fonctionnalite_2").classList.add("invisible");
  }
})

export let word = null;