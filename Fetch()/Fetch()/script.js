console.groupCollapsed("fetch() with .then");

// 1. Parsisiust duomenis iš kokteilio API (random cocktail)
// www.thecocktaildb.com/api/json/v1/1/random.php (nepamirst https://);
// 2. Atvaizduoti duomenis concolėj;

const title = document.createElement("h1");
title.classList.add("title");
const wrapper = document.getElementsByClassName("wrapper")[0];
wrapper.prepend(title);
console.log(title);

const imageWrapper = document.createElement("img");
imageWrapper.classList.add("imageWrapper");
wrapper.append(imageWrapper);
console.log(imageWrapper);

const instructions = document.createElement("p");
instructions.classList.add("instructions");
wrapper.append(instructions);
console.log(instructions);

// 4. Kortelės apačioje pridėti burbuliuką, 20px X 20px, jei kokteilis alkoholinis burbuliukas turi būt raudonas, jei nealkoholinis - žalias;

const titleWrapper = document.createElement("div");
titleWrapper.classList.add("titleWrapper");
wrapper.prepend(titleWrapper);

const indicator = document.createElement("div");
indicator.classList.add("indicator");

titleWrapper.prepend(title);
titleWrapper.prepend(indicator);

fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((secondResponse) => {
    console.log(secondResponse.drinks[0]);

    // pasiverciam stringa strAlcoholic i boolean:

    const isAlcoholic =
      secondResponse.drinks[0].strAlcoholic === "Alcoholic" ? true : false;

    // 4. Kortelės apačioje pridėti burbuliuką, 20px X 20px, jei kokteilis alkoholinis burbuliukas turi būt raudonas, jei nealkoholinis - žalias;

    const indicatorStyle = isAlcoholic ? "alcoholic" : "non-alcoholic";

    indicator.classList.add(indicatorStyle);

    // 3. Įdėti Title, description bei nuotrauką į kortelę;
    title.innerText = secondResponse.drinks[0].strDrink;
    imageWrapper.src = secondResponse.drinks[0].strDrinkThumb;
    instructions.innerText = secondResponse.drinks[0].strInstructions;
  })
  .catch((error) => {
    console.log(error);
  });

// 5. Paspaudus ant kortelės - consolėj turi būt atvaizduojamas kokteilio pavadinimas;
wrapper.addEventListener("click", () => {
  console.log(title.innerText);
});

console.groupEnd();

console.groupCollapsed("CAO 21");
// 6. CAO 21
// Dating Website
// Įsivazduokite, kad dirbate prie pažinčių portalo produkto – jūsų užduotis greitai sukurti puslapį, kuris pasiimtų duomenis iš https://randomuser.me/api/ ir juos atvaizduotų puslapyje.
// Svarbu atvaizduoti:
// Nuotrauką
// Vardą
// Amžių
// El. pašto adresą

const dataWrapper = document.createElement("div");
dataWrapper.classList.add("dataWrapper");
document.body.append(dataWrapper);

const picture = document.createElement("img");
dataWrapper.prepend(picture);

const nameWrapper = document.createElement("h2");
nameWrapper.classList.add("nameWrapper");
dataWrapper.append(nameWrapper);

const ageWrapper = document.createElement("div");
ageWrapper.classList.add("ageWrapper");
dataWrapper.append(ageWrapper);

const emailWrapper = document.createElement("div");
emailWrapper.classList.add("emailWrapper");
dataWrapper.append(emailWrapper);

const infoWrapper = document.createElement("div");
infoWrapper.classList.add("infoWrapper");
dataWrapper.append(infoWrapper);

infoWrapper.append(nameWrapper);
infoWrapper.append(ageWrapper);
infoWrapper.append(emailWrapper);

fetch("https://randomuser.me/api/")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    picture.src = data.results[0].picture.medium;
    nameWrapper.innerText = `${data.results[0].name.first} ${data.results[0].name.last}`;
    ageWrapper.innerText = `${data.results[0].dob.age} years old`;
    emailWrapper.innerText = data.results[0].email;
  })

  .catch((error) => {
    console.log("Error", error);
  });

// Atsakymas

// VIP
// VIDUTINIS
// Naudojant https://party-wedding.glitch.me/v1/party – pasiimkite informaciją iš šio puslapio ir naudodami skirtingus array metodus, transformuokite duomenis bei išveskite true/false ekrane – ar "Kristupas Lapeika" yra VIP, ar ne?
// Atasakymas:

/*const checkIfPersonVIP = (guests, guestName) => {
  const guest = guests.find((guest) => guest.name === guestName);
  document.body.innerText = guest
    ? `${guestName} ${guest.vip ? "is" : "isn't"} a VIP`
    : `${guestName} isn't found in the guest list`;
};

const fetchPartyGuests = async () => {
  try {
    const response = await fetch("https://party-wedding.glitch.me/v1/party");
    if (response.ok) {
      const guests = await response.json();
      checkIfPersonVIP(guests, "Kristupas Lapeika");
    }
  } catch (error) {
    console.error(error);
  }
};

fetchPartyGuests();*/

// Vestuvės
// SUDĖTINGAS
// Įsivaizduokite, kad organizuojate vestuves. Pasiimkite informaciją iš https://party-wedding.glitch.me/v1/wedding ir atvaizduokite lentelėje: name, plusOne ir attending. Parašykite taip, kad plusOne ir attending būtų ne true/false, bet + arba -.

// Atsakymas

/*const displayGuests2 = (guests) => {
  const tbody = document.querySelector("tbody");
  guests.forEach((guest) => {
    const name = document.createElement("td");
    name.innerText = guest.name;

    const attending = document.createElement("td");
    attending.innerText = guest.attending ? "+" : "-";

    const plusOne = document.createElement("td");
    plusOne.innerText = guest.plusOne ? "+" : "-";

    const tr = document.createElement("tr");
    tr.append(name, attending, plusOne);
    tbody.append(tr);
  });
};

const fetchPartyGuests2 = async () => {
  try {
    const response = await fetch("https://party-wedding.glitch.me/v1/wedding");
    if (response.ok) {
      const guests = await response.json();
      displayGuests(guests);
    }
  } catch (error) {
    console.error(error);
  }
};

fetchPartyGuests2();*/

console.groupEnd();

console.groupCollapsed("fetch(); async/await");

// 1. Naudojantis coin api dokumentacija parfetchint 20 populiariausių kriptovaliutų. Jų kainos turi būt atvaizduotos "eur"; (veiksmą atlikt per thunder client);
// Thunder client -> New Request -> GET: https://api.coincap.io/v2/assets -> Parameters: rank; priceUsd, value: Usd; limit: 20 (https://api.coincap.io/v2/assets?rank&priceUsd=Usd  &limit=20)

// 2. Tą patį veiksmą atlikt naudojant JS, gautus duomenis išvest consolėj;
// // https://api.coincap.io/v2/assets

const fetchPopularCripto = async () => {
  const response = await fetch(
    "https://api.coincap.io/v2/assets?rank&priceUsd=Usd  &limit=20"
  );
  const data = await response.json();
  console.log(data);

  // 6. Prieš atvaizduojant kriptovaliutas - jas išrikiuot abecelės tvarka;

  data.data.sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    if (nameA > nameB) {
      return -1;
    }
    if (nameA < nameB) {
      return 1;
    }
    return 0;
  });

  // 3. Turimas valiutas atvaizduoti į puslapį, kiekvienai kriptovaliutai sukurti kortelę kurioje turi būt:
  // - Kriptovaliutos pavadinimas;
  // - Dabartinė kainą;

  const criptoWrapper = document.createElement("div");
  criptoWrapper.classList.add("criptoWrapper");
  criptoWrapper.style.border = "5px solid yellowgreen";
  document.body.append(criptoWrapper);

  data.data.forEach((cripto) => {
    const criptoInfo = document.createElement("div");
    criptoInfo.classList.add("criptoInfo");
    criptoInfo.style.border = "2px solid black";
    criptoInfo.style.margin = "10px";
    const criptoName = document.createElement("div");
    criptoName.innerText = `Name: ${cripto.name}`;
    const criptoPrice = document.createElement("div");
    criptoPrice.innerText = `Price: ${cripto.priceUsd}`;

    criptoInfo.prepend(criptoName);
    criptoInfo.append(criptoPrice);
    criptoWrapper.prepend(criptoInfo);

    // 4. Paspaudus ant kriptovaliutos kortelės - consolėj turi būt atvaizduotas tos kriptovaliutos pavadinimas;

    criptoInfo.addEventListener("click", () => {
      console.log(cripto.name);
    });

    // 5. Jeigu kriptovaliutos vieneto kaina yra didesnė uz 100eur - kriptovaliutos border turi būt auksinės spalvos, jei pigenė už 100, sidabrinės spalvos;

    const criptoBorder = () => {
      criptoPrice > 100
        ? (criptoInfo.style.borderColor = "gold")
        : (criptoInfo.style.borderColor = "silver");
    };

    criptoBorder();
  });
};

fetchPopularCripto();

console.groupEnd();

// DOC: https://rickandmortyapi.com/documentation
// API call: https://rickandmortyapi.com/api/character
// 1. Parsifechint duomenis iš Rick & Morty API, veikėjų masyvą atvaizduoti consolėj;

const fetchCharacters = async (url, allCharacters = []) => {
  const response = await fetch(url);
  const data = await response.json();

  allCharacters = allCharacters.concat(data.results);

  if (data.info.next) {
    return fetchCharacters(data.info.next, allCharacters);
  } else {
    return allCharacters;
  }
};

const characters = async () => {
  const allCharacters = await fetchCharacters(
    "https://rickandmortyapi.com/api/character"
  );
  console.log(allCharacters);

  // 2. Veikėjus išrikiuoti pagal veikėjo vardą A-Z;

  const sortedCharacters = [...allCharacters].sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    return nameA < nameB ? 1 : -1;
  });

  console.log(sortedCharacters);

  // 3. Veikėjų vardus atvaizduoti ekrane;

  const characterNameWrapper = document.createElement("div");
  characterNameWrapper.classList.add("characterNameWrapper");
  document.body.append(characterNameWrapper);

  sortedCharacters.forEach((character) => {
    const characterName = document.createElement("div");
    characterName.innerText = `Character's name: ${character.name}`;
    characterNameWrapper.append(characterName);

    // 4. Kiekvienam veikėjui sukurti kortelę kurioje būtu: vardas, nuotrauka, species, origin;

    const characterImage = document.createElement("img");
    characterImage.src = character.image;
    characterNameWrapper.append(characterImage);
    const characterSpecies = document.createElement("div");
    characterSpecies.classList.add("characterSpecies");
    characterSpecies.innerText = `Species: ${character.species}`;
    characterNameWrapper.append(characterSpecies);
    const characterOrigin = document.createElement("div");
    characterOrigin.classList.add("characterOrigin");

    // 5. Jeigu origin yra unknown toje vietoje turi atsirast "-";

    if (character.origin && character.origin.name !== "unknown") {
      characterOrigin.innerText = `Origin: ${character.origin.name}`;
    } else {
      characterOrigin.innerText = `Origin: -`;
    }
    characterNameWrapper.append(characterOrigin);

    // 6. Paspaudus ant kortelės consolėj turi atsirast veikėjo vardas ant kurio buvo paspausta;

    const characterInfo = document.createElement("div");
    characterInfo.classList.add("characterInfo");
    characterNameWrapper.prepend(characterInfo);
    characterInfo.style.border = "4px solid black";
    characterInfo.append(
      characterName,
      characterSpecies,
      characterOrigin,
      characterImage
    );

    characterInfo.addEventListener("click", () => {
      console.log(
        (characterName.innerText = `Character's name: ${character.name}`)
      ); // 7. Paspaudus ant kortelės į localstorage turi būt įdedamas veikėjo objektas;
      localStorage.setItem("characterInfo", JSON.stringify(character));
    });
  });
};

characters();

// 8. Padaryt, kad butu atvaizduota tik pirmu 10 veikėjų;

// slice arba splice
