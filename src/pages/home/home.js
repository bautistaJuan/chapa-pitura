import whatsApp from "../../assets/whatsApp.png";
import pulido from "../../assets/Puliendo-el-auto.jpg";
import opticas from "../../assets/opticas-main.png";
import carroceria from "../../assets/carroceria.jpg";
import pintura from "../../assets/pintura-services.jpeg";
import mp from "../../assets/icons8-mercado-pago-144.png";
import efectivo from "../../assets/efectivo.png";

export function homePage() {
  const container = (document.createElement("div").innerHtml = `
  <div id="whp" class="continer-whatsapp">
    <a href="https://wa.me/+5491123344241?text=Hola%20José!" target="_blank" class="whatsapp-a">
      <img class="whatsapp-img" src="${whatsApp}" alt="WhatsApp" />
    </a>
  </div>
  <section class="section-presentation">
      <h1 class="section-h1">
        <span class="h1-gradient">chapa</span> <br /><span class="h1-gradient"
          >y</span
        ><br />
        <span class="h1-gradient">pintura</span>
      </h1>
      <span class="section-span">j&f</span>
    </section>
    <section class="section-services">
      <h2 class="section-services-h2">Se hacen trabajos de</h2>
      <div class="section-div-grid">
        <div class="div-grid-item">
          <h2 class="div-h2">pulido y abrillantado</h2>
          <img
            src=${pulido}
            alt="pulido y abrillantado"
            class="section-services-img"
          />
        </div>
        <div class="div-grid-item">
          <h2 class="div-h2">limpieza de opticas</h2>
          <img
            src=${opticas}
            alt="Limpieza de opticas"
            class="section-services-img"
          />
        </div>
      </div>
      <div class="div-services">
        <div class="div-services-card">
          <h2 class="div-h2">Reparacion de carroceria</h2>
          <img
            src=${carroceria}
            alt="Reparacion de carroceria general"
            class="section-services-img"
          />
        </div>
        <div class="div-services-card">
          <h2 class="div-h2">pintura completa</h2>
          <img
            src=${pintura}
            alt="Servicio de pintura completa"
            class="section-services-img"
          />
        </div>
      </div>
    </section>
    <h3 class="article-h3">medios de pagos</h3>
    <article class="article-medio-de-pagos">
      <div class="medio">
        <img src=${mp} alt="MP" />
        <span class="article-span">mercado pago</span>
      </div>
      <div class="medio">
        <img src=${efectivo} alt="Efectivo" />
        <span class="article-span">Efectivo</span>
      </div>
  </article>
`);

  return container;
}
