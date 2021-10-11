<template>
  <div id="app">
    <div id="nav">
            <header>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark text-white-25">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">BUG1S0FT</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li id="menu1" class="nav-item">
                <router-link to="/"><a class="nav-link" href="#services">SERVICIOS</a></router-link>
              </li>
              <li id="menu2" class="nav-item">
                <router-link to="/equipo"><a class="nav-link" href="#team">NUESTRO EQUIPO</a></router-link>
              </li>
              <li id="menu3" class="nav-item">
                <router-link to="/contacto"><a class="nav-link">CONTACTANOS</a></router-link>
              </li>
              <li id="menu4" class="nav-item">
                <router-link to="/prueba"><a class="nav-link">PERSONAS-CONTACTOS</a></router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div id="img1" class="imagen">
        <img class="ciento" src="https://github.com/oniotna2021/Sprint1-bugisoft-src/blob/main/src/img/imagen.jpg?raw=true" alt="banner bugisoft" />
      </div>
    </header>
    </div>
    <router-view/>
  </div>
</template>

<style>
.nav a {
  color: white !important;
  font-size: 1.8em !important;
}

header {
  width: 100%;
  height: 310px;
}

.black {
  color: black;
}

ul,
ol {
  list-style: none;
  text-transform: uppercase;
  margin-left: 30%;
  border-radius: 3px;
}
/* Estilos de la barra de navegacion*/

.MenuLogo {
  width: 100%;
  height: auto;
  z-index: 5px;
  display: flex;
  flex-direction: row;
}

.logo {
  width: 20%;
  height: 100%;

  display: flex;
  flex-direction: row;
}

.menu {
  width: 100%;
  height: 100%;
}

.texlogo {
  padding-left: 4%;
  padding-top: 20px;
  text-decoration: none;
  font-size: 40px;
}

.imagen {
  width: 100%;
  height: 250px;
  background-color: white;
  margin-left: 5%;
}

.ciento {
  width: 95%;
  height: 100%;
}

.nav > li {
  float: left;
}

.nav li a {
  color: black;
  text-decoration: none;
  padding: 10px 12px;
  display: block;
  margin-left: 10px;
}

.nav li a:hover {
  background-color: #fea7a5;
  transform: scale(1.25);
}

.nav li ul {
  display: none;
  position: absolute;
  min-width: 120px;
}

.nav li:hover > ul {
  display: block;
}

.nav li ul li {
  position: relative;
}

.nav li ul li ul {
  right: -140px;
  top: 0px;
}
</style>
