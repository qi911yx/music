<template>
  <div class="Player">
    <!-- 头部 -->
    <div class="p-header">
      <div class="p_nav">
        <router-link to="/Index">推荐</router-link>
        <router-link to="/Toplist">排行 </router-link>
        <a href="#">歌手</a>
      </div>
    </div>
    <!-- 热门 -->
    <div class="box">热门</div>
    <!-- 歌手 -->
    <div class="musicer" v-for="(item,i) of list" :key="i">
      <img :src="item.img1v1Url" >
      <div class="name">
        <span>{{item.name}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list:[]
    }
  },
  created() {
    this.musicer();
  },
  methods: {
    musicer(){
      var url = "http://127.0.0.1:3000/top/artists?offset=0&limit=30";
      this.axios.get(url).then(result=>{
        //console.log(result.data.artists);
        this.list=result.data.artists;
        console.log(this.list)
      })
    }
  },
}
</script>
<style>
  @import "../assets/css/Player.css"
</style>