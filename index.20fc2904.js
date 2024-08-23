function e(e){return e&&e.__esModule?e.default:e}var a=globalThis,t={},i={},n=a.parcelRequire4ceb;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in i){var a=i[e];delete i[e];var n={id:e,exports:{}};return t[e]=n,a.call(n.exports,n,n.exports),n.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,a){i[e]=a},a.parcelRequire4ceb=n),(0,n.register)("27Lyk",function(e,a){Object.defineProperty(e.exports,"register",{get:()=>t,set:e=>t=e,enumerable:!0,configurable:!0});var t,i=new Map;t=function(e,a){for(var t=0;t<a.length-1;t+=2)i.set(a[t],{baseUrl:e,path:a[t+1]})}}),n("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["auyDg","index.20fc2904.js","b4PbZ","whatsApp.ea70af98.png","579XB","Puliendo-el-auto.c9b7dc5f.jpg","7oAV7","opticas-main.c0227869.png","3DOyq","carroceria.85187558.jpg","knUzj","pintura-services.3da9755f.jpeg","5W3sS","icons8-mercado-pago-144.4b00dc04.png","22ifP","efectivo.a098f6e8.png"]'));var r={};r=new URL("whatsApp.ea70af98.png",import.meta.url).toString();var s={};s=new URL("Puliendo-el-auto.c9b7dc5f.jpg",import.meta.url).toString();var c={};c=new URL("opticas-main.c0227869.png",import.meta.url).toString();var o={};o=new URL("carroceria.85187558.jpg",import.meta.url).toString();var l={};l=new URL("pintura-services.3da9755f.jpeg",import.meta.url).toString();var d={};d=new URL("icons8-mercado-pago-144.4b00dc04.png",import.meta.url).toString();var p={};p=new URL("efectivo.a098f6e8.png",import.meta.url).toString();const h=document.getElementById("app"),v=[{path:"/error",componente:function(){return document.createElement("div").innerHTML=`<h1 style="color:red">404 NOT FOUND!</h1> <span>P\xe1gina no encontrada, intente con otra.</span>`}},{path:"/",componente:function(){return document.createElement("div").innerHtml=`
  <section class="section-presentation">
      <div class="continer-whatsapp">
        <a href="#" class="whatsapp-a">
          <img class="whatsapp-img" src=${/*@__PURE__*/e(r)} alt="WhatsApp" />
        </a>
      </div>
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
            src=${/*@__PURE__*/e(s)}
            alt="pulido y abrillantado"
            class="section-services-img"
          />
        </div>
        <div class="div-grid-item">
          <h2 class="div-h2">limpieza de opticas</h2>
          <img
            src=${/*@__PURE__*/e(c)}
            alt="Limpieza de opticas"
            class="section-services-img"
          />
        </div>
      </div>
      <div class="div-services">
        <div class="div-services-card">
          <h2 class="div-h2">Reparacion de carroceria</h2>
          <img
            src=${/*@__PURE__*/e(o)}
            alt="Reparacion de carroceria general"
            class="section-services-img"
          />
        </div>
        <div class="div-services-card">
          <h2 class="div-h2">pintura completa</h2>
          <img
            src=${/*@__PURE__*/e(l)}
            alt="Servicio de pintura completa"
            class="section-services-img"
          />
        </div>
      </div>
    </section>
    <h3 class="article-h3">medios de pagos</h3>
    <article class="article-medio-de-pagos">
      <div class="medio">
        <img src=${/*@__PURE__*/e(d)} alt="MP" />
        <span class="article-span">mercado pago</span>
      </div>
      <div class="medio">
        <img src=${/*@__PURE__*/e(p)} alt="Efectivo" />
        <span class="article-span">Efectivo</span>
      </div>
  </article>
`}},{path:"/services",componente:function(){return document.createElement("div").innerHTML=`  
  <div>
  <h1>SER</h1>
  <h2>VICES</h2>
  <h1>SER</h1>
  <h2>VICES</h2>
  <h1>SER</h1>
  <h2>VICES</h2>
  <h1>SER</h1>
  <h2>VICES</h2>
  <h1>SER</h1>
  <h2>VICES</h2>
  <h1>SER</h1>
  <h2>VICES</h2>
  <h1>SER</h1>
  <h2>VICES</h2>
  <h1>SER</h1>
  <h2>VICES</h2>
  <h1>SER</h1>
  <h2>VICES</h2>
  <h1>SER</h1>
  <h2>VICES</h2>
</div>

  `}}];function m(e){try{let a=v.find(a=>a.path==e)||v.find(e=>"/error"==e.path);if(console.log(a),!a){console.log("Page Not Found!");return}let t=a.componente();return h.innerHTML=" ",h.innerHTML=t}catch(e){console.log("Error loading page:",e)}}!function(){let e=document.querySelector("#open-button"),a=document.querySelector("#close-button"),t=document.querySelector("#menu-window");document.body.addEventListener("click",e=>{if(e.preventDefault(),e.target.classList.contains("a-menu")){let a=new URL(e.target.href).pathname;window.history.pushState({},"",a),t.style.display="none",m(a)}}),e.addEventListener("click",e=>(e.preventDefault(),t.style.display="flex")),a.addEventListener("click",e=>(e.preventDefault(),t.style.display="none")),window.addEventListener("load",()=>m(location.pathname)),window.addEventListener("popstate",()=>m(location.pathname))}();
//# sourceMappingURL=index.20fc2904.js.map
