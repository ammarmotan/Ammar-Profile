// type //
document.addEventListener("DOMContentLoaded", function() {
    const typingText = document.getElementById("typing-text");
    const sentences = ["Software Engineer", "Front-End Developer", "Back-End Developer"];
    let sentenceIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
  
    function type() {
        const currentSentence = sentences[sentenceIndex];
        if (!isDeleting && charIndex < currentSentence.length) {
            typingText.textContent += currentSentence.charAt(charIndex);
            charIndex++;
            typingSpeed = 100; // Typing speed
        } else if (isDeleting && charIndex > 0) {
            typingText.textContent = currentSentence.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50; // Deleting speed
        }
  
        if (!isDeleting && charIndex === currentSentence.length) {
            typingSpeed = 2000; // Pause before deleting
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            sentenceIndex = (sentenceIndex + 1) % sentences.length;
            typingSpeed = 500; // Pause before typing next sentence
        }
  
        setTimeout(type, typingSpeed);
    }
    
    type();
});
// type //
// dark //
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    
    // Toggle the icon between sun and moon
    const icon = document.querySelector(".toggle-dark-mode i");
    if (document.body.classList.contains("dark-mode")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }
}
// dark //
// navbar//
$(document).ready(function () {
    $(window).scroll(function () {
      if ($(window).scrollTop() > 0) {
        $("nav").css("background-color", "white");
        $(".navbar-brand").css("color", "black");
        $("nav").css("border-color", "white");
        $("nav").css("box-shadow", "var(--box-shadow)");
        $(".navbar-toggler").css("color", "black");
        $(".nav-link").css("color", "black");
    }
    else {
        $("nav").css("background-color", "transparent");
        $(".navbar-brand").css("color", "white");
        $("nav").css("border-color", "#989898");
        $("nav").css("box-shadow", "none");
        $(".nav-link").css("color", "white");
        $(".navbar-toggler").css("color", "white");
      }
    });
  });
  // navbar//