<template>
  <div id="app">
      <div class="home">
      <div>
    <Menu :accordion=true>
        <MenuGroup title="资产管理">
            <Submenu name="1">
            <template slot="title">
                <Icon type="logo-usd" />
                资产新增
            </template>
                <MenuItem name="1-1" @click.native="luyou('AddAssets')">我的资产</MenuItem>
                <MenuItem name="1-2" @click.native="luyou('CompanyAssets')">公司资产</MenuItem>
                <MenuItem name="1-3">资产提交</MenuItem>
                <MenuItem name="1-4">资产审批</MenuItem>
        </Submenu>
            <Submenu name="2">
            <template slot="title">
                <Icon type="logo-designernews" />
                资产转移
            </template>
                <MenuItem name="2-1">资产转移</MenuItem>
                <MenuItem name="2-2">资产转移提交</MenuItem>
                <MenuItem name="2-3">资产转移审批</MenuItem>
        </Submenu>
        <Submenu name="3">
            <template slot="title">
                <Icon type="ios-construct" />
                资产大修
            </template>
                <MenuItem name="3-1">资产大修</MenuItem>
                <MenuItem name="3-2">资产大修提交</MenuItem>
                <MenuItem name="3-3">资产大修审批</MenuItem>
        </Submenu>
        <Submenu name="4">
            <template slot="title">
                <Icon type="md-trash" />
                资产拆除
            </template>
                <MenuItem name="4-1">资产拆除</MenuItem>
                <MenuItem name="4-2">资产拆除提交</MenuItem>
                <MenuItem name="4-3">资产拆除审批</MenuItem>
        </Submenu>
        <Submenu name="5">
            <template slot="title">
                <Icon type="ios-clipboard" />
                资产盘点
            </template>
                <MenuItem name="5-1">资产盘点</MenuItem>
                <MenuItem name="5-2">资产盘点提交</MenuItem>
                <MenuItem name="5-3">资产盘点审批</MenuItem>
        </Submenu>
        <Submenu name="6">
            <template slot="title">
                <Icon type="ios-folder-open" />
                资产管理
            </template>
                <MenuItem name="6-1">资产类别管理</MenuItem>
                <MenuItem name="6-2">资产项目管理</MenuItem>
                <MenuItem name="6-3">资产系统管理</MenuItem>
        </Submenu>
        <Submenu name="7">
            <template slot="title">
                <Icon type="ios-pie" />
                资产统计分析
            </template>
                <MenuItem name="7-1">今日数据</MenuItem>
                <MenuItem name="7-2">资产统计</MenuItem>
        </Submenu>
        </MenuGroup>
        <MenuGroup title="项目管理">
           <Submenu name="8">
            <template slot="title">
                <Icon type="ios-color-filter" />
                立项管理
            </template>
                <MenuItem name="8-1" @click.native="luyou('Addproject')">新增上级项目</MenuItem>
                <MenuItem name="8-2">新增本级项目</MenuItem>
                <MenuItem name="8-3">新增项目提交</MenuItem>
        </Submenu>
        <Submenu name="9">
            <template slot="title">
                <Icon type="logo-euro" />
                招标管理
            </template>
                <MenuItem name="9-1">新增招标</MenuItem>
                <MenuItem name="9-2">新增招标提交</MenuItem>
        </Submenu>
        <Submenu name="10">
            <template slot="title">
                <Icon type="ios-albums" />
                合同管理
            </template>
                <MenuItem name="10-1">新增合同</MenuItem>
                <MenuItem name="10-2">新增合同提交</MenuItem>
        </Submenu>
        <Submenu name="11">
            <template slot="title">
                <Icon type="ios-glasses" />
                审计管理
            </template>
                <MenuItem name="11-1">审计结算</MenuItem>
                <MenuItem name="11-2">审计决算</MenuItem>
        </Submenu>
        <Submenu name="12">
            <template slot="title">
                <Icon type="ios-paper" />
                档案管理
            </template>
                <MenuItem name="12-1" @click.native="luyou('ArchivesViewing')">档案查看</MenuItem>
                <MenuItem name="12-2" @click.native="luyou('Modify')">修改档案信息</MenuItem>
                <MenuItem name="12-3">档案信息提交</MenuItem>
        </Submenu>
        <Submenu name="13">
            <template slot="title">
                <Icon type="md-thumbs-up" />
                竣工验收管理
            </template>
                <MenuItem name="13-1">新增竣工验收</MenuItem>
                <MenuItem name="13-2">新增竣工验收提交</MenuItem>
        </Submenu>
        </MenuGroup>
    </Menu>
    </div>
    <div style="width:100%">
         <transition name="fade" mode="out-in">
        <router-view/>
        </transition>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
     
    }
  },
  methods:{
      luyou(zhi){
          this.$router.push({
              name:zhi
          })
      },
  },
  mounted(){
         
      }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
    .home{
        display: flex;
        justify-content: space-between;
    }
</style>
