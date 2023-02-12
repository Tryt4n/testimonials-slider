const textBlock = document.querySelectorAll("[data-testimonials-text-block]");
const imageBlock = document.querySelectorAll("[data-testimonials-image-block]");
const prevBtn = document.querySelector("[data-btn-previous]");
const nextButton = document.querySelector("[data-btn-next]");

nextButton.addEventListener("click", () => {
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
});

prevBtn.addEventListener("click", () => {
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
});
