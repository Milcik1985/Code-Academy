console.groupCollapsed('Objektai')
//UŽDUOTIS
//0. Sukurti 3 objektus: keturkampis1, keturkampis2 ir keturkampis3.
 const keturkampis1 = {}
 const keturkampis2 = {}
 const keturkampis3 = {}

 
  //1. Visiems keturkampių objektams pridėti plotį ir aukštį. 
 keturkampis1.height = 3
 keturkampis1.width = 5
 console.log(keturkampis1)
 keturkampis2.height = 2
 keturkampis2.width = 4
 console.log(keturkampis2)
 keturkampis3.height = 6
 keturkampis3.width = 8
 console.log(keturkampis3)

  //2. Kiekvienam keturkampio objektui pridėti po funkciją, kuri skaičiuoja plotą.
 keturkampis1.getArea = function () {
     let Area = this.height * this.width
     return `Area is ${Area}`}
 console.log(keturkampis1.getArea())

 keturkampis2.getArea = function () {
     let Area = this.height * this.width
     return `Area is ${Area}`}
 console.log(keturkampis2.getArea())

 keturkampis3.getArea = function () {
     let Area = this.height * this.width
     return `Area is ${Area}`}
 console.log(keturkampis3.getArea())

  //3. Kiekvienam keturkampio objektui pridėti po funkciją, kuri skaičiuoja perimetrą.
 keturkampis1.getPerimeter = function () {
     let Perimeter = (this.height + this.width) * 2
     return `Perimeter is ${Perimeter}`}
 console.log(keturkampis1.getPerimeter())

 keturkampis2.getPerimeter = function () {
     let Perimeter = (this.height + this.width) * 2
     return `Perimeter is ${Perimeter}`}
 console.log(keturkampis2.getPerimeter())

 keturkampis3.getPerimeter = function () {
     let Perimeter = (this.height + this.width) * 2
     return `Perimeter is ${Perimeter}`}
 console.log(keturkampis3.getPerimeter())

  //4. Į konsolę išvesti visų keturkampių plotą ir perimetrą.
 const stačiakampiai = [keturkampis1, keturkampis2, keturkampis3];
 for (let i = 0; i < stačiakampiai.length; i++) {
     const stačiakampis = stačiakampiai[i];
     console.log(stačiakampis.getArea());
     console.log(stačiakampis.getPerimeter())}

  //5.1. Antram keturkampiui pridėti spalvą.
 keturkampis2.color = 

 // 5.2. Antram keturkampiui pridėti metodą, kuris leis paskaičiuoti pusės keturkampio plotą.
 keturkampis2.getHalfArea = function () {
     let haflArea = this.height * this.width / 2
     return `half area is: ${haflArea}`}
     console.log(keturkampis2.getHalfArea())
 
 // 5.3 Trečiam keturkampiui pridėti metodą, kuris grąžins tekstą „Keturkampio plotis: x, keturkampio aukštis: y"
 keturkampis3.showText = function () {
     let x = keturkampis3.height;
     let y = keturkampis3.width;
     return `Keturkampio plotis: ${x}, keturkampio aukštis: ${y}`}
 
  //5.4 Į konsolę išvesti šiuos naujus duomenis.
 console.log(keturkampis3.showText())
 
  //6.1. Visų keturkampių objektuose sukurti funkciją, kuri grąžina pilną keturkampių informacijos teksta: „Keturkampio plotis: x, keturkampio ilgis: y, keturkampio perimetras: z, keturkampio plotas: y."
 //6.2. Į konsolę išvesti šiuos naujus duomenis.

//Lektoriaus sprendimas:

const keturkampis11 = {
    height: 12,
    width: 10,
    getPerimeter: function() {
      const perimeter = (this.height + this.width) * 2
      return perimeter
    },
    getArea: function() {
      const area = this.height * this.width
      return area
    },
    getFullInfo: function() {
      // const infoText = `Keturkampio plotis: ${this.width}, keturkampio ilgis: ${this.height}, keturkampio perimetras: ${this.getPerimeter()}, keturkampio plotas: ${this.getArea()}.`
  
      const width = this.width
      const height = this.height
      const perimeter = this.getPerimeter()
      const area = this.getArea()
  
      const infoText = `Keturkampio plotis: ${width}, keturkampio ilgis: ${height}, keturkampio perimetras: ${perimeter}, keturkampio plotas: ${area}.`
      return infoText
    }
  }
  
  const keturkampis21 = {
    height: 300,
    width: 17,
    color: 'red',
    getPerimeter: function() {
      const perimeter = (this.height + this.width) * 2
      return perimeter
    },
    getArea: function() {
      const area = this.height * this.width
      return area
    },
    getHalfArea: function() {
      // const halfArea = this.height * this.width / 2
      const halfArea = this.getArea() / 2
      return halfArea
    },
    getFullInfo: function() {
      const width = this.width
      const height = this.height
      const perimeter = this.getPerimeter()
      const area = this.getArea()
  
      const infoText = `Keturkampio plotis: ${width}, keturkampio ilgis: ${height}, keturkampio perimetras: ${perimeter}, keturkampio plotas: ${area}.`
      return infoText
    }
  }
  
  const keturkampis31 = {
    height: 27,
    width: 246,
    getPerimeter: function() {
      const perimeter = (this.height + this.width) * 2
      return perimeter
    },
    getArea: function() {
      const area = this.height * this.width
      return area
    },
    getInfo: function() {
      // const area = this.height * this.width
      const area = this.getArea()
      const perimeter = this.getPerimeter()
      const infoText = `Keturkampio plotis: ${area}, keturkampio aukštis: ${perimeter}`
  
      return infoText
    },
    getFullInfo: function() {
      const width = this.width
      const height = this.height
      const perimeter = this.getPerimeter()
      const area = this.getArea()
  
      const infoText = `Keturkampio plotis: ${width}, keturkampio ilgis: ${height}, keturkampio perimetras: ${perimeter}, keturkampio plotas: ${area}.`
      return infoText
    }
  }
  
  console.log(keturkampis11.getPerimeter())
  console.log(keturkampis11.getArea())
  console.log(keturkampis11.getFullInfo())
  
  console.log(keturkampis21.getPerimeter())
  console.log(keturkampis21.getArea())
  console.log(keturkampis21.color)
  console.log(keturkampis21.getHalfArea())
  console.log(keturkampis21.getFullInfo())
  
  console.log(keturkampis31.getPerimeter())
  console.log(keturkampis31.getArea())
  console.log(keturkampis31.getInfo())
  console.log(keturkampis31.getFullInfo())

console.groupEnd()


