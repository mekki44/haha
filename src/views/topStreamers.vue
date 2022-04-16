<template>
    <div class="home">
        <v-row justify="center" class="mt-5 mx-0">
            <v-card class="white my-5 mx-1" max-width="350" v-for="topStreamer in listofTopStreamers" :key="topStreamer.id">
                <router-link :to="`/streamview/${topStreamer.user_name}?streamer_ID=${topStreamer.user_id}`"><img :src="`${topStreamer.thumbnail_url}`" alt=""></router-link>
                    <div class="px-2 py-1">
                        <h4 class="purple--text font-weight-semi-bold">{{topStreamer.user_name}}</h4>
                        <v-row justify="space-between" >
                            <v-col cols="10">
                            <h5 class="pt-1 font-weight-medium">{{topStreamer.stream_title}}</h5> 
                        </v-col>
                        <v-col cols="2">
                            <h5 class="font-weight-regular rara float-right"><v-icon color="purple" class="mr-3 mb-1">mdi-account-heart-outline</v-icon>{{topStreamer.viewer_count}}</h5>
                        </v-col>
                        </v-row>
                        <v-col class="px-0 py-0" justify="start"><h6 class="ml-2 roro">ASMR</h6></v-col>
                    </div>
                
            </v-card>
        </v-row>
        
    </div>
</template>

<script>
export default {
    data: function(){
        return {
            listofTopStreamers: []
        }
    },

    methods:{
        fetchToptreamers: function(){
            let fetchLink = 'https://api.twitch.tv/helix/streams?game_id=509659';

            fetch(fetchLink, {
       method: 'get',
       headers: new Headers({
         'Authorization': 'Bearer a7a2pqkpo7aa38tdewbqxw5ma9mq2k',
         'Client-ID': 'u3iq5491amzxyuwanjyc5himki637o'
       })
     })
                .then(function (response){
                    return response.json()
        })
                .then(data => {
                    console.log(data);


                    let dataListofTopStreamers = [];
                    for(var key in data.data){
                        dataListofTopStreamers.push({
                            id: data.data[key].id,
                            user_id: data.data[key].user_id,
                            user_name: data.data[key].user_name,
                            game_id: data.data[key].game_id,
                            stream_title: data.data[key].title,
                            viewer_count: data.data[key].viewer_count,
                            thumbnail_url: data.data[key].thumbnail_url.replace('{width}', '350').replace('{height}', '240'),
                            });
                    }
                    this.listofTopStreamers = [...this.listofTopStreamers, ...dataListofTopStreamers]
                    })
        },
    },
    mounted() {
        this.fetchToptreamers();
    }
}
</script>

<style>
.rara{
    color: #4A148C!important;
}
.roro{
    color: rgb(142, 142, 142)!important;
}
</style>