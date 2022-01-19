'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, change the body tag's style so it has a font-family of 
   "Arial, sans-serif".
2. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
3. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
------------------------------------------------------------------------------*/



const bodyEl = document.querySelector("body");
bodyEl.style.fontFamily = "Arial, sans-serif";

const nicknameEl = document.getElementById("nickname");
nicknameEl.textContent = "Noor";

const favFoodEl = document.getElementById("fav-food");
favFoodEl.textContent = "Dolma";

const hometownEl = document.getElementById("hometown");
hometownEl.textContent = "Kurdistan";

const listItems = document.querySelectorAll("li")

listItems.forEach(item => {
    item.className = "list-item";
})