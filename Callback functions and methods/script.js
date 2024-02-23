
console.groupCollapsed ('Callback functions')
// Callback
// Vardas
// Sukurkite dvi funkcijas: 
// alertName
// consoleName
// Abi funkcijos turės vieną parametrą – vardą. Jos bus callback funkcijos. Pirmoji funkcija vardą alertins, antroji – console.log'ins. 
// Susikurkite pagrindę funkciją (coreFunction). Ši funkcija – paims pirmą raidę, ją padarys didžiąja ir prijungs kitas raides (t.y. užtikrina, kad vardas prasideda iš didžiosios; pvz: "petras" => "Petras"), tada iškviečia vieną iš callback funkcijų (nesvarbu kurią, galima jas kaitalioti).

function alertName(myName) {alert(myName)}
function consoleName(myName) {console.log(myName)}
  
  function coreFunction(myName, callback) {
    const capitalizedName = myName.charAt(0).toUpperCase() + myName.slice(1).toLowerCase();
    callback(capitalizedName)}
  coreFunction("peTras", consoleName)

  console.groupEnd()

  console.groupCollapsed('Array metodai: Užduotys. 11 pamoka CAO') 

// Array metodai: Užduotys
//https://codeacademy.online/dashboard/modules/js2/AizQ2Cmm6McL8CRtjkrC/59506724

// Nusikopijuokite array const cars = ["BMW", "VW", "Audi"] ir, naudojant forEach, atspausdinkite kiekvieną elementą (automobilio reikšmę). 

const cars = ["BMW", "VW", "Audi"];
cars.forEach((v) => console.log(v));

// Pakoreguokite pirmą pratimą, kad atspausdintumėte index: value (pvz: 0: BMW, 1: VW ir t.t.).
cars.forEach((v, i) => console.log(i + ": " + v));

// Sukurkite masyvą pavadinimu names su savo draugų vardais, raidžių kapitalizaciją pamiksuokite (t.y. "peTras", "Jonas", "aNTanaS" ir t.t.). Naudojant map metodą, padarykite, kad susikurtų naujas array (ir jį atspausdinkite), kuriame vardai surašyti teisinga kapitalizacija (pvz. "peTras" -> "Petras").

const names = ['joNas', 'MAryte', 'onuTE']
const newNames = names.map((v) => v.charAt(0).toUpperCase() + v.slice(1).toLowerCase())
console.log(newNames)

// Sukurkite array su savo draugų amžiais (nuo 1 iki 99). Naudojant filter – išveskite tik tuos skaičius, kurie yra didesni arba lygūs 18.
let age = [25, 35, 18, 16, 40, 65]
let newAge = age.filter((item) => item >= 18);
console.log(newAge)

// Sukurkite array su Lietuvos miestais ("Vilnius", "Kaunas"). Naudojant find – suraskite bet kokį pirmą miestą, kuris prasideda iš "K" raidės.
const cities = ['Vilnius', 'Kaunas', 'Klaipeda', 'Siauliai']
const newCity = cities.find((item) => item.startsWith('k'))
console.log(newCity)
//atsakymas CAO:
//console.log(cities.find(v => v.charAt(0) === "K"));

// Penktame pratime esantį sprendimą pakoreguokite ir patikrinkite su some ar bent vienas miestas prasideda iš mažosios.
let lowCity = cities.some((item) => item.startsWith.toLowerCase)
console.log(lowCity)

//atsakymas CAO:
//console.log(cities.some(v => v.charAt(0) === v.charAt(0).toLowerCase()));


// Pakoreguokite šeštą pratimą, kad patikrintų ar visi miestai prasideda iš didžiosios raidės.
//neveikia: let upperCity = cities.every((item) => item.startsWith.toUpperCase)
//console.log(upperCity)

//atsakymas CAO:
console.log(cities.every(v => v.charAt(0) === v.charAt(0).toUpperCase()));

console.groupEnd()
