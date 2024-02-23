// 1. Išsibandyt modulinę struktūrą, eksportuot funkcijas bei jas importuojant;

// import myName from "./names/names.js";
// console.log(myName);

// import { myName, name1, name2 } from "./names/names.js";
// console.log(myName);
// console.log(name1);
// console.log(name2);

import userInfo from "./names/names.js";
// const { age } = userInfo;
// console.log(age);

const { address } = userInfo;
const { street } = address;
console.log(street);

// 2. Atskirame faile apsirašyt funkciją kuri priima masyvą su skaičiais bei gražiną mažiausią skaičių; ziureti functions.js

import { minNum } from "./Functions/functions.js";

console.log(minNum());

// 3. Atskirame faile apsirašyt funkciją kuri priima skaičių masyvą bei gražiną jų vidurkį;
// ziureti functions.js

import { averageNum } from "./Functions/functions.js";

console.log(averageNum());

// 4. Į funkciją paduoti žodį string pavidalu bei gaut masyvą kuriame būtu kiekviena žodžio raidė;
// ziureti functions.js

import { arrayOfLetters } from "./Functions/functions.js";

console.log(arrayOfLetters());

// 5. Į funkciją paduoti masyvą su skaičiais. Funkcija turi gražint skaičių sumą;
// ziureti functions.js

import { sumOfNums } from "./Functions/functions.js";

console.log(sumOfNums());
