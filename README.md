# Chapa y Pintura José: Taller de confianza. :mechanic:
 Esta página fue hecha para un familiar que pinta y arregla carroceria de autos. Es un SPA sencilla creada desde cero.
  
 ### Tecnologías
   - JavaScript
   - CSS
   - HTML
   - Parcel: Bundler
   - Figma
     
### Retos
  - Para este proyecto me propuse a crear sin la ayuda de AI, la mayoria de los recursos fueron de blogs programadores y de stackoverflow por supuesto.
  - Quería tirarme para atras con la idea de hacer una SPA por la complejidad de manejar las rutas con Javascript Vanilla, más bien no tenía algo que me motive para hacerlo, pero fue una experiecia única el haberme propuesto hacer este protecyo. Pude aprender muschisimas cosas.
  -  Hacerlo en menos de una semana. Podría haberlo hecho en menos de 2 días pero también estaba creando el diseño y aprendiendo algunas funciones avanzadas de Figma
   - Aprendí como crear un diseño interactivo
   - Como darle funcionalidades al menú, es decir, navergar entre "páginas". 
  - También estuve usarndo Notion para poder organizarme adecuadamente e ir guardando y anotando ciertas cosas que me llamaron la atención.
    
### Observaciones 
- La página fue diseña y desarrollada por mi.

- Me propuse a crear un manejador de rutas bastante sencilla, al principio no lo fue pero después lo pude sobrellevar bastante bien. Fue un practica y error.
  
 ```javascript
    
// these are the routes we are going to handle
const routes = [
  {
    path: "/error",
    componente: fourCeroFour,
  },
  {
    path: "/",
    componente: homePage,
  },
  {
    path: "/services",
    componente: servicesPage,
  },
  {
    path: "/works",
    componente: worksPage,
  },
];

// All in this function
export default function handleLocation(route) {
  try {
    const ruta =
      routes.find(r => r.path == route) || routes.find(r => r.path == "/error");
    // console.log("HandleLocation has:", ruta);
    if (!ruta) {
      console.log("Page Not Found!");
      return;
    }
    const textoHtml = ruta.componente();
    container.innerHTML = " ";
    return (container.innerHTML = textoHtml);
  } catch (err) {
    console.log("Error loading page:", err);
  }
}

  ```
  - Siguiedo la buenas practicas: Event Delegation
  ```javascript

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


  ```

 
