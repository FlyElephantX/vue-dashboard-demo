<template>
  <el-container>
    <el-header></el-header>
    <el-main class="main">
      <h1 class="title">Elephant-管理系统</h1>
      <el-form>
        <el-form-item>
          <el-input placeHolder="请输入用户名" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input placeholder="请输入密码" v-model="form.password" show-password></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login" class="login">登录</el-button>
        </el-form-item>
      </el-form>
    </el-main>
    <el-footer>
      <el-dialog
          title="提示"
          :visible.sync="dialogVisible"
          width="30%"
          center
          :before-close="handleClose">
        <div class="el-dialog-content">
          <span>{{dialogTip}}</span>
        </div>
        <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
      </el-dialog>
    </el-footer>
  </el-container>

</template>

<script>
  import Qs from 'qs'

  export default {
    name: "Login",
    data() {
      return {
        form: {
          name: '',
          password: ''
        },
        dialogVisible: false,
        dialogTip: ''
      }
    },
    methods: {
      login() {
        console.log('登录按钮点击：' + this.form.name + '---密码:' + this.form.password);
        // let param = { name: this.form.name, password: this.form.password}
        // let param = new URLSearchParams()
        // param.append('name', this.form.name)
        // param.append('password', this.form.password)

        let param = { name: this.form.name, password: this.form.password}
        param = Qs.stringify(param)
        this.$axios.post('http://127.0.0.1:7025/home/login', param).then((res) => {
          console.log("返回数据:" + JSON.stringify(res.data));
          let data = res.data;
          if (data.status == 200) {
              sessionStorage.loginStatus = 'login';
              this.$router.push('/home');
          } else {
              this.dialogTip = data.message;
              this.dialogVisible = true;
          }
        }).catch(err => {
          console.log("错误信息:" + err)
        })
        // if (this.form.name.length == 0) {
        //   this.dialogTip = '用户名不能为空';
        //   this.dialogVisible = true;
        //   return;
        // }
        // if (this.form.password.length == 0) {
        //   this.dialogTip = '密码不能为空';
        //   this.dialogVisible = true;
        //   return;
        // }
        // if (this.form.name == 'admin' && this.form.password == 'admin') {
        //   sessionStorage.loginStatus = 'login';
        //   this.$router.push('/home');
        // } else {
        //   this.dialogTip = '用户名或者密码错误';
        //   this.dialogVisible = true;
        // }
      },
      handleClose(done) {
        this.$confirm('确认关闭？')
            .then(_ => {
              done();
            })
            .catch(_ => {});
      }
    }
  }
</script>

<style scoped>

.title {
  text-align: center;
}

.main {
  width: 400px;
  margin: auto;
}

.login {
  width: 100%;
}

.el-dialog-content {
  text-align: center;
}

</style>