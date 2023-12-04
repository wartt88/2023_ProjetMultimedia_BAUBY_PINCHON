import { data, initData } from "./module/faker.js";
import { initFeat1, changeImage } from "./module/feat1.js";
import { initFeat2, lunchParty } from "./module/feat2.js";
import { initVocalControl } from "./module/vocalControl.js";
import { setSelectWithVoices, stopVoice } from "./module/voice.js";

initData();
initFeat2();
initFeat1();
initVocalControl();

window.speechSynthesis.onvoiceschanged = () => {
  setSelectWithVoices();
};

export const setRdmWord = () => {
  word = data[Math.floor(Math.random() * data.length)];
};

document.getElementById("mode").addEventListener("change", () => {
  stopVoice();
  if (document.getElementById("mode").checked) {
    document.getElementById("fonctionnalite_2").classList.remove("invisible");
    document.getElementById("fonctionnalite_1").classList.add("invisible");
    lunchParty();
  } else {
    document.getElementById("fonctionnalite_1").classList.remove("invisible");
    document.getElementById("fonctionnalite_2").classList.add("invisible");
    changeImage();
  }
});

export let word = null;
