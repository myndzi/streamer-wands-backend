const Wand = Vue.component("v-wand", {
    data() {
        return {
            snackbar: { right: true, bottom: true },
            models: { config: {} },
            temp: { config: {} }
        }
    },
    computed: {
        unsavedChanges: function () {
            return JSON.stringify(this.models) !== JSON.stringify(this.temp)
        }
    },
    beforeCreate: async function () {
        /*
        let config = await axios.get("/outcomes")
        this.$set(this.models, "outcomes", config.data)
        */
    },
    template: `<v-container fluid> <v-snackbar :timeout="0" :right="snackbar.right" :bottom="snackbar.bottom" :value="unsavedChanges">Unsaved Changes</v-snackbar>
        <v-card>
            <v-toolbar color="deep-purple" flat>
                <v-toolbar-title class="title">W.I.P</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
                <v-spacer></v-spacer>
            </v-card-text>
        </v-card>
    </v-container>`
})

let vm = new Vue({
    el: '#app',
    data: {
    },
    beforeCreate: async function () {
        
    }
})