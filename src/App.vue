<template>
  <div id="app">
    <v-app id="inspire">
      <v-navigation-drawer fixed v-model="drawer" app>
        <v-list dense>
          <v-list-tile to="/" @click>
            <v-list-tile-action><v-icon>home</v-icon></v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Início</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile to="/portfolio" @click>
            <v-list-tile-action><v-icon>contact_mail</v-icon></v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Portfólio</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile to="/stocks" @click>
            <v-list-tile-action><v-icon>trending_up</v-icon></v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Ações</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <v-toolbar color="indigo" dark fixed app>
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title>STOCK<span class="font-weight-light">TRADER</span></v-toolbar-title>
      </v-toolbar>
      <v-content>
        <v-container fluid fill-height>
            <v-layout justify-center align-center>
                <v-flex text-xs-center>
                    
                    <h1>Negocie na bolsa de valores</h1>

                    <keep-alive>
                        <router-view></router-view>
                    </keep-alive>

                    <v-tooltip left>
                        <v-btn icon large :href="source" target="_blank" slot="activator">
                        <v-icon large>code</v-icon>
                        </v-btn>
                        <span>Source</span>
                    </v-tooltip>
                    
                </v-flex>
            </v-layout>
        </v-container>
      </v-content>
      <v-footer color="indigo" app inset >
          <v-layout justify-center align-center>
            <span class="white--text" text-xs-center>
                Desenvolvido com 
                <span><v-icon color="red">favorite</v-icon></span> 
                por dalmofelipe.
            </span>
        </v-layout>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: true
    };
  },
  props: {
    source: String
  }
};
</script>

<style>
</style>
