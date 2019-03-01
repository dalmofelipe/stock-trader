<template>
    <v-toolbar color="indigo" dark fixed app>
        <v-toolbar-side-icon @click="swapDrawer"></v-toolbar-side-icon>
        <v-toolbar-title>STOCK<span class="font-weight-light">TRADER</span></v-toolbar-title>
    </v-toolbar>
</template>

<script>
export default {
    methods: {
        /* o status da navbar é controlado pelo state do vuex
        Poderia ser feito por emissão de eventos */
        swapDrawer() {
            this.$store.state.drawer = !this.$store.state.drawer
        }
    }
}
</script>

<style>

</style>
