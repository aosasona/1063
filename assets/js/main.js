function $(selector) {
  // This was inspired by jQuery's $ function which is used to select DOM elements using CSS selectors
  return document.querySelector(selector);
}

const hamburgerMenu = $(".hamburger-menu");
const mobileNav = $("#mobile-nav");

function openNav() {
  if (hamburgerMenu.classList.contains("open")) {
    closeNav();
    return;
  }
  hamburgerMenu.classList.add("open");
  mobileNav.style.display = "flex";
  mobileNav.classList.add("slide-in");
  mobileNav.classList.remove("slide-out");
}

function closeNav() {
  hamburgerMenu.classList.remove("open");
  mobileNav.classList.add("slide-out");
  mobileNav.classList.remove("slide-in");
}

const footerDate = $("#date");
if (footerDate) {
  footerDate.textContent = new Date().getFullYear();
}

const contactForm = $("#contact-form");
const contactFormButton = $("#contact-form-btn");
let contactFormFields;
if (contactForm) {
  contactFormFields = contactForm.querySelectorAll("input, textarea");
}

if (contactForm) {
  contactFormFields.forEach(function(field) {
    field.addEventListener("input", function() {
      if (checkAllFieldsPopulated()) {
        contactFormButton.removeAttribute("disabled");
      } else {
        contactFormButton.setAttribute("disabled", "disabled");
      }
    });
  });
}

function checkAllFieldsPopulated() {
  return [...contactFormFields].every((f) => f.value !== "");
}

function handleContactForm(e) {
  e.preventDefault();
  if (!checkAllFieldsPopulated()) return;

  const subject = encodeURIComponent($("input[name='subject']").value);
  const message = encodeURIComponent($("textarea[name='message']").value);

  window.location.href = `mailto:username@domain?subject=${subject}&body=${message}`;
}
