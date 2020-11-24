/* eslint-disable */
<template>
  <v-container grid-list-md text-md-center fluid fill-height>
    <v-row>
      <v-col>
        <UserCard v-for="i in sesions" :key="i.id" :item="i" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import UserCard from "@/components/UserCard.vue";
import SesionService from "../services/SesionService";

export default Vue.extend({
  name: "OurSesions",
  components: {
    UserCard,
  },

  data() {
    return {
      sesions: new Array<any>(),
      sesionsDTO: [
        {
          id: 0,
          specialistId: 0,
          tittle: "Titulo 1",
          description: "string",
          startDate: "2020-11-11T00:15:17.862Z",
        },
        {
          id: 1,
          specialistId: 0,
          tittle: "Titulo 1",
          description: "string",
          startDate: "2020-11-11T00:15:17.862Z",
        },
        {
          id: 2,
          specialistId: 0,
          tittle: "Titulo 1",
          description: "string",
          startDate: "2020-11-11T00:15:17.862Z",
        },
        {
          id: 3,
          specialistId: 0,
          tittle: "Titulo 1",
          description: "string",
          startDate: "2020-11-11T00:15:17.862Z",
        },
      ],
    };
  },
  created() {
    this.parseDTO();
    //   let self = this
    //   axios.get('fetch-data')
    //     .then((response) => {
    //       let res: Players[] = response.data;
    //       for(let i = 0; i < res.length; i++){
    //           self.players.push(res[i]);
    //       }
    //     })
    //     .catch((error: string) => {
    //       console.log(error);
    //    });
  },
  methods: {
    parseDTO: function() {
      const response = SesionService.getSesions();
      console.log("chequeemos", response);
      this.sesionsDTO.map((x) => {
        const sesion = this.getSesions(x);
        this.sesions.push(sesion);
      });
    },
    getSesions: function(sesionDTO: any) {
      return {
        title: sesionDTO.tittle || "",
        description: sesionDTO.description || "",
        startDay: sesionDTO.startDate
          ? new Date(sesionDTO.startDate).toISOString().substr(0, 10)
          : "",
        hour: sesionDTO.startDate
          ? new Date(sesionDTO.startDate).toISOString().substr(0, 10)
          : "",
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
