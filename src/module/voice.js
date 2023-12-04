import { word } from "../main.js";

export const setSelectWithVoices = () => {
  const synth = window.speechSynthesis;
  let voices = synth.getVoices();
  const select = document.getElementById("voice");
  if (!voices) {
    throw new Error("No voices available");
  }
  select.innerHTML = "";
  voices = voices.filter(
    (voice) =>
      voice.lang.includes("fr") ||
      voice.lang.includes("en") ||
      voice.lang.includes("es") ||
      voice.lang.includes("de") ||
      voice.lang.includes("it")
  );
  for (const voice of voices) {
    const option = document.createElement("option");
    option.value = voice.name + " | " + voice.lang;
    option.textContent = `${voice.name} (${voice.lang})`;
    select.appendChild(option);
  }
  const defaultVoice = voices.filter((voice) => voice.default)[0];
  select.value = defaultVoice.name + " | " + defaultVoice.lang;

  select.addEventListener("change", () => {
    voice = voices.find((voice) => voice.name === select.value);
  });
  voice = voices.find((voice) => voice.name === select.value);
};

export const getLangueSelect = () => {
  const select = document.getElementById("voice");
  return select.value.split("|")[1].trim();
};

let voice = null;

export const read = (text) => {
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(text);
  const select = document.getElementById("voice");
  const voice = window.speechSynthesis
    .getVoices()
    .find((voice) => voice.name === select.value.split("|")[0].trim());
  utterance.voice = voice;
  console.log("voice", voice);
  console.log(
    'Message "' + text + '" en cours de lecture avec la voix ' + utterance.voice
  );
  synth.speak(utterance);
};

export const readSelectedWord = () => {
  const lang = getLangueSelect().split("-")[0];
  if (!word[lang]) {
    let text =
      "Attention, le mot n'est pas disponible dans cette langue, en anglais à la place";
    switch (getLangueSelect().split("-")[0]) {
      case "en":
        text =
          "Warning, the word is not available in this language, in English instead";
        break;
      case "es":
        text =
          "Advertencia, la palabra no está disponible en este idioma, en inglés en su lugar";
        break;
      case "de":
        text =
          "Warnung, das Wort ist in dieser Sprache nicht verfügbar, stattdessen auf Englisch";
        break;
      case "it":
        text =
          "Attenzione, la parola non è disponibile in questa lingua, in inglese invece";
        break;
    }
    read(text);
    read(word.en);
  }
  read(word[lang]);
};

export const stopVoice = () => {
  const synth = window.speechSynthesis;
  synth.cancel();
};  
