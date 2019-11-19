import Vue from 'vue'
import Router from 'vue-router'
import Menu from '@/components/archives/menu'//首页导航
import AddAssets from '@/components/assets/newAssets/addAssets'//资产新增-我的资产
import AddContract from '@/components/assets/newAssets/addContract'//资产新增-我的资产-新增页面
import CompanyAssets from '@/components/assets/newAssets/companyAssets'//资产新增-公司资产页面
import CompanyApproval from '@/components/assets/newAssets/companyApproval'//资产新增-公司资产-审批页

import ArchivesViewing from '@/components/archives/archivesViewing'//档案管理模块-档案查看
import Modify from '@/components/archives/modify'//档案管理模块-修改档案

import Addproject from '@/components/projectManagement/addProject'//立项管理模块-新增上级项目

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Menu',
      component: Menu,
      children:[
      {//资产新增-我的资产
        path:'/addAssets',
        name:'AddAssets',
        component:AddAssets
      },
      {//资产新增-公司资产
        path:'/companyAssets',
        name:'CompanyAssets',
        component:CompanyAssets
      },
      {//档案管理模块-档案查看
        path:'/archivesViewing',
        name:'ArchivesViewing',
        component:ArchivesViewing
      },
      {//档案管理模块-修改档案
        path:'/modify',
        name:'Modify',
        component:Modify
      },
      {//立项管理模块-新增上级项目
        path:'/addProject',
        name:'Addproject',
        component:Addproject
      },
    ]
    },
    {//新增页面
      path:'/addContract',
      name:'AddContract',
      component:AddContract
    },
    {
      path:'/companyApproval',
      name:'CompanyApproval',
      component:CompanyApproval
    }
    
  ]
})
