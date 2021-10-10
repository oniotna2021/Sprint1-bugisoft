<template>
  <div>
    
    <hr class="bg-white">
    <h2 class="text-center bg-secondary fw-bold super-container text-white">SERVICIOS</h2>
    <div id="services" class="container">
      <div class="container">
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active" id="servicio1">
              <h3 id="titulo" class="text-center text-uppercase fw-bolder"></h3>
              <p id="descripcion" class="fs-5 text-center"></p>
              <img src="https://inventivos.biz/wp-content/uploads/2020/05/soporte-tecnico.png" alt="Imagen servicio 1" id="imagen" class=" imagenCarrusel d-block w-100">
              <br>
              <div class="d-grid gap-2 col-6 mx-auto">
                <router-link class="btn btn-info" to="/servicios">Ver Más</router-link>
              </div>
            </div>
            <div class="carousel-item" id="servicio2">
              <h3 id="titulo" class="text-center text-uppercase fw-bolder"></h3>
              <p id="descripcion" class="fs-5 text-center"></p>
              <img src="https://www.doiser.com/files/servicios_imagenperfil_img/oferta-diseno-paginas-web-zeta-consultores_1477.jpg" alt="Imagen servicio 1" id="imagen" class=" imagenCarrusel d-block w-100">
              <br>
              <div class="d-grid gap-2 col-6 mx-auto">
                <router-link class="btn btn-info" to="/servicios">Ver Más</router-link>
              </div>
            </div>
            <div class="carousel-item" id="servicio3">
              <h3 id="titulo" class="text-center text-uppercase fw-bolder"></h3>
              <p id="descripcion" class="fs-5 text-center"></p>
              <img src="https://owius.com/wp-content/uploads/2019/07/desarrollo-de-aplicaciones-moviles-hibridas.jpg" alt="Imagen servicio 1" id="imagen" class=" imagenCarrusel d-block w-100">
              <br>
              <div class="d-grid gap-2 col-6 mx-auto">
                <router-link class="btn btn-info" to="/servicios">Ver Más</router-link>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>

      </div>

    </div>
  
  
  
  </div>
</template>

<script>
export default {
    name:'carrusel',

}
</script>

<style>

</style>