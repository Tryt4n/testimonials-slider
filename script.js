const textBlock = document.querySelectorAll("[data-testimonials-text-block]");
const imageBlock = document.querySelectorAll("[data-testimonials-image-block]");
const prevBtn = document.querySelector("[data-btn-previous]");
const nextButton = document.querySelector("[data-btn-next]");

nextButton.addEventListener("click", showNext);

prevBtn.addEventListener("click", showPrevious);

window.addEventListener("keydown", (e) => {
  if (e.key === "d" || e.key === "ArrowRight") showNext();
});
window.addEventListener("keydown", (e) => {
  if (e.key === "a" || e.key === "ArrowLeft") showPrevious();
});

let startX;
let endX;

document.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

document.addEventListener("touchend", (e) => {
  endX = e.changedTouches[0].clientX;
  if (startX > endX) {
    showNext();
  } else if (startX < endX) {
    showPrevious();
  }
});

function showNext() {
  for (i = 0; i < textBlock.length; i++) {
    if (!textBlock[i].classList.contains("hide")) {
      textBlock[i].classList.add("hide");
      imageBlock[i].classList.add("hide");
      if (i + 1 === textBlock.length) {
        textBlock[0].classList.remove("hide");
        imageBlock[0].classList.remove("hide");
      } else {
        textBlock[i + 1].classList.remove("hide");
        imageBlock[i + 1].classList.remove("hide");
      }
      break;
    }
  }
}
function showPrevious() {
  for (i = 0; i < textBlock.length; i++) {
    if (!textBlock[i].classList.contains("hide")) {
      textBlock[i].classList.add("hide");
      imageBlock[i].classList.add("hide");
      if (i - 1 < 0) {
        textBlock[textBlock.length - 1].classList.remove("hide");
        imageBlock[imageBlock.length - 1].classList.remove("hide");
      } else {
        textBlock[i - 1].classList.remove("hide");
        imageBlock[i - 1].classList.remove("hide");
      }
      break;
    }
  }
}
