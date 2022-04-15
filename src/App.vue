<template>
  <v-app>
    <v-main class="background">
      <Navbar/>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2033079489526847"
     crossorigin="anonymous"></script>

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
