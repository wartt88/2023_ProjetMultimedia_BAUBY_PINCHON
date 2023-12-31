import { data, initData } from "./module/faker.js";
import { changeImage, lunchParty, readRules } from "./module/feats.js";
import { initVocalControl } from "./module/vocalControl.js";
import {
  readSelectedWord,
  setSelectWithVoices,
  stopVoice,
} from "./module/voice.js";

await initData();
initButton();
initVocalControl();

window.speechSynthesis.onvoiceschanged = () => {
  setSelectWithVoices();
};

export const setRdmWord = () => {
  word = data[Math.floor(Math.random() * data.length)];
};

document.getElementById("mode").addEventListener("change", () => {
  stopVoice();
  document.getElementById("list").innerHTML = "";
  if (document.getElementById("mode").checked) lunchParty();
  else changeImage();
});

function initButton() {
  // listen Button
  document.getElementById("listen").addEventListener("click", () => {
    readSelectedWord();
  });
  // play Ruler
  document.getElementById("rules").addEventListener("click", () => {
    readRules();
  });
  // play Button
  document.getElementById("play").addEventListener("click", () => {
    play();
  });
}

export function play() {
  if (document.getElementById("mode").checked) lunchParty();
  else changeImage();
}

export let word = null;
