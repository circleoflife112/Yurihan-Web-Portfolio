const mainPage = document.getElementById("container");
const ul = document.getElementById("rope_holder");
const thread = document.querySelectorAll("#rope_holder li");

console.log(thread);

const hambergurHolder = document.querySelectorAll(".aside_btn");
const asidePage = document.getElementById("side-drawer");

function occurAside() {
  asidePage.classList.toggle("active");
  asidePage.classList.toggle("introduce_page");
}

hambergurHolder[0].addEventListener("click", occurAside);
hambergurHolder[1].addEventListener("click", occurAside);

console.log(hambergurHolder);
