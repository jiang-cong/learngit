webpackJsonp([11],{dAjm:function(n,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=i("4YfN"),a=i.n(t),o=i("48sp"),d=[[{icon:"icon-xinzeng",name:"资产新增",children:[{name:"我的资产",index:"/right"},{name:"公司资产",index:"/right2"},{name:"资产提交",index:"/right2"},{name:"资产审批",index:"/right2"}]},{icon:"icon-transfer",name:"资产转移",children:[{name:"资产转移",index:"/right"},{name:"资产转移提交",index:"/right2"},{name:"资产转移审批",index:"/right2"}]},{icon:"icon-xiugai",name:"资产大修",children:[{name:"资产大修",index:"/right"},{name:"资产大修提交",index:"/right2"},{name:"资产大修审批",index:"/right2"}]},{icon:"icon-shanchu",name:"资产拆除",children:[{name:"资产拆除",index:"/right"},{name:"资产拆除提交",index:"/right2"},{name:"资产拆除审批",index:"/right2"}]},{icon:"icon-zichanpandian",name:"资产盘点",children:[{name:"资产盘点",index:"/right"},{name:"资产盘点提交",index:"/right2"},{name:"资产盘点审批",index:"/right2"}]},{icon:"icon-guanli",name:"资产管理",children:[{name:"资产类别管理",index:"/right"},{name:"资产项目管理",index:"/right2"},{name:"资产系统管理",index:"/right2"}]},{icon:"icon-tongjifenxi",name:"资产统计分析",children:[{name:"今日数据",index:"/right"},{name:"资产统计",index:"/right2"}]}],[{icon:"icon-lixiang",name:"立项管理",children:[{name:"上级项目",index:"/addProject"},{name:"本级项目",index:"/addLeveProject"}]},{icon:"icon-ziyuan",name:"招标管理",children:[{name:"新增招标",index:"/addTendering"},{name:"新增招标提交",index:"/subTend"},{name:"新增招标审批",index:"/approvalTend"}]},{icon:"icon-hetongguanli",name:"合同管理",children:[{name:"新增合同",index:"/addContract"},{name:"新增合同提交",index:"/subContract"},{name:"新增合同审批",index:"/approvalContract"}]},{icon:"icon-gongchengjungongyanshouzhengming",name:"竣工验收管理",children:[{name:"新增竣工验收",index:"/addCompletion"},{name:"新增竣工验收提交",index:"/subCompletion"},{name:"新增竣工验收审批",index:"/approvalCompletion"}]},{icon:"icon-shenjiguanli",name:"审计管理",children:[{name:"审计结算",index:"/right"},{name:"审计决算",index:"/right2"}]},{icon:"icon-danganguanli",name:"档案管理",children:[{name:"档案查看",index:"/right"},{name:"修改档案信息",index:"/right2"},{name:"档案信息提交",index:"/right2"}]}]],r={name:"index",data:function(){return{styleobj:{border:"1px solid #eee",height:""}}},computed:a()({},Object(o.c)({isdata:function(n){return n.list.listarr}})),methods:{luyou:function(n){this.$router.push({name:n})}},mounted:function(){this.styleobj.height=document.documentElement.clientHeight-60+"px"},created:function(){this.$store.dispatch("list/actionlist",d)}},l={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"hello"},[t("el-header",{staticStyle:{"line-height":"58px",background:"#3190e8",color:"white","font-size":"20px","font-weight":"bold"}},[t("div",{staticClass:"right"},[t("div",{staticClass:"header"},[t("img",{staticStyle:{width:"45px",height:"45px","vertical-align":"middle","margin-right":"10px"},attrs:{src:i("t1Cs")}}),t("span",{staticStyle:{"vertical-align":"middle"}},[n._v("郑州市公安局交通警察支队项目资产管理系统")])]),n._v(" "),t("el-dropdown",{attrs:{trigger:"click"}},[t("i",{staticClass:"el-icon-setting",staticStyle:{"font-weight":"bold"}},[t("span",{staticStyle:{"vertical-align":"middle","margin-left":"5px",padding:"20px 0"}},[n._v("王小虎")])]),n._v(" "),t("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[t("el-dropdown-item",[n._v("个人中心")]),n._v(" "),t("el-dropdown-item",[n._v("用户管理")]),n._v(" "),t("el-dropdown-item",[t("span",{staticStyle:{display:"inline-block",width:"100%",height:"100%"},on:{click:function(e){return n.luyou("Login")}}},[n._v("退       出")])])],1)],1)],1)]),n._v(" "),t("el-container",{style:n.styleobj},[t("el-aside",{staticStyle:{"background-color":"rgb(238, 241, 246)"},attrs:{width:"200px"}},[t("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":n.$route.path,"unique-opened":!0,router:!0}},[t("el-menu-item-group",[t("span",{staticStyle:{"font-size":"15px"},attrs:{slot:"title"},slot:"title"},[n._v("资产管理")])]),n._v(" "),n._l(n.isdata[0],function(e,i){return t("el-submenu",{key:i,attrs:{index:e.name}},[t("template",{slot:"title"},[t("i",{class:"iconfont "+e.icon}),n._v(" "),t("span",[n._v(n._s(e.name))])]),n._v(" "),n._l(e.children,function(e,i){return t("el-menu-item",{key:i,attrs:{index:e.index}},[n._v(n._s(e.name))])})],2)}),n._v(" "),t("el-menu-item-group",[t("span",{staticStyle:{"font-size":"15px"},attrs:{slot:"title"},slot:"title"},[n._v("项目管理")])]),n._v(" "),n._l(n.isdata[1],function(e,i){return t("el-submenu",{key:i+"2",attrs:{index:e.name}},[t("template",{slot:"title"},[t("i",{class:"iconfont "+e.icon}),n._v(" "),t("span",[n._v(n._s(e.name))])]),n._v(" "),n._l(e.children,function(e,i){return t("el-menu-item",{key:i,attrs:{index:e.index}},[n._v(n._s(e.name))])})],2)})],2)],1),n._v(" "),t("el-container",[t("el-main",[t("transition",{attrs:{name:"fade",mode:"out-in"}},[t("router-view")],1)],1)],1)],1)],1)},staticRenderFns:[]};var c=i("C7Lr")(r,l,!1,function(n){i("wSvm")},"data-v-1bf8e435",null);e.default=c.exports},t1Cs:function(n,e,i){n.exports=i.p+"static/img/111.6a591d9.png"},wSvm:function(n,e){}});
//# sourceMappingURL=11.fc25cdc3e5fae7bc09b3.js.map