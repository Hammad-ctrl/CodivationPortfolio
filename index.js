const Roles = document.getElementById('Iam');
const heroInformation = document.querySelector('.hero-info');
const milestone = document.querySelectorAll('.milestone')
const values = ['Full Stack Developer', 'Front end Developer', 'Designer', 'Backend Developer', 'Cloud Computing', 'App Development'];
let currentIndex = 0;
let charIndex = 0;
let typingSpeed = 300; 

function addNextRole() {

  if (currentIndex < values.length) {
    if (charIndex < values[currentIndex].length) {
      Roles.textContent += values[currentIndex].charAt(charIndex);
      charIndex++;
      setTimeout(addNextRole, typingSpeed);
    } else {
      setTimeout(() => {
        clearRolesText();
      }, 1000); 
    }
  } else {
    clearRolesText();
  }
}

function clearRolesText() {
 
  charIndex = 0;
  setTimeout(() => {
    Roles.textContent = '';
    currentIndex++;
    if (currentIndex >= values.length) {
      currentIndex = 0;
    }
    addNextRole(); 
  }, 1000); 
}

addNextRole();
// preloader 
document.addEventListener("DOMContentLoaded", function () {
  // Wait for the DOM to be fully loaded
  setTimeout(function () {
      const preloader = document.querySelector(".preloader");
      // const mainContent = document.querySelector(".main-content");

      // Hide the preloader and show the main content
      preloader.style.opacity = "0";
      // mainContent.style.display = "block";

      // Remove the preloader from the DOM after the animation
      setTimeout(function () {
          preloader.style.display = "none";
      }, 2000); // 2 seconds
  }, 2000); // 2 seconds
});


