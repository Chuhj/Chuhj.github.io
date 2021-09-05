const images = ['1.jpg', '2.jpg'];
const bg = document.createElement('img');

const randomIndex = Math.floor(Math.random() * 2);

bg.src = `img/${images[randomIndex]}`;

document.body.appendChild(bg);
