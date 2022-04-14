// dropMeneu

const btndropMeneu = document.querySelector("#btndropMeneu");
console.log(btndropMeneu);
const dropMeneu = document.querySelector(".dropmenu");

btndropMeneu.addEventListener("click", (eo) => {
  dropMeneu.classList.toggle("toggle_DropMenue");
});
