<template>
  <div>
    <hr>
    <h3 class="text-center text-uppercase bg-secondary text-white">Personas que nos han contactado</h3>
    <hr>
    <table class="table super-container">
      <thead>
        <tr>
          <th scope="col" style="width: 20%">Nombre</th>
          <th scope="col" style="width: 20%">Correo Electronico</th>
          <th scope="col" style="width: 10%">WhatsApp</th>
          <th scope="col" style="width: 40%">Mensaje</th>
          <th scope="col" style="width: 10%">Eliminar</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="contacto in Contactos" :key="contacto._id" id="miTablaPersonalizada">
          <td>{{ contacto.name }}</td>
          <td>{{ contacto.email }}</td>
          <td>{{ contacto.phone }}</td>
          <td>{{ contacto.mensaje }}</td>
          <td>
            <button
              class="btn btn-danger"
              @click.prevent="eliminarContacto(contacto._id)" >
              .
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "prueba",
  data() {
    return {
      Contactos: [],
    };
  },
  created() {
    let apiURL = "http://localhost:4001/api";
    axios
      .get(apiURL)
      .then((res) => {
        this.Contactos = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },

  methods: {
    eliminarContacto(id) {
      let apiURL = `http://localhost:4001/api/delete-contacto/${id}`;
      let indexOfArrayItem = this.Contactos.findIndex((i)=>i._id ===id)
      if (window.confirm("Esta seguro de eliminar este dato")) {
        axios.delete(apiURL)
        .then(() => {
          this.Contactos.splice(indexOfArrayItem,1);
        })
        .catch((error) => {
          console.log(error);
        });
      }
      
    },
  },
};
</script>
<style>
table{
  table-layout: fixed;
}

#miTablaPersonalizada td{
  overflow: auto;
}

</style>