import "$styles/index.css";
import "$styles/syntax-highlighting.css";

const burgerMenu = document.querySelector("header>button");
burgerMenu.addEventListener("click", () => {
  const isOpen = burgerMenu.getAttribute("aria-expanded") === "true";
  burgerMenu.setAttribute("aria-expanded", !isOpen);
  console.log(burgerMenu);
  if (!isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "initial";
  }
});
