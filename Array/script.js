/*Sukurkite array [2, 3, 4] ir į jo pradžią pridėkite 1.

let nums = [2, 3, 4]

nums.unshift (1)

console.log(nums) */

/* Parašykite kodą, kuris suskaičiuoja ir išveda į console, kiek yra skirtingų elementų masyve.

const arr = [1, 2, 2, 3, 3, 3, 4];

const uniqueElements = [];
for (let i = 0; i < arr.length; i++) {
    if (!uniqueElements.includes(arr[i])) {
        uniqueElements.push(arr[i]);
    }
}

console.log(uniqueElements.length);
*/

/*Sukurkite funkciją keepPositive, kuri grąžina naują masyvą, sudarytą tik iš teigiamų skaičių iš pradinio masyvo.

function keepPositive(arr) {
    const positiveNumbers = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positiveNumbers.push(arr[i]);
        }
    }
    return positiveNumbers;
}
*/

/*Sukurkite funkciją arPasikartoja, kuri patikrina, ar nurodytas elementas pasikartoja masyve. Funkcija grąžina true, jei elementas pasikartoja, ir false priešingu atveju.

function doesRepeat(arr, element) {
    return arr.indexOf(element) !== arr.lastIndexOf(element);
}*/

/*Parašykite funkciją transformNumber, kuri pakeičia kiekvieną masyvo skaičių: jei skaičius yra lyginis, jį padalina iš dviejų; jei nelyginis, padaugina iš trijų. Grąžinkite transformuotą masyvą.
console.log(transformuotiSkaičius([1, 2, 3, 4, 5])); // [3, 1, 9, 2, 15]

function transformuotiSkaičius(arr) {
    const transformed = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            transformed.push(arr[i] / 2);
        } else {
            transformed.push(arr[i] * 3);
        }
    }
    return transformed;
}*/

/* Padarykite, kad kompiuteris 10 kartų išvestų jūsų vardą.

for (let i = 0; i < 10; i++) {
   console.log ('Milana')
}
*/

/*Pakoreguokite pirmąjį pratimą, kad tiek vardas, tiek kiek kartų kartos - būtų kintamieji.

const name = 'Milana';
const count = 10;
for (let i = 0; i < count; i++) {
  console.log(name);
}
*/

/* Prie savo vardo atspaudinkite ir i , t.y. kelintas ciklas yra (pvz.: 0. Petras, 1. Petras, 

const name = 'Gedas';
const count = 10;
for (let i = 0; i < count; i++) {
  console.log(`${i}. ${name}`);
}
*/

/* Parašykite for loopą, kuris atspaudins nuo 10 iki 1 countdown konsolėje.

let i = 10;
while(i > 0) {
  console.log(i);
  i--;
}
*/

/* Su while ciklu pasirašykite, kad jūsų vardą išvestų į console 3 kartus.



const name = 'Milana';
let i = 3;
while (i > 0) {
  console.log(name);
  i--;
}
*/

/* Sukurkite kintamąjį let combo = ''. Kiekvieną kartą paleidus ciklą į combo prisirašo jūsų vardas (t.y. while ciklo viduje darytų combo += "Petras" ). Sukurkite programą, kur bus kintamasis let times = 5, kuris nurodys kiek kartų į combo kintamąjį turėtų būti pridėtas jūsų vardas. Jei times skaičius 0 arba mažiau – vis tiek bent vieną kartą įvyks ciklas ir jūsų vardą įrašys į combo.
Pvz:
times = 0; → "Petras"
times = 1; → "Petras"
times = 2; → "PetrasPetras"
times = 3; → "PetrasPetrasPetras"

let combo = '';
const name = 'Gedas';
let times = 3;
do {
  combo += name;
  times--;
} while (times > 0);
console.log(combo);
*/

/*Parašykite JavaScript ciklą, kuris atspausdina skaičius nuo 1 iki 5.


for (let i = 1; i <= 5; i++) {
    console.log(i);
}*/

/* Sukurkite JavaScript programą, kuri suskaičiuoja sumą nuo 1 iki 5 naudojant while ciklą.


let i = 1;
let sum = 0;
while (i <= 5) {
    sum += i;
    i++;
}
console.log(sum);
*/

/*let arr = [2,3,4]
 arr.unshift (1)
 console.log (arr)*/


/*let arr = [1, 2, 2, 3, 3, 3, 4]
console.log (arr.length)*/

/*const arr = [1, 2, 2, 3, 3, 3, 4]
const set = [...new set (arr)]
console.log (set)*/

function sum (a, b) {
 console.log (a + b)
}

sum (5,10)

function daugyba (a, b) {
    var result = a * b
    return result (2, 2)
}

function num () {
    for ('i = 0; i<10, i++')
    }
    return (i)
}

