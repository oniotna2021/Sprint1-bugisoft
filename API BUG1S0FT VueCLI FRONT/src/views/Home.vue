<template>
  <div class="home">

    <cabecera></cabecera>
    <carrusel></carrusel>     
    <pie></pie>
    
  </div>
</template>

<script>
import cabecera from '@/components/cabecera.vue'
import pie from '@/components/pie.vue'
import carrusel from '@/components/carrusel.vue'

export default {
  components: { cabecera,pie,carrusel },

}
</script>
