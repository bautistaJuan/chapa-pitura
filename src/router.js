import { homePage } from "./pages/home/home.js";
import { fourCeroFour } from "./pages/not-found/error.js";
import servicesPage from "./pages/services/services.js";
import worksPage from "./pages/works/works.js";
const container = document.getElementById("app");

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
    // console.log("Handle Location have:", ruta);
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
