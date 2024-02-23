/*Dirbti su šiuo masyvu:
[4, 5, -5556, 155, 640, '15x', 6789, -5564, 478, 654, 'obuolys', 789, -51, 55, -222, 0, -357, -56, 'trylika', 444, 7778, 4154, 4751];

1. Dirbant su šiuo masyvu eilės tvarka atlikti žemiau pateiktas užduotis. Naudoti metodus: pop, push, shift, unshift, splice.*/


console.groupCollapsed ('Pirma uzduotis');

console.log ('veikia')

let arr = [4, 5, -5556, 155, 640, '15x', 6789, -5564, 478, 654, 'obuolys', 789, -51, 55, -222, 0, -357, -56, 'trylika', 444, 7778, 4154, 4751];
console.log (arr)

//1.1. Pašalinti pirmą masyvo narį.
arr.shift(0)
console.log(arr)

//1.2. Pašalinti paskutinį masyvo narį.
arr.pop(-1)
console.log(arr)

//1.3. Rasti vidurinį masyvo narį ir jį pašalinti.
console.log(arr.length)
arr.splice (10,1)
console.log(arr)

//1.4. Pašalinti priešpaskutinį masyvo narį.
arr.splice(-2,1)
console.log(arr)

//1.5. Pašalinti antrą masyvo narį.
arr.splice(1,1)
console.log(arr)

//1.6. Pašalinti 7 ir 8 masyvo narius.
arr.splice(6,2)
console.log(arr)

//1.7. Pašalinti 4, 5 ir 6 masyvo narius skaičiuojant nuo galo.
console.log(arr.length)
arr.splice(-6,3)
console.log(arr)

//1.8. Pašalinti trečią masyvo narį ir į jo vietą įdėti skaičių 888.
arr.splice(2,1,888)
console.log(arr)

//1.9. Pašalinti dešimtą masyvo narį ir į jo vietą įdėti skaičius: 33, 789 ir 6543.
arr.splice(9,1,33, 789, 6543)
console.log(arr)

//1.10. Pašalinti paskutinį masyvo narį į jo vietą įdėti skaičius: 321, 654, 987.
arr.splice(-1,1,321, 654, 987)
console.log(arr)

//1.11. Tarp pirmo ir antro masyvo narių įdėti skaičių 11.
arr.splice(1,0,11)
console.log(arr)

//1.12. Tarp 13 ir 14 masyvo narių įdėti skaičių 1.
arr.splice(13 , 0, 1)
console.log(arr)

//1.13. Tarp paskutinio ir priešpaskutinio masyvo narių įdėti skaičių -1.
arr.splice(-1, 0, -1)
console.log(arr)

//1.14. Į masyvo pradžią pridėti skaičius: 1, 2, 3.
arr.unshift(1, 2, 3)
console.log(arr)

//1.15. Į masyvo pabaigą pridėti skaičius: -333, -321, -312.
arr.push(-333, -321, -312)
console.log(arr)

//1.16. Į masyvo vidurį pridėti skaičių 0.
let middleIndex = Math.ceil(arr.length / 2);
let firstHalf = arr.splice(0, middleIndex);   
let secondHalf = arr.splice(-middleIndex);
console.log(firstHalf)
console.log(secondHalf)
let i=0;
let newArr = [].concat(firstHalf, i, secondHalf);
console.log(newArr)

//1.17. Pašalinti pirmą masyvo narį.
newArr.shift(0)
console.log(newArr)

//1.18. Pašalinti paskutinį masyvo narį.
newArr.pop(25)
console.log(newArr)

//1.19. Į masyvo pradžią pridėti žodį "start".
newArr.unshift('start')
console.log(newArr)

//1.20. Į masyvo pabaigą pridėti žodį "end".
newArr.push('end')
console.log(newArr)

/*Atlikus šias užduotis eilės tvarka masyvas turėtų atrodyti taip:
['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end']*/

/*MyArray: 
["start",2, 3, 5, 11, 155, 888, "15x", 6789, -5564, "obuolys", -51, 55, 0, 33, 789,6543, 1, "trylika", 444, 321, 654, -1, 987, -333, -321, "end"]*/

console.groupEnd('Pirma uzduotis');

/*2. Tęsiant darbą su šiuo masyvu atlikti šias užduotis naudojant slice metodą. Kiekvienai užduočiai sukurti naują kintamąjį, jame išsaugoti reikšmę, kurią grąžina slice metodas, ir šį kintamąjį išvesti į konsolę:*/

console.groupCollapsed ('Antra uzduotis');

let MyArray = ["start",2, 3, 5, 11, 155, 888, "15x", 6789, -5564, "obuolys", -51, 55, 0, 33, 789,6543, 1, "trylika", 444, 321, 654, -1, 987, -333, -321, "end"]

console.log (MyArray)

// 2.1. Gauti pirmą masyvo narį.
let slicedArr = MyArray.slice(0, 1)
console.log(slicedArr)

// 2.2. Gauti paskutinį masyvo narį.
let slicedArr2 = MyArray.slice(-1)
console.log(slicedArr2)

// 2.3. Gauti antrą masyvo narį.
let slicedArr3 = MyArray.slice(1,2)
console.log(slicedArr3)

// 2.4. Gauti priešpaskutinį masyvo narį.
let slicedArr4 = MyArray.slice(-2, -1)
console.log(slicedArr4)

// 2.5. Gauti aštuntą masyvo narį.
let slicedArr5 = MyArray.slice(7, 8)
console.log(slicedArr5)

// 2.6. Gauti devintą masyvo narį skaičiuojant nuo galo.
let slicedArr6 = MyArray.slice(-9, -8)
console.log(slicedArr6)

// 2.7. Gauti vidurinį masyvo narį.
let slicedArr7 = MyArray.slice(13, 14)
console.log(slicedArr7)

// 2.8. Gauti pirmus tris masyvo narius.
let slicedArr8 = MyArray.slice(0, 3)
console.log(slicedArr8)

// 2.9. Gauti paskutinius tris masyvo narius.
let slicedArr9 = MyArray.slice(-3)
console.log(slicedArr9)

// 2.10. Gauti pirmus 10 masyvo narius.
let slicedArr10 = MyArray.slice(0,10)
console.log(slicedArr10)

// 2.11. Gauti paskutinius 10 masyvo narius.
let slicedArr11 = MyArray.slice(-10)
console.log(slicedArr11)

// 2.12. Gauti nuo 3 iki 8 masyvo nario (iš viso 6 nariai).
let slicedArr12 = MyArray.slice(2,8)
console.log(slicedArr12)

// 2.13. Gauti nuo 5 iki 9 masyvo nario skaičiuojant nuo masyvo pabaigos (iš viso 5 nariai).
let slicedArr13 = MyArray.slice(4, 9)
console.log(slicedArr13)

// 2.14. Gauti nuo 11 iki 19 masyvo nario (iš viso 9 nariai).
let slicedArr14 = MyArray.slice(10, 19)
console.log(slicedArr14)

// 2.15. Gauti nuo 9 iki 17 masyvo nario skaičiuojant nuo masyvo pabaigos (iš viso 9 nariai).
let slicedArr15 = MyArray.slice(8, 17)
console.log(slicedArr15)

// 2.16. Gauti visus masyvo narius išskyrus pirmą.
let slicedArr16 = MyArray.slice(1)
console.log(slicedArr16)

// 2.17. Gauti visus masyvo narius išskyrus paskutinį.
let slicedArr17 = MyArray.slice(0, -1)
console.log(slicedArr17)

// 2.18. Gauti visus masyvo narius išskyrus pirmus 5.
let slicedArr18 = MyArray.slice(5)
console.log(slicedArr18)

// 2.19. Gauti visus masyvo narius išskyrus paskutinius 5.
let slicedArr19 = MyArray.slice(0, -5)
console.log(slicedArr19)

// 2.20. Gauti visus masyvo narius iki vidurinio masyvo nario, vidurinio nario neįskaičiuojant (iš viso 13 narių).
let slicedArr20 = MyArray.slice()
console.log(slicedArr20)

// 2.21. Gauti visus masyvo narius nuo vidurinio masyvo nario, vidurinio nario neįskaičiuojant, iki pabaigos (iš viso 13 narių).
let slicedArr21 = MyArray.slice(14)
console.log(slicedArr21)

// 2.22. Gauti visus narius išskyrus pirmą ir paskutinį.
let slicedArr22 = MyArray.slice(1, -1)
console.log(slicedArr22)

// 2.23. Gauti visus narius išskyrus pirmus penkis ir paskutinius tris.
let slicedArr23 = MyArray.slice(5, -3)
console.log(slicedArr23)

// 2.24. Gauti visus narius išskyrus pirmą ir paskutinius 8.
let slicedArr24 = MyArray.slice(1, -8)
console.log(slicedArr24)

// 2.25. Gauti visus narius išskyrus pirmus 7 ir paskutinį.
let slicedArr25 = MyArray.slice(7, -1)
console.log(slicedArr25)

// 2.26. Gauti visus narius išskyrus pirmus 9 ir paskutinius 12.
let slicedArr26 = MyArray.slice(9, -12)
console.log(slicedArr26)

// 2.27. Gauti 9 narius skaičiuojant nuo 11.
let slicedArr27 = MyArray.slice(10, 19)
console.log(slicedArr27)

// 2.28. Gauti 12 narių skaičiuojant nuo 8.
let slicedArr28 = MyArray.slice(7, 19)
console.log(slicedArr28)

// 2.29. Gauti pirmus penkis ir paskutinius šešis masyvo narius. Šiuos narius gauti viename masyve. Reikės atlikti daugiau veiksmų nei prieš tai uždaviniuose.
let slicedArr29 = MyArray.slice(0, 5)
console.log(slicedArr29)

let slicedArr30 = MyArray.slice(-6)
console.log(slicedArr30)

let slicedArr31 = slicedArr29.concat(slicedArr30)
console.log(slicedArr31)

// 2.30. Gauti masyvo narius nuo 3 iki 5 ir nuo 15 iki 17. Šiuos narius gauti viename masyve. Reikės atlikti daugiau veiksmų nei prieš tai uždaviniuose. 
let slicedArr32 = MyArray.slice(2, 5)
console.log(slicedArr32)

let slicedArr33 = MyArray.slice(14, 17)
console.log(slicedArr33)

let slicedArr34 = slicedArr32.concat(slicedArr33)
console.log(slicedArr34)

console.groupEnd('Antra uzduotis');

console.groupCollapsed ('7 pamoka CAO. Funkcijos');

//.......................Funkcijos..................................
//https://codeacademy.online/dashboard/modules/js2/m0nRQdeuz7KDDsc10Rn2/121274369

//Ne visos funkcijos turi return statement (nors dažniausiai taip yra). Sukurkite funkciją, į kurią paduosite vardą ir parodysite panaudodami alert.

let showName = myName => {
    console.log(myName)
}

console.log('Milana')

//Taip pat ne visos funkcijos turi parametrus – sukurkite funkciją, kuri sugeneruos ir grąžins random skaičių tarp 1 ir 5.

function getRandomNum () {
    return Math.floor(Math.random() * 5) + 1;
}
console.log (getRandomNum())

//Sukurkite funkciją, kuri paims du parametrus – vardą ir pavardę, tada grąžins sumą šių žodžių ilgių (t.y. "Petras", "Slekys" => 12).

let myName = 'Milana'
console.log(myName.length)
let mySurname = 'Kamziuk'
console.log(mySurname.length)

function showNameLength () {
    return myName.length + mySurname.length
}
console.log(showNameLength())

//Sukurkite funkciją, kuri pagal paduotą skaičių grąžins abėcėlės raidę (pvz. 0 => A; 1 => B; 2 => C ir t.t.). 

function getLetterIndex (index) {
    let letter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
    return letter[index]
}
console.log(getLetterIndex(1))

//Sukurkite funkciją, kuri paims tris parametrus (n1, n2, operator). Operator gali būti sum, sub, div, multi (matematinės reikšmės – sudėti, atimti, padalinti, padauginti). n1 ir n2 bus skaičiai. Turite grąžinti atsakymą, kur n1 ir n2 atlikta matematinė operacija (pvz.: 5, 1, "sub" => 4; 6, 3, "sum" => 9 ir t.t.).

function calc (n1, n2, operator) {
    if (operator == 'sum') {
        return n1 + n2
    }
    if (operator == 'div') {
        return n1 / n2
    }
    if (operator == 'sub') {
        return n1-n2
    }
    if (operator == 'multi') {
        return n1 * n2
    }
}
console.log (calc(7,10,'sum'))


//Sukurkite dvi funkcijas: viena grąžina random skaičių nuo 1 iki 10 (įskaitant), kita – gautą skaičių pakelia kvadratu. Iškviesk abi funkcijas vienoje eilutėje (pvz. squareNum(generateRandomNumber()) => 1...100).

function getNum () {
    return Math.floor(Math.random() * 10) + 1;
}
function squareNum (getNum) {
    return Math.pow(getNum, 2);
}

console.log(getNum())
console.log(squareNum(getNum()))

console.groupEnd();

console.groupCollapsed ('8 pamoka CAO. Anoniminės ir Arrow funkcijos')

//.................Anoniminės ir Arrow funkcijos: Užduotys........................

//https://codeacademy.online/dashboard/modules/js2/m0nRQdeuz7KDDsc10Rn2/121274369

//Ne visos funkcijos turi return statement (nors dažniausiai taip yra). Sukurkite funkciją, į kurią paduosite vardą ir parodysite panaudodami alert.

let myName1 = function () {
    console.log(myName1)
}
console.log('Milana')


//Taip pat ne visos funkcijos turi parametrus – sukurkite funkciją, kuri sugeneruos ir grąžins random skaičių tarp 1 ir 5.

/*function getRandomNum (min, max) { 
    return Math.floor(Math.random() * 5) + 1;
}
console.log(getRandomNum())*/

let getRandomNum2 = (min, max) => Math.floor(Math.random() * 5) + 1;
console.log(getRandomNum2())

//Sukurkite funkciją, kuri paims du parametrus – vardą ir pavardę, tada grąžins sumą šių žodžių ilgių (t.y. "Petras", "Slekys" => 12).

let myName2 = 'Milana';
let mySurname2 = 'Kamziuk';
let showNameLength2 = () => console.log(myName2.length + mySurname2.length);
(showNameLength2())


//Sukurkite funkciją, kuri pagal paduotą skaičių grąžins abėcėlės raidę (pvz. 0 => A; 1 => B; 2 => C ir t.t.). 
//Hint: Jums reikės pirma sukurti Array su visomis raidėmis (["A", "B", C",..."Z"]), o funkcija paims pagal indeksą atitinkamą raidę. Jei primiršot array – pasižiūrėkite čia.

let getLetterIndex2 = index => {
    let letter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'] 
    return letter[index]}
console.log(getLetterIndex2('1'))



//Sukurkite funkciją, kuri paims tris parametrus (n1, n2, operator). Operator gali būti sum, sub, div, multi (matematinės reikšmės – sudėti, atimti, padalinti, padauginti). n1 ir n2 bus skaičiai. Turite grąžinti atsakymą, kur n1 ir n2 atlikta matematinė operacija (pvz.: 5, 1, "sub" => 4; 6, 3, "sum" => 9 ir t.t.).
//Hint: Reikės funkcijoje naudoti if...else arba switch.

/*function calculate (n1, n2, operator) {
    if (operator == 'sum') { return n1 + n2}
    if (operator == 'div') {return n1 / n2}
    if (operator == 'sub') {return n1 - n2}
    if (operator == 'multi') {return n1 * n2}
}
console.log(calculate (1, 1, 'sum'))*/

let calculate = (n1, n2, operator) => {
    if (operator == 'sum') { return n1 + n2}
    if (operator == 'div') {return n1 / n2}
    if (operator == 'sub') {return n1 - n2}
    if (operator == 'multi') {return n1 * n2}
}

console.log(calculate (5, 1, 'sum'))

//Sukurkite dvi funkcijas: viena grąžina random skaičių nuo 1 iki 10 (įskaitant), kita – gautą skaičių pakelia kvadratu. Iškviesk abi funkcijas vienoje eilutėje (pvz. squareNum(generateRandomNumber()) => 1...100).

let getRandNum = () => Math.floor(Math.random() * 5) + 1;
console.log(getRandNum())

let squarNum = (getRandNum) => Math.pow(getRandNum, 2);
console.log(squarNum(getRandNum()))

console.groupEnd()


console.groupCollapsed ('Trecia uzduotis. Filter metodas')

/*3. Tęsiant darbą su ankstesniu masyvu atlikti šias užduotis naudojant filter metodą. Kiekvienai užduočiai sukurti naują kintamąjį, jame išsaugoti reikšmę, kurią grąžina filter metodas, ir šį kintamąjį išvesti į konsolę:*/

let arr1 = [4, 5, -5556, 155, 640, '15x', 6789, -5564, 478, 654, 'obuolys', 789, -51, 55, -222, 0, -357, -56, 'trylika', 444, 7778, 4154, 4751];
console.log(arr1)

//3.1. Gauti tik teigiamus skaičius.
let positiveNums = arr1.filter(num => num > 0)
console.log(positiveNums)

// 3.2. Gauti tik neigiamus skaičius.
let negativeNums = arr1.filter(num => num < 0)
console.log(negativeNums)

// 3.3. Gauti tik skaičius, kurie dalinasi iš 2.
let divNums = arr1.filter(num => num % 2 == 0)
console.log(divNums)

// 3.4. Gauti tik skaičius, kurie dalinasi iš 3.
let divNums3 = arr1.filter(num => num % 3 == 0)
console.log(divNums3)

// 3.5. Gauti tik skaičius, kurie dalinasi iš 5.
let divNums5 = arr1.filter(num => num % 5 == 0)
console.log(divNums5)

// 3.6. Gauti tik skaičius, kurie dalinasi iš 11.
let divNums11 = arr1.filter(num => num % 11 == 0)
console.log(divNums11)

// 3.7. Gauti tik skaičius, kurie dalinasi iš 31.
let divNums31 = arr1.filter(num => num % 31 == 0)
console.log(divNums31)

// 3.8. Gauti tik skaičius, kurie dalinasi iš 2 ir iš 3.
let divNumsx = arr1.filter(num => num % 2 == 0 && num % 3 == 0)
console.log(divNumsx)

// 3.9. Gauti tik skaičius, kurie dalinasi iš 3 ir iš 7.
let divNumsy = arr1.filter(num => num % 3 == 0 && num % 5 == 0)
console.log(divNumsy)

// 3.10. Gauti tik skaičius, kurie dalinasi iš 5 ir iš 9.
let divNumsa = arr1.filter(num => num % 5 == 0 && num % 9 == 0)
console.log(divNumsa)

// 3.11. Gauti tik skaičius, kurie dalinasi iš 5 ir iš 11.
let divNumsb = arr1.filter(num => num % 5 == 0 && num % 11 == 0)
console.log(divNumsb)

// 3.12. Gauti tik skaičius, kurie dalinasi iš 2, 8 ir 12.
let divNumsc = arr1.filter(num => num % 2 == 0 && num % 8 == 0 && num % 12 == 0)
console.log(divNumsc)

// 3.13. Gauti tik skaičius, kurie dalinasi iš 2 arba iš 3.
let divNumsd = arr1.filter(num => num % 2 || num % 3 == 0)
console.log(divNumsd)

// 3.14. Gauti tik skaičius, kurie dalinasi iš 3 arba iš 5.
let divNumse = arr1.filter(num => num % 3 || num % 5 == 0)
console.log(divNumse)

// 3.15. Gauti tik skaičius, kurie dalinasi iš 5 arba iš 6.
let divNumsf = arr1.filter(num => num % 5 || num % 6 == 0)
console.log(divNumsf)

// 3.16. Gauti tik skaičius, kurie dalinasi iš 7 arba iš 8.
let divNumsg = arr1.filter(num => num % 7 || num % 8 == 0)
console.log(divNumsg)

// 3.17. Gauti tik skaičius, kurie dalinasi iš 9 arba iš 13.
let divNumsh = arr1.filter(num => num % 9 || num % 13 == 0)
console.log(divNumsh)

// 3.18. Gauti tik skaičius, kurie dalinasi iš 2, 3 arba iš 5.
let divNumsi = arr1.filter(num => num % 2 || num % 3 || num % 5 == 0)
console.log(divNumsi)

// 3.19. Gauti tik skaičius, kurie dalinasi iš 5, 7 arba iš 9.
let divNumsj = arr1.filter(num => num % 5 || num % 7 || num % 9 == 0)
console.log(divNumsj)

// 3.20. Gauti tik skaičius, kurie dalinasi iš 7, 8 arba iš 11
let divNumsk = arr1.filter(num => num % 7 || num % 8 || num % 11 == 0)
console.log(divNumsk)

// 3.21. Gauti tik skaičius, kurie dalinasi iš 9, 12 arba iš 13.
let divNumsl = arr1.filter(num => num % 9 || num % 13 || num % 12 == 0)
console.log(divNumsl)

// 3.22. Gauti tik skaičius, kurie yra didesni už 100.
let greaterNum = arr1.filter(num => num > 100)
console.log(greaterNum)

// 3.23. Gauti tik skaičius, kurie yra didesni už 555.
let greaterNumA = arr1.filter(num => num > 555)
console.log(greaterNumA)

// 3.24. Gauti tik skaičius, kurie yra didesni arba lygūs 888.
let greaterNumB = arr1.filter(num => num >= 888 )
console.log(greaterNumB)

// 3.25. Gauti tik skaičius, kurie yra didesni arba lygūs 6789.
let greaterNumC = arr1.filter(num => num >= 6789)
console.log(greaterNumC)

// 3.26. Gauti tik skaičius, kurie yra mažesni už 50.
let lessNum = arr1.filter(num => num < 50)
console.log(lessNum)

// 3.27. Gauti tik skaičius, kurie yra mažesni už 1000.
let lessNumA = arr1.filter(num => num < 1000)
console.log(lessNumA)

// 3.28. Gauti tik skaičius, kurie yra mažesni arba lygūs -1.
let lessNumB = arr1.filter(num => num <= -1)
console.log(lessNumB)

// 3.29. Gauti tik skaičius, kurie yra mažesni arba lygūs -5564.
let lessNumC = arr1.filter(num => num <= -5564)
console.log(lessNumC)

// 3.30. Gauti tik skaičius, kurie yra mažesni už 1000 ir didesni už 500.
let lessNumD = arr1.filter(num => num < 1000 && num > 500)
console.log(lessNumD)

// 3.31. Gauti tik skaičius, kurie yra mažesni už 100 ir didesni už 0.
let lessNumE = arr1.filter(num  => num < 100 && num > 0)
console.log(lessNumE)

// 3.32. Gauti tik skaičius, kurie yra mažesni už 0 ir didesni už -50.
let lessNumF = arr1.filter(num => num < 0 && num > -50)
console.log(lessNumF)

// 3.33. Gauti tik skaičius, kurie yra mažesni arba lygūs 0 ir didesni už -100.
let lessNumG = arr1.filter(num => num <= 0 && num > -100)
console.log(lessNumG)

// 3.34. Gauti tik skaičius, kurie yra didesni arba lygūs 0 ir mažesni už 55.
let lessNumH = arr1.filter(num => num >= 0 && num < 55)
console.log(lessNumH)

// 3.35. Gauti tik skaičius, kurie yra didesni arba lygūs 444 ir mažesni arba lygūs 654.
let lessNumI = arr1.filter(num => num >= 444 && num <= 654)
console.log(lessNumI)

// 3.36. Gauti tik teigiamus skaičius, kurie dalinasi iš 2.
let newNum = arr1.filter(num => num > 0 && num % 2 == 0)
console.log(newNum)

// 3.37. Gauti tik teigiamus skaičius, kurie dalinasi iš 3.
let newNumA = arr1.filter(num => num > 0 && num % 3 == 0)
console.log(newNumA)

// 3.38. Gauti tik neigiamus skaičius, kurie dalinasi iš 4.
let newNumB = arr1.filter(num => num < 0 && num % 4 ==0)
console.log(newNumB)

// 3.39. Gauti tik neigiamus skaičius, kurie dalinasi iš 111.
let newNumC = arr1.filter(num => num < 0 && num % 111 == 0)
console.log(newNumC)

// 3.40. Gauti tik skaičius, kurie yra didesni už 500 ir kurie dalinasi iš 2.
let newNumD = arr1.filter(num => num > 500 && num % 2 == 0)
console.log(newNumD)

// 3.41. Gauti tik skaičius, kurie yra didesni už 1000 ir kurie dalinasi iš 3.
let newNumE = arr1.filter(num => num > 1000 && num % 3 == 0)
console.log(newNumE)

// 3.42. Gauti tik skaičius, kurie yra mažesni už 1000 ir kurie dalinasi iš 9.
let newNumF = arr1.filter(num => num < 1000 && num % 9 == 0)
console.log(newNumF)

// 3.43. Gauti tik skaičius, kurie yra mažesni už 500 ir kurie dalinasi iš 2.
let newNumG = arr1.filter(num => num < 500 && num % 2 == 0)
console.log(newNumG)

// 3.44. Gauti tik skaičius, kurie yra didesni arba lygūs 33 ir kurie dalinasi iš 3.
let newNumH = arr1.filter(num => num >= 33 && num % 3 == 0)
console.log(newNumH)

// 3.45. Gauti tik skaičius, kurie yra didesni arba lygūs 444 ir kurie dalinasi iš 12.
let newNumI = arr1.filter(num => num >= 444 && num % 12 == 0)
console.log(newNumI)

// 3.46. Gauti tik skaičius, kurie yra mažesni arba lygūs 155 ir kurie dalinasi iš 5.
let newNumJ = arr1.filter(num => num <= 155 && num % 5 == 0)
console.log(newNumJ)

// 3.47. Gauti tik skaičius, kurie yra mažesni arba lygūs -333 ir kurie dalinasi iš 9.
let newNumK = arr1.filter(num => num <= -333 && num % 9 == 0)
console.log(newNumK)

// 3.48. Gauti tik skaičius, kurie yra didesni už 100, mažesni už 500 ir kurie dalinasi iš 5.
let newNumL = arr1.filter(num => num > 100 && num < 500 && num % 5 == 0)
console.log(newNumL)

// 3.49. Gauti tik skaičius, kurie yra didesni arba lygūs 888, mažesni už 1000 ir kurie dalinasi iš 2.
let newNumM = arr1.filter(num => num >= 888 && num < 1000 && num % 2 == 0)
console.log(newNumM)

// 3.50. Gauti tik skaičius, kurie yra mažesni arba lygūs 888, didesni arba lygūs -333, dalinasi iš 3 ir nėra nulis.
let newNumN = arr1.filter(num => num <= 888 && num >= -333 && num % 3 == 0 && num !==0)
console.log(newNumN)

console.groupEnd()

console.groupCollapsed ('Ketvirta uzduotis. Filter metodas stringams')
// .........................Ketvirta uzduotis........................

// 3.51. Gauti tik skaičius.
let onlyNums = arr1.filter(Number.isInteger);
console.log(onlyNums);

// 3.52. Gauti tik tekstus (string).
let onlyWords = arr1.filter (element => typeof element == "string")
console.log(onlyWords)

// 3.53. Gauti tik tekstus (string), kurie turi daugiau nei 5 simbolius.
let words = arr1.filter(element => typeof element === 'string' && element.length > 5)
console.log(words)

// 3.54. Gauti tik tekstus (string), kurie turi mažiau arba lygiai 5 simbolius.
let task354 = arr1.filter(element => typeof element === 'string' && element.length <= 5)
console.log(task354)

// 3.55. Gauti tik tekstus (string), kurie turi mažiau nei 7 simbolius.
let task355 = arr1.filter(element => typeof element === 'string' && element.length < 7)
console.log(task355)

// 3.56. Gauti tik tekstus (string), kurie turi raidę t.
let task356 = arr1.filter(element => typeof element === 'string' && element.includes('t'))
console.log(task356)

// 3.57. Gauti tik tekstus (string), kurie turi raidę y.
let task357 = arr1.filter(element => typeof element === 'string' && element.includes('y'))
console.log(task357)

// 3.58. Gauti tik tekstus (string), kurie turi raides e arba a.
let task358 = arr1.filter(element => typeof element === 'string' && element.includes('a'|| 'e'))
console.log(task358)

// 3.59. Gauti tik tekstus (string), kurie turi raides t ir i.
let task359 = arr1.filter(element => typeof element === 'string' && element.includes('t' && 'i'))
console.log(task359)

// 3.60. Gauti tik tekstus (string), kurie turi raide t, bet neturi raidės k.
let task360 = arr1.filter(element => typeof element === 'string' && element.includes('t') && !element.includes('k'))
console.log(task360)

// 3.61. Gauti tik tekstus (string), kurie turi raide a, bet neturi raidės s.
let task361 = arr1.filter(element => typeof element === 'string' && element.includes('a') && !element.includes('s'))
console.log(task361)

// 3.62. Gauti tik tekstus (string), kurie turi daugiau nei vieną raidę t.
let task362 = arr.filter(item => {
    if (isNaN(item)) {let wordLetters = item.split('')
      return wordLetters.length > 2}});
  console.log(task362);

      //PIRMAS VARIANTAS 
      /*let wordLetters = item.split(''); 
      let sameLettersArray = wordLetters.filter(letter => letter === 't');
      if (sameLettersArray.length > 1) {return item;} */
  
      // ANTRAS VARIANTAS
      /*let letterCount = 0
      for (let i = 0; i < item.length; i++) {
      let letter = item[i]
      if (letter === 't') {letterCount++}
      if (letterCount > 1) {return}}
      return letterCount > 1 */

// 3.63. Gauti tik tekstus (string), kurie turi raidžių junginį st.
let task363 = arr1.filter(element => typeof element === 'string' && element.includes('st'))
console.log(task363)

  /*let task363 = arr.filter(item => isNaN(item) && item.includes('st'));
  console.log(task363);*/

// 3.64. Gauti tik tekstus (string), kurie turi raidžių junginį nd.
let task364 = arr1.filter(item => isNaN(item) && item.includes('nd'))
console.log(task364)

// 3.65. Gauti tik tekstus (string), kurie neturi raidės s.
let task365 = arr1.filter(item => isNaN(item) && !item.includes ('s'))
console.log(task365)

// 3.66. Gauti tik tekstus (string), kurie neturi raidės t.
let task366 = arr1.filter(item => isNaN(item) && !item.includes('t'))
console.log(task366)

// 3.67. Gauti tik tekstus (string), kurie neturi raidės r ir l.
let task367 = arr1.filter(item => isNaN(item) && !item.includes('r') && !item.includes('l'))
console.log(task367)

// 3.68. Gauti tik tekstus (string), kurie prasideda skaičiumi.
let task368 = arr1.filter(item => isNaN(item) && !isNaN(item[0]));
console.log(task368);

// 3.69. Gauti tik tekstus (string), kurie prasideda raide s.
let task369 = arr1.filter(item => isNaN(item) && item.startsWith('s'))
console.log(task369)

// 3.70. Gauti tik tekstus (string), kurie prasideda raide o.
let task370 = arr1.filter(item => isNaN(item) && item.startsWith('o'))
console.log(task370)

// 3.70. Gauti tik tekstus (string), kurie baigiasi raide d.
let task371 = arr1.filter(item => isNaN(item) && item.endsWith('d'))
console.log(task371) 

// 3.71. Gauti tik tekstus (string), kurie baigiasi raide s.
let task372 = arr1.filter(item => isNaN(item) && item.endsWith('s'))
console.log(task372) 

// 3.72. Gauti tik tekstus (string), kurie turi daugiau nei 4 simbolius ir turi raidę o.
let task373 = arr1.filter(item => isNaN(item) && item.length > 4 && item.includes('o'))
console.log(task373)

// 3.73. Gauti tik tekstus (string), kurie turi daugiau arba lygiai 5 simbolius ir turi raidę a.
let task3731 = arr1.filter(item => isNaN(item) && item.length >= 5 && item.includes('a'))
console.log(task3731)

// 3.74. Gauti tik tekstus (string), kurie turi porinį simbolių skaičių.
let task374 = arr.filter(item => isNaN(item) && item.length % 2 === 0);
console.log(task374);

// 3.75. Gauti tik tekstus (string), kurie turi neporinį simbolių skaičių ir turi raidę s.
let task375 = arr1.filter(item => isNaN(item) && !item.length === 0 && item.includes('s'))
console.log(task374)

// 3.76. Gauti tik tekstus (string), kurių trečias simbolis yra a.
let task376 = arr1.filter(item => isNaN(item) && item[2] === 'a');
console.log(task376);

// 3.77. Gauti tik tekstus (string), kurių ketvirtas simbolis yra l.
let task377 = arr1.filter(item => isNaN(item) && item[3] === 'l');
console.log(task376);

// 3.78. Gauti tik tekstus (string), kurių penktas simbolis nėra t ir kurie turi daugiau simbolių nei 4.
let task378 = arr1.filter(item => isNaN(item) && !item[4] === 't' && item.length > 4)
console.log(task378)

// 3.79. Gauti tik tekstus (string), kurių pirmas simbolis nėra e, kurie turi mažiau simbolių nei 6 ir kurie neprasideda skaičiumi.
let task379 = arr1.filter(item => isNaN(item) && !item.startsWith('e') && item.length < 6 && isNaN(item[0]))
console.log(task379)
// arba:
// let task379 = arr.filter(item => isNaN(item) && item[0] !== 'e' && item.length < 6 && isNaN(item[0]));
// console.log(task379);

console.groupEnd()

console.groupCollapsed ('Pamoka 9 CAO.Funkcijos')

//............................Pamoka 9.Funkcijos praktika.......................

// m/s į km/s 
// Parašykite funkciją convertMStoKMH, kuri konvertuoja greitį iš metrų per sekundę į kilometrus per valandą.

const convertMStoKMH = (speedMS) => speedMS * 3.6;
console.log(convertMStoKMH(10))

// Paprastas skaičių palyginimas
// Parašykite funkciją compareNumber, kuri palygina du skaičius ir grąžina didesnįjį iš jų. Jei skaičiai yra lygūs, funkcija turėtų grąžinti "lygūs". Įsitikinkite, kad abu argumentai yra skaičiai; jei ne, grąžinkite klaidos pranešimą.

const compareNumber = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return "Error: most arguments must be numbers"}
    if (a === b) {
        return "equal"}
    return a > b ? a : b
}
console.log(compareNumber(4, 7))
console.log(compareNumber(4, 7))
console.log(compareNumber(5, 5))
console.log(compareNumber("5", 5))
 

// Keliamieji metai?
// Parašykite funkciją isLeapYear, kuri priima year ir pasako ar metai yra keliamieji. Funkcija turi grąžinti true, jei metai keliamieji, ir false priešingu atveju.
const isLeapYear = (year) => (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
console.log(isLeapYear(2020));
console.log(isLeapYear(2021));
console.log(isLeapYear(2024));
 

// Didžiausias masvyo elementas
// Parašykite funkciją findMaxInArray, kuri suskaičiuoja ir grąžina visų elementų sumą masyve. Galime daryti prielaidą, kad visi array elementai yra skaičiai.

let firstArr =[1, 3, 2, 5, 4]
let secondArr = [-1, -3, -2, -5, -4]

const findMaxInArray2 = (arr) => {let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
};

console.log(findMaxInArray2([1, 3, 2, 5, 4]));
console.log(findMaxInArray2([-1, -3, -2, -5, -4])); 

// Masyvo elementų suma
// Parašykite funkciją sumArray, kuri suskaičiuoja ir grąžina visų elementų sumą masyve. Galime daryti prielaidą, kad visi array elementai yra skaičiai.

let nextArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
let sum = 0
let findMaxInArray = nextArray.map(num => sum += num)
console.log(sum)

// Lygūs masyvai?
// Sukurkite funkciją arMasyvaiLygūs, kuri palygina du masyvus ir grąžina true, jei jie yra identiški, kitu atveju - false.
//mano:
let Arr1 = [1,2,3]
let Arr2 = [1,2,4]

let areArraysEqual = (Arr1, Arr2) => {
    if (Arr1 === Arr2) return true
    else {return false}}
console.log(areArraysEqual(Arr1, Arr2));
//Atsakymas is CAO:
    /*const areArraysEqual2 = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;}}
    return true;};
    console.log(areArraysEqual2(Arr1, Arr2));*/

// Eilutės apvertimas
// Sukurkite funkciją reverseString, kuri apverčia eilutę be jokių išorinių funkcijų ar metodų.
//Atsakymas is CAO:
const reverseString = (str) => {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;};
console.log(reverseString("Labas")); 

// Palindromas
// Parašykite funkciją arPalindromas, kuri tikrina, ar žodis yra palindromas. Funkcija turi grąžinti true, jei žodis yra palindromas, priešingu ateju  - false.
// Hint: Palindromas - (gr. palindromos - bėgantis atgal, grįžtantis): 1. žodis, eilėraštis arba frazė, skaitomi iš kairės į dešinę ir iš dešinės į kairę, išlaikantys tą pačią prasmę, pvz., lietuvių k. žodis savas.

// Atsakymas is CAO:
const isPalindrome = (word) => {
    for (let i = 0; i < word.length / 2; i++) {
        if (word[i] !== word[word.length - 1 - i]) {
            return false;}}
    return true;
};

console.log(isPalindrome("savas")); // true
console.log(isPalindrome("svetimas")); // false

// Skaičių piramidė
// Sukurkite funkciją printPyramid, kuri spausdina skaičių piramidę iki nurodyto aukščio. Pavyzdžiui, 3 auktštų piramidė atrodo taip:
// 1
// 22
// 333
// Atsakymas is CAO:

const printPyramid = (height) => {
    for (let i = 1; i <= height; i++) {
        let line = '';
        for (let j = 0; j < i; j++) {
            line += i;}
        console.log(line);}};

console.groupEnd()

