const itemId = localStorage.getItem("itemId");
const selectedItemWrapper = document.getElementsByClassName("selected-item")[0];
const selectedItemImage = document.getElementsByClassName("image")[0];
const selectedItemDescription = document.getElementsByClassName("selected-item-description")[0];

const fetchedItem = async () => {
    const response = await fetch (`https://65bb5a6752189914b5bbd4e7.mockapi.io/Items/${itemId}`);

    const item = await response.json();

    console.log(response)

    console.log(item)

    selectedItemImage.src = item.imgUrl;
    selectedItemWrapper.append(selectedItemImage);

    selectedItemDescription.innerHTML = `
    Title: ${item.title}<br>
    Color: ${item.color}<br>
    Weight: ${item.weight}<br>
    Feature: ${item.feature}<br>
    Specification: ${item.specification}<br>
    Price: ${item.priceEur} €<br>
    Location: ${item.location}
    `;

    selectedItemWrapper.append(selectedItemDescription)
}

fetchedItem()

const deleteButton = document.getElementsByClassName("delete-item")[0];

deleteButton.addEventListener("click", async () => {
    const response = await fetch (`https://65bb5a6752189914b5bbd4e7.mockapi.io/Items/${itemId}`, {
        method: "DELETE",
    });

    const item = await response.json();

    console.log(item)

    const message = document.createElement("div");
    message.innerText = "Your Item Deleted Successfully"
    message.style.color = "green"
    deleteButton.innerText = "";
    deleteButton.append(message);

})

    const subscribeButton = document.getElementsByClassName("subscribe-button")[0];
    const subscribeInput = document.getElementById("subscribe-input");
    const errorMessage = document.createElement("div");
    errorMessage.style.color = "red";
    
    subscribeButton.addEventListener("click", () => {
    const inputValue = subscribeInput.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (inputValue.length >= 3 && emailRegex.test(inputValue)) {
        errorMessage.textContent = "Thank You for subscribing!"
        errorMessage.style.color = "green";
        errorMessage.style.textAlign = "center";
    } else {
    errorMessage.innerText = "Please Enter Valid Email";
    }
    })
    const subscribeWrapper = document.getElementsByClassName("subscribe")[0];
    subscribeWrapper.append(errorMessage);
