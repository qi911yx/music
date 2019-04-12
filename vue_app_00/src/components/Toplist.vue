<template>
  <div class="top-list">
    <!-- 头部 -->
    <div class="t-header">
      <div class="t_nav">
        <a href="#">排行榜</a>
      </div>
    </div>
    <!-- 官方榜 -->
    <div class="title">官方榜</div>
    <div class="guanf" v-for="(item,i) of  listImg" :key="i">
      <img :src="item.coverImgUrl" class="guan-img">
      <div class="g-info">
        <p>1.{{item.tracks[0].first}} - {{item.tracks[0].second}}</p>
        <p>2.{{item.tracks[1].first}} - {{item.tracks[1].second}}</p>
        <p>3.{{item.tracks[2].first}} - {{item.tracks[2].second}}</p>
      </div>
    </div>
    <!-- 推荐榜 -->
    <div class="title">推荐榜</div>
    <div class="music_tj">
      <ul>
        <li v-for="(item,i) of TjImg" :key="i">
          <img :src="item.coverImgUrl" class="tj_img">
          <p class="name_b">{{item.name}}</p>
        </li>
      </ul>
    </div>
    <div class="title">更多榜单</div>
    <div class="music_tj">
      <ul>
        <li v-for="(item,i) of QjImg" :key="i">
          <img :src="item.coverImgUrl" class="tj_img">
          <p class="name_b">{{item.name}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        listImg: [],
        TjImg: [],
        QjImg: []
      }
    },
    created() {
      this.toplist();
    },
    methods: {
      toplist() {
        var url = "http://127.0.0.1:3000/toplist/detail";
        this.axios.get(url).then(result => {
          //console.log(result)
          // 官方榜
          this.listImg = result.data.list;
          //console.log(this.listImg)
          this.listImg = this.listImg.slice(0, 4)
          // 推荐榜
          this.TjImg = result.data.list
          this.TjImg = this.TjImg.slice(4, 10)
          //console.log(this.TjImg)
          // 全球榜
          this.QjImg = result.data.list
          this.QjImg = this.QjImg.slice(10, 16);
        })
      }
    },
  }
</script>
<style>
  @import "../assets/css/Toplist.css"
</style>