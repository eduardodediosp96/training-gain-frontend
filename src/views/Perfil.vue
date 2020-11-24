<template>
  <v-container grid-list-md text-md-center fluid fill-height>
    <v-row>
      <v-col>
        <UserCard
          :item="{
            id: 0,
            specialistId: 0,
            tittle: 'Titulo 1',
            description: 'string',
            startDate: '2020-11-11T00:15:17.862Z',
          }"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <UserCard
          :item="{
            id: 0,
            specialistId: 0,
            tittle: 'Titulo 1',
            description: 'string',
            startDate: '2020-11-11T00:15:17.862Z',
          }"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <UserCard
          :item="{
            id: 0,
            specialistId: 0,
            tittle: 'Titulo 1',
            description: 'string',
            startDate: '2020-11-11T00:15:17.862Z',
          }"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <UserCard
          :item="{
            id: 0,
            specialistId: 0,
            tittle: 'Titulo 1',
            description: 'string',
            startDate: '2020-11-11T00:15:17.862Z',
          }"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import UserCard from "../components/UserCard.vue";

export default Vue.extend({
  name: "Perfil",

  components: {
    UserCard,
  },

  data: () => ({}),
});
</script>

<style lang="scss" scoped>
.col {
  padding-top: 0px;
  padding-bottom: 0px;
}
</style>
