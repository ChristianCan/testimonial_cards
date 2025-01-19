let currentIndex = 0;

const testimonials = [
  "roadmap.sh is an incredible resource. I was fortunate to discover it during my university days in 2018. It's amazing to see how much impact it has had on millions of lives since then.",
  "I have been solving all the project ideas on roadmap.sh and am surprised how far I have come from where I started. Highly recommended!",
  "Since starting my career in 2021, I have only followed one resource, roadmap.sh. It truly helped me go from 0 to having a job and changing the financial trajectory of my family.",
];

const images = ["images/user1.jpg", "images/user2.jpg", "images/user3.jpg"];

const carouselQuote = document.querySelector(".carousel .quote");
const carouselImage = document.querySelector(
  ".carousel .carousel-controls .avatars .avatar"
);
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

function updateQuoteAndImage() {
  carouselQuote.textContent = testimonials[currentIndex];
  carouselImage.src = images[currentIndex];
}

prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  updateQuoteAndImage();
});

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % testimonials.length;
  updateQuoteAndImage();
});

// Initialize the first quote
updateQuoteAndImage();
