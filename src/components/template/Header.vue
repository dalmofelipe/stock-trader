<template>
    <v-toolbar color="indigo" dark fixed app>
        <v-toolbar-side-icon @click="swapDrawer"></v-toolbar-side-icon>
        <v-toolbar-title>STOCK<span class="font-weight-light">TRADER</span></v-toolbar-title>
        
        <v-toolbar-items class="hidden-sm-and-down ml-3">
            <v-btn flat to="/">Início</v-btn>
            <v-btn flat to="/portfolio">Portifólio</v-btn>
            <v-btn flat to="/stocks">Ações</v-btn>
        </v-toolbar-items>

        <v-spacer></v-spacer>
        
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn flat >Finalizar Dia</v-btn>
            <!-- um menu dropdown -->
            <v-menu offset-y>
                <v-btn flat slot="activator">Salvar & Carregar</v-btn>
                <v-list>
                    <v-list-tile >
                        <v-list-tile-title>Salva</v-list-tile-title>
                    </v-list-tile>
                    <v-list-tile >
                        <v-list-tile-title>Carregar Dados</v-list-tile-title>
                    </v-list-tile>
                </v-list>
            </v-menu>
        </v-toolbar-items>

        <v-toolbar-items>
            <v-layout align-center>
                <span class="gray--text text--darken-2 text--uppercase ml-3">
                    {{ funds | moeda }}
                </span>
            </v-layout>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default {
    data() {
        return {
            hideMenus: false
        }
    },
    methods: {
        /* o status da navbar é controlado pelo state do vuex
        Poderia ser feito por emissão de eventos */
        swapDrawer() {
            this.$store.state.drawer = !this.$store.state.drawer
        }
    },
    computed: {
        // getters serão mapeados como metodos computados
        funds() {
            return this.$store.getters.funds
        }
    }
}
</script>

<style>

</style>
