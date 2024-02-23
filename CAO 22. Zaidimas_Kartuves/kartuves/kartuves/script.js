const wordWrapper = document.getElementById("word");
const inputLetter = document.getElementById("letter-input");
const errorWrapper = document.getElementById("error-wrapper");
const livesWrapper = document.getElementById("lives");

const letters = [
  { letter: "n", isDisplay: true },
  { letter: "a", isDisplay: false },
  { letter: "m", isDisplay: true },
  { letter: "a", isDisplay: false },
  { letter: "s", isDisplay: false },
];

let lives = 3;

const printLives = () => {
  livesWrapper.innerText = lives;
};

const addErrorToScreen = (errorMessage) => {
  inputLetter.value = "";
  errorWrapper.innerText = errorMessage;

  setTimeout(() => {
    errorWrapper.innerText = "";
  }, 1000);
};

const printLetters = () => {
  letters.forEach((l, idx) => {
    const letterWrapper = document.createElement("div");
    letterWrapper.classList.add("letter");

    letterWrapper.addEventListener("click", () => {
      if (inputLetter.value.length === 1) {
        if (l.letter === inputLetter.value) {
          letters[idx].isDisplay = true;
          console.log(letters[idx]);
          wordWrapper.innerHTML = "";
          printLetters();
          inputLetter.value = "";
        } else {
          lives = lives - 1;
          printLives();

          if (lives <= 0) {
            errorWrapper.innerText = "GAME OVER";
          } else {
            addErrorToScreen("Bad letter");
          }
        }
      } else {
        addErrorToScreen("You should add 1 letter");
      }
    });

    if (l.isDisplay === true) {
      letterWrapper.innerText = l.letter;
    } else {
      letterWrapper.innerText = "_";
    }

    wordWrapper.append(letterWrapper);
  });
};

printLives();
printLetters();
