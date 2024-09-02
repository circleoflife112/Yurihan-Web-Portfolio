const initSlider = () => {
  const slideButton = document.querySelectorAll("button");
  const imageList = document.getElementById("postcard-design-container");
  const mainImg = document.querySelector("#postcard-design-container li");

  slideButton.forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.id === "pre-button" ? -1 : 1;
      const scrollAmount = imageList.clientWidth * direction;
      imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
  });

  console.log(mainImg.clientWidth);
};
