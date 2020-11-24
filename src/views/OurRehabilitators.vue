<template>
  <v-container grid-list-md text-md-center fluid fill-height>
    <v-row>
      <v-col v-for="i in rehabilitators" :key="i" cols="6">
        <RehabilitatorCard :item="i" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import RehabilitatorCard from "../components/RehabilitatorCard.vue";

export default Vue.extend({
  name: "OurRehabilitators",

  components: {
    RehabilitatorCard,
  },

  data() {
    return {
      rehabilitators: new Array<any>(),
      rehabilitatorDTO: [
        {
          id: 0,
          userId: 0,
          specialty: "string",
        },
        {
          id: 0,
          userId: 0,
          specialty: "string",
        },
        {
          id: 0,
          userId: 0,
          specialty: "string",
        },
        {
          id: 0,
          userId: 0,
          specialty: "string",
        },
      ],
    };
  },
  created() {
    this.parseDTO();
  },
  methods: {
    parseDTO: function() {
      this.rehabilitatorDTO.map((x) => {
        const sesion = this.getRehabilitator(x);
        this.rehabilitators.push(sesion);
      });
    },

    getUser: function(userId: number) {
      // getUser aca habra un endpoint
      return {
        id: 0,
        name: "string",
        lastName: "string",
        birth: "2020-11-11T05:18:20.209Z",
        address: "string",
        phone: 0,
        age: 0,
        email: "string",
        country: "string",
        gender: "string",
        password: "string",
      };
    },

    getRehabilitator: function(rehabilitatorDTO: any) {
      const user = this.getUser(rehabilitatorDTO.userId);
      return {
        name: user.name + " " + user.lastName || "",
        description: "asdasd asdasd asda sdas das" || "",
        specialty: rehabilitatorDTO.specialty,
        userId: user.id,
      };
    },
  },
});
</script>

<style lang="scss" scoped>
.row {
  padding-left: 20px;
}

.col {
  padding-top: 0px;
  padding-bottom: 0px;
}
</style>
