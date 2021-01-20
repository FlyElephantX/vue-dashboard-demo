<template>
  <div class="form">
    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
      <el-form-item label="原始密码">
        <el-input v-model="formLabelAlign.originPassword" show-password></el-input>
      </el-form-item>
      <el-form-item label="新的密码">
        <el-input v-model="formLabelAlign.newPassword" show-password></el-input>
      </el-form-item>
      <el-form-item label="确认密码">
        <el-input v-model="formLabelAlign.type" show-password></el-input>
      </el-form-item>
      <el-form-item label="">
        <el-button type="primary" @click="confirm" style="width: 100%">修改密码</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
  export default {
    name: "ModifyPassword",
    data() {
      return {
        labelPosition: 'right',
        formLabelAlign: {
          originPassword: '',
          newPassword: '',
          confirmPassword: ''
        }
      };
    },
    methods: {
      confirm() {
        console.log("修改密码");
      }
    }
  }
</script>

<style scoped>
  .form {
    width: 400px;
  }
</style>