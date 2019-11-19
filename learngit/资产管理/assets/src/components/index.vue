<template>
  <div class="hello">
     <el-header style="line-height: 60px;background: #3190e8;color:white;font-size:20px;font-weight:bold;">
        <div class="right">
        <div class="header">郑州市公安局交通警察支队项目资产管理系统</div>
        <el-dropdown trigger="click">
        <i class="el-icon-setting"><span style="vertical-align: middle;margin-left:5px;padding:20px 0;">王小虎</span></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>用户管理</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      </div>
      </el-header>
    <el-container :style="styleobj">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu
      default-active="2"
      :unique-opened=true
      :router=true
      class="el-menu-vertical-demo">

      <el-menu-item-group>
        <!-- <i class="el-icon-document"></i> -->
        <span slot="title" style="font-size:15px;">资产管理</span>
      </el-menu-item-group>

      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>资产新增</span>
        </template>
          <el-menu-item index="right">我的资产</el-menu-item>
          <el-menu-item index="right2">公司资产</el-menu-item>
          <el-menu-item index="2-3">资产提交</el-menu-item>
          <el-menu-item index="2-4">资产审批</el-menu-item>
      </el-submenu>


      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>资产新增</span>
        </template>
          <el-menu-item index="3-1">我的资产</el-menu-item>
          <el-menu-item index="3-2">公司资产</el-menu-item>
          <el-menu-item index="3-3">资产提交</el-menu-item>
          <el-menu-item index="3-4">资产审批</el-menu-item>
      </el-submenu>
    </el-menu>
    </el-aside>

  <el-container>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
  </div>
</template>

<script>
export default {
 name:'index',
 data() {
      return {
        styleobj:{border:'1px solid #eee',height:''}
      }
    },
    mounted(){
      this.styleobj.height = `${document.documentElement.clientHeight - 80}px`;
    },
}
</script>

<style scoped>
    /* .header{
      line-height: 60px;
      background: #3190e8;
    } */
    .right{
      display: flex;
      justify-content: space-between;
    }
    .right >>> .el-dropdown{
      color: white;
      cursor: pointer;
    }
    .right >>> .el-icon-setting:before{
      font-size: 18px;
      vertical-align: middle;
    }
</style>
