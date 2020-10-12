<template>
  <div class="index">
    <div class="nav">
      <ul>
        <li>
          <router-link to="/discovery">
            <i class="el-icon-position"></i>
            发现音乐
          </router-link>
        </li>
        <li>
          <router-link to="/playlist">
            <i class="el-icon-present"></i>
            推荐歌单
          </router-link>
        </li>
        <li>
          <router-link to="/newSong">
            <i class="el-icon-headset"></i>
            最新音乐
          </router-link>
        </li>
        <li>
          <router-link to="/newMV">
            <i class="el-icon-film"></i>
            最新MV
          </router-link>
        </li>
      </ul>
    </div>
    <div class="main">
      <router-view></router-view>
    </div>

    <div class="musicInfo">
      <span class="info">正在播放：</span>
      <span class="info">{{"《"+musicName+"》~ "}}</span>
      <span class="info">{{singer}}</span>
    </div>

    <div class="player">
      <audio :src="musicUrl" controls autoplay></audio>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      musicUrl: "",
      musicName: "",
      singer: "",
    };
  },
};
</script>
	
<style>
</style>