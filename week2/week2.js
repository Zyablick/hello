console.log("hello from the script");
// const is the same as var but for variables that don't change
// let is the same as var but for variables that can change
// const synth = window.speechSynthesis;

const SpeechRecognition= webkitSpeechRecognition;

const getSpeech = () => {
  const recognition = new SpeechRecognition();
  recognition.lang = "en-US";
  recognition.start();

  recognition.onresult = (event) => {
    console.log(speechResult);
    const speechResult = event.results[0][0].transcript;
    document.querySelector("#speech").textContent = speechResult;
  }


};
cognition.onend = () => {
  console.log("it's over");
  recognition.stop();
}

recognition.onerror = () => {
  console.log("error");
}

// const get giph
getSpeech();



// let utterThis= new SpeechSynthesisUtterance ("Hello computer");
//
// synth.speak(utterThis);

// document.querySelector("#button").onclick = () => {
//   console.log("button clicked");
//
//   let textInput = document.querySelector("#text-input").value;

  // speak(backwards);
  // speak(textInput);

  // let utterThis = new SpeechSynthesisUtterance ("Hello computer");
  //
  // synth.speak(utterThis);
// };


// const speak = (text) => {
//   //to check if speaking
//   if (synth.speaking) {
//     console.error("it's speaking");
//     return;
//   }
//
//   let utterThis = new SpeechSynthesisUtterance(text);
//   utterThis.lang = "ru-RU";
//   utterThis.pitch = 0.1;
//   utterThis.rate = 0.3;
//
//   synth.speak(utterThis);
// };
