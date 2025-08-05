const  elBarsBtn = document.querySelector(".bars-btn");
const  elSidebar = document.querySelector(".sidebar");

elBarsBtn.addEventListener("click", () => {
  elSidebar.classList.add("active");
});

const  elCloseBtn = document.querySelector(".close-btn");
console.log(elCloseBtn);

elCloseBtn.addEventListener("click", () => {
  elSidebar.classList.remove("active");
});