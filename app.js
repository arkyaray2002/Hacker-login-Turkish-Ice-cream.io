// Preventing right click
document.addEventListener('contextmenu', event => event.preventDefault());
const button = document.getElementById("btn");
const buttonRect = button.getBoundingClientRect();

const originalButtonCenterX = buttonRect.left + button.offsetWidth / 2;
const originalButtonCenterY = buttonRect.top + button.offsetHeight / 2;

document.addEventListener("mousemove", (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const diffX = mouseX - originalButtonCenterX;
    const diffY = mouseY - originalButtonCenterY;

    const distance = Math.sqrt(diffX * diffX + diffY * diffY);

    // Translate Controls
    const translateAmplitudeX = 200;
    const translateAmplitudeY = 150;
    const translateAmplitudeXAcc = 100;
    const translateAmplitudeYAcc = 100;

    // Rotation Controls
    const angleMultiplier = 60;
    const rotateXAmplitude = 150;
    const rotateYAmplitude = 150;
    const rotateXAcc = 100;
    const rotateYAcc = 100;

    if (distance <= 100) {
        button.style.transform = `translate3d(${translateAmplitudeX * Math.tanh(translateAmplitudeXAcc / (originalButtonCenterX - mouseX))}px, ${translateAmplitudeY * Math.tanh(translateAmplitudeYAcc / (originalButtonCenterY - mouseY))}px, 0px) rotate3d(${rotateXAmplitude * Math.tanh(rotateXAcc / (originalButtonCenterY - mouseY))}, ${-rotateYAmplitude * Math.tanh(rotateYAcc / (originalButtonCenterX - mouseX))}, 0, ${angleMultiplier}deg)`;
    }
    else {
        button.style.transform = "";
    }
});

const modal = document.querySelector(".modal");

button.addEventListener("click", () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Add your API request here

    modal.style.display = "flex";

    setTimeout(() => {
        modal.style.display = "none";
    }, 3000);
});