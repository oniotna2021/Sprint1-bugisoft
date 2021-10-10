<template>
  <div class="home">    
    <cabecera></cabecera>

    <h2 class="text-center bg-secondary fw-bold super-container text-white text-uppercase">Sobre nosotros</h2>
      <br>
      <section id="team" class="section-3">
        <div class="col-5">
          <p>
            <img class="foto" src="/imagenes/Antonio2.jpg" alt="foto">
          </p>
          <div class="service-content">
            <h3>Antonio Mogollon Miranda</h3>
            <hr class="linea" color="blue" size=3>
            <p class="service-text memebers">
              Ingeniero en Sistemas <br>
              Cartagena - Bolívar
            </p>
          </div>
        </div>
        <div class="col-5">
          <p>
            <img class="foto" src="/imagenes/Leidy.jpg" alt="foto">
          </p>
          <div class="service-content">
            <h3>Leidy Dayana Ortega</h3>
            <hr class="linea" color="blue" size=3>
            <p class="service-text memebers">
              Ingeniera de Software <br>
              Gigante - Huila
            </p>
          </div>
        </div>
        <div class="col-5">
          <p>
            <img class="foto" src="/imagenes/Reyes.jpg" alt="foto">
          </p>
          <div class="service-content">
            <h3>Cristian Camilo Reyes</h3>
            <hr class="linea" color="blue" size=3>
            <p class="service-text memebers">
              Licenciado en Electrónica <br>
              Ubaté - Cundinamarca
            </p>
          </div>
        </div>
        <div class="col-5">
          <p>
            <img class="foto" src="/imagenes/William.jpg" alt="foto">
          </p>
          <div class="service-content">
            <h3>William Mendoza</h3>
            <hr class="linea" color="blue" size=3>
            <p class="service-text memebers">
              Ingeniero Mecatrónico <br>
              Pereira - Risaralda
            </p>
          </div>
        </div>
        <div class="col-5">
          <p>
            <img class="foto" src="/imagenes//Ruber.jpg" alt="foto">
          </p>
          <div class="service-content">
            <h3>Ruber Hernan Sanchez</h3>
            <hr class="linea" color="blue" size=3>
            <p class="service-text memebers">
              Docente <br>
              Cali -Valle del Cauca
            </p>
          </div>
        </div>
      </section>
    
    <pie></pie>
  </div>
</template>

<script>
import cabecera from '@/components/cabecera.vue'
import pie from '@/components/pie.vue'
export default {
  components: { cabecera,pie },

}
</script>