// https://mockapi.io/projects/
// 1. Susikonfiguruot mockAPI, susikurt duomenų modelį recipes;
// + https://65bb5a6752189914b5bbd4e7.mockapi.io/receipes
// 2. recipes turi turėt properties: title, description, instructions, ingredients(naudot string, ne array), recipe_img;
// +
// 3. Thunder client pagalba įdėt 2-3 receptus;
// Thunder Client -> New request -> GET: https://65bb5a6752189914b5bbd4e7.mockapi.io/receipes -> POST -> BODY -> JSON: surasom visus endpointus. ->SEND
// 4. Receptus atvaizduoti kortelėse;

const container = document.createElement("div");
container.classList.add("container");
document.body.append(container);

const fetchRecipes = async (recipe) => {
  const response = await fetch(
    "https://65bb5a6752189914b5bbd4e7.mockapi.io/recipes"
  );
  const recipes = await response.json();

  console.log(recipes);

  recipes.forEach((recipe) => {
    // 1. Paspaudus ant kortelės recepto id turi būt išsaugotas į localstorage bei varototojas turi būt nudirectintas į konkretauks produkto puslapį;
    const wrapper = document.createElement("a");
    wrapper.classList.add("wrapper");
    wrapper.href = "./recipe.html";

    wrapper.addEventListener("click", () => {
      localStorage.setItem("recipeId", recipe.id);
    });

    container.prepend(wrapper);
    const infoWrapper = document.createElement("div");
    infoWrapper.classList.add("infoWrapper");
    wrapper.append(infoWrapper);
    const recipeTitle = document.createElement("div");
    recipeTitle.classList.add("recipTitle");
    const recipeDescription = document.createElement("div");
    recipeDescription.classList.add("description");
    const recipeInstuctions = document.createElement("div");
    recipeInstuctions.classList.add("instructions");
    const recipeIngredients = document.createElement("div");
    recipeIngredients.classList.add("ingredients");
    const recipeImage = document.createElement("img");
    recipeImage.classList.add("recipeImage");

    recipeTitle.innerText = `Title: ${recipe.title}`;
    recipeDescription.innerText = `Description: ${recipe.description}`;
    recipeInstuctions.innerText = `Instructions: ${recipe.instructions}`;
    recipeIngredients.innerText = `Ingredients: ${recipe.ingredients}`;
    recipeImage.src = `${recipe.imgUrl}`;

    infoWrapper.append(
      recipeTitle,
      recipeDescription,
      recipeInstuctions,
      recipeIngredients
    );
    wrapper.append(recipeImage);
  });
};

fetchRecipes();
// 5. Sukurti puslapį su formą, formą turi įdėt naują rezultatą į mockAPI;
// žiūrėti: recipeForm.js
// 6. Kai rezultatas yra įdedamas, turi atsirast žinutė su užrašu, receptas buvo pridėtas;
// žiūrėti: recipeForm.js
// 7. Kai rezeptas yra įdedamas po 3sek vartotojas turi būt nukreipiamas į puslapį su visais receptais;
// žiūrėti: recipeForm.js
// 2. Sukurti konkretaus produkto puslapio dizainą su "mockintais"(fake) duomenim; žiūrėti: recipe.js
// 3. Puslapy iš loclastorage išsitraukt recepto id bei parfetchint receptą;
// žiūrėti: recipeForm.js
// 4. Visas recepto detales reikia atvaizduoti puslapy; žiūrėti: recipe.js
// 5. Pridėti delete mygtuką, jį paspaudus receptas turi būt ištrintas; žiūrėti: recipe.js
// 6. Po ištrinimo turi ekrane atsirast informacinė žinutė kuri informuoja, kad receptas buvo ištrintas bei vartotojas turi būt nukreiptas į visų receptų puslapį; žiūrėti: recipe.js
