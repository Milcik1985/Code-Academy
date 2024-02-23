// Pasirašyti applikacija kuri jum padės praktikuotis anglų kalbą:
// 1. Ekrane turi atsirast lietuviškas žodis, mes jį turim inpute parašyti anglų kalbą bei paspaust ant button "TIKRINTI".
let ltWords = [
  { word: "obuolys", translation: "apple" },
  { word: "apelsinas", translation: "orange" },
  { word: "bananas", translation: "banana" },
  { word: "kamuolys", translation: "ball" },
  { word: "batas", translation: "boot" },
  { word: "puodelis", translation: "cup" },
  { word: "šikšnosparnis", translation: "bat" },
  { word: "deže", translation: "box" },
  { word: "mašina", translation: "car" },
];

let lives = 3;

const ltWordWrapper = document.getElementsByClassName("lt-word-wrapper")[0];
const checkButton = document.getElementsByClassName("check-button")[0];
const inputValue = document.getElementsByClassName("translation-input")[0];
const message = document.getElementsByClassName("message")[0];
const leftTrials = document.getElementsByClassName("lives")[0];

const randomIndex = Math.floor(Math.random() * ltWords.length);
let randomObjectWord = ltWords[randomIndex];

ltWordWrapper.textContent = randomObjectWord.word;

// 2. Jeigu parašėm gerą žodį - ekrane turi atsirast sekmės žinutė.
// 3. Nesekmės atveju turime gaut nesekmės žinutę;
checkButton.addEventListener("click", () => {
  if (inputValue.value === randomObjectWord.translation) {
    message.innerText = "Correct! Awesome!";
    message.style.color = "green";
    inputValue.value = "";
    ltWordWrapper.textContent = "";
    let newIndex = Math.floor(Math.random() * ltWords.length);
    randomObjectWord = ltWords[newIndex];
    ltWordWrapper.textContent = randomObjectWord.word;
  } else {
    message.innerText = "Wrong! Try again";
    message.style.color = "red";
    inputValue.value = "";
    lives--;
    if (lives <= 0) {
      message.innerText = "Go and learn english!";
      message.style.color = "red";
      message.style.fontWeight = "bold";
      leftTrials.innerText = "";
      // 4. Po 3 nesekmingų spėjimų ekrane turi atsirast angliškas žodis;
      setTimeout(() => {
        ltWordWrapper.innerText = `Translation is: ${randomObjectWord.translation}`;
      }, 3000);
    } else {
      leftTrials.innerText = `remaining lives: ${lives}`;
    }
  }
});
