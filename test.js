document.addEventListener("DOMContentLoaded", function () {
  // Load previously saved data if available
  let editedName = localStorage.getItem("editedName");
  let editedAbout = localStorage.getItem("editedAbout");
  let editedPicture = localStorage.getItem("editedPicture");

  // Populate input fields with the loaded data
  document.getElementById("name").value = editedName || "";
  document.getElementById("about").value = editedAbout || "";

  // Display profile picture if available
  if (editedPicture) {
    document.getElementById("profile-pic").src = editedPicture;
  }

  // Save data when form is submitted
  document
    .getElementById("edit-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      let newName = document.getElementById("name").value;
      let newAbout = document.getElementById("about").value;

      // Save the updated data to Local Storage
      localStorage.setItem("editedName", newName);
      localStorage.setItem("editedAbout", newAbout);

      // Redirect to the main portfolio page after saving changes
      window.location.href = "portfolio.html";
    });

  // Handle profile picture change
  document
    .getElementById("profile-pic-input")
    .addEventListener("change", function (event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
          const newPicture = e.target.result;
          // Update profile picture preview
          document.getElementById("profile-pic").src = newPicture;
          // Save the updated picture to Local Storage
          localStorage.setItem("editedPicture", newPicture);
        };
        reader.readAsDataURL(file);
      }
    });
});
