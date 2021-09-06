console.log ("hello from the script");
// const is the same as var but for variables that don't change
// let is the same as var but for variables that can change
const synth = window.speechSynthesis;

// let utterThis= new SpeechSynthesisUtterance ("Hello computer");
//
// synth.speak(utterThis);

document.querySelector("#my-button").onclick = () => {
  console.log("button clicked");

  let textInput = document.querySelector("#text-input").value;
  let backwards = reverse (textInput)

  speak(backwards);

  // speak(textInput);

  // let utterThis = new SpeechSynthesisUtterance ("Hello computer");
  //
  // synth.speak(utterThis);
};

//reversing
const reverse = (text) => {
  let textArray = text.split("");
  let reversedArray = textArray.reverse();
  let joinedArray = reversedArray.join("");
  return joinedArray;

}

const speak = (text) => {
//to check if speaking
  if (synth.speaking) {
    console.error("it's speaking");
    return;
  }

  let utterThis = new SpeechSynthesisUtterance (text);
  // utterThis.lang = "en-gb";

  synth.speak(utterThis);
};
