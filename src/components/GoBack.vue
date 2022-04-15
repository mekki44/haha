<template>
    <v-btn fab fixed bottom left  color="purple lighten-1" @click="goBack()">
        <v-icon class="white--text">mdi-arrow-left</v-icon>
    </v-btn>
</template>

<script>
export default {
    methods:{
        goBack: function(){
           this.$router.go(-1)
        }
    }
}
</script>