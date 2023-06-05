// Main JS //
const navLinks = document.querySelectorAll("header nav ul li");
const contents = document.querySelectorAll("section");

navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    navLinks.forEach(link => {
      link.classList.remove("active");
    });
    link.classList.add("active");
  });
});
