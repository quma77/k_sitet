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



document
  .querySelector(".mobile_header .dropdown_m a")
  .addEventListener("click", function () {
    var dropdownMenu = document.querySelector(".dropdown-menu_m");
    dropdownMenu.style.display =
      dropdownMenu.style.display === "block" ? "none" : "block";
  });

document.addEventListener("click", function (event) {
  var dropdownMenu = document.querySelector(".dropdown-menu_m");
  var dropdownToggle = document.querySelector(".mobile_header .dropdown_m a");

  if (
    event.target !== dropdownMenu &&
    event.target !== dropdownToggle &&
    !dropdownMenu.contains(event.target)
  ) {
    dropdownMenu.style.display = "none";
  }
});









const mobileMenuIcon = document.querySelector('.m_but');
const mobileMenu = document.querySelector('.mobile-menu');
let isMenuOpen = false;

mobileMenuIcon.addEventListener('click', () => {
    if (!isMenuOpen) {
        mobileMenu.style.display = 'block';
        isMenuOpen = true;
    } else {
        mobileMenu.style.display = 'none';
        isMenuOpen = false;
    }
});

// Добавляем обработчик клика вне меню
document.addEventListener('click', (event) => {
    const target = event.target;
    // Проверяем, был ли клик вне меню и само меню открыто
    if (!mobileMenu.contains(target) && !mobileMenuIcon.contains(target) && isMenuOpen) {
        mobileMenu.style.display = 'none';
        isMenuOpen = false;
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
          
          const speed = 50; // Скорость анимации (в миллисекундах)
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








