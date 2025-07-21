document.getElementById("toggle-dark").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you! Your message has been submitted.");
});
