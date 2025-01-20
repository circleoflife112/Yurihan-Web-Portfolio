const delmaSlider = () => {
  const slideButton = document.querySelectorAll("button");
  const imageList = document.getElementById("postcard-design-container");
  const mainImg = document.querySelectorAll("#postcard-design-container li");

  const margin = 32;

  slideButton.forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.id === "pre-button" ? -1 : 1;
      const scrollAmount = (mainImg[0].clientWidth + margin) * direction;
      imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
  });
};

window.addEventListener("load", delmaSlider);

const mobileViewWrap = document.getElementById("mobile-imgs-title");
const mobileView = document.querySelectorAll(".mobile_view");

function mobileViewScale() {
  if (mobileView.forEach.classList.contains("active")) {
    mobileView.forEach.classList.remove("active");
  } else {
    mobileView.forEach.classList.add("active");
  }
}

mobileViewWrap.addEventListener("mouseover", mobileViewScale);

console.log(mobileView);

console.dir(mobileViewWrap);
