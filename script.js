const slides = document.querySelectorAll(".slide");
const btns = document.querySelectorAll(".btn");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");

let currentSlide = 0;

// Project slider

const slider = (i) => {
  slides.forEach((slide) => {
    slide.classList.remove("active");

    btns.forEach((btn) => {
      btn.classList.remove("active");
    });
  });

  slides[i].classList.add("active");
  btns[i].classList.add("active");
};

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    slider(i);
    currentSlide = i;
    console.log(currentSlide);
  });
});

prev.addEventListener("click", () => {
  currentSlide -= 1;

  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  slider(currentSlide);
});

next.addEventListener("click", () => {
  currentSlide += 1;
  if (currentSlide > slides.length - 1) {
    currentSlide = 0;
  }
  slider(currentSlide);
});
