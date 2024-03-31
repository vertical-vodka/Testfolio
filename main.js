document.addEventListener("DOMContentLoaded", function () {
  // Retrieve saved data from Local Storage
  let savedName = localStorage.getItem("editedName");
  let savedAbout = localStorage.getItem("editedAbout");
  let savedProfilePic = localStorage.getItem("editedProfilePic");

  // Update name, about, and profile picture sections
  let nameElement = document.getElementById("portfolio-name");
  let aboutElement = document.getElementById("portfolio-about");
  let logoElement = document.getElementById("portfolio-logo");
  let profileImgElement = document.getElementById("profile-pic");

  if (savedName) {
    nameElement.textContent = savedName;
    logoElement.textContent = savedName; // Update logo text with the saved name
  }

  if (savedAbout) {
    aboutElement.textContent = savedAbout;
  }

  if (savedProfilePic) {
    profileImgElement.src = savedProfilePic;
  }
});
