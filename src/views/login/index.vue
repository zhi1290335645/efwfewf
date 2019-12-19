<template>
  <div class="login">
    <el-card class="login-card">
      <div class="title">
        <img src="../../assets/logo_index.png" alt />
        <div>
          <!-- 表单验证 表单容器 el-form 需要绑定modle属性    给一个rules 属性绑定验证规则 对象-->
          <el-form  ref="myForm" style="margin-top:20px" :model="loginForm" :rules="loginRules">
            <!--表单域el-form-item  表单校验时 给一个prop 要检验的字段  -->
            <el-form-item prop="mobile">
              <el-input placeholder="请输入手机号"  v-model="loginForm.mobile"></el-input>
            </el-form-item>
            <el-form-item prop="code" >
              <el-input placeholder="请输入验证码" style="width:65%;  float:left" v-model="loginForm.code"></el-input>
              <el-button style="float:right" plain>发送验证码</el-button>
            </el-form-item>
            <el-form-item style="margin-left:0" prop="check">
              <el-checkbox v-model="loginForm.check" style="float:left">我已同意用户协议和用户条款</el-checkbox>
            </el-form-item>
            <el-form-item>
              <!-- 登录按钮 -->
              <el-button @click="submitLogin" type="primary" style="width:100%">登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  // 在data中定义一个表单数据对象
  data () {
    return {
      // 定义一个表单数据对象
      loginForm: {
        mobile: '', // 手机号
        code: '', // 验证码
        check: 'fales'// 是否勾选
      },
      loginRules: {
        //  验证规则  验证登录表单的key(字段名) :value(数组)
        // required true 必填
        mobile: [{ required: true, message: '请输入您的手机号' }, { pattern: /^1[3456789]\d{9}$/, message: '手机号格式不正确' }],
        code: [{ required: true, message: '请输入您的验证码' }, { pattern: /^\d{6}$/, message: '验证码格式不正确' }],
        check: [{ validator: function (rule, value, callback) {
        // value 指的是校验的字段值
          if (value) {
          // 校验通过 放过去
          // 执行callback()
            callback()
          } else {
          // 校验不通过 要提示信息
            callback(new Error('请选中条款协议'))
          }
        } }]
      }

    }
  },
  methods: {
    submitLogin () {
      // 提交登陆表单
      this.$refs.myForm.validate((isOK) => {
        if (isOK) {
          // 认为前端校验表单成功 然后发送用户名和密码到后台校验
          this.$axios({
            url: '/authorizations', // 请求地址
            method: 'post',
            data: this.loginForm
          }).then(result => {
            window.localStorage.setItem('user-token', result.data.data.token)// 前端缓存令牌
            this.$router.push('/home')
            // 成功以后才会进入到then
          }).catch(() => {
            this.$message({
              message: '您的手机号或验证码不正确',
              type: 'warning' })
          })
        }
      })
    }
  }
}
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
