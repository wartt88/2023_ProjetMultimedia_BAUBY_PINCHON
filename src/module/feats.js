import { setRdmWord, word } from "../main.js";
import { getListOfAnimal } from "./faker.js";
import { generateCards } from "./view.js";
import { read, getLangueSelect, readSelectedWord } from "./voice.js";

export const readRules = () => {
  let text =
    "Le but du jeu est de retrouver l'animal correspondant au mot prononcé";
  switch (getLangueSelect().split("-")[0]) {
    case "en":
      text =
        "The goal of the game is to find the animal corresponding to the word pronounced";
      break;
    case "es":
      text =
        "El objetivo del juego es encontrar el animal correspondiente a la palabra pronunciada";
      break;
    case "de":
      text =
        "Ziel des Spiels ist es, das zum ausgesprochenen Wort passende Tier zu finden";
      break;
    case "it":
      text =
        "Lo scopo del gioco è trovare l'animale corrispondente alla parola pronunciata";
      break;
  }
  read(text);
};
// feat 2

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
  let text = "Bravo, le nouveau mot est";
  switch (getLangueSelect().split("-")[0]) {
    case "en":
      text = "Well done, the new word is";
      break;
    case "es":
      text = "Bien hecho, la nueva palabra es";
      break;
    case "de":
      text = "Gut gemacht, das neue Wort ist";
      break;
    case "it":
      text = "Ben fatto, la nuova parola è";
      break;
  }
  read(text);
};

const loose = () => {
  let text = "Dommage, tu as perdu, le mot à trouver est";
  switch (getLangueSelect().split("-")[0]) {
    case "en":
      text = "Too bad, you lost, the word to find is";
      break;
    case "es":
      text = "Que pena, perdiste, la palabra a encontrar es";
      break;
    case "de":
      text = "Schade, du hast verloren, das zu findende Wort ist";
      break;
    case "it":
      text = "Peccato, hai perso, la parola da trovare è";
      break;
  }
  read(text);
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