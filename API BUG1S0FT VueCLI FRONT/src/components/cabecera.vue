<template>

  <header>

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark text-white-25">

      <div class="container-fluid">
         <router-link class="nav-link" to="/">BUG1S0FT</router-link>
        
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse menui" id="navbarNav">
          <ul class="navbar-nav">

            <li id="menu1" class="nav-item">
               <router-link class="nav-link" to="/servicios">{{menu.caso1}}</router-link>
             
            </li>
            <li id="menu2" class="nav-item">
             <router-link class="nav-link" to="/snosotros">{{menu.caso2}}</router-link>
             
            </li>
            <li id="menu3" class="nav-item">
             <router-link class="nav-link" to="/noticias">{{menu.caso3}}</router-link>              
            </li>
            <li id="menu4" class="nav-item">
            <router-link class="nav-link" to="/contacto">{{menu.caso4}}</router-link>              
            </li>
            <li id="menu5" class="nav-item">
            <router-link class="nav-link" to="/registro">{{menu.caso5}}</router-link>              
            </li>

          </ul>
        </div>
      </div>
    </nav>


    <div class="imagen">
      <img class="ciento" src="/imagenes/image.jpg" alt="banner bugisoft">
    </div>


  </header>
 
</template>

<script>

// Importamos Axios 
import axios from 'axios';

export default {
  
  datbaseURL: 'http://127.0.0.1:8080/',
  name: "cabecera",
  data() {
    return {
      menu: null,
    };
  },

  mounted() {
    axios
      .get("../mock/data.json")
      .then((response) => {
        this.menu = response.data.navbar[0];
        console.log(this.menu.caso1);
      });
  },
  
};
</script>


<style>
.imagen {
    width: 100%;
    height: auto;
    background-color:white;
    margin-left: 5%;
}

.ciento {
   
    width: 95%;
    height: 100%;
}

.menui{
    margin-left: 25%;
}
</style>

