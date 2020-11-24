<template>
  <v-container class="user-card-image">
    <v-row>
      <v-col class="image-wrapper col-wrapper" cols="2">
        <v-img
          class="image white--text align-end"
          height="150px"
          width="150px"
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        >
        </v-img>
        <div class="separator"></div>
      </v-col>
      <v-col class="col-wrapper" cols="7">
        <v-card :color="color" dark>
          <v-card-title class="headline" v-text="item.title"></v-card-title>
          <v-card-subtitle v-text="item.description"></v-card-subtitle>
          <v-card-actions>
            <v-list-item class="grow">
              <v-row>
                <v-btn outlined rounded small>
                  show US!
                </v-btn>
                <v-icon class="mr-2 ml-3">
                  mdi-calendar
                </v-icon>
                <span class="subheading mr-2 mt-1">{{ item.startDay }}</span>
                <span class="mr-1 mt-1">·</span>
                <v-icon class="mr-4 ml-3">
                  mdi-clock
                </v-icon>
                <span class="subheading mr-2 mt-1">{{ item.hour }}</span>
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
  name: "UserCard",

  data: () => ({
    color: "#272B4E",
  }),
  props: {
    item: {
      type: Object,
      default: function() {
        return {
          title: "string",
          description: "string",
          startDay: new Date("2019-11-11T00:15:17.862Z").toISOString().substr(0, 10),
          hour: new Date("2019-11-11T00:15:17.862Z").toISOString().substr(0, 10),
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
</style>
