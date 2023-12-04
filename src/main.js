import { initData, data, getListOfAnimal, getImage } from "./module/faker.js";
import { generateCards } from "./module/view.js";
import { setSelectWithVoices, read } from "./module/voice.js";

const listenButton = document.getElementById("listen");
initData();
window.speechSynthesis.onvoiceschanged = () => {
  setSelectWithVoices();
};

listenButton.addEventListener("click", () => {
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(word.fr);
  synth.speak(utterance);
});
rules.addEventListener("click", () => {
  const synth = window.speechSynthesis;
  // change voice
  const voices = synth.getVoices();
  console.log("voices", voices);
  utterance.voice = voices[0];
  const utterance = new SpeechSynthesisUtterance("Coucou adeline je t'aime");
  synth.speak(utterance);
});

const play = document.getElementById("play");
play.addEventListener("click", () => {
  console.log("play");
  setRdmWord();
  console.log(word);
  getListOfAnimal(3, word.en).then((animals) => {
    console.log("animals", animals);
    const list = document.getElementById("list");
    list.innerHTML = generateCards(animals);
    const cardList = document.getElementsByClassName("card");
    console.log("card", card);
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



const setRdmWord = () => {
  word = data[Math.floor(Math.random() * data.length)];
};

const card = document.getElementsByClassName("card");

const win = () => {
  read("Bravo, tu as gagné");
};
const loose = () => {
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