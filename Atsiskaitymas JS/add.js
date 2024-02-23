const uploadButton = document.getElementsByClassName("upload")[0];

const inputTitle = document.getElementsByClassName("item-title")[0];
const inputPicture = document.getElementsByClassName("item-picture")[0];
const inputColor = document.getElementsByClassName("item-color")[0];
const inputWeight = document.getElementsByClassName("item-weight")[0];
const inputFeature = document.getElementsByClassName("item-feature")[0];
const inputSpecification = document.getElementsByClassName("item-specification")[0];
const inputPrice = document.getElementsByClassName("item-price")[0];
const inputLocation = document.getElementsByClassName("location")[0];
const message = document.getElementsByClassName("message")[0];

uploadButton.addEventListener("click", async () => {
    if (inputTitle.value && inputPicture.value && inputColor.value && inputWeight.value && inputFeature.value && inputSpecification.value && inputPrice.value && inputLocation.value) {
    const itemData = {
        title: inputTitle.value,
        imgUrl: inputPicture.value,
        color: inputColor.value,
        weight: inputWeight.value,
        feature:inputFeature.value,
        specification: inputSpecification.value,
        priceEur: inputPrice.value,
        location:inputLocation.value,
    }
 console.log(itemData)
    const response = await fetch("https://65bb5a6752189914b5bbd4e7.mockapi.io/Items", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        body: JSON.stringify(itemData),
    });

    const addedItem = await response.json();

    message.innerHTML = "Your Item Added Successfully";
    message.style.color = "green";
    console.log(addedItem);
    } else {
        message.innerHTML = "Please fill up all the fields";
        message.style.color = "red"};

        setTimeout(() => {
            window.location.assign("./index.html");
        }, 3000);
    });


