<template>
    <v-row justify="center" >
        <GoBack/>
        <div id="twitch-embed" style="min-width:100%"></div>
        <div id="twitch_embed_script_link"></div>
    </v-row>
</template>

<script src="https://embed.twitch.tv/embed/v1.js"></script>

<script>
import GoBack from '../components/GoBack.vue'
export default {
    components:{
        GoBack
    },
    data(){
        return {
            streamID: 0,
            streamerName: '',
            gameID:'',
            gameName:'',
            streamTitle:'',
            streamViewerCount:0,
        }
    },
    methods:{
        fetchstream: function(){
            let fetchlink = 'https://api.twitch.tv/helix/channels?broadcaster_id=' + this.$route.query.streamer_ID
            fetch(fetchlink, {
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

                    this.streamID = data.data[0].broadcaster_id;
                    this.streamerName = data.data[0].broadcaster_name;
                    this.gameID = data.data[0].game_id;
                    this.gameName = data.data[0].game_name;
                    this.streamTitle = data.data[0].title;
                })
            },
        insertTwitchEmbedScript: function(){
            let twitchEmbedDiv = document.querySelector('#twitch_embed_script_link');
            let twitch_embed_script = document.createElement('script');
            twitch_embed_script.setAttribute('src', 'https://embed.twitch.tv/embed/v1.js');
            twitchEmbedDiv.appendChild(twitch_embed_script)
        },
        runTwitchEmbed: function(){
            var embed = new Twitch.Embed("twitch-embed", {
                    width: '100%',
                    height: 680,
                    channel: this.$route.params.user_name,
                    layout: 'vide-with-chat',
                });

                embed.addEventListener(Twitch.Embed.VIDEO_READY, () => {
                    var player = embed.getPlayer();
                    player.play();
                });
        }
    },
    mounted(){
        this.fetchstream();
        this.insertTwitchEmbedScript();
        setTimeout(() => this.runTwitchEmbed(), 500);
    }
}
</script>

<style>

</style>