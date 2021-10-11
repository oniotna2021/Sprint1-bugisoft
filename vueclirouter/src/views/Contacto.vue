<template>
  <div>
    <hr>
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-5 columnaFormulario border border-5">
          <br />
          <h3 class="text-black text-center text-uppercase fw-bold">
            Informacion Personal
          </h3>
          <hr class="bg-light" />
          <h6 class="text-center">
            Complete el siguiente formulario de contacto con tus datos y con
            gusto recibirá asesoría y más información sobre nuestros servicios
            de páginas web
          </h6>
          <form @submit.prevent="registrar">
            <div class="form-group">
              <label for="exampleFormControlInput1" class="form-label fw-bolder"
                >Nombre Completo</label
              >
              <input
                type="text"
                class="form-control"
                v-model="contacto.name"
                required
              />
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1" class="form-label fw-bolder"
                >Correo Electronico</label
              >
              <input
                type="email"
                class="form-control"
                v-model="contacto.email"
                required
              />
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1" class="form-label fw-bolder"
                >WhatsApp</label
              >
              <input
                type="text"
                class="form-control"
                v-model="contacto.phone"
                required
              />
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1" class="form-label fw-bolder"
                >Mensaje</label
              >
              <textarea
                type="text"
                class="form-control"
                v-model="contacto.mensaje"
                required
              />
            </div>
            <div class="form-group">
              <br>
              <div class="d-grid gap-2">
                <button class="btn btn-dark">Crear</button>
              </div>
            </div>
          </form>
        </div>
        <div class="col-12 col-lg-6 text-end columnaForm">
          <!--Titulo-->
          <h2 class="fw-bolder text-uppercase">Desea contactarse</h2>
          <!--Descripcion larga-->
          <p class="fs-5">
            Si lo que necesita es promocionar sus servicios, lo ideal es que
            tenga una Página Web, Aplicacion movil, de esta forma podrá a través de anuncios de
            GOOGLE llevar personas que estén buscando lo que usted ofrece.
            ¿Cuándo empezamos a desarrollar tu proyecto?. O por el contratio Necesitas soporte tecnico
            especializado. No dudes en escribirnos y te brindamos mayor información.
          </p>
        </div>
      </div>
    </div>
    <hr />
    <Footer></Footer>
  </div>
</template>


<script>
import Footer from "../components/Footer.vue";
import axios from "axios";
export default {
  components: { Footer },
  name: "pruebaCrear",
  data() {
    return {
      contacto: {
        name: "",
        email: "",
        phone: "",
        mensaje: "",
      },
    };
  },
  methods: {
    registrar() {
      let apiURL = "http://localhost:4001/api/registrar";
      axios
        .post(apiURL, this.contacto)
        .then(() => {
          this.$router.push("/");
          contacto = {
            name: "",
            email: "",
            phone: "",
            mensaje: "",
          };
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
/*Estilos Detalles Servicios*/
.columnaForm {
  margin-top: 10%;
}
.columnaFormulario {
  background-color: gainsboro;
}
.columnaDetalles {
  margin-top: 3%;
}
</style>