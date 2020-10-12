<template>
  <div class="top">
    <div class="left-box">
      <div class="icon-wrapper">
        <el-row class="el-row">
          <el-button icon="el-icon-headset" circle @click="white"></el-button>
          <el-button type="primary" icon="el-icon-loading" circle @click="blue"></el-button>
          <el-button type="success" icon="el-icon-thumb" circle @click="green"></el-button>
          <el-button type="info" icon="el-icon-message" circle @click="gray"></el-button>
          <el-button type="warning" icon="el-icon-star-off" circle @click="orange"></el-button>
          <el-button type="danger" icon="el-icon-s-promotion" circle @click="red"></el-button>
        </el-row>
      </div>
    </div>

    <div class="right-box">
      <div class="el-input el-input--small el-input--prefix">
        <input
          type="text"
          autocomplete="off"
          placeholder="搜索"
          class="el-input__inner"
          v-model="inputValue"
          @keyup.enter="toSearch"
        />
        <span class="el-input__prefix">
          <i class="el-input__icon el-icon-search"></i>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "top",
  data() {
    return {
      inputValue: "", 
    };
  },
  methods: {
    toSearch() {
      if (this.inputValue == "") {
        this.$message.error("请输入关键字！");
      }
      else {
        this.$router.push(`/search?q=${this.inputValue}`);
      }
    },

    white() {
      this.$message({
        showClose: true,
        message: "作者Duing",
        center: true,
        type: "success",
      });
    },

    blue() {
      this.$message({
        showClose: true,
        message: "音乐随行！",
        center: true,
      });
    },

    green() {
      this.$message({
        showClose: true,
        message: "每天开心！",
        center: true,
        type: "success",
      });
    },

    gray() {
      this.$message({
        showClose: true,
        message: "感谢使用！",
        center: true,
        type: "warning",
      });
    },

    orange() {
      this.$message({
        showClose: true,
        message: "努力勤奋！",
        center: true,
      });
    },

    red() {
      this.$message({
        showClose: true,
        message: "爱你哟！",
        center: true,
        type: "success",
      });
    },
  },
};
</script>

<style>
</style>