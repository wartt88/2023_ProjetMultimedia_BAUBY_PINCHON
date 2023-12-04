import { setRdmWord, word } from "../main.js";
import { getListOfAnimal } from "./faker.js";
import { generateCards } from "./view.js";
import { read } from "./voice.js";


export const initFeat2 = () => {
  initButtons();
};

const initButtons = () => {
  // Bouton ecouter
  const listenButton = document.getElementById("listen");
  listenButton.addEventListener("click", () => {
    read(word.fr);
  });

  // Bouton règles du jeu
  const rules = document.getElementById("rules");
  rules.addEventListener("click", () => {
    const synth = window.speechSynthesis;
    // change voice
    const voices = synth.getVoices();
    console.log("voices", voices);
    utterance.voice = voices[0];
    const utterance = new SpeechSynthesisUtterance("Règles du jeu");
    synth.speak(utterance);
  });

  // Bouton play
  const play = document.getElementById("play");
  play.addEventListener("click", () => {
    console.log("play");
    setRdmWord();
    console.log("word", word);
    getListOfAnimal(3, word.en).then((animals) => {
      console.log("animals", animals);
      const list = document.getElementById("list");
      list.innerHTML = generateCards(animals);
      const cardList = document.getElementsByClassName("card");
      for (const card of cardList) {
        card.addEventListener("click", () => {
          console.log("element", card.dataset.name);
          if (card.dataset.name === word.en) {
            win();
          } else {
            loose();
          }
        });
      }
    });
  });
};
