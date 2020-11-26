<template>
<div>Loging out... </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from 'vuex';

export default Vue.extend({
    name: "Logout",
    data: () => ({
    }),
    created() {
        console.log("se deslogueo")
        this.deleteUser();
    },
    methods: {
        deleteUser() {
            console.log("se deslogueo")
            this.$store.dispatch('REMOVE_USER');
            this.$store.dispatch('REMOVE_LOGGED')
            this.$store.dispatch('REMOVE_TOKEN')
        }
    },
    computed: {
        // this.user = this.$store.getters.doneTodosCount
        ...mapGetters(['user'])
    }
});
</script>

<style lang="scss" scoped>
</style>
