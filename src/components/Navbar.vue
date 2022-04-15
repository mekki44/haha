<template>
    <div>
        <v-app-bar
      color="purple lighten-1"
    >
      <v-app-bar-nav-icon class="white--text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-toolbar-title class="white--text mr-10">Booba</v-toolbar-title>
    </v-app-bar>
    <template >
      <v-tabs color="purple lighten-1">
        <v-row>
          
          <v-tab style="width:50%;" router to="/">ASMR</v-tab>
          <v-tab style="width:50%;" router to="/tubs">Hot Pool</v-tab>
        </v-row>
      </v-tabs>
    </template>
    <v-navigation-drawer
    class="purple lighten-1"
      v-model="drawer"
      absolute
      left
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item class="white--text mb-2">
           <v-row justify="center"><v-btn router to="/" width="90%">ASMR</v-btn></v-row>
          </v-list-item>

          <v-list-item class="white--text mb-2">
            <v-row justify="center"><v-btn router to="/tubs" width="90%">Hot Pool</v-btn></v-row>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    </div>
    
</template>

<script>
export default {
    setup() {
        
    },
    data: () => ({
      drawer: false,
      group: null,
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
}
</script>