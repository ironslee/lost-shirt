(function () {
  const elem = document.querySelector(".products__list");
  const iso = new Isotope(elem, {
    // options
    itemSelector: ".products__item",
    filter: ".popular",
  });

  const controlls = document.querySelectorAll(".filter__link");
  const activeClass = "filter__item--active";

  controlls.forEach(function (control) {
    control.addEventListener("click", function (e) {
      e.preventDefault();
      const filterName = control.getAttribute("data-filter");
      controlls.forEach(function (link) {
        link.closest(".filter__item").classList.remove(activeClass);
      });

      control.closest(".filter__item").classList.add(activeClass);
      iso.arrange({
        filter: `.${filterName}`,
      });
    });
  });
})();

(function () {
  const elem = document.querySelector(".pv-other__list");
  const iso = new Isotope(elem, {
    // options
    itemSelector: ".pv-other__item",
    filter: ".desc",
  });

  const controlls = document.querySelectorAll(".filter__link");
  const activeClass = "filter__item--active";

  controlls.forEach(function (control) {
    control.addEventListener("click", function (e) {
      e.preventDefault();
      const filterName = control.getAttribute("data-filter");
      controlls.forEach(function (link) {
        link.closest(".filter__item").classList.remove(activeClass);
      });

      control.closest(".filter__item").classList.add(activeClass);
      iso.arrange({
        filter: `.${filterName}`,
      });
    });
  });
})();

(function () {
  const sizeBtn = document.querySelectorAll(".pv-product__filter__item");
  const activeClass = "pv-product__filter__btn--active";
  const inActiveClass = document.querySelectorAll(
    ".pv-product__filter__btn--inactive"
  );

  sizeBtn.forEach(function (control) {
    control.addEventListener("click", function (e) {
      e.preventDefault();

      sizeBtn.forEach(function (link) {
        link.closest(".pv-product__filter__item").classList.remove(activeClass);
      });

      control.closest(".pv-product__filter__item").classList.add(activeClass);

      inActiveClass.forEach(function (asd) {
        asd
          .closest(".pv-product__filter__btn--inactive")
          .classList.remove(activeClass);
      });
    });
  });
})();

(function () {
  const elem = document.querySelector(".pvpic__list");
  const iso = new Isotope(elem, {
    // options
    itemSelector: ".pvpic__item",
    filter: ".black",
  });

  const controlls = document.querySelectorAll(".pv-product__color__link");
  const activeClass = "pv-product__color__item--active";

  controlls.forEach(function (control) {
    control.addEventListener("click", function (e) {
      e.preventDefault();
      const filterName = control.getAttribute("data-filter");
      controlls.forEach(function (link) {
        link.closest(".pv-product__color__item").classList.remove(activeClass);
      });

      control.closest(".pv-product__color__item").classList.add(activeClass);
      iso.arrange({
        filter: `.${filterName}`,
      });
    });
  });
})();
