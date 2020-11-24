<template>
  <v-app id="test">
    <v-container
      grid-list-md
      text-md-center
      fluid
      style="max-height:100vh;padding-top:0px;padding-bottom:0px"
    >
      <Navbar />
      <v-row style="background-color:#1E203D;">
        <v-col class="sidebar" cols="2">
          <Sidebar />
        </v-col>
        <v-col class="wrapper">
          <v-main class="content" scrollable>
            <router-view></router-view>
          </v-main>
        </v-col>
      </v-row>
      <Footer />
    </v-container>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import Sidebar from "./components/Sidebar.vue";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default Vue.extend({
  name: "App",

  components: {
    Sidebar,
    Navbar,
    Footer,
  },

  data: () => ({}),
});
</script>

<style lang="scss" scoped>
html {
  overflow: hidden !important;
}

.v-app {
  max-height: 100vh;
}

.sidebar,
.wrapper {
  padding: 0px;
}

.v-col,
.v-row,
.content {
  max-height: 100%;
}
.content {
  overflow-y: auto;
  height: 85vh !important;
}
.navbar {
  overflow-y: auto;
  min-height: 5vh !important;
}
.footer {
  overflow-y: auto;
  min-height: 10vh !important;
}
</style>
