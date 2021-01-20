<template>
  <el-row class="tac">
    <el-col :span="24">
      <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          unique-opened
          router
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          :collapse="!isNavMenuOpen"
          active-text-color="#ffd04b">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-s-home"></i>
            <span>首页</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/home/form">录入信息</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-s-management"></i>
            <span>管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/home/personInfoList">员工管理</el-menu-item>
            <el-menu-item index="/home/systemInfoList">系统管理</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
import {mapGetters, mapState} from 'vuex'
  export default {
    name: "NavMenu",
    computed: {
      ...mapState(['isNavMenuOpen'])
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>

.tac {
  position: fixed;
  top: 0px;
  bottom: 0px;
  background-color: rgb(84, 92, 100);
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}

</style>