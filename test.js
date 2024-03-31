document.addEventListener("DOMContentLoaded", function () {
  let editedName = localStorage.getItem("editedName");
  let editedAbout = localStorage.getItem("editedAbout");
  let editedProfilePic = localStorage.getItem("editedProfilePic");

  document.getElementById("name").value = editedName || "";
  document.getElementById("about").value = editedAbout || "";

  const profilePic = document.getElementById("profile-pic");
  const profilePicInput = document.getElementById("profile-pic-input");

  profilePic.src = editedProfilePic || "default-profile-pic.jpg";

  // Initialize Cropper.js instance
  const cropper = new Cropper(profilePic, {
      aspectRatio: 1, // Set aspect ratio to 1:1
      viewMode: 1, // Set view mode to "cropper"
      autoCropArea: 1, // Automatically crop the entire image
      checkCrossOrigin: false, // Disable cross-origin check for local files
      crop: function (event) {
          // Callback function executed after cropping
          console.log(event.detail.x);
          console.log(event.detail.y);
          console.log(event.detail.width);
          console.log(event.detail.height);
          console.log(event.detail.rotate);
          console.log(event.detail.scaleX);
          console.log(event.detail.scaleY);
      },
  });

  // Handle profile picture upload
  profilePicInput.addEventListener("change", function (event) {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onload = function (e) {
          profilePic.src = e.target.result;

          // Destroy previous Cropper instance and create a new one with the updated image
          cropper.destroy();
          cropper.replace(e.target.result);
      };

      reader.readAsDataURL(file);
  });

  // Save data when form is submitted
  document.getElementById("edit-form").addEventListener("submit", function (event) {
      event.preventDefault();

      let newName = document.getElementById("name").value;
      let newAbout = document.getElementById("about").value;

      // Get cropped image data URL from Cropper.js
      let croppedImageDataUrl = cropper.getCroppedCanvas().toDataURL();

      localStorage.setItem("editedName", newName);
      localStorage.setItem("editedAbout", newAbout);
      localStorage.setItem("editedProfilePic", croppedImageDataUrl);

      // Redirect to the main portfolio page after saving changes
      window.location.href = "portfolio.html";
  });
});
