const initSlider = () => {
  const slideButton = document.querySelectorAll("button");
  const imageList = document.getElementById("postcard-design-container");
  const slideList = document.querySelectorAll("#postcard-design-container li");

  slideButton.forEach(button => {
    button.addEventListener("click", () => {
      const direction = button.id === "pre-button" ? -1 : 1;
      const scrollAmount = slideList[0].clientWidth * direction;
      imageList.scrollBy({ left: scrollAmount, behavior: "smooth"});
    });
  });
}

window.addEventListener("load", initSlider);

// 