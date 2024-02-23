//Parašykite funkciją convertMStoKMH, kuri konvertuoja greitį iš metrų per sekundę į kilometrus per valandą.

const convertMStoKMH = (ms) => ms * 3.6

console.log(convertMStoKMH(10))

const sum1 = (a, b) => a + b

console.log(sum1(5,2))

//Parašykite funkciją compareNumber, kuri palygina du skaičius ir grąžina didesnįjį iš jų. Jei skaičiai yra lygūs, funkcija turėtų grąžinti "lygūs". Įsitikinkite, kad abu argumentai yra skaičiai; jei ne, grąžinkite klaidos pranešimą.

const compareNumber = (a, b) => {
    if (a > b) {
        return a
    }
    if (a < b) {
        return b
    }
    if (a===b) {
        return `equal`
    }
    else {`a ir b turi buti skaiciai`}
}

console.log(compareNumber('5',6))

//Parašykite funkciją isLeapYear, kuri priima year ir pasako ar metai yra keliamieji. Funkcija turi grąžinti true, jei metai keliamieji, ir false priešingu atveju.

const isLeapYear = (year) => year % 4 === 0 ? true : false

console.log(isLeapYear(2025))

//Parašykite funkciją findMaxInArray, kuri ras ir grąžins didžiausią elementą masyve. Galime daryti prielaidą, kad visi array elementai yra skaičiai.

const Arr = [1,2,3,4,5,6,7,8,9,11]

const findMaxInArray = (max) => Math.max(...Arr)

console.log (findMaxInArray(Arr))

//Parašykite funkciją sumArray, kuri suskaičiuoja ir grąžina visų elementų sumą masyve. Kaip ir užduotyje prieš tai, galime daryti prielaidą, kad visi array elementai yra skaičiai.
