document
  .querySelector(".menu_nav .dropdown a")
  .addEventListener("click", function () {
    var dropdownMenu = document.querySelector(".dropdown-menu");
    dropdownMenu.style.display =
      dropdownMenu.style.display === "block" ? "none" : "block";
  });

document.addEventListener("click", function (event) {
  var dropdownMenu = document.querySelector(".dropdown-menu");
  var dropdownToggle = document.querySelector(".menu_nav .dropdown a");

  if (
    event.target !== dropdownMenu &&
    event.target !== dropdownToggle &&
    !dropdownMenu.contains(event.target)
  ) {
    dropdownMenu.style.display = "none";
  }
});






