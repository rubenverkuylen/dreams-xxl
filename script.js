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
  // hide all
  if (!sibling.classList.contains("hide")) {
    sibling.classList.add("hide");
  } else {
    workContent.forEach((el) => {
      el.classList.add("hide");
    });
    sibling.classList.remove("hide");
  }
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

// run on load
(function () {
  hideContent();
})();
