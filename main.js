document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector("#menu-icon");
  const navbar = document.querySelector(".navbar");
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("header nav a");
  const nameElement = document.getElementById("portfolio-name");
  const aboutElement = document.getElementById("portfolio-about");
  // const logoElement = document.getElementById("portfolio-logo");

  // Function to update active navigation link based on scroll position
  const updateActiveNavLink = () => {
    const scrollPosition = window.scrollY;
    sections.forEach((section) => {
      const offset = section.offsetTop - 150;
      const height = section.offsetHeight;
      const id = section.getAttribute("id");
      const navLink = document.querySelector(`header nav a[href="#${id}"]`);

      if (scrollPosition >= offset && scrollPosition < offset + height) {
        navLinks.forEach((link) => link.classList.remove("active"));
        navLink.classList.add("active");
      }
    });
  };

  // Function to handle menu icon click event
  const toggleMenu = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
  };

  // Event listeners
  window.addEventListener("scroll", updateActiveNavLink);
  menuIcon.addEventListener("click", toggleMenu);

  // Retrieve saved data from Local Storage
  const savedName = localStorage.getItem("editedName");
  const savedAbout = localStorage.getItem("editedAbout");

  // Update name and about sections if data is available
  if (savedName) {
    nameElement.textContent = savedName;
    // logoElement.textContent = savedName; // Uncomment this line if you want to update the logo text with the saved name
  }

  if (savedAbout) {
    aboutElement.textContent = savedAbout;
  }
});
