export const setSelectWithVoices = () => {
  const synth = window.speechSynthesis;
  const voices = synth.getVoices();
  const select = document.getElementById("voice");
  console.log("select", select);
  console.log("voices", voices);
  voice = voices[0];
  voices.forEach((voice) => {
    const option = document.createElement("option");
    option.value = voice.name;
    option.textContent = `${voice.name} (${voice.lang})`;
    select.appendChild(option);
  });

  select.addEventListener("change", () => {
    voice = voices.find((voice) => voice.name === select.value);
  });
};

let voice = null;

export const read = (text) => {
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.voice = voice;
  synth.speak(utterance);
};
