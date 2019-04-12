<template>
  <div class="play">
    <!-- 背景图 -->
    <img :src="img_title.picUrl" class="bg-img">
    <!-- 歌手名和歌名 -->
    <div class="m-top">
      <p class="m-name">{{music_player.name}}</p>
      <p class="m-player">{{music_title.name}}</p>
    </div>
    <!-- 中间图 -->
    <div class="play-img">
      <img :src="img_title.picUrl">
    </div>
    <!-- 图标 -->
    <div class="icon">
      <ul>
        <li>
          <img src="../assets/img/9.png">
        </li>
        <li>
          <img src="../assets/img/1.png">
        </li>
        <li>
          <div :class="playIcon" @click="song_play()"></div>
        </li>
        <li>
          <img src="../assets/img/6.png">
        </li>
      </ul>
    </div>
    <audio :src="music_song.url" controls class="audio" ref="audio" hidden></audio>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        mid: this.$route.query.mid,
        img_title: [],
        music_title: [],
        music_player: [],
        music_song: [],
        playState: true
      }
    },
    computed: {
      playIcon() {
        return this.playState ? 'song-play-play' : 'song-play-pause'
      }
    },
    created() {
      this.img()
      this.song()
    },
    methods: {
      song_play() {
        this.a1 = this.$refs.audio;
        if (this.playState) {
          this.playState = false
          this.a1.play();
        } else {
          this.playState = true
          this.a1.pause();
        }
      },
      song() {
        var url = "http://127.0.0.1:3000/song/url?id=" + this.mid;
        this.axios.get(url).then(result => {
          console.log(result.data.data[0])
          this.music_song = result.data.data[0]
        })
      },
      img() {
        var url = "http://127.0.0.1:3000/song/detail?ids=" + this.mid;
        this.axios.get(url).then(result => {
          this.music_player = result.data.songs[0]
          this.music_title = result.data.songs[0].ar[0]
          this.img_title = result.data.songs[0].al
        })
      }
    },
  }
</script>
<style>
 @import "../assets/css/Play.css"
</style>