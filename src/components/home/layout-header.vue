<template>
  <!-- 头部组件 -->
  <el-row class="layout-header" type="flex" align="middle" justify="space-between">
    <!-- 左侧 -->
    <el-col class="left" :span="6">
      <!-- 左侧图标 -->
      <i @click="collaspseOrOpen" :class="{'el-icon-s-unfold': collaspse,'el-icon-s-fold': !collaspse}"></i>
      <span class="title">江苏传智播客教育科技股份有限公司</span>
    </el-col>
    <!-- 右侧 -->
    <el-col class="right" :span="4">
      <el-row  type="flex" justify="end" align="middle">
        <!-- 这是一个变量的图片 -->
        <img  :src="!userInfo.photo ? userInfo.photo : defaultImg" alt="12">

        <!-- 下拉菜单 -->
        <el-dropdown @command="handle">
          <span>{{ userInfo.name }}</span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="info">个人信息</el-dropdown-item >
            <el-dropdown-item command="git">git地址</el-dropdown-item>
            <el-dropdown-item command="lgout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
import eventBus from '../../utils/eventBus' // 引入公共实例
export default {
  data () {
    return {
      collaspse: false, // 是否折叠
      userInfo: {}, // 用户信息
      defaultImg: require('../../assets/collect_select.png')// 先把地址转换成变量 然后给上边的地址使用
    }
  },
  created () {
    // let token = window.localStorage.getItem('user-token') 获取令牌
    // 查询数据
    this.getUserInfo()
    // 实例创建完毕 立刻监听
    eventBus.$on('updateUserInfoSuccess', () => {
      // 别人告诉你 它更新了数据 应该立刻处理
      this.getUserInfo()
    })
  },
  methods: {
    collaspseOrOpen () {
      // 直接取反
      this.collaspse = !this.collaspse // 直接返回
      // 通知要改变宽度的组件
      eventBus.$emit('changeCollapse') // 改变了折叠状态
    },
    getUserInfo () {
      this.$axios({
        url: '/user/profile'
      //   headers参数
      }).then(result => {
        this.userInfo = result.data // 获取用户个人信息
      })
    },
    handle (commad) {
      // 区分点击的菜单项
      if (commad === 'lgout') {
        // 推出
        window.localStorage.removeItem('user-token')// 删除用户令牌
        this.$router.push('/login')
      } else if (commad === 'git') {
        window.location.href = 'https://github.com/zhi1290335645/efwfewf'
      } else if (commad === 'info') {
        this.$router.push('/home/account') // 跳转到账户信息页面
      }
    }
  }
}
</script>

<style lang='less' scoped>
.layout-header {
  height: 60px;
  .left {
    font-size: 18px;
    .title {
      margin-left: 4px;
      color: #2c3e50;
      font-size: 16px;
    }
    i {
            font-size:22px;
          }
  }
  .right {
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 5px;
    }
  }
}
</style>
