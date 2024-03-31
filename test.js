document.addEventListener("DOMContentLoaded", function () {
  // Load previously saved data if available
  let editedName = localStorage.getItem("editedName");
  let editedAbout = localStorage.getItem("editedAbout");
  let editedProfilePic = localStorage.getItem("editedProfilePic");

  // Populate input fields with the loaded data
  document.getElementById("name").value = editedName || "";
  document.getElementById("about").value = editedAbout || "";
  document.getElementById("profile-pic").src = editedProfilePic || "default-profile-pic.jpg";

  // Save data when form is submitted
  document
    .getElementById("edit-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      let newName = document.getElementById("name").value;
      let newAbout = document.getElementById("about").value;
      let newProfilePic = document.getElementById("profile-pic").src;

      // Save the updated data to Local Storage
      localStorage.setItem("editedName", newName);
      localStorage.setItem("editedAbout", newAbout);
      localStorage.setItem("editedProfilePic", newProfilePic);

      // Redirect to the main portfolio page after saving changes
      window.location.href = "portfolio.html";
    });

  // Handle profile picture upload
  document.getElementById("profile-pic-input").addEventListener("change", function (event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
      document.getElementById("profile-pic").src = e.target.result;

      localStorage.setItem("editedProfilePic", e.target.result);
    };

    reader.readAsDataURL(file);
  });
});
