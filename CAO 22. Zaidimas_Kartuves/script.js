// https://codeacademy.online/dashboard/modules/js2/TJPtKd6CmsZqhcp0ykQk/138903553
// Kartuvės
// Sukurkite paprastą "Kartuvių" žaidimą. Žaidimas turėtų rodyti paslėptą žodį (pakeičiant raides su pabraukimais) ir leisti žaidėjui spėti raides. Žaidėjas turi ribotą skaičių spėjimų ir turi stengtis atspėti žodį kol baigsis spėjimų skaičius. Žaidimas turi turėti formą raidžių spėjimui ir mygtuką patikrinimui. Taip pat turėtų validuoti, ar įvesta tik viena raidė. Jei spėta raidė yra žodyje, ji turi būti atskleista teisingose pozicijose.
// Svarbūs aspektai ir kraštutinės situacijos:
// Atsitiktinis žodžio pasirinkimas: Žaidimas pasirenka atsitiktinį žodį iš žodžių masyvo, kai prasideda arba kai žaidėjas paspaudžia "Naujas žodis" mygtuką.
// Raidžių spėjimas:
// Žaidėjas spėja po vieną raidę. Jei jie įveda daugiau nei vieną simbolį arba ne raidės simbolį, žaidimas paragina įvesti vieną raidę.
// Jei žaidėjas bando spėti raidę, kurią jau spėjo, žaidimas informuoja apie tai neskaičiuodamas klaidingo spėjimo.
// Galima pasirinkti validuoti tik Anglų kalbos abėcėlė (A-Z) arba ir Lietuvių.
// Spėjimai ir laimėjimas:
// Žaidėjui yra suteikiamas ribotas spėjimų skaičius (pradžioje nustatytas 6).
// Teisingi spėjimai atskleidžia raidę žodyje.
// Netinkami spėjimai sumažina likusių spėjimų skaičių.
// Žaidimas baigiasi laimėjimu, jei žaidėjas atskleidžia visą žodį.
// Žaidimas baigiasi pralaimėjimu, jei žaidėjui baigiasi spėjimai.
// Žaidimas iš naujo: Mygtukas "Naujas žodis" leidžia žaidėjui pradėti naują žaidimą su nauju žodžiu, iš naujo nustatant spėtas raides ir likusius spėjimus.
// Ekrano atnaujinimas:
// Po kiekvieno spėjimo žaidimas atnaujina ekraną, parodydamas esamą žodžio būseną, spėtas raides ir likusius spėjimus.

const words = ["apple", "banana", "orange", "strawberry", "grape"];

let chosenWord = "";
let guessedWord = [];
let remainingGuesses = 6;

const newGame = () => {
  chooseRandomWord();
  guessedWord = Array(chosenWord.length).fill("_");
  remainingGuesses = 6;
  updateDisplay();
};

const updateDisplay = () => {
  document.querySelector(".word").innerText = guessedWord.join(" ");
  document.querySelector(
    ".surmise"
  ).innerText = `Remaining guesses: ${remainingGuesses}`;
};

const isLetter = (char) => {
  return /^[A-Za-z]$/.test(char);
};

const chooseRandomWord = () => {
  chosenWord = words[Math.floor(Math.random() * words.length)];
};

const guessLetter = (letter) => {
  if (isLetter(letter)) {
    letter = letter.toLowerCase();
    if (chosenWord.includes(letter)) {
      for (let i = 0; i < chosenWord.length; i++) {
        if (chosenWord[i] === letter) {
          guessedWord[i] = letter;
        }
      }
    } else {
      remainingGuesses--;
    }
    updateDisplay();
    checkGameStatus();
  } else {
    alert("Please enter a single letter.");
  }
};

const checkGameStatus = () => {
  if (guessedWord.join("") === chosenWord) {
    alert("Congratulations! You guessed the word.");
    newGame();
  } else if (remainingGuesses === 0) {
    alert(`Sorry, you lost. The word was "${chosenWord}".`);
    newGame();
  }
};

document.querySelector(".guess").addEventListener("click", () => {
  const input = document.querySelector(".input").value;
  guessLetter(input);
});

document.querySelector(".newWord").addEventListener("click", () => {
  newGame();
});

// Initialize new game
newGame();
