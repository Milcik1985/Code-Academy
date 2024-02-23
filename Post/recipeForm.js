// 5. Sukurti puslapį su formą, formą turi įdėt naują rezultatą į mockAPI;

const button = document.getElementsByClassName("btn")[0];

const title = document.getElementsByClassName("title")[0];
const description = document.getElementsByClassName("description")[0];
const instructions = document.getElementsByClassName("instructions")[0];
const ingredients = document.getElementsByClassName("ingredients")[0];
const imgUrl = document.getElementsByClassName("image URL")[0];

const message = document.createElement("div");
message.classList.add("message");
const inputWrapper = document.getElementsByClassName("inputWrapper")[0];
inputWrapper.append(message);

// let recipeData = {
//   title: "",
//   description: "",
//   instructions: "",
//   ingredients: "",
//   imgUrl: "",
// };

button.addEventListener("click", async () => {
  if (
    !title.value ||
    !description.value ||
    !instructions.value ||
    !ingredients.value ||
    !imgUrl.value
  ) {
    console.log(`Please fill all inputs`);
    return;
  }
  const recipeData = {
    title: title.value,
    description: description.value,
    instructions: instructions.value,
    ingredients: ingredients.value,
    imgUrl: imgUrl.value,
  };

  console.log(recipeData);

  const response = await fetch(
    "https://65bb5a6752189914b5bbd4e7.mockapi.io/recipes",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recipeData),
    }
  );

  const addedRecipe = await response.json();

  console.log(addedRecipe);

  console.log(message);

  // 6. Kai rezultatas yra įdedamas, turi atsirast žinutė su užrašu, receptas buvo pridėtas;

  message.innerHTML = "Recipe was successully added";
  message.style.color = "green";

  // 7. Kai rezeptas yra įdedamas po 3sek vartotojas turi būt nukreipiamas į puslapį su visais receptais;

  setTimeout(() => {
    window.location.assign("./index.html");
  }, 3000);
});
