// 7. Sukurti metodą 'renderElement', kuris sukurią html elementą, jame atvaizduoja automobilio informaciją (modelį, brandą, variklio tipą, kilometražą, spalvą, bazinę kainą) ir šį elementą išveda į ekraną.
    //    7.1. Pridėti property 'image' (nuotraukos nuoroda), kuris turėtų būti nuotrauka ir šią nuotrauką, taip pat, pridėti į formuluojamą elementą.

    renderElement() {
        const carItem = document.createElement('div');
        carItem.classList.add('car-item');
        // modelį, brandą, variklio tipą, kilometražą, spalvą, bazinę kainą
        const { brand, model, engine, mileage, color, basePrice, image, price, mileageDiscountPercentage, colorPrice, enginePrice } = this;
    
        const carTitle = document.createElement('h2');
        carTitle.classList.add('car-title');
        carTitle.textContent = `${brand} (${model})`;
    
        const carImage = document.createElement('img');
        carImage.classList.add('car-image');
        carImage.src = image;
        carImage.alt = `${brand} ${model} car ${color} color`;
    
        const carInfoList = document.createElement('ul');
        carInfoList.classList.add('car-info-list');
    
        carInfoList.innerHTML = `<li class="car-info-item"><strong>Engine: </strong>${engine}</li>
                                 <li class="car-info-item"><strong>Mileage: </strong>${mileage}</li>
                                 <li class="car-info-item"><strong>Color: </strong>${color}</li>
                                 <li class="car-info-item"><strong>Base Price: </strong>${basePrice}</li>`;
    
        const moreInfoButton = document.createElement('button')
        moreInfoButton.classList.add('more-info-button');
        moreInfoButton.textContent = 'More Info';
    
        moreInfoButton.addEventListener('click', () => {
          const moreInfoWrapper = document.createElement('div');
          moreInfoWrapper.classList.add('more-info-wrapper');
    
          const moreInfoList = document.createElement('ul');
          moreInfoList.classList.add('more-info-list');
    
          moreInfoList.innerHTML = `<li><strong>Base price: </strong>€ ${basePrice}</li>
                                    <li><strong>Engine: </strong>€ ${enginePrice}</li>
                                    <li><strong>Color: </strong>€ ${colorPrice}</li>
                                    <li><strong>Price: </strong>€ ${price}</li>
                                    <li><strong>Mileage Discount: </strong>${mileageDiscountPercentage}%</li>
                                    <li><strong>VAT: </strong>€ ${price * 0.21}</li>
                                    <li><strong>Price after VAT: </strong>€ ${price * 1.21}</li>`;
    
          const closeButton = document.createElement('button');
          closeButton.classList.add('close-button');
          closeButton.textContent = 'Close';
    
          closeButton.addEventListener('click', () => {
            moreInfoWrapper.remove();
          })
    
          moreInfoWrapper.append(moreInfoList, closeButton);
          carItem.append(moreInfoWrapper);
        })
    
        carItem.append(carTitle, carImage, carInfoList, moreInfoButton);
        return carItem;
      }
    
    
    const car1 = new Cars('Toyota', 'RAV4', 20000)
    