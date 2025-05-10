const button = document.querySelector("button.kk1");
const hiddnenDiv = document.querySelector("div.invisible");

button.addEventListener("click", () => {
    hiddnenDiv.classList.toggle("invisible");
  
    });