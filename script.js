let body = document.getElementById("gradient");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let css = document.querySelector("h3");
let randomBtn = document.createElement("button");

// Initial Values
color1.value = '#FF0000';
color2.value = '#FFFF00';

// Creating a random button
randomBtn.appendChild(document.createTextNode("Random BG"));
body.append(randomBtn);
randomBtn.classList.add("random");

function randomGenerator() {
    let r1 = Math.floor(Math.random() * 256);
    let g1 = Math.floor(Math.random() * 256);
    let b1 = Math.floor(Math.random() * 256);
    let r2 = Math.floor(Math.random() * 256);
    let g2 = Math.floor(Math.random() * 256);
    let b2 = Math.floor(Math.random() * 256);
    let result1 = "rgb(" + r1 + ", " + g1 + ", " + b1 + ")";
    let result2 = "rgb(" + r2 + ", " + g2 + ", " + b2 + ")";
    body.style.background = "linear-gradient(to right, " + result1 + ", " + result2 + ")"
    css.textContent = body.style.background + ";";
}

function changeColor(){
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";";
}

color1.addEventListener("input",changeColor);
color2.addEventListener("input",changeColor);
randomBtn.addEventListener("click",randomGenerator);


