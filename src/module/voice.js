export const setSelectWithVoices = () => {
  const synth = window.speechSynthesis;
  const voices = synth.getVoices();
  const select = document.getElementById("voice");
  if (!voices) {
    throw new Error("No voices available");
  }
  select.innerHTML = "";
  for (const voice of voices) {
    const option = document.createElement("option");
    option.value = voice.name;
    option.textContent = `${voice.name} (${voice.lang})`;
    select.appendChild(option);
  }
  select.value = voices.filter((voice) => voice.default)[0].name;

  select.addEventListener("change", () => {
    voice = voices.find((voice) => voice.name === select.value);
  });
};

export const read = (text) => {
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.voice = voice;
  synth.speak(utterance);
};
