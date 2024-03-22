const flower = document.querySelector("#complete_flower");
const secondPage = document.querySelector("#second_part");
const text = document.querySelector(".text");
const button = document.querySelector('#reset');



flower.addEventListener("click", () => {
  flower.classList.add("flower_animated");
  setTimeout(() => {
    window.location = "#second_part";
  }, 500);
  setTimeout(() => {
    secondPage.classList.add("animated_back");
  }, 600);
});


button.addEventListener("click",()=>{
  window.location = "/Proyecto";
});
