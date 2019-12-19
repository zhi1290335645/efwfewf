<template>
  <div class="login">
    <el-card class="login-card">
      <div class="title">
        <img src="../../assets/logo_index.png" alt />
        <div>
          <el-form style="margin-top:20px">
            <el-form-item>
              <el-input placeholder="请输入手机号"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input placeholder="请输入验证码" style="width:65%;  float:left"></el-input>
              <el-button style="float:right" plain>发送验证码</el-button>
            </el-form-item>
            <el-form-item style="margin-left:0">
              <el-checkbox v-model="checked" style="float:left">我已同意用户协议和用户条款</el-checkbox>
            </el-form-item>
            <el-form-item>
              <!-- 登录按钮 -->
              <el-button type="primary" style="width:100%">登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.login {
  background-image: url("../../assets/login_bg.jpg");
  height: 100vh;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-card {
    height: 350px;
    width: 440px;
    .title {
      text-align: center;
      img {
        height: 44px;
      }
    }
  }
}
</style>
