import { homePage } from "./pages/home/home.js";
import { fourCeroFour } from "./pages/not-found/error.js";
import servicesPage from "./pages/services/services.js";
const container = document.getElementById("app");
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
];
export default function handleLocation(route) {
  try {
    const ruta =
      routes.find(r => r.path == route) || routes.find(r => r.path == "/error");
    console.log(ruta);

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
