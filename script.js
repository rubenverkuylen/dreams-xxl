"use strict";
// variables
const workContent = document.querySelectorAll(".work-content");
const works = document.getElementById("works-container");
const about = document.getElementById("about-container");
const openModal = document.getElementById("open-modal");
const closeModal = document.getElementById("close-modal");

// 1. hide conetnt
function hideContent() {
  workContent.forEach((el) => {
    el.classList.add("hide");
  });
}

// 2. open work content
function clickHeader(elem) {
  const sibling = elem.nextElementSibling;
  if (!sibling.classList.contains("hide")) {
    elem.classList.remove("extra-margin");
    sibling.classList.add("hide");
  } else {
    workContent.forEach((el) => {
      el.classList.add("hide");
      el.previousElementSibling.classList.remove("extra-margin");
    });
    if (window.outerWidth <= 800) {
      elem.classList.add("extra-margin");
    }
    sibling.classList.remove("hide");
    if (window.outerWidth <= 800) {
      scrollToOffset(elem);
    }
  }
}

function scrollToOffset(elem) {
  const yOffset = -50;
  const y = elem.getBoundingClientRect().top + window.pageYOffset + yOffset;
  window.scrollTo({ top: y, behavior: "smooth" });
}

// 3. open menu
function openMenu(e) {
  topFunction();
  openModal.classList.add("hide");
  closeModal.classList.remove("hide");
  works.classList.add("hide");
  about.classList.remove("hide");
}

function closeMenu(e) {
  topFunction();
  openModal.classList.remove("hide");
  closeModal.classList.add("hide");
  about.classList.add("hide");
  works.classList.remove("hide");
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

openModal.addEventListener("click", openMenu);
closeModal.addEventListener("click", closeMenu);

// 4. reset on browser resize
window.addEventListener("resize", (e) => {
  const width = e.target.outerWidth;
  if (width >= 800) {
    showAbout();
  } else {
    hideAbout();
  }
});

function hideAbout() {
  about.classList.add("hide");
}

function showAbout() {
  about.classList.remove("hide");
  works.classList.remove("hide");
}

// 1. check if broweser gets resized
// 2. if browser > 800px -> remove .hide from about
// 3. if browser < 800px -> add .hide to about

// run on load
(function () {
  hideContent();
})();
