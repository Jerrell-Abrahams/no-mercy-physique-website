const burger_button_icon = document.querySelector(".burger_button_icon");
const burger_container = document.querySelector(".hamburger");

clicked = true;

burger_button_icon.addEventListener("click", () => {
  if (clicked) {
    burger_button_icon.setAttribute("name", "menu-outline");
    burger_container.classList.add("invisible");
    clicked = false;
    return;
  }
  burger_container.classList.remove("invisible");
  burger_button_icon.setAttribute("name", "close-outline");

  clicked = true;
});

let options = {};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log(entry);
      entry.target.classList.add("show");
      entry.target.classList.add("slideIn");
    } else {
      return;
    }
  });
}, options);

const hiddenElements = document.querySelectorAll(".hidden");
const service_cards = document.querySelectorAll(".slideOut");

hiddenElements.forEach((entry) => {
  observer.observe(entry);
});

service_cards.forEach((entry) => {
  observer.observe(entry);
});
