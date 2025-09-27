  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    const homeSection = document.querySelector("#home");

    // when scroll passes home section height
    if (window.scrollY > homeSection.offsetHeight - 100) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });