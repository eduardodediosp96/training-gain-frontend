<template>
  <v-container class="user-card-image">
    <v-row>
      <v-col class="image-wrapper col-wrapper" cols="2">
        <v-icon x-large color="white darken-2" class="mr-4 ml-3 ">
          mdi-clock
        </v-icon>
      </v-col>
      <v-col class="col-wrapper" cols="10">
        <v-card height="200px" class="h100" :color="color" dark>
          <!-- <v-card-title class="headline" v-text="item.name"></v-card-title> -->
          <v-card-title v-text="item.description"></v-card-title>
          <v-card-subtitle ></v-card-subtitle>
          <v-card-actions>
            <v-list-item class="grow">
              <v-row>
                <v-btn outlined rounded small>
                  show US!
                </v-btn>
                <v-icon class="mr-4 ml-3">
                  mdi-currency-usd
                </v-icon>
                <span class="subheading mr-2 mt-1">{{ item.cost }}</span>
              </v-row>
            </v-list-item>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "PlansCard",
  data: () => ({
    color: "#272B4E",
  }),
  props: {
    item: {
      type: Object,
      default: function() {
        return {
          id: 0,
          description: "string",
          cost: 0,
        };
      },
    },
  },
});
</script>

<style lang="scss" scoped>
.user-card-image {
  padding: 20px;
  .image-wrapper {
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    .image {
      border-radius: 25px;
    }
  }
  .separator {
    width: 3px;
    height: 100%;
    margin-left: 15px;
    background-color: aqua;
  }
}
.col {
  padding-top: 0px;
  padding-bottom: 0px;
}
.col-wrapper {
  color: white;
}
.v-btn {
  background-color: #f6347f;
}
.v-card__subtitle {
  min-height: 100px;
}
.clock-icon, .image-wrapper{
    font-size: 80px !important;
    border: solid 0.5px white;
    border-radius: 25px;
    padding-top: 20px;
}
.subheading{
  font-size: 25px;
}
</style>
