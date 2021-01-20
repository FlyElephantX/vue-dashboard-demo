<template>
  <el-row>
    <el-col :span="2" class="header-wrap">
      <el-button class="no-b" :icon="iconName" @click="toggleMenuOpen"></el-button>
    </el-col>
    <el-col :span="2" :offset="20" class="header-wrap text-r">
      <el-dropdown @command="personInfo">
        <el-button class="no-b">
          <i class="fa fa-user-circle fa-user" aria-hidden="true"></i> <i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="userInfo">
            <i class="fa fa-address-card-o"></i>
            个人信息</el-dropdown-item>
          <el-dropdown-item command="logOut">
            <i class="fa fa-power-off"></i>
            登出</el-dropdown-item>
          <el-dropdown-item command="modifyPassword">
            <i class="fa fa-wrench"></i>
            修改密码</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-col>
  </el-row>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "Header",
  computed: {
    ...mapState(['isNavMenuOpen']),
    iconName() {
      return this.isNavMenuOpen ? 'fa fa-outdent' : 'fa fa-indent'
    }
  },
  methods: {
    toggleMenuOpen() {
      this.$store.commit('toggleMenuOpen')
    },
    personInfo(command) {
      if (command == 'userInfo') {
        console.log("查看个人信息");
        this.$router.push({ path: '/home/userInfo'})
      } else if(command == 'logOut') {
        console.log("登录退出,返回首页");
        sessionStorage.loginStatus = ''
        this.$router.push({ path: '/'})
      } else if(command == 'modifyPassword'){
        console.log("修改密码");
        this.$router.push({ path: '/home/modifyPassword'})
      } else {
        console.log("点击进入");
      }
    },
    userInfo() {
      console.log("查看个人信息");
      this.$router.push({ path: '/home/userInfo'})
    },
    logOut() {
      console.log("登录退出,返回首页");
      sessionStorage.loginStatus = ''
      this.$router.push({ path: '/'})
    },
    modifyPassword() {
      console.log("修改密码");
      this.$router.push({ path: '/home/modifyPassword'})
    }
  }
}
</script>

<style scoped>

.no-b{
  border: none!important
}
.text-r {
  text-align: right
}

</style>