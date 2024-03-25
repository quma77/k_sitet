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





const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5 // Порог видимости элемента
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const counters = entry.target.querySelectorAll('.num_stat');
      counters.forEach(counter => {
        const updateCount = () => {
          const target = +counter.getAttribute('data-count');
          const count = +counter.innerText;
          
          const speed = 500; // Скорость анимации (в миллисекундах)
          const inc = target / speed;
          
          if (count < target) {
            counter.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 50);
          } else {
            counter.innerText = target;
          }
        };
        
        updateCount();
      });

      observer.unobserve(entry.target);
    }
  });
}, options);

const main4Element = document.querySelector('.main_4');
observer.observe(main4Element);









