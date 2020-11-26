<template>
    <v-container v-if="visible" class="register-form mt-4">
        <v-row>
            <v-tabs>
                <v-tab @click="isRehabilitator(false)">Customer</v-tab>
                <v-tab @click="isRehabilitator(true)">Specialist</v-tab>
            </v-tabs>
            <v-col class="col-wrapper" cols="12">
                <div class="title">Register</div>
                <div class="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</div>
            </v-col>
            <v-col class="col-wrapper" cols="12">
                <v-form ref="form" v-model="isValid" lazy-validation>
                    <v-row>
                        <v-col class="col-wrapper" cols="6">
                            <v-text-field v-model="email" :rules="[v => !!v || 'Email is required']" label="E-mail" required></v-text-field>
                            <v-text-field v-model="password" type="password" :rules="[v => !!v || 'Password is required']" label="Password" required></v-text-field>
                            <v-text-field v-model="name" :rules="[v => !!v || 'Name is required']" label="Name" required></v-text-field>
                            <v-text-field v-model="lastName" :rules="[v => !!v || 'LastName is required']" label="LastName" required></v-text-field>
                            <v-text-field v-model="description" :rules="[v => !!v || 'Description is required']" label="Description" required></v-text-field>
                            <v-text-field v-model="gender" :rules="[v => !!v || 'Gender is required']" label="Gender" required></v-text-field>
                        </v-col>
                        <v-col class="col-wrapper" cols="6">
                            <v-text-field v-model="address" :rules="[v => !!v || 'Address is required']" label="Address" required></v-text-field>
                            <v-text-field v-model="country" :rules="[v => !!v || 'Country is required']" label="Country" required></v-text-field>
                            <v-text-field v-model="phone" :rules="[v => !!v || 'Phone is required']" label="Phone" required></v-text-field>
                            <!-- <v-text-field v-model="birth" :rules="[v => !!v || 'Birth is required']" label="Birth" required></v-text-field> -->
                            <v-text-field v-model="age" :rules="[v => !!v || 'Description is required']" label="Description" required></v-text-field>
                            <v-text-field v-if="!isCustomer" v-model="specialty" :rules="[v => !!v || 'Specialty is required']" label="Specialty" required></v-text-field>
                            <v-menu
                                ref="menu"
                                v-model="menu"
                                :close-on-content-click="false"
                                transition="scale-transition"
                                offset-y
                                min-width="290px"
                            >
                                <template v-slot:activator="{ on, attrs }">
                                <v-text-field
                                    v-model="birth"
                                    label="Birthday date"
                                    prepend-icon="mdi-calendar"
                                    readonly
                                    v-bind="attrs"
                                    v-on="on"
                                ></v-text-field>
                                </template>
                                <v-date-picker
                                ref="picker"
                                v-model="birth"
                                :max="new Date().toISOString()"
                                min="1950-01-01"
                                @change="save"
                                ></v-date-picker>
                            </v-menu>
                        </v-col>
                    </v-row>   
                    <v-row class="px-4">
                        <v-btn :disabled="!isValid" color="success" class="mr-4" @click="register">
                            Register
                        </v-btn>
                    </v-row>
                </v-form>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import SesionService from "../services/LoginService";
import RegisterService from "../services/RegisterService";
import SpecialistService from "../services/SpecialistService";
import CustomerService from "../services/CustomerService";

export default Vue.extend({
    name: "RegisterForm",
    data: () => ({
        name: null, 
        lastName: null, 
        description: null, 
        birth: null, 
        address: null, 
        age: null, 
        country: null, 
        gender: null, 
        phone: null, 
        email: null, 
        password: null, 
        specialty: null,
        // resources
        isValid: true, 
        isCustomer: true,
        menu: false,
    }),
    props:{
        visible: {
            type: Boolean,
            default: false,
        },
    },
    watch: {
      menu (val) {
        val && setTimeout(() => (this.$refs.picker.activePicker = ''))
      },
    },
    methods:{
        save (date) {
            this.$refs.menu.save(date)
        },

        isRehabilitator( boolean){
            this.isCustomer = !boolean
        },

        register(){
            const dataReq = { 
                email: this.email , 
                password: this.password,
                name: this.name , 
                lastName: this.lastName,
                description: this.description , 
                birth: this.birth,
                address: this.address , 
                age: parseInt(this.age),
                country: this.country , 
                gender: this.gender,
                phone: parseInt(this.phone), 
            }
            const sp = this.specialty
            async function registerCustomer(){
                const registerUser = await RegisterService.postRegister(JSON.stringify(dataReq))
                const dataReqCustomer ={
                    userId  : registerUser.data.id,
                    description: registerUser.data.description,
                }
                await CustomerService.postCustomer(JSON.stringify(dataReqCustomer))
            }
            async function registerSpecialist(){
                const registerUser = await RegisterService.postRegister(JSON.stringify(dataReq))
                const dataReqSpecialty ={
                    userId  : registerUser.data.id,
                    specialty: sp,
                }
                await SpecialistService.postSpecialist(JSON.stringify(dataReqSpecialty))
            }
            this.isCustomer? registerCustomer():registerSpecialist()
        }
    }
});
</script>

<style lang="scss" scoped>
.register-form {
    padding: 20px;
    background-color:white;
    color:#272b4e;
    max-width: 800px;
    .title{
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
