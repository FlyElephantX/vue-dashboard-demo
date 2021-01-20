<template>
  <div>
    <nav-menu></nav-menu>
    <div class="main" :style="{'margin-left': isNavMenuOpen ? '200px' : '64px'}">
      <div class="header">
        <Header></Header>
      </div>
      <div class="tabs"><top-nav></top-nav></div>
      <el-main class="content-main">
        <router-view></router-view>
      </el-main>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState} from 'vuex';
import NavMenu from "@/components/NavMenu";
import Header from "@/components/Header";
import TopNav from "@/components/TopNav";

export default {
  name: "Home",
  components: {
    NavMenu,
    Header,
    TopNav
  },
  computed: {
    ...mapState(['isNavMenuOpen'])
  }
}
</script>

<style scoped>

.header {
  height: 40px;
  border-bottom: 1px solid #eee;
  background: #fff;
}

.main {
  margin-left: 200px;
}

.tabs {
  background: #fff;
}

.content-main {
  background: #fff;
  margin: 10px;
}

</style>