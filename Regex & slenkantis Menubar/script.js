// 1. Sukurti localstorage info (userId);
localStorage.setItem("userId", "645262");

// 2. Atvaizduot concolėj informaciją iš localsorage;
const getUser = localStorage.getItem("userId");
console.log(getUser);

// 3. Parašyt scriptą kuris ištrina informaciją iš userId localstorage;
localStorage.removeItem("userId");

// 4. Sukurt customerId cookie.
document.cookie = "customerId = 645262";

// 5. Atvaizduot ekrane customer cookie;

const getCookieValue = (name) =>
  document.cookie.match("(^|;)\\s*" + name + "\\s*=\\s*([^;]+)")?.pop() || "";

console.log(getCookieValue("customerId"));

const showCookie = document.getElementsByClassName("showcookie")[0];
showCookie.innerHTML = getCookieValue("customerId");

// 6. Sukurt product objektą su keliais properties. Objektą įdėt į loclastorage;
const product = {
  name: "milk",
  price: "2 $",
  fat: "3.5 %",
};

console.log(product);

localStorage.setItem("product", JSON.stringify(product));

// 7. Objektą išsitraukt iš localstorage bei jį atvaizduot (objekto pavidalu);

const productObj = localStorage.getItem("product");
JSON.parse(productObj);
console.log(productObj);

// 8. Sukurti formą su 2 inputais (username, password) bei buttoną;
// 9. Paspaudus button reikia consolėj atspauzdinti tiek username tiek password;

const button = document.getElementById("login");
const menubar = document.getElementsByClassName("menubar")[0];
const mobileMenu = document.getElementsByClassName("mobile-menu")[0];

button.addEventListener("click", () => {
  const userName = document.getElementById("user-name").value;
  const password = document.getElementById("password").value;

  console.log(userName);
  console.log(password);
});

// 10. Padaryt validaciją, jei nėra nurodyta username ar password consolėj turi atsirast ne duomenis, o informacinė žinutė prašanti įvesti duomenis;

const button1 = document.getElementById("login");

button1.addEventListener("click", () => {
  const userName1 = document.getElementById("user-name").value;
  const password1 = document.getElementById("password").value;

  if (userName1 && password1) {
    console.log("Login successfull");
  } else {
    console.log("Something went wrong. Try again");
  }
});

menubar.addEventListener("click", () => {
  menubar.classList.toggle("active");
});

// 11. Sėkmės atveju į ekraną išvesti žalią tekstą su sekmės žinute, neturint duomenų - raudoną tekstą su informacine žinute;

const button2 = document.getElementById("login");

button2.addEventListener("click", () => {
  const userName2 = document.getElementById("user-name").value;
  const password2 = document.getElementById("password").value;

  // 1. Savo senam JS projektui pasidaryt validaciją naudojant regex;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  console.log(emailRegex.test(userName2));

  if (userName2 && password2 && userName2.length >= 3) {
    const successMessage = document.getElementsByClassName("message")[0];
    successMessage.style.color = "green";
    successMessage.innerHTML = "Login successful";
  } else {
    const fail = document.getElementsByClassName("message")[0];
    fail.style.color = "red";
    fail.innerHTML = "Something went wrong. Try again";
  }
});

// 2. Sukurti mobile navbar kuris turi atsirast kai yra paspaudžiama ant burger button;
menubar.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});

// 2.1. Susikurt paprastą desktop header. ziureti index.html
// 2.2 Padaryt, kad header linkai būtu nematomi mobile versijoj; ziureti style.css
// 2.3 Prisidėt burger button, jis turi būt nematomas desktop versijoj; ziureti style.css
// 2.4 Apsirašyt mobile menu wrapperį kuris būtu matomas tik desktop versijoj; ziureti style.css
// 2.5 Padaryt, kad paspaudus ant burger button menu įvažiuotu į ekraną, paspaudus antrą kart - išvažiuotu; ziureti style.css
