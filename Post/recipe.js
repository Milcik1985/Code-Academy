const recipeId = localStorage.getItem("recipeId");

// 2. Sukurti konkretaus produkto puslapio dizainą su "mockintais"(fake) duomenim;

const title = document.getElementsByClassName("title")[0];
const description = document.getElementsByClassName("description")[0];
const instructions = document.getElementsByClassName("instructions")[0];
const ingredients = document.getElementsByClassName("ingredients")[0];
const img = document.getElementsByClassName("image-wrapper")[0];
const deleteRecipeButton = document.getElementsByClassName("delete-button")[0];

// 3. Puslapy iš loclastorage išsitraukt recepto id bei parfetchint receptą;

const fetchRecipe = async () => {
  const response = await fetch(
    `https://65bb5a6752189914b5bbd4e7.mockapi.io/recipes/${recipeId}`
  );

  const recipe = await response.json();
  console.log(recipe);

  // 4. Visas recepto detales reikia atvaizduoti puslapy;

  title.innerText = recipe.title;
  description.innerText = recipe.description;
  instructions.innerText = recipe.instructions;
  ingredients.innerText = recipe.ingredients;
  img.src = recipe.imgUrl;

  // 5. Pridėti delete mygtuką, jį paspaudus receptas turi būt ištrintas;

  deleteRecipeButton.addEventListener("click", async () => {
    const deleteResponse = await fetch(
      `https://65bb5a6752189914b5bbd4e7.mockapi.io/recipes/${recipeId}`,
      {
        method: "DELETE",
      }
    );

    const recipe1 = await deleteResponse.json();

    if (recipe1) {
      const deleteMessage = document.createElement("div");
      deleteMessage.classList.add("deleteMessage");
      deleteMessage.innerText = " Recipe was successfully deleted";
      document.body.append(deleteMessage);

      setTimeout(() => {
        window.location.assign("./index.html");
      }, 3000);
    }

    console.log(recipe1);
  });
};

fetchRecipe();
