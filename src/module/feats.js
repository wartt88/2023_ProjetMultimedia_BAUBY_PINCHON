import { setRdmWord, word } from "../main.js";
import { getListOfAnimal } from "./faker.js";
import { generateCards } from "./view.js";
import { read, getLangueSelect, readSelectedWord } from "./voice.js";

export const readRules = () => {
  let rules = {
    fr: "Le but du jeu est de retrouver l'animal correspondant au mot prononcé",
    en: "The goal of the game is to find the animal corresponding to the word pronounced",
    es: "El objetivo del juego es encontrar el animal correspondiente a la palabra pronunciada",
    de: "Ziel des Spiels ist es, das zum ausgesprochenen Wort passende Tier zu finden",
    it: "Lo scopo del gioco è trovare l'animale corrispondente alla parola pronunciata",
  };
  read(rules[getLangueSelect().split("-")[0]]);
};

export const lunchParty = () => {
  setRdmWord();
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
          lunchParty();
        } else {
          loose();
        }
      });
    }
  });
  readSelectedWord();
};

const win = () => {
  const win = {
    fr: "Bravo, le nouveau mot est",
    en: "Well done, the new word is",
    es: "Bien hecho, la nueva palabra es",
    de: "Gut gemacht, das neue Wort ist",
    it: "Ben fatto, la nuova parola è",
  };
  read(win[getLangueSelect().split("-")[0]]);
};

const loose = () => {
  const loose = {
    fr: "Dommage, tu as perdu, le mot à trouver est",
    en: "Too bad, you lost, the word to find is",
    es: "Que pena, perdiste, la palabra a encontrar es",
    de: "Schade, du hast verloren, das zu findende Wort ist",
    it: "Peccato, hai perso, la parola da trovare è",
  };
  read(loose[getLangueSelect().split("-")[0]]);
  readSelectedWord();
};

// feat 1
export const changeImage = () => {
  setRdmWord();
  console.log(word);
  getListOfAnimal(1, word.en).then((animals) => {
    let img = document.getElementById("list");
    img.innerHTML = generateCards(animals);
    readSelectedWord();
  });
};
