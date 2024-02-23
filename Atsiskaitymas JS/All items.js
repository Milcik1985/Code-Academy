const itemContainer = document.getElementsByClassName("item-container")[0];

    const renderItems = (items) => {
        itemContainer.innerHTML = "";

        items.forEach(item => {
            const singleItemContainer = document.createElement("a");
            singleItemContainer.href = "./single item.html"
            singleItemContainer.classList.add("single-item-container");
            itemContainer.append(singleItemContainer);

            const imgSection = document.createElement("img");
            imgSection.classList.add("item-image");
            imgSection.src = item.imgUrl;

            const descriptionWrapper = document.createElement("div");
            descriptionWrapper.classList.add("item-description");

            const titleWrapper = document.createElement("div");
            titleWrapper.classList.add("item-title");
            titleWrapper.innerText = `Title: ${item.title}`;

            const colorWrapper = document.createElement("div");
            colorWrapper.classList.add("item-color");
            colorWrapper.innerText = `Color: ${item.color}`;

            const weightWrapper = document.createElement("div");
            weightWrapper.classList.add("item-weight");
            weightWrapper.innerText = `Weight: ${item.weight}`;

            const featureWrapper = document.createElement("div");
            featureWrapper.classList.add("item-feature");
            featureWrapper.innerText = `Feature: ${item.feature}`;

            const specificationWrapper = document.createElement("div");
            specificationWrapper.classList.add("item-specification");
            specificationWrapper.innerText = `Specification: ${item.specification}`;

            const priceWrapper = document.createElement("div");
            priceWrapper.classList.add("item-price");
            priceWrapper.innerText = `Price: ${item.priceEur} €`;

            const locationWrapper = document.createElement("div");
            locationWrapper.classList.add("item-location");
            locationWrapper.innerText = `Location: ${item.location}`;

            singleItemContainer.append(imgSection);
            singleItemContainer.append(descriptionWrapper);

            descriptionWrapper.append(titleWrapper);
            descriptionWrapper.append(colorWrapper);
            descriptionWrapper.append(weightWrapper);
            descriptionWrapper.append(featureWrapper);
            descriptionWrapper.append(specificationWrapper);
            descriptionWrapper.append(priceWrapper);
            descriptionWrapper.append(locationWrapper);

            
            singleItemContainer.addEventListener("click", () => {
                localStorage.setItem("itemId", item.id);
            })
        });
    };

    const fetchAndRenderItems = async () => {
        const response = await fetch ("https://65bb5a6752189914b5bbd4e7.mockapi.io/Items");
        let items = await response.json();

        items.sort((a, b) => a.priceEur - b.priceEur);

        console.log(items)

        renderItems(items);
    };

    fetchAndRenderItems()

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




