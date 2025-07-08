let btn1 = document.getElementById("dark");
let btn2 = document.getElementById("bright");
let code = document.querySelector(".code-box");

code.addEventListener("click", () => {
  navigator.clipboard.writeText(code.innerText)
});

const hexValues = () => {
  let myHexValues = "0123456789abcdef";
  let colors = "#";
  for(let i = 0; i<6; i++){
    colors = colors + myHexValues[Math.floor(Math.random() * 16)];
  }
  return colors;
};

function hexToRGB(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgb(${r}, ${g}, ${b})`;
}

console.log(hexToRGB("#051937")); // rgb(5, 25, 55)


let rgb1 = "#051937";
let rgb2 = "#008793";


const handleButton1 = () => {
  rgb1 = hexValues();
  console.log(rgb1);
  document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1} , ${rgb2} )`;
  document.querySelector(".code-box").innerHTML = `background-image: linear-gradient(to right, <br />
      ${hexToRGB(rgb1)}, ${hexToRGB(rgb2)})`;
  document.querySelector("#dark").innerHTML = rgb1;
};

const handleButton2 = () => {
  rgb2 = hexValues();
  console.log(rgb2);
  document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1} , ${rgb2} )`;
  document.querySelector(".code-box").innerHTML = `background-image: linear-gradient(to right, <br />
      ${hexToRGB(rgb1)}, ${hexToRGB(rgb2)})`;
  document.querySelector("#bright").innerHTML = rgb2;
};

btn1.addEventListener("click", handleButton1);
btn2.addEventListener("click", handleButton2);