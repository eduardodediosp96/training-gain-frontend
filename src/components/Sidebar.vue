<template>
  <v-card class="mx-auto" height="100%" width="100%">
    <v-navigation-drawer
      absolute
      dark
      src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
      width="100%"
      permanent
    >
      <v-list>
        <v-list-item v-for="item in importantLinks" :key="item.text" link>
          <router-link :to="item.href">
            <!-- <v-list-item-icon>
              <v-icon>{{ icon }}</v-icon>
            </v-list-item-icon> -->

            <v-list-item-content>
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item-content>
          </router-link>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Sidebar",

  data: () => ({
    importantLinks: [
      {
        text: "Sesiones...",
        href: "/sesions",
      },
      {
        text: "Rehabilitadores...",
        href: "/rehabilitators",
      },
      {
        text: "Nueva Sesion...",
        href: "/newsession",
      },
      // {
      //   text: "Editar mi Perfil...",
      //   href: "/perfil",
      // },
      {
        text: "Planes...",
        href: "/plans",
      },
      {
        text: "Logout...",
        href: "/logout",
      },
    ],
  }),
});
</script>
<style lang="scss" scoped>
.v-navigation-drawer ,.v-navigation-drawer--absolute, .v-navigation-drawer--open{
    background-color: #272B4E !important;
}
.v-application a {
    color: white;
    text-decoration: none;
}
.v-navigation-drawer__image{
    display:none !important;
}
</style>
