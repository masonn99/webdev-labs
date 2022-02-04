var currentFont = 1.5;

const makeBigger = () => {
   //var ele1 = document.querySelector("p");
   //var ele2 = document.querySelector("h1");
   currentFont += 0.5;
   document.querySelector("p").style.fontSize = `${currentFont}em`;
   document.querySelector("h1").style.fontSize = `${currentFont}em`;
   //ele2.style.fontsize += 4;
};

const makeSmaller = () => {
   currentFont -= 0.5;
   document.querySelector("p").style.fontSize = `${currentFont}em`;
   document.querySelector("h1").style.fontSize = `${currentFont}em`;
};


document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);

