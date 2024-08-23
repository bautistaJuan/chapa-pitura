import handleLocation from "./router.js";
function main() {
  const menuWindow = document.querySelector("#menu-window");

  document.addEventListener("click", e => {
    const elementClicked = e.target;

    if (elementClicked.matches(".a-menu")) {
      e.preventDefault();
      let newPath = new URL(elementClicked.href).pathname;
      window.history.pushState({}, "", newPath); //change de path of the browser
      menuWindow.style.display = "none";
      handleLocation(newPath);
      return;
    } else if (elementClicked.matches("#open-button")) {
      e.preventDefault();
      return (menuWindow.style.display = "flex");
    } else if (elementClicked.matches("#close-button")) {
      e.preventDefault();
      return (menuWindow.style.display = "none");
    } else {
      console.log("Auch!");
      return;
    }
  });
  window.addEventListener("load", () => handleLocation(location.pathname));
  window.addEventListener("popstate", () => handleLocation(location.pathname));
}
main();
