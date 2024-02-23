// 1. Kreiptis į HTML'e sukurta div wrapper'į bei į jį įdėti savo vardą;

/*const myName = document.querySelector('div')
myName.textContent = 'Milana'*/

// arba

const myName = document.getElementsByClassName("name-wrapper")[0];
// myName.textContent = 'Milana'
myName.innerHTML = "Milana";
// myName.innerHTML = 'Milana'

// 2. Gauti wrpper'į pagal klasę naudojant querySelector bei pakeist fono spalvą;

document.querySelector(".name-wrapper").style.backgroundColor = "yellowgreen";

// 3. Duoti buttonui onclick funkciją. Paspaudus ant button'o turi pasikeist jau egzistuojančio puslapyje teksto spalva;

const onClickButton = () => {
  document.querySelector(".name-wrapper").style.backgroundColor = "red";
};

// 4. Gauti visus elementus pagal klasę tokiu butu, kad butu gaunamas masyvas, o jame elementai. Vėliau norimiems masyvo elementams  priskirt skirtingą spalvą bei skirtingą background spalvą;

const elements = document.querySelectorAll("*");
const myArray = Array.from(elements);
console.log(myArray);

const selecetedElements = document.getElementsByClassName("green");
console.log(selecetedElements);

const newArrayGreen = Array.from(selecetedElements);
console.log(newArrayGreen);

newArrayGreen.forEach((element) => {
  element.style.backgroundColor = "yellowgreen";
  element.style.color = "black";
});

const selectedElements2 = document.getElementsByClassName("paragraph");
console.log(selectedElements2);

const newArrayParagraph = Array.from(selectedElements2);
console.log(newArrayParagraph);

newArrayParagraph.forEach((element) => {
  element.style.backgroundColor = "red";
  element.style.color = "white";
});

// 5. Paselectint html tagą bei naudojant classList pridėt papildomų stilių;
const selectedHtml = document.querySelector("html").classList.add("blue");

// EXTRA: Iš skirtingu text wrapperiu gaut elementus pagal klasę bei atvaizduot jų texto contentą consolėj for ciklo pagalba;
const paragraphs = document.getElementsByClassName("paragraph");
for (let i = 0; i < paragraphs.length; i++) {
  console.log(paragraphs[i].textContent);
}

const greens = document.getElementsByClassName("green");
for (let i = 0; i < greens.length; i++) {
  console.log(greens[i].textContent);
}

// 1. Naudojant JS sukurti div elementą, į jį įdėti teksto. Div elementą pridėt prie ekrano;

// const element = document.createElement("div");
// document.body.appendChild(element);
// console.dir(element);

const element = document.createElement("div");
document.body.append(element);
console.dir(element);

// 2. Per HTML turėti būt sukūrus DIV su id user-info-wrapper, sukurti h1 elementą su user vardu, sukurta h1 elementą pridėt į user-info-wrapper;
const userName = document.createElement("h1");
userName.textContent = "Milana";
document.getElementById("user-info-wrapper").prepend(userName);

// 3.  Sukurti h3 elementą su user pavarde, elementą pridėt į user-info-wrapper div'o pradžią;
const userSurname = document.createElement("h3");
userSurname.textContent = "Kamziuk";
document.getElementById("user-info-wrapper").prepend(userSurname);

// 4. Sukurti button bei div kuris yra 200px x 200px. Paspaudus button divas turi tapt žalias, antrą kart paspaudus - raudonas. Toliau spaudžiant mygtuką veiksmas turi kartotis;

let backgroundColor = "green";

function changeColorClicked() {
  const changeColor = document.getElementsByClassName("change-color")[0];
  changeColor.style.backgroundColor = backgroundColor;
}

function colorChange() {
  const changeColor = document.getElementsByClassName("change-color")[0];
  if (backgroundColor === "green") {
    backgroundColor = "red";
  } else if (backgroundColor === "red") {
    backgroundColor = "green";
  }
  changeColor.style.backgroundColor = backgroundColor;
}

// 5. Sukurti button'ą kurį paspaudus ekrane būtų rodomas random skaičius nuo 1 iki 10;

// function getRandomNumber() {
//   const showNumber = document.getElementsByClassName("show-number");
//   const randomNumber = Math.floor(Math.random() * 10) + 1;
// }

function getRandomNumber() {
  const showNumberElement = document.getElementsByClassName("show-number")[0];
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  showNumberElement.innerHTML = `Random Number: ${randomNumber}`;
}

// 6. Pridėti div'ui event listener, kiekvieną kart paspaudus ant divo, jis turi padidėt į aukštį bei plotį po 10px. Pradžioj div'as turi būt 100px x 100px

let elementHeight = 100;
let elementWidth = 100;

function increaseSize() {
  const divElement = document.getElementsByClassName("increasedSize")[0];
  elementWidth += 10;
  elementHeight += 10;
  divElement.style.width = elementWidth + "px";
  divElement.style.height = elementHeight + "px";
}

// 1. 1. Susikurti kreipimasi į funkcija su Vardu, Slaptažodžiu.

const func = (userName, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userName && password) {
        return resolve("Logged successfull");
      } else {
        return reject("Something went wrong. Try again");
      }
    }, 3000);
  });
};

// 2. Paspaudus mygtuką po 3sek mes gauname Promisą (resolvinta arba rejectinta).

func("Milana", "namas123")
  .then((resolve) => {
    console.log("2222", resolve);
  })
  .catch((error) => console.log("3333", error));

// 3. Jeigu siunčiamas vardas yra "Tadas" ir slaptazodis "12345678" tuomet resolve grazina, kad jus prisijungete sekmingai, kitu atveju gražiname reject su žinute, kad prisijungimas nepavyko.

func("Tadas", "12345678")
  .then((resolve) => {
    console.log("2222", resolve);
  })
  .catch((error) => console.log("3333", error));

func("Tadas", "")
  .then((resolve) => {
    console.log("4444", resolve);
  })
  .catch((error) => {
    console.log("5555", error);
  });

// 4. Žinutė turi but išvedama i ekraną, sėkminga žinutė - žalia spalva, nesėkminga - raudona.

func("Tadas", "12345678")
  .then((resolve) => {
    const successElement = document.querySelector(".login");
    successElement.style.backgroundColor = "green";
    successElement.innerHTML = "Logged successfully";
  })
  .catch((error) => {
    const failElement = document.querySelector(".login");
    failElement.style.backgroundColor = "red";
    failElement.innerHTML = "Something went wrong. Try again";
  });

func("tadas", "")
  .then((resolve) => {
    const successElement = document.querySelector(".login2");
    successElement.style.backgroundColor = "green";
    successElement.innerHTML = "Logged successfully";
  })
  .catch((error) => {
    const failElement = document.querySelector(".login2");
    failElement.style.backgroundColor = "red";
    failElement.innerHTML = "Something went wrong. Try again";
  });

// 5. Prisijungus sekmingai - į consolej atvaizduojam grazinta response.

func("Tadas", "12345678")
  .then((resolve) => {
    const successElement = document.querySelector(".login");
    successElement.style.backgroundColor = "green";
    console.log("Logged successfully");
  })
  .catch((error) => {
    const failElement = document.querySelector(".login");
    failElement.style.backgroundColor = "red";
    console.log("Something went wrong. Try again");
  });
