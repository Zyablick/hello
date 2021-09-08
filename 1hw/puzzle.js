$(document).ready(function() {
// alert("Careful, you will get deep into the ocean");
// alert("Are you sure you want to continue?");
// console.log( "ready!" );

// alert("Okay, we warned you...");
$("#part1").draggable();
$("#part2").draggable();
$("#part3").draggable();
$("#part4").draggable();
});

$("#button").click(function() {
  $("#button2").show();
});

const synth = window.speechSynthesis;

document.querySelector("#button").onmouseover = () => {
  console.log("button hover");
  speak("Don't try to trick me! Are you realy done?");
};
document.querySelector("#part1").onmouseover = () => {
  console.log("part1 hover");
  speak("Are you as hungry as I am");
};
document.querySelector("#part1").ondrag = () => {
  console.log("part1 drag");
  speak("Wow this gonna take forever");
};
document.querySelector("#part2").onmouseover = () => {
  console.log("part2 hover");
  speak("you're so slow!");
};
document.querySelector("#part2").ondrag = () => {
  console.log("part2 drag");
  speak("Gentle!!! Please");
};
document.querySelector("#part3").onmouseover = () => {
  console.log("part3 hover");
  speak("Man I'm so hungry");
};
document.querySelector("#part3").ondrag = () => {
  console.log("part3 drag");
  speak("I want my meal");
};
document.querySelector("#part4").onmouseover = () => {
  console.log("part4 hover");
  speak("This one hell of a tasty piece");
};
document.querySelector("#part4").ondrag = () => {
  console.log("part4 drag");
  speak("Are you done yet");
};
document.querySelector("#button2").onclick = () => {
  console.log("button2 click");
  speak("Thank you for spending time with me, I felt lonely");
};



const speak = (text) => {
//to check if speaking
  if (synth.speaking) {
    console.error("it's speaking");
    return;
  }

  let utterThis = new SpeechSynthesisUtterance (text);
  utterThis.lang = "ru-RU";
  // utterThis.pitch = 0.8;
  // utterThis.rate = 0.1;

  synth.speak(utterThis);
};
