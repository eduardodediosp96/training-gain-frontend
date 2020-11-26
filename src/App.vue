<template>
  <v-app id="test">
    <!-- <div>token: {{this.token}}</div> -->
    <v-container
      grid-list-md
      text-md-center
      v-if="!isLogged"
      fluid
      style="min-height:100vh;padding-top:0px;padding-bottom:0px;background-color:#1E203D;"
    >
      <v-btn color="error" class="mt-4" @click="changeAction">
        {{ loginVisible ? "Create an account" : "Back to the Login" }}
      </v-btn>
      <login-form :visible="loginVisible"></login-form>
      <register-form :visible="registerVisible"></register-form>
    </v-container>
    <v-container
      grid-list-md
      text-md-center
      v-if="isLogged"
      fluid
      style="max-height:100vh;padding-top:0px;padding-bottom:0px"
    >
      <Navbar :nombre="this.user.name" />
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
    </v-container>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import Sidebar from "./components/Sidebar.vue";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import LoginForm from "./components/LoginForm.vue";
import RegisterForm from "./components/RegisterForm.vue";
import { mapGetters } from "vuex";

export default Vue.extend({
  name: "App",

  components: {
    Sidebar,
    Navbar,
    LoginForm,
    RegisterForm,
  },

  data: () => ({
    loginVisible: true,
    registerVisible: false,
    itsAuth: false,
  }),

  methods: {
    changeAction() {
      this.loginVisible = !this.loginVisible;
      this.registerVisible = !this.registerVisible;
      // this.itsAuth = true
    },
  },
  computed: {
    ...mapGetters(["user", "isLogged", "token"]),
  },
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
  height: 95vh !important;
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
