import { initData, data, getListOfAnimal } from "./module/faker.js";
import { generateCards } from "./module/view.js";
import { setSelectWithVoices, read } from "./module/voice.js";
import { initFeat2 } from "./module/feat2.js";

initData();
initFeat2();

window.speechSynthesis.onvoiceschanged = () => {
  setSelectWithVoices();
};

export let word = null;

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
