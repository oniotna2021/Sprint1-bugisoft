<template>
  <div>
    <Main>
      <!--Seccion de servicios-->
    <hr class="bg-dark">
    <h2 class="text-center bg-secondary fw-bold super-container text-white">SERVICIOS</h2>
    <div id="services" class="container">
      <div class="container">
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <router-link to="/detallesServicios"><img
                  src="https://www.doiser.com/files/servicios_imagenperfil_img/oferta-diseno-paginas-web-zeta-consultores_1477.jpg"
                  class=" imagenCarrusel d-block w-100" alt="..."></router-link> <br>
                <h4 class="text-center text-uppercase fw-bolder">Desarrollo de Paginas web</h4>
                <p class="fs-5 text-center">¿No tienes página web?. Si no apareces en internet en la actualidad, no
                    existes.
                    Puedes crecer tu empresa rápidamente con nuestro diseño de páginas web.
                    Tus clientes podrán ingresar a tu sitio web desde cualquier dispositivo móvil.
                    Somos tu equipo de diseño web!
                </p>
            </div>
            <div class="carousel-item">
              <router-link to="/detallesServicios"><img
                  src="https://owius.com/wp-content/uploads/2019/07/desarrollo-de-aplicaciones-moviles-hibridas.jpg"
                  class=" imagenCarrusel d-block w-100" alt="..."></router-link>
              <div class="container">
                <br>
                <h4 class="text-center text-uppercase fw-bolder">Desarrollo de aplicaciones moviles</h4>
                <p class="fs-5 text-center">Brindamos soluciones de desarrollo de aplicaciones móviles y soporte
                  digital.
                  ¿Cuánto cuesta crear una app?
                  En Rootstack, te asesoramos sobre el diseño de apps y
                  sobre lo que necesitas para el desarrollo.</p>
              </div>
            </div>
            <div class="carousel-item">
              <router-link to="/detallesServicios"><img
                  src="https://inventivos.biz/wp-content/uploads/2020/05/soporte-tecnico.png"
                  class=" imagenCarrusel d-block w-100" alt="..."></router-link>
              <div class="container">
                <br>
                <h4 class="text-center text-uppercase fw-bolder">Soporte tecnico</h4>
                <p class="fs-5 text-center">Disfrute de las mejores tarifas y planes de servicio personalizado adaptado
                  a
                  sus necesidades gracias a nuestros contratos flexibles y adaptables...
                </p>
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

      <!--Seccion de Noticias-->

      <br><section id="news" class="noticiascont">
        <h2 class="text-center bg-secondary fw-bold super-container text-white">
          NOTICIAS SOBRE DESARROLLO WEB
        </h2>
        <div class="container">
          <div class="row">
            <div class="col-6 col-lg-3 p-2">
              <div class="card text-end shadow">
                <img
                  src="https://www.latevaweb.com/diseno-web/tendencias-disenno-2021-4.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title fw-bolder">
                    TENDENCIAS DE DISEÑO WEB PARA 2021
                  </h5>
                  <hr />
                  <p class="card-text">
                    ¿Quieres descubrir cuáles seran las nuevas tendencias de
                    este 2021? ¡No te dejes niguna por conocer!
                  </p>
                  <a
                    href="https://www.latevaweb.com/tendencias-disenno-2021"
                    class="btn btn-primary"
                    >Ver más...</a
                  >
                </div>
              </div>
            </div>
            <div class="col-6 col-lg-3 p-2">
              <div class="card text-end shadow">
                <img
                  src="https://www.latevaweb.com/diseno-web/contratar-mantenimiento-web.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title fw-bolder">
                    ¿POR QUÉ CONTRATAR EL MANTENIMIENTO DE TU WEB?
                  </h5>
                  <hr />
                  <p class="card-text">
                    ¿Estás pensando en contratar el mantenimiento de tu web? Te
                    explicamos por qué es una buena elección para ti y los
                    aspectos que debes tener en cuenta.
                  </p>
                  <a
                    href="https://www.latevaweb.com/contratar-mantenimiento-web"
                    class="btn btn-primary"
                    >Ver más...</a
                  >
                </div>
              </div>
            </div>
            <div class="col-6 col-lg-3 p-2">
              <div class="card text-end shadow">
                <img
                  src="https://www.latevaweb.com/diseno-web/diseno-web-ecommerce.png"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title fw-bolder">
                    LOS 5 REQUISITOS DE UN BUEN DISEÑO WEB PARA ECOMMERCE
                  </h5>
                  <hr />
                  <p class="card-text">
                    El diseño web es el elemento protagonista de cualquier
                    ecommerce, puesto que es necesario disponer de una página
                    web que cumpla con todos los elementos importantes para
                    convertir una tienda online en un espacio ideal para navegar
                    y comprar por internet. Este artículo explica los 5
                    requisitos para crear un diseño.
                  </p>
                  <a
                    href="https://www.latevaweb.com/diseno-web-ecommerce"
                    class="btn btn-primary"
                    >Ver más...</a
                  >
                </div>
              </div>
            </div>
            <div class="col-6 col-lg-3 p-2">
              <div class="card text-end shadow">
                <img
                  src="https://www.latevaweb.com/diseno-web/entrevista-disenadora-web.png"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title fw-bolder">
                    ENTREVISTA A CELESTE, DISEÑADORA DE PÁGINAS WEB
                  </h5>
                  <hr />
                  <p class="card-text">
                    El diseño de las páginas web responde a la parte funcional,
                    la estética y el contexto en dónde nos encontremos, por eso,
                    se ha de ir actualizando los elementos gráficos con el fin
                    de comunicar una idea. Descubre todo lo que engloba el
                    diseño de las páginas web con la entrevista a la diseñadora
                    web Celeste.
                  </p>
                  <a
                    href="https://www.latevaweb.com/entrevista-disenadora-paginas-webs"
                    class="btn btn-primary"
                    >Ver más...</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Main>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
// @ is an alias to /src

export default {
  components: { Footer },
  name: "index",
};
</script>

<style>
/*Estilos Servicios*/

.imagenCarrusel{
    height: 450px;
    background-size: cover;
}

</style>