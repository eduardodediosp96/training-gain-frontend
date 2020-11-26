<template>
  <v-row class="navbar">
    <v-col class="image-wrapper col-wrapper" cols="10"> </v-col>
    <v-col class="image-wrapper col-wrapper" cols="2">
      Hola, {{ nombre }}
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Navbar",
  data: () => ({
    color: "#272B4E",
  }),
  props: {
    nombre: {
      type: String,
      default: "Eduardo Dedios",
    },
  },
});
</script>

<style lang="scss" scoped>
.navbar {
  background-color: #272b4e;
  color:white;
}
</style>
