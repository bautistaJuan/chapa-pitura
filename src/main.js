import handleLocation from "./router.js";
function main() {
  const openMenu = document.querySelector("#open-button");
  const closeMenu = document.querySelector("#close-button");
  const menuWindow = document.querySelector("#menu-window");

  document.body.addEventListener("click", e => {
    e.preventDefault();
    if (e.target.classList.contains("a-menu")) {
      let newPath = new URL(e.target.href).pathname;
      window.history.pushState({}, "", newPath); //change de path of the browser
      menuWindow.style.display = "none";
      handleLocation(newPath);
    }
  });

  openMenu.addEventListener("click", e => {
    e.preventDefault();
    return (menuWindow.style.display = "flex");
  });
  closeMenu.addEventListener("click", e => {
    e.preventDefault();
    return (menuWindow.style.display = "none");
  });
  window.addEventListener("load", () => handleLocation(location.pathname));
  window.addEventListener("popstate", () => handleLocation(location.pathname));
}
main();
