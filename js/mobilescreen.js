//headermobile
const btnheader = document.querySelector(".nav-menu");
const headermobile = document.querySelector(".headermobile");
console.log(headermobile);

btnheader.addEventListener("click", (eo) => {
  headermobile.classList.toggle("mobiledropmeneu");
});

const btnmenuheader = document.querySelector("#dropMeneumobile");

const mobiledropmenu = document.querySelector(".mobiledropmenu");
btnmenuheader.addEventListener("click", (eo) => {
  mobiledropmenu.classList.toggle("mobiledropsmallmeneu");
});
