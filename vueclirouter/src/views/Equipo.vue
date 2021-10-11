<template>
  <div>
    <hr>
    <h3 class="text-center text-uppercase bg-secondary text-white">Nuestro Equipo</h3>
    <hr>
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-3 cont1">
          <div class="container m-2">
            <div class="row">
              <div class="col-12 mt-2">
                <h4 class="text-uppercase">Antonio Mogollon Miranda</h4>
                <p class="fw-bolder">
                  Ingeniero en Sistemas <br />
                  Cartagena - Bolívar
                </p>
                <hr />
                <p>
                  Apasionado por el area de sistemas, encargado del area de
                  soprote tecnico
                </p>
              </div>
              <div class="col-12 mt-3">
                <img
                  class="img-thumbnail"
                  src="https://github.com/oniotna2021/Sprint1-bugisoft-src/blob/main/src/img/Antonio2.jpg?raw=true"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div class="row">
            <div class="col-12 col-lg-12 cont2">
              <div class="row">
                <div class="col-8 mt-2">
                  <h4 class="text-uppercase">Cristian Camilo Reyes</h4>
                  <p class="fw-bolder">
                    Licenciado en Electrónica <br>
                    Ubaté - Cundinamarca
                  </p>
                  <hr />
                  <p>
                    Licenciado con gusto por la programacion.
                    En el equipo, es el encargado del desarrollo front-end de las aplicaciones moviles
                  </p>
                </div>
                <div class="col-4 mt-3">
                  <img
                    class="img-thumbnail"
                    src="https://github.com/oniotna2021/Sprint1-bugisoft-src/blob/main/src/img/Reyes.jpg?raw=true"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-lg-6 cont3">
              <div class="container m-2">
                <div class="row">
                  <div class="col-12 mt-2">
                    <h4 class="text-uppercase">William Mendoza</h4>
                    <p class="fw-bolder">
                      Ingeniero Mecatrónico <br>
                      Pereira - Risaralda
                    </p>
                    <p>
                    </p>
                  </div>
                  <div class="col-12 mt-3">
                    <img
                      class="img-thumbnail"
                      src="https://github.com/oniotna2021/Sprint1-bugisoft-src/blob/main/src/img/William.jpg?raw=true"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-6 cont4">
              <div class="container m-2">
                <div class="row">
                  <div class="col-12 mt-3">
                    <img
                      class="img-thumbnail rounded mx-auto d-block"
                      src="https://github.com/oniotna2021/Sprint1-bugisoft-src/blob/main/src/img/Ruber.jpg?raw=true"
                    />
                  </div>
                  <div class="col-12 mt-2">
                    <h4 class="text-uppercase text-white">Ruber Hernan Sanchez</h4>
                    <p class="fw-bolder text-white">
                      Docente <br>
                      Cali -Valle del Cauca
                    </p>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-3 cont5">
          <div class="container m-2">
            <div class="row">
              <div class="col-12 mt-3">
                <img
                  class="img-thumbnail"
                  src="https://github.com/oniotna2021/Sprint1-bugisoft-src/blob/main/src/img/Leidy.jpg?raw=true"
                />
              </div>
              <div class="col-12 mt-2">
                <h4 class="text-uppercase text-white">Leidy Dayana Ortega</h4>
                <p class="fw-bolder text-white">
                  Ingeniero en Software <br />
                  Gigante - Huila
                </p>
                <hr class="text-white"/>
                <p class="text-white">
                  Ingeniera desarrolladora de paginas web, centrada en el
                  desarrollo de front-end de aplicaciones
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br>
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from "../components/Footer.vue";
export default {
    components: { Footer},
};
    
</script>
<style>
.cont1{
    background-color:rgb(221, 218, 218);
}
.cont2{
    background-color:rgb(189, 189, 189);
}
.cont3{
    background-color:rgb(129, 129, 129);
}
.cont4{
    background-color:rgb(63, 63, 63);
}

.cont5{
    background-color:rgb(29, 28, 28);
}
</style>
