const hamBurger = document.getElementById("btnHamburger");

hamBurger.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("expand");
});
