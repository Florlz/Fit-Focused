document.querySelectorAll('.carousel-indicators span').forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    document.querySelector('.carousel-slide').style.transform = `translateX(-${index * 100}%)`;
    document.querySelector('.carousel-indicators .active').classList.remove('active');
    indicator.classList.add('active');
    clearInterval(slideInterval); // Stop the automatic slide transition
    slideInterval = setInterval(autoSlide, 8000); // Start the automatic slide transition again after 10 seconds
  });
});

let slideIndex = 0;
let slideInterval = setInterval(autoSlide, 8000); // Start the automatic slide transition

function autoSlide() {
  const slide = document.querySelector('.carousel-slide');
  const slideWidth = slide.offsetWidth / 3; // Divide the width of the slide container by the number of images
  slideIndex++;
  if (slideIndex > 2) {
    slideIndex = 0;
  }
  slide.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
  document.querySelector('.carousel-indicators .active').classList.remove('active');
  document.querySelectorAll('.carousel-indicators span')[slideIndex].classList.add('active');
}

function scrollToDivGetStarted() {
  var targetDiv = document.getElementById("target-divGS");
  targetDiv.scrollIntoView({ behavior: 'smooth' });
}

function scrollToDivHome() {
  var targetDiv = document.getElementById("target-divH");
  targetDiv.scrollIntoView({ behavior: 'smooth' });
}

function scrollToDivTips() {
  var targetDiv = document.getElementById("target-divT");
  targetDiv.scrollIntoView({ behavior: 'smooth' });
}

function scrollToDivWorkout() {
  var targetDiv = document.getElementById("target-divW");
  targetDiv.scrollIntoView({ behavior: 'smooth' });
}

function scrollToDivNutrition() {
  var targetDiv = document.getElementById("target-divNT");
  targetDiv.scrollIntoView({ behavior: 'smooth' });
}

function scrollToDivAboutUs() {
  var targetDiv = document.getElementById("target-divAS");
  targetDiv.scrollIntoView({ behavior: 'smooth' });
}

