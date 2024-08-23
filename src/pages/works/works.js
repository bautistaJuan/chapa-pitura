import whatsApp from "../../assets/whatsApp.png";
export default function worksPage() {
  const container = (document.createElement("div").innerHTML = `
   <div class="works">
    <div class="works-div">
    <h3 class="h3-services" >Actualmente solo muestro mis trabajos a través de mis redes sociales, te invito a visitar mi página de 
    <span>
     <a class="a-facebook" href="https://www.facebook.com/jose.vega0512/photos" alt="Facebook">
     Facebook
     </a>
     </span>
     </h3>
     <span>
     ¡También estoy subiendo fotos y videos de mis trabajos a mis estados de 
     <span>
      <a class="a-whatsapp" href="https://wa.me/+5491123344241?text=Hola%20José!" alt="Whatsapp">
        Whatsapp
      </a>
      </span> 
      todo el tiempo, mandame un mesaje para que te pueda agendar y puedas verlos!
    </span>
    </div>
   </div>

  `);

  return container;
}
