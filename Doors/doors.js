console.log ("hello from the script");
// const is the same as var but for variables that don't change
// let is the same as var but for variables that can change
const synth = window.speechSynthesis;

// let utterThis= new SpeechSynthesisUtterance ("Hello computer");
//
// synth.speak(utterThis);

document.querySelector("#door1").onclick = () => {
  console.log("button clicked");
  speak("sorry there is nothinig there");
};

document.querySelector("#door2").onclick = () => {
  console.log("button clicked");
  speak("don't open next door");
};

document.querySelector("#door3").onclick = () => {
  console.log("button clicked");
  speak("why did you do that?");
};
document.querySelector("#door4").onclick = () => {
  console.log("button clicked");
  speak("nevermind you don't listen");
};

const speak = (text) => {
//to check if speaking
  if (synth.speaking) {
    console.error("it's speaking");
    return;
  }

  let utterThis = new SpeechSynthesisUtterance (text);
  utterThis.lang = "ru-RU";
  utterThis.pitch = 0.1;
  utterThis.rate = 0.3;

  synth.speak(utterThis);
};
