<template>
<!-- 卡片组件 -->
<el-card>
    <!-- 面包屑给了卡片的具名插槽 -->
    <bread-crumb slot="header">
    <!-- 插槽内容 -->
    <template slot="title">评论列表</template>
    </bread-crumb>
     <!-- body内容 -->
   <el-table :data="list">
       <!-- 列组件  lable 表头-->
       <el-table-column  prop="title"   width="600" label="标题"></el-table-column>
       <el-table-column :formatter="formatterBool" prop="comment_status"  label="评论状态"></el-table-column>
       <el-table-column  prop="total_comment_count"  label="总评论数"></el-table-column>
       <el-table-column  prop="fans_comment_count"  label="粉丝评论数"></el-table-column>
       <el-table-column    label="操作">
           <!-- 放组件 -->
           <template slot-scope="obj">
               <!-- {{ obj.row.comment_status }} -->
           <el-button type="text">修改</el-button>
           <el-button type="text">{{ obj.row.comment_status ? '关闭评论' : '打开评论'}}</el-button>
           </template>
       </el-table-column>
   </el-table>
</el-card>
</template>

<script>
export default {
  data () {
    return {
      list: []
    }
  },
  methods: {
    // 请求评论列表数据
    getComment () {
      // axios默认是get类型
      // query 参数/路由参数 地址参数 get参数 axios params
    //   body参数给data
    //   身份信息给 Headers
      this.$axios({ url: '/articles', params: { response_type: 'comment' } }).then(result => {
        this.list = result.data.results// 后去评论列表数据
      })
    },
    // 定义一个转布尔值方法
    formatterBool (row, column, cellValue, index) {
      // row 当前行数据
      // column 当前列属性
      // cellValue当前单元格的值
      // index当前下标
      return cellValue ? '正常' : '关闭'
    }
  },
  created () {
    this.getComment()
  }

}
</script>t

<style>

</style>
