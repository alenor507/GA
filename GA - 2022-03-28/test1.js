let cSound = document.querySelector("#cSound");
let cSsound = document.querySelector("#cSsound");
let dSound = document.querySelector("#dSound");
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

cKey.addEventListener("click", () => 
{
    cSound.play()
})  

let playAudioOnKeyDown = (_cKey) =>  
{
  if (_cKey.keyCode == 90) 
  {
    //cSound.play();
    cSound.cloneNode(true).play()
  }

  if (_cKey.keyCode == 83) 
  {
    //dSound.play();
    cSsound.cloneNode(true).play()
  }

  if (_cKey.keyCode == 88) 
  {
    //dSound.play();
    dSound.cloneNode(true).play()
  }
  if (_cKey.keyCode == 68) 
  {
    //dSound.play();
    dSsound.cloneNode(true).play()
  }
  if (_cKey.keyCode == 67) 
  {
    //dSound.play();
    eSound.cloneNode(true).play()
  }
  if (_cKey.keyCode == 86) 
  {
    //dSound.play();
    fSound.cloneNode(true).play()
  }
  if (_cKey.keyCode == 71) 
  {
    //dSound.play();
    fSsound.cloneNode(true).play()
  }
  if (_cKey.keyCode == 66) 
  {
    //dSound.play();
    gSound.cloneNode(true).play()
  }
  if (_cKey.keyCode == 72) 
  {
    //dSound.play();
    gSsound.cloneNode(true).play()
  }
  if (_cKey.keyCode == 78) 
  {
    //dSound.play();
    aSound.cloneNode(true).play()
  }
  if (_cKey.keyCode == 74) 
  {
    //dSound.play();
    aSsound.cloneNode(true).play()
  }
  if (_cKey.keyCode == 77) 
  {
    //dSound.play();
    bSound.cloneNode(true).play()
  }
  
//   if (_cKey.keyCode == 188) 
//   {
//     //cSound.play();
//     cSound.cloneNode(true).play()
//   }

//   if (_cKey.keyCode == 76) 
//   {
//     //dSound.play();
//     cSsound.cloneNode(true).play()
//   }
//   if (_cKey.keyCode == 190) 
//   {
//     //cSound.play();
//     cSound.cloneNode(true).play()
//   }

//   if (_cKey.keyCode == 192) 
//   {
//     //dSound.play();
//     cSsound.cloneNode(true).play()
//   }
//   if (_cKey.keyCode == 189) 
//   {
//     //cSound.play();
//     cSound.cloneNode(true).play()
//   }

}
document.onkeydown = playAudioOnKeyDown 



// cSkey.addEventListener("click", () => 
// {
//     cSsound.play()
// })    
// dKey.addEventListener("click", () => 
// {
//     dSound.play()
// })    
// dSkey.addEventListener("click", () => 
// {
//     dSsound.play()
// })    
// eKey.addEventListener("click", () => 
// {
//     eSound.play()
// })    
// fKey.addEventListener("click", () => 
// {
//     fSound.play()
// })    
// fSkey.addEventListener("click", () => 
// {
//     fSsound.play()
// })    
// gKey.addEventListener("click", () => 
// {
//     gSound.play()
// })    
// gSkey.addEventListener("click", () => 
// {
//     gSsound.play()
// })    
// aKey.addEventListener("click", () => 
// {
//     aSound.play()
// })    
// aSkey.addEventListener("click", () => 
// {
//     aSsound.play()
// })    
// bKey.addEventListener("click", () => 
// {
//     bSound.play()
// })  