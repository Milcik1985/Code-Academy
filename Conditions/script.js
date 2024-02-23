/*let value = prompt ('Kokia yra mažiausia pasaulyje šalis?', '');

if (value == "Vatikanas") {
    console.log ('Teisingai')
}
else {
    console.log ("Rimtai? Taigi Vatikanas!")
} */


/*let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}

let message = (login == 'Employee') ? 'Hello' :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  ''; */

/*let legalAge = 20
let clientAge = 25

let value = prompt ('What is Your age?')*/


/*if (value < clientAge) {
    alert ('Your age is not legal')
}

if (value >= clientAge) {
    alert ('Your age is legal')
} */

/*const clientAge = 16;
const legalAge = 20;
if (clientAge >= legalAge) {
  console.log(`Pasiekęs ${legalAge}`);
} else {
  console.log(`Nepasiekęs ${legalAge}`);
} */


/*console.log ('Milana' .length)

let 

const myName = 'Milana'


if (myName .length > 6) {
  console.log ('Ilgas vardas')
} */

/*let myAge = 38

if (myAge >=1 && myAge <=18) {
  alert ('Child')
}
if (myAge >18 && myAge <100) {
  alert ('Adult')
}
else if (myAge>=100) {
  alert ('Invalid age')
}

const age = 30;
if (age > 100 || age < 0) {
  console.log('Invalid age');
} else if (age < 18) {
  console.log('Child');
} else {
  console.log('Adult')
} */



/*let car = 'Mini'

if (car === 'VW' || car === 'Audi' || car === 'Bentley' || car === 'Bugatti' || car === 'Lamborghini' || car === 'Porsche') {
  alert ('VW group')
}

else if (car === 'BMW' || car === 'Mini' || car === 'Rolls-Royce') {
  alert ('BMW group')
}

const car = "BMW";
if (car === 'VW' || car === 'Audi' || car === 'Bentley' || car === 'Bugatti' || car === 'Lamborghini' || car === 'Porsche') {
  console.log('VW Group');
} else if (car === 'BMW' || car === 'Mini' || car === 'Rolls-Royce') {
  console.log('BMW Group');
} else {
  console.log('Nei vienam');
}*/

/*let myName = 'Milana'

console.log (myName.length)

if (myName.length < 5 ) {
  alert ('short name')
}
else {
  alert ('Long Name')
  


  alert (myName.length < 5 ? 'short name' : 'Long Name')
}*/

/*
let clientAge = 35
let legalAge = 18

if (clientAge >= legalAge) {
  alert ('Can Drive')
}

else {alert ('Cant\'t Drive')} 

alert (clientAge >= legalAge ? 'Can Drive' : 'Cant\'t Drive')



clientAge >= legalAge ? console.log("Can drive") : console.log("Can't drive"); */

/*let clientAge = 17
let legalAge = 18

clientAge < 0 || clientAge > 120 ? alert ('Invalid Age') : clientAge >= legalAge ? alert ('Can drive') : alert ('Can\'t drive') */

/*

let phone = 'iPhone'

let isIphoneUser = phone ==='iPhone' */


/*
Su !
if (!(age >= 14 && age <= 90))

Be šauktuko
if (age < 14 || age > 90)
*/

/*switch (browser) {
  case 'Edge':
    alert( "RIP Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Šios naršykles palaikomos' );
    break;

  default:
    alert( 'Tikimės, kad šis puslapis atrodys puikiai!' );
} */


/*
let browser = 'mozila'

if (browser == 'Edge') {
  alert ('RIP Edge!')
}
if (browser == 'chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera') {
  alert ('Šios naršykles palaikomos')
}

else {
  alert ('Tikimės, kad šis puslapis atrodys puikiai!')
}
*/


/*
if(browser == 'Edge') {
  alert("RIP Edge!");
} else if (browser == 'Chrome'
 || browser == 'Firefox'
 || browser == 'Safari'
 || browser == 'Opera') {
  alert( 'Šios naršykles palaikomos' );
} else {
  alert( 'Tikimės, kad šis puslapis atrodys puikiai!' );
}
*/

/*let a = +prompt ('a?' , '');

switch (a) {
  case 0:
    alert ('0');
    break;
    case 1:
      alert ('1');
      break;
      case 2:
        case 3:
        alert ('2,3');
        break;
} */

/*let car='Audi'

switch (car) {

  case 'VW':
  case 'Audi':
  case 'Bentley':
  case 'Bugatti':
  case 'Lamborghini':
  case 'Porsche':
  alert ('VW group')

  case 'BMW':
  case 'Mini':
  case 'Rolls-Royce':
  alert ('BMW group')

  default:
    alert ('nei vienam')

} */

/*let a = +prompt('a?', '');

if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}

if (a == 2 || a == 3) {
  alert( '2,3' );
} */

/*
switch (a) {
  case 0:
  alert ('0')
  break
  case 1:
    alert ('1')
  break
    case 2:
    case 3:
      alert ('2,3')
      break
} */

/*let userInput = prompt ('iveskite vaisiu ar darzove')

switch (userInput) {
  case 'ananasas':
  case 'mandarinas':
  case 'obuolys':
  case 'kriause':
  case 'apelsinas':
    alert ('vasius')
    break

    case 'bulve':
    case 'morka':
    case 'ridikas':
    case 'rope':
    case 'kopustas':
      alert ('darzove')
      break
      default: alert ('kita')
} */

/*let weekDay = "0"

switch (weekDay) {
  case '0':
    console.log ('pirmadienis')
    break
  case '1':
    console.log ('antradienis')
    break
  case '2':
    console.log ('treciadienis')
    break
  case '3':
    console.log ('ketvirtadienis')
    break
  case '4':
    console.log ('penktadienis')
    break
  case '5':
    console.log ('sestadienis')
    break
  case '6':
    console.log ('sekmadienis')
    break
    default: console.log ('tiek dienu nera savaiteje')
}

arba  */

/*let weekDay = new Date().getDay();
switch (weekDay) {
  case 0:
    weekDay = 'Sekmadienis';
    break;
  case 1:
    weekDay = 'Pirmadienis';
    break;
  case 2:
    weekDay = 'Antradienis';
    break;
  case 3:
    weekDay = 'Trečiadienis';
    break;
  case 4:
    weekDay = 'Ketvirtadienis';
    break;
  case 5:
    weekDay = 'Penktadienis';
    break;
  case 6:
    weekDay = 'Šeštadienis';
    break;
}
console.log(weekDay); */











