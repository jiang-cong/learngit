webpackJsonp([0],{"3cXf":function(t,e,a){t.exports={default:a("pELq"),__esModule:!0}},AbPY:function(t,e){},WE3X:function(t,e,a){"use strict";var l={name:"addLeveXq",props:["id"],data:function(){return{xmbh:"1",sqdw:"2",sfscgxm:"3",xmmc:"4",zdldyj:"5",zdxmbyj:"6",jsdwyj:"7",nrzy:"8",ysjg:"9",lxyj:"10",cbr:"11",dw:"12",ksrq:"13",lxfj:"14"}},methods:{axios:function(){var t=this;this.$axios.get("/project/getOneProjectInfo?sysId="+this.id).then(function(e){console.log(e);var a=e.data.data.shangJiProject;t.xmbh=a.projectNum,t.sqdw=a.projectForUnit,t.sfscgxm=a.isCaiGou,t.xmmc=a.projectName,t.zdldyj=a.leaderOpinion,t.zdxmbyj=a.projectDepartmentOpinion,t.jsdwyj=a.constructionOpinion,t.nrzy=a.projectContent,t.ysjg=a.projectBudgetPrice,t.lxyj=a.projectBasis,t.cbr=a.promoterId,t.dw=a.projectUnitId,t.ksrq=a.startTime,t.lxfj=a.projectAttachment})}},mounted:function(){this.axios()},watch:{id:function(){this.axios()}}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("el-card",{attrs:{shadow:"hover"}},[a("span",{staticClass:"title"},[t._v("上级项目详情")]),t._v(" "),a("div",[a("label",{staticStyle:{width:"20%","vertical-align":"middle"},attrs:{for:""}},[t._v("项   目    编   号:")]),t._v(" "),a("el-input",{staticStyle:{width:"79%","vertical-align":"middle"},attrs:{disabled:"",type:"textarea",autosize:"",placeholder:"请输入内容"},model:{value:t.xmbh,callback:function(e){t.xmbh=e},expression:"xmbh"}})],1),t._v(" "),a("div",{staticClass:"mar-top"},[a("label",{staticStyle:{width:"20%","vertical-align":"middle"},attrs:{for:""}},[t._v("申   请    单   位:")]),t._v(" "),a("el-input",{staticStyle:{width:"79%","vertical-align":"middle"},attrs:{disabled:"",type:"textarea",autosize:"",placeholder:"请输入内容"},model:{value:t.sqdw,callback:function(e){t.sqdw=e},expression:"sqdw"}})],1),t._v(" "),a("div",{staticClass:"mar-top"},[a("label",{staticStyle:{width:"20%","vertical-align":"middle"},attrs:{for:""}},[t._v("是否是采购项目:")]),t._v(" "),a("el-input",{staticStyle:{width:"79%","vertical-align":"middle"},attrs:{disabled:"",type:"textarea",autosize:"",placeholder:"请输入内容"},model:{value:t.sfscgxm,callback:function(e){t.sfscgxm=e},expression:"sfscgxm"}})],1),t._v(" "),a("div",{staticClass:"mar-top"},[a("label",{staticStyle:{width:"20%","vertical-align":"middle"},attrs:{for:""}},[t._v("项   目    名   称:")]),t._v(" "),a("el-input",{staticStyle:{width:"79%","vertical-align":"middle"},attrs:{disabled:"",type:"textarea",autosize:"",placeholder:"请输入内容"},model:{value:t.xmmc,callback:function(e){t.xmmc=e},expression:"xmmc"}})],1),t._v(" "),a("div",{staticClass:"mar-top"},[a("label",{staticStyle:{width:"20%","vertical-align":"middle"},attrs:{for:""}},[t._v("支 队 领 导意见:")]),t._v(" "),a("el-input",{staticStyle:{width:"79%","vertical-align":"middle"},attrs:{disabled:"",type:"textarea",autosize:"",placeholder:"请输入内容"},model:{value:t.zdldyj,callback:function(e){t.zdldyj=e},expression:"zdldyj"}})],1),t._v(" "),a("div",{staticClass:"mar-top"},[a("label",{staticStyle:{width:"20%","vertical-align":"middle"},attrs:{for:""}},[t._v("支队项目办意见:")]),t._v(" "),a("el-input",{staticStyle:{width:"79%","vertical-align":"middle"},attrs:{disabled:"",type:"textarea",autosize:"",placeholder:"请输入内容"},model:{value:t.zdxmbyj,callback:function(e){t.zdxmbyj=e},expression:"zdxmbyj"}})],1),t._v(" "),a("div",{staticClass:"mar-top"},[a("label",{staticStyle:{width:"20%","vertical-align":"middle"},attrs:{for:""}},[t._v("建 设 单 位意见: ")]),t._v(" "),a("el-input",{staticStyle:{width:"79%","vertical-align":"middle"},attrs:{disabled:"",type:"textarea",autosize:"",placeholder:"请输入内容"},model:{value:t.jsdwyj,callback:function(e){t.jsdwyj=e},expression:"jsdwyj"}})],1),t._v(" "),a("div",{staticClass:"mar-top"},[a("label",{staticStyle:{width:"20%","vertical-align":"middle"},attrs:{for:""}},[t._v("内   容   摘    要: ")]),t._v(" "),a("el-input",{staticStyle:{width:"79%","vertical-align":"middle"},attrs:{disabled:"",type:"textarea",autosize:"",placeholder:"请输入内容"},model:{value:t.nrzy,callback:function(e){t.nrzy=e},expression:"nrzy"}})],1),t._v(" "),a("div",{staticClass:"mar-top"},[a("label",{staticStyle:{width:"20%","vertical-align":"middle"},attrs:{for:""}},[t._v("预   算   价    格: ")]),t._v(" "),a("el-input",{staticStyle:{width:"79%","vertical-align":"middle"},attrs:{disabled:"",type:"textarea",autosize:"",placeholder:"请输入内容"},model:{value:t.ysjg,callback:function(e){t.ysjg=e},expression:"ysjg"}})],1),t._v(" "),a("div",{staticClass:"mar-top"},[a("label",{staticStyle:{width:"20%","vertical-align":"middle"},attrs:{for:""}},[t._v("立   项   依    据: ")]),t._v(" "),a("el-input",{staticStyle:{width:"79%","vertical-align":"middle"},attrs:{disabled:"",type:"textarea",autosize:"",placeholder:"请输入内容"},model:{value:t.lxyj,callback:function(e){t.lxyj=e},expression:"lxyj"}})],1),t._v(" "),a("div",{staticClass:"mar-top"},[a("label",{staticStyle:{width:"20%","vertical-align":"middle"},attrs:{for:""}},[t._v("承       办      人: ")]),t._v(" "),a("el-input",{staticStyle:{width:"79%","vertical-align":"middle"},attrs:{disabled:"",type:"textarea",autosize:"",placeholder:"请输入内容"},model:{value:t.cbr,callback:function(e){t.cbr=e},expression:"cbr"}})],1),t._v(" "),a("div",{staticClass:"mar-top"},[a("label",{staticStyle:{width:"20%","vertical-align":"middle"},attrs:{for:""}},[t._v("单                位: ")]),t._v(" "),a("el-input",{staticStyle:{width:"79%","vertical-align":"middle"},attrs:{disabled:"",type:"textarea",autosize:"",placeholder:"请输入内容"},model:{value:t.dw,callback:function(e){t.dw=e},expression:"dw"}})],1),t._v(" "),a("div",{staticClass:"mar-top"},[a("label",{staticStyle:{width:"20%","vertical-align":"middle"},attrs:{for:""}},[t._v("开   始   日    期: ")]),t._v(" "),a("el-input",{staticStyle:{width:"79%","vertical-align":"middle"},attrs:{disabled:"",type:"textarea",autosize:"",placeholder:"请输入内容"},model:{value:t.ksrq,callback:function(e){t.ksrq=e},expression:"ksrq"}})],1),t._v(" "),a("div",{staticClass:"mar-top"},[a("label",{staticStyle:{width:"20%","vertical-align":"middle"},attrs:{for:""}},[t._v("立   项   附    件: ")]),t._v(" "),a("el-input",{staticStyle:{width:"79%","vertical-align":"middle"},attrs:{disabled:"",type:"textarea",autosize:"",placeholder:"请输入内容"},model:{value:t.lxfj,callback:function(e){t.lxfj=e},expression:"lxfj"}})],1)])],1)},staticRenderFns:[]};var s=a("C7Lr")(l,i,!1,function(t){a("AbPY")},"data-v-1accd72e",null);e.a=s.exports},pELq:function(t,e,a){var l=a("xhIC"),i=l.JSON||(l.JSON={stringify:JSON.stringify});t.exports=function(t){return i.stringify.apply(i,arguments)}}});
//# sourceMappingURL=0.d43a4d342f7d54cfa1c0.js.map