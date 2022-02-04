/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/

const changeThemeOcean = () => {
   document.querySelector("body").className = "ocean";
}

const changeThemeDefault = () => {
   document.querySelector("body").className = "";
}

const changeThemeDesert = () => {
   document.querySelector("body").className = "desert";
}

const changeThemeHighContrast = () => {
   document.querySelector("body").className = "high-contrast";
}

document.querySelector("#default").addEventListener('click', changeThemeDefault);
document.querySelector("#ocean").addEventListener('click', changeThemeOcean);
document.querySelector("#desert").addEventListener('click', changeThemeDesert);
document.querySelector("#high-contrast").addEventListener('click', changeThemeHighContrast);