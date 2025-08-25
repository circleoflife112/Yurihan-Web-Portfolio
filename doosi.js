const initSlider = () => {
  const slideButton = document.querySelectorAll("button");
  const imageList = document.getElementById("postcard-design-container");
  const slideList = document.querySelectorAll("#postcard-design-container li");
  const margin = 40;

  slideButton.forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.id === "pre-button" ? -1 : 1;
      const scrollAmount = slideList[0].clientWidth * direction + margin / 2;
      imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
      console.log(scrollAmount);
    });
  });
};

window.addEventListener("load", initSlider);

//
