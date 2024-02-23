const mobileMenuButton =document.getElementsByClassName("mobile-menu-button")[0];
const mobileMenuList = document.getElementsByClassName("mobile-nav-bar")[0];
const mobileMenuLinks = mobileMenuList.querySelectorAll("ul li a");

mobileMenuButton.addEventListener("click", () => {
  mobileMenuList.classList.toggle("active");
});

mobileMenuLinks.forEach(link => {
  link.addEventListener("click", () => {
  mobileMenuList.classList.remove("active");
})
});


const subscribeButton = document.getElementsByClassName("subscribe-button")[0];
const subscribeInput = document.getElementById("subscribe-input");
const errorMessage = document.createElement("div");


 subscribeButton.addEventListener("click", () => {
  const inputValue = subscribeInput.value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (inputValue.length >= 3 && emailRegex.test(inputValue)) {
    errorMessage.textContent = "Thank You for subscribing!"
    errorMessage.style.color = "green";
    errorMessage.style.textAlign = "center";
  } else {
    errorMessage.innerText = "Please Enter Valid Email";
    errorMessage.style.color = "red";
  }
})
    const subscribeWrapper = document.getElementsByClassName("subscribe")[0];
    subscribeWrapper.append(errorMessage);
