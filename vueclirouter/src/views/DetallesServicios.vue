<template>
  <div>
    <!--Detalles de los servicios-->
    <hr />
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-7 columnaDetalles">
          <!--Titulo-->
          <h2 class="fw-bolder text-uppercase">Desarrollo de paginas web</h2>
          <!--Descripcion larga-->
          <p class="fs-5">
            Nuestro equipo creativo posee gran experiencia en el desarrollo de
            páginas web de carga rápida, que se adaptan en teléfonos móviles,
            tablets y computadoras. Diseñamos y desarrollamos tu página web para
            que conecte con tus clientes potenciales. Nuestro equipo de diseño
            web trabaja con los mejores procesos y estándares de calidad.
          </p>
        </div>
        <div class="col-12 col-lg-4 columna2">
          <img
            class="img-fluid m-2"
            src="https://disenodeweb.site/ddw/wp-content/uploads/2020/06/diseno-de-paginas-web.jpg"
          />
        </div>
      </div>
    </div>
    <hr />

    <div class="super-container precios">
      <br />
      <h2 class="fw-bolder text-uppercase text-center">Precios</h2>
      <div class="row">
        <div class="col-12 col-lg-6">
          <div class="card m-4 bg-black">
            <h4 class="card-title text-uppercase text-center text-light">
              Emprendedor
            </h4>
            <h5 class="card-subtitle mb-2 text-center text-light">
              Pagina de aterrizaje
            </h5>
            <div class="card-body bg-light">
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <h2 class="text-center text-bold text-primary">$850.000</h2>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div class="card m-4 bg-black">
            <h4 class="card-title text-uppercase text-center text-light">
              Pimes
            </h4>
            <h5 class="card-subtitle mb-2 text-center text-light">
              Pagina informativa
            </h5>
            <div class="card-body bg-light">
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <h2 class="text-center text-bold text-primary">$1.200.000</h2>
            </div>
          </div>
        </div>
      </div>
    </div>

    <hr />

    <Footer></Footer>
  </div>
</template>
<script>
import Footer from "../components/Footer.vue";
// @ is an alias to /src

export default {
  components: { Footer },
  name: "detallesServicios",
};
</script>

<style>
.precios {
  background-image: url("https://static.vecteezy.com/system/resources/previews/000/544/752/non_2x/white-and-grey-circular-curve-abstract-background-vector-for-business-presentation-background-and-abstract-concept.jpg");
}

</style>