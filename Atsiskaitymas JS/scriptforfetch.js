const fetchedItems = async () => {
  const response = await fetch(
    "https://65bb5a6752189914b5bbd4e7.mockapi.io/Items"
  );

  const items = await response.json();

  const firstThreeItems = items.slice(0, 3);

  console.log(firstThreeItems);

  firstThreeItems.forEach((item) => {
    const singleItem = document.createElement("div");
    singleItem.classList.add("single-item");

    const itemsWrapper = document.getElementById("items");
    console.log(itemsWrapper);
    itemsWrapper.append(singleItem);

    const imgWrapper = document.createElement("img");
    imgWrapper.classList.add("item-area-height");
    imgWrapper.src = item.imgUrl;
    singleItem.append(imgWrapper);

    const description = document.createElement("div");
    description.classList.add("description", "item-area-height");
    singleItem.append(description);

    const title = document.createElement("div");
    title.classList.add("item-title");
    title.innerText = item.title;
    description.append(title);

    description.innerHTML = `
      Title: ${item.title}<br>
      Color: ${item.color}<br>
      Weight: ${item.weight}<br>
      Feature: ${item.feature}<br>
      Specification: ${item.specification}<br>
      Price: ${item.priceEur} €<br>
      Location: ${item.location}
      `;
  });
};

fetchedItems();
