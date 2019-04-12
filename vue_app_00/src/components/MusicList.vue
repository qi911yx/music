<template>
  <div class="music-list">
    <!-- 歌单图片 -->
    <div class="music-img">
      <!-- <p class="tit">推荐歌单</p> -->
      <img :src="coverImage" class="m-img">
      <p class="music-count">华语速爆新歌</p>
      <p class="play-count">4103万</p>
    </div>
    <!-- 歌曲列表标题 -->
    <div class="m-title-box">
      <p class="m-title">播放全部</p>
    </div>
    <!-- 音乐列表 -->
    <div class="m-list">
      <ul class="mui-table-view mui-table-view-striped mui-table-view-condensed ">
        <li class="mui-table-view-cell" v-for="(item,i) of tracks" :key="i">
          <router-link :to="'/Play?mid=' + item.id">
            <div class="mui-table">
              <p class="count">{{i+1}}</p>
              <div class="mui-table-cell mui-col-xs-10">
                <h4 class="mui-ellipsis">{{item.name}}</h4>
                <h5>{{item.ar[0].name}}</h5>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        id: this.$route.query.id,
        tracks: [],
        coverImage: "",
      }
    },
    created() {
      this.MusicList();
    },
    methods: {
      MusicList() {
        var url = "http://127.0.0.1:3000/playlist/detail?id=" + this.id;
        this.axios.get(url).then(result => {
          this.coverImage = result.data.playlist.coverImgUrl
          // console.log( this.coverImage)
          this.tracks = result.data.playlist.tracks
          console.log(this.tracks)
        })
      },
    }
  }
</script>
<style>
 @import "../assets/css/MusicList.css"
</style>