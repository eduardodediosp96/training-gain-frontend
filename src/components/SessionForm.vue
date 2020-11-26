<template>
    <v-container class="register-form mt-4">
    
        <v-row>
    
            <v-col class="col-wrapper" cols="12">
    
                <div class="title">New Session</div>
    
                <div class="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</div>
    
            </v-col>
    
            <v-col class="col-wrapper" cols="12">
    
                <v-form ref="form" v-model="isValid" lazy-validation>
    
                    <v-row>
    
                        <v-col class="col-wrapper" cols="12">
    
                            <v-text-field v-model="title" :rules="[v => !!v || 'Title is required']" label="Title" required></v-text-field>
    
                            <v-text-field v-model="description" :rules="[v => !!v || 'Description is required']" label="Description" required></v-text-field>
    
                            <v-menu ref="menu" v-model="menu" :close-on-content-click="false" transition="scale-transition" offset-y min-width="290px">
    
                                <template v-slot:activator="{ on, attrs }">
    
                                    <v-text-field
    
                                        v-model="startDate"
    
                                        label="Date"
    
                                        prepend-icon="mdi-calendar"
    
                                        readonly
    
                                        v-bind="attrs"
    
                                        v-on="on"
    
                                    ></v-text-field>
</template>
                                <v-date-picker
                                ref="picker"
                                v-model="startDate"
                                :max="new Date().toISOString()"
                                min="1950-01-01"
                                @change="save"
                                ></v-date-picker>
                            </v-menu>
                            <div>Hora:</div>
                            <v-time-picker
                            v-model="startHour"
                            :allowed-hours="allowedHours"
                            :allowed-minutes="allowedMinutes"
                            class="mt-4"
                            format="24hr"
                            scrollable
                            min="9:30"
                            max="22:15"
                            ></v-time-picker>
                            <v-time-picker
                            v-model="endHour"
                            :allowed-hours="allowedHours"
                            :allowed-minutes="allowedMinutes"
                            class="mt-4"
                            format="24hr"
                            scrollable
                            min="9:30"
                            max="22:15"
                            ></v-time-picker>
                        </v-col>
                    </v-row>   
                    <v-row class="px-4">
                        <v-btn :disabled="!isValid" color="success" class="mr-4" @click="register">
                            Register Session
                        </v-btn>
                    </v-row>
                </v-form>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import SesionService from "../services/SesionService";
import SpecialistService from "../services/SpecialistService";
import { mapGetters } from 'vuex';

export default Vue.extend({
    name: "SessionForm",
    data: () => ({
        title: null,
        description: null,
        startDate: null,
        specialistId: null,
        startHour: null,
        endHour: null,
        // resources
        isValid: true,
        menu: false,
    }),
    props: {

    },
    watch: {
        menu(val) {
            val && setTimeout(() => (this.$refs.picker.activePicker = ''))
        },
    },
    methods: {
        save(date) {
            this.$refs.menu.save(date)
        },

        isRehabilitator(boolean) {
            this.isCustomer = !boolean
        },

        async register() {
            const specialist = await SpecialistService.getSpecialist();
            console.log("especialistas",specialist.data.filter(x => x.userId == this.user.id )[0].id)
            const dataReq = {
                title: this.title,
                description: this.description,
                startDate: "2020-11-26T17:28:06.794Z",
                specialistId: specialist.data.filter(x => x.userId == this.user.id )[0].id,
                startHour: this.startHour,
                endHour: this.endHour,
            }
            SesionService.postSesions(this.token, JSON.stringify(dataReq))
        }
    },
    computed: {
        // this.user = this.$store.getters.doneTodosCount
        ...mapGetters(['token', 'user'])
    }
});
</script>

<style lang="scss" scoped>
.register-form {
    padding: 20px;
    background-color: white;
    color: #272b4e;
    max-width: 600px;
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
