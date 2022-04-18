<template>
  <v-app>
    <v-main class="background">
      <Navbar/>
      <router-view/>
    </v-main>
    
  </v-app>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components:{
    Navbar,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
.background{
  background-color: #CE93D8!important;
}
</style>
