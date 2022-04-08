let cSsound = document.querySelector("#cSsound");
let dSound = document.querySelector("#dSsound");
let dSsound = document.querySelector("#dSsound");
let eSound = document.querySelector("#eSound");
let fSound = document.querySelector("#fSound");
let fSsound = document.querySelector("#fSsound");
let gSound = document.querySelector("#gSound");
let gSsound = document.querySelector("#gSsound");
let aSound = document.querySelector("#aSound");
let aSsound = document.querySelector("#aSsound");
let bSound = document.querySelector("#bSound");

let cKey = document.querySelector("#cKey");
let cSkey = document.querySelector("#cSkey");
let dKey = document.querySelector("#dKey");
let dSkey = document.querySelector("#dSkey");
let eKey = document.querySelector("#eKey");
let fKey = document.querySelector("#fKey");
let fSkey = document.querySelector("#fSkey");
let gKey = document.querySelector("#gKey");
let gSkey = document.querySelector("#gSkey");
let aKey = document.querySelector("#aKey");
let aSkey = document.querySelector("#aSkey");
let bKey = document.querySelector("#bKey");

var cSound = new Audio("C.wav");
function playAudioOnKeyDown(_cKey) {
  if (_cKey.keyCode == 67) {
    cSound.play();
  }
}
document.onkeydown = playAudioOnKeyDown;
function pauseAudioOnKeyUp(_cKey) {
  if (_cKey.keyCode == 67) {
    cSound.pause();
  }
}
document.onkeyup = pauseAudioOnKeyUp;
// <----------------------------------->
let dSound = new Audio("D.wav");
function playAudioOnKeyDown(_cKey) {
  if (_cKey.keyCode == 86) {
    dSound.play();
  }

  setTimeout(() => 
  {
    dSound.play();
    console.log("hej")
  }, 200)
}
document.onkeydown = playAudioOnKeyDown;
// function pauseAudioOnKeyUp(_cKey) {
//   if (_cKey.keyCode == 86) {
//     dSound.pause();
//   }
// }
// document.onkeyup = pauseAudioOnKeyUp;
// <----------------------------------->
