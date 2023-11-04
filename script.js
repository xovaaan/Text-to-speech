let speech = new SpeechSynthesisUtterance();

let voices = [];

let voiceSelection = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice,i ) => (voiceSelection.options[i] = new Option(voice.name, i) ))
};

 voiceSelection.addEventListener("change", () => {
    speech.voice = voices[voiceSelection.value];

 })

document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
})