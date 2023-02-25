let generate = document.getElementById("generate");
let adviceText = document.getElementById("advice");
let adviceId = document.getElementById("advice-number");

function generateAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      adviceText.innerHTML = data.slip.advice;
      adviceId.innerHTML = data.slip.id;
    })
    .catch((error) => {
      console.log(error);
    });
}

generate.addEventListener("click", () => {
  generateAdvice();
});

window.onload = () => {
  dice.style.animation = "rotate-center 0.6s ease-in-out both";
  generateAdvice();
};
