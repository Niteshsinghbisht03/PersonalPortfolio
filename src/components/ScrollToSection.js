export const ScrollToSection = (goTo) => {
  document.querySelector("#" + goTo).scrollIntoView({ behavior: "smooth" });
};
