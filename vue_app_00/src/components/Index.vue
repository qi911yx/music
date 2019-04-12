<template>
  <div class="music_index">
    <!-- 头部 -->
    <div class="m-header">
      <div class="m_nav">
        <a href="#">推荐</a>
        <router-link to="/Toplist">排行 </router-link>
        <router-link to="/Player">歌手</router-link>
      </div>
      <!-- 轮播图 -->
      <mt-swipe :auto="1000">
        <mt-swipe-item v-for="(item,i) of img" :key="i">
          <img :src="item.imageUrl" />
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <!-- 歌单推荐 -->
    <div class="music_tj">
      <p>推荐歌单</p>
      <ul>
        <li v-for="(item,i) of Tj" :key="i">
          <router-link :to="'/MusicList?id=' + item.id">
            <img :src="item.picUrl" class="tj_img">
            <p class="count">{{(item.playCount/10000).toFixed(0)}}万</p>
            <p class="name_m">{{item.name}}</p>
          </router-link>
        </li>
      </ul>
    </div>
    <!-- 歌曲推荐 -->
    <div class="music-new">
      <p class="bt">最新音乐</p>
      <div class="music_list" v-for="(item,i) of New" :key="i">
        <a href="#" class="a1">
          <span class="list-title">{{item.name}}</span>
          <span class="title_two">{{item.song.album.alias[0]}}</span>
          <span class="list-musicer">{{item.song.artists[0].name}}--{{item.name}}</span>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        img: [],
        Tj: [],
        New: []
      }
    },
    created() {
      this.indexImg();
      this.indexTj();
      this.indexnew();
    },
    methods: {
      indexnew() {
        var url = "http://127.0.0.1:3000/personalized/newsong";
        this.axios.get(url).then(result => {
          //console.log(result);
          this.New = result.data.result;
          //console.log(this.New);
        })
      },
      indexTj() {
        var url = "http://127.0.0.1:3000/personalized";
        this.axios.get(url).then(result => {
          //console.log(result);
          this.Tj = result.data.result;
          //console.log(this.Tj);
        })
      },
      indexImg() {
        var url = "http://127.0.0.1:3000/banner"
        this.axios.get(url).then(result => {
          //console.log(result.data.banners);
          this.img = result.data.banners
          //console.log(this.img)
        })
      }
    },
  }
</script>
<style>
  @import "../assets/css/index.css"
</style>
