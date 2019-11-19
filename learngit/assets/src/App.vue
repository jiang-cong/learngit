<template>
  <div id="app">
    <header>
      <div>郑州市公安局交通警察支队项目资产管理系统</div>
      <div>
         <Dropdown trigger="click" style="margin-left: 20px">
        <div style="color:white;font-size:15px;font-weight:400;cursor: pointer;">用户管理<Icon type="ios-arrow-down"></Icon></div>
        <Dropdown-menu slot="list">
            <Dropdown-item>个人中心</Dropdown-item>
            <Dropdown-item>用户管理</Dropdown-item>
            <Dropdown-item>退出登录</Dropdown-item>
        </Dropdown-menu>
    </Dropdown>
      </div>
    </header>
    <div>
      <transition name="fade" mode="out-in">
  <router-view/>
  </transition>
    </div>
  </div>
</template>

<script>
export default {
     name:'app',
      data () {
          return {
              visible: false
          }
      },
      methods: {
          handleOpen () {
              this.visible = true;
          },
          handleClose () {
              this.visible = false;
          }
      }
  }
</script>

<style scoped>
.fade-enter {
  opacity:0;
}
.fade-leave{
  opacity:1;
}
.fade-enter-active{
  transition:opacity .5s;
}
.fade-leave-active{
  opacity:0;
  transition:opacity .5s;
}
header{
  height: 50px;
  padding: 0 25px;
  color: white;
  background: #3190e8;
  display: flex;
   justify-content: space-between;
}
header div{
  font-size: 20px;
  font-weight: bold;
  line-height: 50px;
}
</style>
