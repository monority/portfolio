// Main JS //
const navLinks = document.querySelectorAll(".wrapperLi ul li");

navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    console.log("clicked")
    navLinks.forEach(link => {
      link.classList.remove("active");
    });
    link.classList.add("active");
  });
});
