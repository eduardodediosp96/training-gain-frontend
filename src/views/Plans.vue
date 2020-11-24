<template>
  <v-container grid-list-md text-md-center fluid fill-height>
    <v-row>
      <v-col v-for="i in planDTO" :key="i" cols="6">
        <PlansCard :item="i" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import PlansCard from "../components/PlansCard.vue";

export default Vue.extend({
  name: "Plans",
  components: {
    PlansCard,
  },

  data() {
    return {
      planDTO: [
        {
          id: 0,
          description: "Plan Mensual: Matamos tu curiosidad, anímate.",
          cost: 10,
        },
        {
          id: 0,
          description: "Plan Trimestral: No tan seguros todavia.",
          cost: 20,
        },
        {
          id: 0,
          description: "Plan Anual: La mas estandar de todos los planes",
          cost: 190,
        },
        {
          id: 0,
          description: "Plan 5 Años: Todo una vida",
          cost: 0,
        },
      ],
    };
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
