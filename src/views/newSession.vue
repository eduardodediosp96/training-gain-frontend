<template>
  <v-container grid-list-md text-md-center fluid fill-height>
    <v-row>
        <session-form></session-form>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import SessionForm from "../components/SessionForm.vue";
import SpecialistService from "../services/SpecialistService";
import UserService from "../services/UserService";
import { mapGetters } from 'vuex';

export default Vue.extend({
  name: "OurRehabilitators",

  components: {
    SessionForm
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
    parseDTO: async function() {
      this.rehabilitatorDTO = await SpecialistService.getSpecialist()
      this.rehabilitatorDTO.data
      .map((x) => {
        console.log("rehabilitator: ",x)
        const sesion = this.getRehabilitator(x);
        // console.log('sesion',sesion)
        // this.rehabilitators.push(sesion);
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

    getRehabilitator: async function(rehabilitatorDTO: any) {
      const userResp = await UserService.getUsers(this.token);
      const user = userResp.data.filter(x =>x.id == rehabilitatorDTO.userId)
      console.log("raaaa",user)
      console.log(user[0].name + " " + user[0].lastName)
      const rh = {
        name: user[0].name + " " + user[0].lastName,
        description: user[0].description,
        specialty: rehabilitatorDTO.specialty,
        userId: rehabilitatorDTO.userId,
      };
       this.rehabilitators.push(rh)
    },
    
  },
  computed: {
    ...mapGetters(['user','isLogged','token'])
  }
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
