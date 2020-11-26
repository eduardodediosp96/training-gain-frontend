<template>
    <v-container v-if="visible" class="login-form mt-4">
    
        <v-row>
    
            <v-col class="col-wrapper" cols="12">
    
                <div class="title">Login</div>
    
                <div class="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</div>
    
            </v-col>
    
            <v-col class="col-wrapper" cols="12">
    
                <v-form ref="form" v-model="isValid" lazy-validation>
    
                    <v-text-field v-model="email" :rules="[v => !!v || 'Email is required']" label="E-mail" required></v-text-field>
    
                    <v-text-field v-model="password" type="password" :rules="[v => !!v || 'Password is required']" label="Password" required></v-text-field>
    
                    <v-btn :disabled="!isValid" color="success" class="mr-4" @click="Login">
    
                        Login
    
                    </v-btn>
    
                </v-form>
    
            </v-col>
    
        </v-row>
    
    </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from 'vuex';
import LoginService from "../services/LoginService";

export default Vue.extend({
    name: "PlansCard",
    data: () => ({
        email: null,
        password: null,
        isValid: true,
        user: {}
        // todoMessage: '' 
    }),
    props: {
        visible: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        async Login() {
            const dataReq = { email: this.email, password: this.password }
            const session = await LoginService.getLogin(JSON.stringify(dataReq))
            console.log(session)
            this.addUserToStore(session.data)
        },
        addUserToStore(user) {
            this.$store.dispatch('ADD_USER', user)
            this.$store.dispatch('ADD_LOGGED')
            this.$store.dispatch('ADD_TOKEN', user.token)
        },
        deleteUser(index) {
            this.$store.dispatch('REMOVE_USER', index);
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
.login-form {
    padding: 20px;
    background-color: white;
    color: #272b4e;
    max-width: 500px;
    .title {
        font-size: 30px;
    }
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

.v-btn {
    background-color: #f6347f;
}

.v-card__subtitle {
    min-height: 100px;
}
</style>
