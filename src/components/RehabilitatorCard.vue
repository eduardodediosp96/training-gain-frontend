<template>
  <v-container class="user-card-image">
    <v-row>
      <v-col class="image-wrapper col-wrapper" cols="4">
        <v-img
          class="image white--text align-end"
          height="250px"
          width="150px"
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        >
        </v-img>
      </v-col>
      <v-col class="col-wrapper" cols="8">
        <v-card height="250px" class="h100" :color="color" dark>
          <v-card-title class="headline" v-text="item.name"></v-card-title>
          <v-card-subtitle v-text="item.description"></v-card-subtitle>
          <v-card-actions>
            <v-list-item class="grow">
              <v-row>
                <v-btn outlined rounded small>
                  show US!
                </v-btn>
                <v-icon class="mr-4 ml-3">
                  mdi-arm-flex
                </v-icon>
                <span class="subheading mr-2 mt-1">{{ item.specialty }}</span>
                <span class="mr-1 mt-1">·</span>
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
  name: "RehabilitatorCard",
  data: () => ({
    color: "#272B4E",
  }),
  props: {
    item: {
      type: Object,
      default: function() {
        return {
          name: "string",
          description: "string",
          specialty: "string",
          userId: "string",
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
    min-height: 130px;
}
</style>
