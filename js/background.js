const imanges = ["pic01.jpg","pic04.jpg","pic05.jpeg"];

const chosenImange = imanges[Math.floor(Math.random()*imanges.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImange}`;
document.body.appendChild(bgImage);