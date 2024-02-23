'use strict';

console.groupCollapsed('Array.sort() CAO 12 pamoka')
// Array metodai

// https://codeacademy.online/dashboard/modules/js2/5DZ8VhCw3kzv3F5nK8NQ/58785795

// Pasirašykite sąrašą su draugų vardais. Išrikiuokite A-Z tvarka. 
const ArrNames = ['Zivile', 'Ignas', 'Edgaras', 'Gabriele', 'Antanas', 'Ona']
ArrNames.sort();
console.log(ArrNames)

// Pakoreguokite pirmame pratime esantį sort, kad išrikiuotumėte Z-A tvarka.
ArrNames.sort((a, b) => b > a ? 1 : -1)
console.log(ArrNames)

// Nusikopijuokite seką [5, 10, 20, 11, 12, 1, 0, 14, 25] ir su JS surūšiuokite ją mažėjimo tvarka (nuo didžiausio iki mažiausio).
let Arr = [5, 10, 20, 11, 12, 1, 0, 14, 25]
Arr.sort((a, b) => b > a ? 1 : -1)
console.log(Arr)

// Nusikopijuokite seką [10, 5, 20, 4] ir grąžinkite didžiausią skaičių (vieną skaičių).
let arr1 = [10, 5, 20, 4]
arr1.sort((a, b) => b - a);
console.log(arr1[0]);

console.groupEnd()


console.groupCollapsed ('Array reduce: Užduotys.CAO 12 pamoka' )
// Array reduce: Užduotys
// https://codeacademy.online/dashboard/modules/js2/5DZ8VhCw3kzv3F5nK8NQ/58425444

const people = [
    {name: "Petras",age: "18"},
    {name: "Jonas",age: 15},
    {name: "Antanas",age: 20},
    {name: "Urtė",age: 10},
    {name: "Diana",age: 25},
    {name: "Ieva",age: 16}
];

//Prafiltruokite masyvą, kad rodytų tik pilnamečius. 
console.log(people.filter(x=> x.age >= 18))

//Pakoreguokite aukščiau nurodytą pratimą, kad pilnamečių array rodytų tik vardus (amžius jau nesvarbu). Rezultatas turi būti: ["Petras", "Antanas", "Diana"].
console.log(people.filter(x => x.age >= 18).map(person => person.name))

//Antro pratimo array išrikiuokite A-Z tvarka. Optimizuokite kodą, kad visas veiksmas tilptų į vieną eilutę.
console.log(people.filter(x => x.age >= 18).map(person => person.name).sort())

// Sukurkite funkciją. Ji priims vieną argumentą – array su objektais, kurie turės du parametrus:name ir price. 
// Grąžinkite – brangiausią ir pigiausią prekes. 
// Turi veikti padavus neribotą kiekį elementų (pavyzdyje apačioje – tik du)
// Pvz: iškvietimas: fn([{name: "lemonade", price: 50}, {name: "lime", price: 10}])
// grąžins: {brangiausias: "lemonade", pigausias: "lime"}
const drinks = [
    { name: "lemonade", price: 50 },
    { name: "lime", price: 10 }]
  function fn(items) {
    items.sort((a, b) => a.price - b.price)
    return {pigiausias: items[0].name, brangiausias: items[items.length - 1].name}} 
  console.log(fn(drinks))

  console.groupEnd()


