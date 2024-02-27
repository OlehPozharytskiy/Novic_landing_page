// Get the slider element
var slider = document.getElementById("slider");

// Get the slides and dots elements
var slides = slider.getElementsByClassName("slide");
var dots = slider.getElementsByClassName("dot");

// Set the current slide index
var slideIndex = 0;

// Show the first slide
showSlide(slideIndex);

// Define a function to show a slide
function showSlide(n) {
  // Loop through all slides and hide them
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Loop through all dots and remove the active class
  for (var i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  // Show the current slide and add the active class to the dot
  slides[n].style.display = "block";
  dots[n].classList.add("active");
}

// Define a function to change the slide
function changeSlide(n) {
  // Calculate the new slide index
  slideIndex = slideIndex + n;

  // If the slide index is out of range, wrap it around
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  if (slideIndex > slides.length - 1) {
    slideIndex = 0;
  }

  // Show the new slide
  showSlide(slideIndex);
}

// Define a function to go to a specific slide
function goToSlide(n) {
  // Set the slide index to the given value
  slideIndex = n;

  // Show the new slide
  showSlide(slideIndex);
}

// Get the next and previous buttons
var nextBtn = document.getElementById("next");
var prevBtn = document.getElementById("prev");

// Add click event listeners to the buttons
nextBtn.addEventListener("click", function () {
  changeSlide(1);
});
prevBtn.addEventListener("click", function () {
  changeSlide(-1);
});

// Add click event listeners to the dots
for (var i = 0; i < dots.length; i++) {
  dots[i].addEventListener("click", function () {
    goToSlide(i);
  });
}