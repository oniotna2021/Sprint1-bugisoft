<template>
  <div class="home">    
    <cabecera></cabecera>
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