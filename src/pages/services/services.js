import carPintura from "../../assets/car-pintura-services.png";
import carCarroceria from "../../assets/car-carroceria-services.png";
import carOpticas from "../../assets/car-opticas-services.png";
import whatsApp from "../../assets/whatsApp.png";
export default function servicesPage() {
  const container = (document.createElement("div").innerHTML = `
    <h1 class="h1-services" >Servicios</h1>
    <section class="section"> 
    
     <div id="whp" class="continer-whatsapp">
        <a href="https://wa.me/+5491123344241?text=Hola%20José!" target="_blank" class="whatsapp-a">
          <img class="whatsapp-img" src="${whatsApp}" alt="WhatsApp" />
        </a>
      </div>
      <div class="card pintura">
        <img src=${carPintura} alt="img-card" />
        <ul class="ul">
          <li class="ul-li">Brillo y protección. Repintado completo para tu auto</li>
          <li class="ul-li">
            ¿Rayones y golpes? ¡Los solucionamos! Retoques profesionales para tu
            auto.
          </li>
        </ul>
      </div>
      <div class="card opticas">
        <img src=${carOpticas} alt="img-card" />
        <ul class="ul">
          <li class="ul-li">Faros como nuevos. Pulido profesional de ópticas.</li>
          <li class="ul-li">Eliminación rayones y opacidad.</li>
        </ul>
      </div>
      <div class="card carroceria">
        <img src=${carCarroceria} alt="img-card" />
        <ul class="ul">
          <li class="ul-li">
            Eliminamos abolladuras sin necesidad de pintar. Reparación de
            abolladuras
          </li>
          <li class="ul-li">Solución rápida y eficaz.</li>
        </ul>
      </div>
    </section>
  `);

  return container;
}
