// Habilita a classe "active" nas Informações do perfil
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }
const infoCont = document.querySelector("[data-container]");
const infoExpanBtn = document.querySelector("[data-expand-btn]");

// Expande as informações
infoExpanBtn.addEventListener("click", function () { elementToggleFunc(infoCont); });

const navigationLinks = document.querySelectorAll("[navmenu-link]");
const pages = document.querySelectorAll("[data-page]");

// Adiciona eventos aos botões de navegação
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}