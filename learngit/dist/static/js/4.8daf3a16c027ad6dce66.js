webpackJsonp([4],{"8K1L":function(t,a){},"FG6/":function(t,a){},"J/w6":function(t,a){},Lq5R:function(t,a){},QPrY:function(t,a,e){"use strict";var i={components:{addLeveXq:e("WE3X").a},props:["id"],data:function(){return{listData:null,tendetArr:[],contractArr:[]}},methods:{details:function(){var t=this;this.$axios.get("/project/getOneProjectInfo?sysId="+this.id).then(function(a){console.log(a),t.listData=a.data.data.benJiProjectList})},tenderDetails:function(){var t=this;this.$axios.get("/tender/getOneInfo?sysId="+this.id).then(function(a){console.log(a),t.tendetArr=[],t.tendetArr.push(a.data.data)})},contractDetails:function(){var t=this;this.$axios.get("/pack/getOneInfo?sysId="+this.id).then(function(a){console.log(a),t.contractArr=[],t.contractArr.push(a.data.data)})}},mounted:function(){this.details(),this.tenderDetails(),this.contractDetails()},watch:{id:function(){this.details(),this.tenderDetails(),this.contractDetails()}}},l={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("div",{staticStyle:{display:"flex","flex-wrap":"wrap","justify-content":"space-between"}},[e("div",{staticStyle:{width:"48.5%",display:"inline-block"}},[e("addLeveXq",{attrs:{id:t.id}})],1),t._v(" "),t._l(t.listData,function(a,i){return e("div",{key:i,staticStyle:{width:"48.5%",display:"inline-block","vertical-align":"top","margin-bottom":"25px"}},[e("el-card",{attrs:{shadow:"hover"}},[e("span",{staticClass:"title"},[t._v("本级项目详情")]),t._v(" "),e("div",[e("label",{staticStyle:{width:"20%","vertical-align":"middle"},attrs:{for:""}},[t._v("项   目    编   号:")]),t._v(" "),e("el-input",{staticStyle:{width:"79%","vertical-align":"middle"},attrs:{disabled:"",type:"textarea",autosize:"",placeholder:"请输入内容",value:a.projectNum}})],1),t._v(" "),e("div",{staticClass:"mar-top"},[e("label",{staticStyle:{width:"20%","vertical-align":"middle"},attrs:{for:""}},[t._v("申   请    单   位:")]),t._v(" "),e("el-input",{staticStyle:{width:"79%","vertical-align":"middle"},attrs:{disabled:"",type:"textarea",autosize:"",placeholder:"请输入内容",value:a.projectForUnit}})],1),t._v(" "),e("div",{staticClass:"mar-top"},[e("label",{staticStyle:{width:"20%","vertical-align":"middle"},attrs:{for:""}},[t._v("是否是采购项目:")]),t._v(" "),e("el-input",{staticStyle:{width:"79%","vertical-align":"middle"},attrs:{disabled:"",type:"textarea",autosize:"",placeholder:"请输入内容",value:a.isCaiGou}})],1),t._v(" "),e("div",{staticClass:"mar-top"},[e("label",{staticStyle:{width:"20%","vertical-align":"middle"},attrs:{for:""}},[t._v("项   目    名   称:")]),t._v(" "),e("el-input",{staticStyle:{width:"79%","vertical-align":"middle"},attrs:{disabled:"",type:"textarea",autosize:"",placeholder:"请输入内容",value:a.projectName}})],1),t._v(" "),e("div",{staticClass:"mar-top"},[e("label",{staticStyle:{width:"20%","vertical-align":"middle"},attrs:{for:""}},[t._v("支 队 领 导意见:")]),t._v(" "),e("el-input",{staticStyle:{width:"79%","vertical-align":"middle"},attrs:{disabled:"",type:"textarea",autosize:"",placeholder:"请输入内容",value:a.leaderOpinion}})],1),t._v(" "),e("div",{staticClass:"mar-top"},[e("label",{staticStyle:{width:"20%","vertical-align":"middle"},attrs:{for:""}},[t._v("支队项目办意见:")]),t._v(" "),e("el-input",{staticStyle:{width:"79%","vertical-align":"middle"},attrs:{disabled:"",type:"textarea",autosize:"",placeholder:"请输入内容",value:a.projectDepartmentOpinion}})],1),t._v(" "),e("div",{staticClass:"mar-top"},[e("label",{staticStyle:{width:"20%","vertical-align":"middle"},attrs:{for:""}},[t._v("建 设 单 位意见: ")]),t._v(" "),e("el-input",{staticStyle:{width:"79%","vertical-align":"middle"},attrs:{disabled:"",type:"textarea",autosize:"",placeholder:"请输入内容",value:a.constructionOpinion}})],1),t._v(" "),e("div",{staticClass:"mar-top"},[e("label",{staticStyle:{width:"20%","vertical-align":"middle"},attrs:{for:""}},[t._v("内   容   摘    要: ")]),t._v(" "),e("el-input",{staticStyle:{width:"79%","vertical-align":"middle"},attrs:{disabled:"",type:"textarea",autosize:"",placeholder:"请输入内容",value:a.projectContent}})],1),t._v(" "),e("div",{staticClass:"mar-top"},[e("label",{staticStyle:{width:"20%","vertical-align":"middle"},attrs:{for:""}},[t._v("预   算   价    格: ")]),t._v(" "),e("el-input",{staticStyle:{width:"79%","vertical-align":"middle"},attrs:{disabled:"",type:"textarea",autosize:"",placeholder:"请输入内容",value:a.projectBudgetPrice}})],1),t._v(" "),e("div",{staticClass:"mar-top"},[e("label",{staticStyle:{width:"20%","vertical-align":"middle"},attrs:{for:""}},[t._v("立   项   依    据: ")]),t._v(" "),e("el-input",{staticStyle:{width:"79%","vertical-align":"middle"},attrs:{disabled:"",type:"textarea",autosize:"",placeholder:"请输入内容",value:a.projectBasis}})],1),t._v(" "),e("div",{staticClass:"mar-top"},[e("label",{staticStyle:{width:"20%","vertical-align":"middle"},attrs:{for:""}},[t._v("承       办      人: ")]),t._v(" "),e("el-input",{staticStyle:{width:"79%","vertical-align":"middle"},attrs:{disabled:"",type:"textarea",autosize:"",placeholder:"请输入内容",value:a.promoterId}})],1),t._v(" "),e("div",{staticClass:"mar-top"},[e("label",{staticStyle:{width:"20%","vertical-align":"middle"},attrs:{for:""}},[t._v("单                位: ")]),t._v(" "),e("el-input",{staticStyle:{width:"79%","vertical-align":"middle"},attrs:{disabled:"",type:"textarea",autosize:"",placeholder:"请输入内容",value:a.projectUnitId}})],1),t._v(" "),e("div",{staticClass:"mar-top"},[e("label",{staticStyle:{width:"20%","vertical-align":"middle"},attrs:{for:""}},[t._v("开   始   日    期: ")]),t._v(" "),e("el-input",{staticStyle:{width:"79%","vertical-align":"middle"},attrs:{disabled:"",type:"textarea",autosize:"",placeholder:"请输入内容",value:a.startTime}})],1),t._v(" "),e("div",{staticClass:"mar-top"},[e("label",{staticStyle:{width:"20%","vertical-align":"middle"},attrs:{for:""}},[t._v("立   项   附    件: ")]),t._v(" "),e("el-input",{staticStyle:{width:"79%","vertical-align":"middle"},attrs:{disabled:"",type:"textarea",autosize:"",placeholder:"请输入内容",value:a.projectAttachment}})],1)])],1)}),t._v(" "),t._l(t.tendetArr,function(a,i){return e("div",{key:i+"1",staticStyle:{width:"48.5%",display:"inline-block","vertical-align":"top","margin-bottom":"25px"}},[e("el-card",{attrs:{shadow:"hover"}},[e("span",{staticClass:"title"},[t._v("招标详情")]),t._v(" "),e("div",[e("label",{staticStyle:{width:"20%","vertical-align":"middle"},attrs:{for:""}},[t._v("招   标    编   号:")]),t._v(" "),e("el-input",{staticStyle:{width:"79%","vertical-align":"middle"},attrs:{disabled:"",type:"textarea",autosize:"",placeholder:"请输入内容",value:a.tenderNum}})],1),t._v(" "),e("div",{staticClass:"mar-top"},[e("label",{staticStyle:{width:"20%","vertical-align":"middle"},attrs:{for:""}},[t._v("申   请    单   位:")]),t._v(" "),e("el-input",{staticStyle:{width:"79%","vertical-align":"middle"},attrs:{disabled:"",type:"textarea",autosize:"",placeholder:"请输入内容",value:a.tenderForUnit}})],1),t._v(" "),e("div",{staticClass:"mar-top"},[e("label",{staticStyle:{width:"20%","vertical-align":"middle"},attrs:{for:""}},[t._v("招   标    方   式:")]),t._v(" "),e("el-input",{staticStyle:{width:"79%","vertical-align":"middle"},attrs:{disabled:"",type:"textarea",autosize:"",placeholder:"请输入内容",value:a.tenderType}})],1),t._v(" "),e("div",{staticClass:"mar-top"},[e("label",{staticStyle:{width:"20%","vertical-align":"middle"},attrs:{for:""}},[t._v("支 队 领 导意见:")]),t._v(" "),e("el-input",{staticStyle:{width:"79%","vertical-align":"middle"},attrs:{disabled:"",type:"textarea",autosize:"",placeholder:"请输入内容",value:a.leaderOpinion}})],1),t._v(" "),e("div",{staticClass:"mar-top"},[e("label",{staticStyle:{width:"20%","vertical-align":"middle"},attrs:{for:""}},[t._v("支队项目办意见:")]),t._v(" "),e("el-input",{staticStyle:{width:"79%","vertical-align":"middle"},attrs:{disabled:"",type:"textarea",autosize:"",placeholder:"请输入内容",value:a.projectDepartmentOpinion}})],1),t._v(" "),e("div",{staticClass:"mar-top"},[e("label",{staticStyle:{width:"20%","vertical-align":"middle"},attrs:{for:""}},[t._v("建 设 单 位意见: ")]),t._v(" "),e("el-input",{staticStyle:{width:"79%","vertical-align":"middle"},attrs:{disabled:"",type:"textarea",autosize:"",placeholder:"请输入内容",value:a.constructionOpinion}})],1),t._v(" "),e("div",{staticClass:"mar-top"},[e("label",{staticStyle:{width:"20%","vertical-align":"middle"},attrs:{for:""}},[t._v("设   计    单   位:")]),t._v(" "),e("el-input",{staticStyle:{width:"79%","vertical-align":"middle"},attrs:{disabled:"",type:"textarea",autosize:"",placeholder:"请输入内容",value:a.tenderDesignUnit}})],1),t._v(" "),e("div",{staticClass:"mar-top"},[e("label",{staticStyle:{width:"20%","vertical-align":"middle"},attrs:{for:""}},[t._v("图   纸   标    号: ")]),t._v(" "),e("el-input",{staticStyle:{width:"79%","vertical-align":"middle"},attrs:{disabled:"",type:"textarea",autosize:"",placeholder:"请输入内容",value:a.drawNum}})],1),t._v(" "),e("div",{staticClass:"mar-top"},[e("label",{staticStyle:{width:"20%","vertical-align":"middle"},attrs:{for:""}},[t._v("预   算   价    格: ")]),t._v(" "),e("el-input",{staticStyle:{width:"79%","vertical-align":"middle"},attrs:{disabled:"",type:"textarea",autosize:"",placeholder:"请输入内容",value:a.projectBudgetPrice}})],1),t._v(" "),e("div",{staticClass:"mar-top"},[e("label",{staticStyle:{width:"20%","vertical-align":"middle"},attrs:{for:""}},[t._v("资   金   来    源: ")]),t._v(" "),e("el-input",{staticStyle:{width:"79%","vertical-align":"middle"},attrs:{disabled:"",type:"textarea",autosize:"",placeholder:"请输入内容",value:a.source}})],1),t._v(" "),e("div",{staticClass:"mar-top"},[e("label",{staticStyle:{width:"20%","vertical-align":"middle"},attrs:{for:""}},[t._v("承       办      人: ")]),t._v(" "),e("el-input",{staticStyle:{width:"79%","vertical-align":"middle"},attrs:{disabled:"",type:"textarea",autosize:"",placeholder:"请输入内容",value:a.tenderAgent}})],1),t._v(" "),e("div",{staticClass:"mar-top"},[e("label",{staticStyle:{width:"20%","vertical-align":"middle"},attrs:{for:""}},[t._v("单                位: ")]),t._v(" "),e("el-input",{staticStyle:{width:"79%","vertical-align":"middle"},attrs:{disabled:"",type:"textarea",autosize:"",placeholder:"请输入内容",value:a.tenderUnit}})],1),t._v(" "),e("div",{staticClass:"mar-top"},[e("label",{staticStyle:{width:"20%","vertical-align":"middle"},attrs:{for:""}},[t._v("开   始   日    期: ")]),t._v(" "),e("el-input",{staticStyle:{width:"79%","vertical-align":"middle"},attrs:{disabled:"",type:"textarea",autosize:"",placeholder:"请输入内容",value:a.startTime}})],1),t._v(" "),e("div",{staticClass:"mar-top"},[e("label",{staticStyle:{width:"20%","vertical-align":"middle"},attrs:{for:""}},[t._v("招   标   附    件: ")]),t._v(" "),e("el-input",{staticStyle:{width:"79%","vertical-align":"middle"},attrs:{disabled:"",type:"textarea",autosize:"",placeholder:"请输入内容",value:a.tenderAttachment}})],1)])],1)}),t._v(" "),t._l(t.contractArr,function(a,i){return e("div",{key:i+"2",staticStyle:{width:"48.5%",display:"inline-block","vertical-align":"top","margin-bottom":"25px"}},[e("el-card",{attrs:{shadow:"hover"}},[e("span",{staticClass:"title"},[t._v("合同详情")]),t._v(" "),e("div",[e("label",{staticStyle:{width:"20%","vertical-align":"middle"},attrs:{for:""}},[t._v("合   同    编   号:")]),t._v(" "),e("el-input",{staticStyle:{width:"79%","vertical-align":"middle"},attrs:{disabled:"",type:"textarea",autosize:"",placeholder:"请输入内容",value:a.pactNum}})],1),t._v(" "),e("div",{staticClass:"mar-top"},[e("label",{staticStyle:{width:"20%","vertical-align":"middle"},attrs:{for:""}},[t._v("合   同    名   称:")]),t._v(" "),e("el-input",{staticStyle:{width:"79%","vertical-align":"middle"},attrs:{disabled:"",type:"textarea",autosize:"",placeholder:"请输入内容",value:a.pactName}})],1),t._v(" "),e("div",{staticClass:"mar-top"},[e("label",{staticStyle:{width:"20%","vertical-align":"middle"},attrs:{for:""}},[t._v("公   司    名   称:")]),t._v(" "),e("el-input",{staticStyle:{width:"79%","vertical-align":"middle"},attrs:{disabled:"",type:"textarea",autosize:"",placeholder:"请输入内容",value:a.companyId}})],1),t._v(" "),e("div",{staticClass:"mar-top"},[e("label",{staticStyle:{width:"20%","vertical-align":"middle"},attrs:{for:""}},[t._v("开   始   日    期: ")]),t._v(" "),e("el-input",{staticStyle:{width:"79%","vertical-align":"middle"},attrs:{disabled:"",type:"textarea",autosize:"",placeholder:"请输入内容",value:a.startTime}})],1),t._v(" "),e("div",{staticClass:"mar-top"},[e("label",{staticStyle:{width:"20%","vertical-align":"middle"},attrs:{for:""}},[t._v("合   同   附    件: ")]),t._v(" "),e("el-input",{staticStyle:{width:"79%","vertical-align":"middle"},attrs:{disabled:"",type:"textarea",autosize:"",placeholder:"请输入内容",value:a.pactAttachmentTwo}})],1)])],1)})],2)])},staticRenderFns:[]};var s=e("C7Lr")(i,l,!1,function(t){e("J/w6")},"data-v-39950db7",null);a.a=s.exports},rMOr:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e("QPrY"),l={components:{detailsContract:i.a},data:function(){return{tableData:[],pds:!0,totalcount:null,pagenum:1,pagesize:10,dialogVisible:!1,sysid:""}},methods:{axios:function(){var t=this;this.$axios.get("/pack/getUnApprove?pageNum="+this.pagenum+"&pageSize="+this.pagesize).then(function(a){if(console.log(a),200==a.data.code){var e=a.data.data;t.totalcount=Number(a.data.totalcount),t.tableData=[];for(var i=0;i<e.length;i++)t.tableData.push({bh:e[i].projectNum,dw:e[i].projectUnitId,sfscgxm:e[i].isCaiGou,name:e[i].projectName,jg:e[i].projectBudgetPrice,yj:e[i].projectBasis,ldyi:e[i].leaderOpinion,xmbyj:e[i].projectDepartmentOpinion,jsdwyj:e[i].constructionOpinion,nrzy:e[i].projectContent,cbr:e[i].promoterId,sqdw:e[i].projectForUnit,date:e[i].startTime,lxfj:e[i].projectAttachment,id:e[i].sysId,xq:"查看详情"})}204==a.data.code&&console.log("查询失败")})},upPage:function(t){this.pagenum=t,this.axios()},nextPage:function(t){this.pagenum=t,this.axios()},currentPage:function(t){this.pagenum=t,this.axios()},model:function(t){this.dialogVisible=!0,this.sysid=t},adopt:function(){var t=this;this.$axios.get("/pack/finishApprove?sysId="+this.sysid).then(function(a){200==a.data.code&&(t.$message({message:a.data.msg,type:"success"}),t.dialogVisible=!1,t.axios()),204==a.data.code&&t.$message.error(a.data.msg)})},notPass:function(){var t=this;this.$axios.get("/pack/failApprove?sysId="+this.sysid).then(function(a){200==a.data.code&&(t.$message({message:a.data.msg,type:"success"}),t.dialogVisible=!1,t.axios()),204==a.data.code&&t.$message.error(a.data.msg)})}},mounted:function(){this.axios()}},s={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"table-bot"},[e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[e("el-table-column",{attrs:{prop:"bh",label:"项目编号"}}),t._v(" "),e("el-table-column",{attrs:{prop:"sqdw",label:"申请单位"}}),t._v(" "),e("el-table-column",{attrs:{prop:"name",label:"项目名称"}}),t._v(" "),e("el-table-column",{attrs:{prop:"jg",label:"预算价格"}}),t._v(" "),e("el-table-column",{attrs:{prop:"yj",label:"立项依据"}}),t._v(" "),e("el-table-column",{attrs:{prop:"xq",label:"详情"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",{staticClass:"det",on:{click:function(e){return t.model(a.row.id)}}},[t._v(t._s(a.row.xq)),e("span")])]}}])})],1),t._v(" "),e("el-pagination",{attrs:{background:"","page-size":t.pagesize,"current-page":t.pagenum,"hide-on-single-page":t.pds,layout:"prev, pager, next",total:t.totalcount},on:{"prev-click":t.upPage,"next-click":t.nextPage,"current-change":t.currentPage}})],1),t._v(" "),e("el-dialog",{attrs:{visible:t.dialogVisible,width:"1200px"},on:{"update:visible":function(a){t.dialogVisible=a}}},[e("detailsContract",{attrs:{id:t.sysid}}),t._v(" "),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:t.adopt}},[t._v("通 过")]),t._v(" "),e("el-button",{attrs:{type:"primary"},on:{click:t.notPass}},[t._v("未通过")])],1)],1)],1)},staticRenderFns:[]};var r=e("C7Lr")(l,s,!1,function(t){e("8K1L")},"data-v-0abb78c2",null).exports,o={components:{detailsContract:i.a},data:function(){return{tableData:[],pds:!0,totalcount:null,pagenum:1,pagesize:10,dialogVisible:!1,sysid:""}},methods:{axios:function(){var t=this;this.$axios.get("/pack/getFinishApproveList?pageNum="+this.pagenum+"&pageSize="+this.pagesize).then(function(a){if(console.log(a),200==a.data.code){var e=a.data.data;t.totalcount=Number(a.data.totalcount),t.tableData=[];for(var i=0;i<e.length;i++)t.tableData.push({bh:e[i].projectNum,dw:e[i].projectUnitId,sfscgxm:e[i].isCaiGou,name:e[i].projectName,jg:e[i].projectBudgetPrice,yj:e[i].projectBasis,ldyi:e[i].leaderOpinion,xmbyj:e[i].projectDepartmentOpinion,jsdwyj:e[i].constructionOpinion,nrzy:e[i].projectContent,cbr:e[i].promoterId,sqdw:e[i].projectForUnit,date:e[i].startTime,lxfj:e[i].projectAttachment,id:e[i].sysId,xq:"查看详情"})}204==a.data.code&&console.log("查询失败")})},upPage:function(t){this.pagenum=t,this.axios()},nextPage:function(t){this.pagenum=t,this.axios()},currentPage:function(t){this.pagenum=t,this.axios()},model:function(t){this.dialogVisible=!0,this.sysid=t}},mounted:function(){this.axios()}},d={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"table-bot"},[e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[e("el-table-column",{attrs:{prop:"bh",label:"项目编号"}}),t._v(" "),e("el-table-column",{attrs:{prop:"sqdw",label:"申请单位"}}),t._v(" "),e("el-table-column",{attrs:{prop:"name",label:"项目名称"}}),t._v(" "),e("el-table-column",{attrs:{prop:"jg",label:"预算价格"}}),t._v(" "),e("el-table-column",{attrs:{prop:"yj",label:"立项依据"}}),t._v(" "),e("el-table-column",{attrs:{prop:"xq",label:"详情"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",{staticClass:"det",on:{click:function(e){return t.model(a.row.id)}}},[t._v(t._s(a.row.xq)),e("span")])]}}])})],1),t._v(" "),e("el-pagination",{attrs:{background:"","page-size":t.pagesize,"current-page":t.pagenum,"hide-on-single-page":t.pds,layout:"prev, pager, next",total:t.totalcount},on:{"prev-click":t.upPage,"next-click":t.nextPage,"current-change":t.currentPage}})],1),t._v(" "),e("el-dialog",{attrs:{visible:t.dialogVisible,width:"1200px"},on:{"update:visible":function(a){t.dialogVisible=a}}},[e("detailsContract",{attrs:{id:t.sysid}}),t._v(" "),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(a){t.dialogVisible=!1}}},[t._v("取 消")]),t._v(" "),e("el-button",{attrs:{type:"primary"},on:{click:function(a){t.dialogVisible=!1}}},[t._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var n=e("C7Lr")(o,d,!1,function(t){e("Lq5R")},"data-v-42ef84a7",null).exports,c={components:{detailsContract:i.a},data:function(){return{tableData:[],pds:!0,totalcount:null,pagenum:1,pagesize:10,dialogVisible:!1,sysid:""}},methods:{axios:function(){var t=this;this.$axios.get("/pack/getFailApproveList?pageNum="+this.pagenum+"&pageSize="+this.pagesize).then(function(a){if(console.log(a),200==a.data.code){var e=a.data.data;t.totalcount=Number(a.data.totalcount),t.tableData=[];for(var i=0;i<e.length;i++)t.tableData.push({bh:e[i].projectNum,dw:e[i].projectUnitId,sfscgxm:e[i].isCaiGou,name:e[i].projectName,jg:e[i].projectBudgetPrice,yj:e[i].projectBasis,ldyi:e[i].leaderOpinion,xmbyj:e[i].projectDepartmentOpinion,jsdwyj:e[i].constructionOpinion,nrzy:e[i].projectContent,cbr:e[i].promoterId,sqdw:e[i].projectForUnit,date:e[i].startTime,lxfj:e[i].projectAttachment,id:e[i].sysId,xq:"查看详情"})}204==a.data.code&&console.log("查询失败")})},upPage:function(t){this.pagenum=t,this.axios()},nextPage:function(t){this.pagenum=t,this.axios()},currentPage:function(t){this.pagenum=t,this.axios()},model:function(t){this.dialogVisible=!0,this.sysid=t}},mounted:function(){this.axios()}},p={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"table-bot"},[e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[e("el-table-column",{attrs:{prop:"bh",label:"项目编号"}}),t._v(" "),e("el-table-column",{attrs:{prop:"sqdw",label:"申请单位"}}),t._v(" "),e("el-table-column",{attrs:{prop:"name",label:"项目名称"}}),t._v(" "),e("el-table-column",{attrs:{prop:"jg",label:"预算价格"}}),t._v(" "),e("el-table-column",{attrs:{prop:"yj",label:"立项依据"}}),t._v(" "),e("el-table-column",{attrs:{prop:"xq",label:"详情"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",{staticClass:"det",on:{click:function(e){return t.model(a.row.id)}}},[t._v(t._s(a.row.xq)),e("span")])]}}])})],1),t._v(" "),e("el-pagination",{attrs:{background:"","page-size":t.pagesize,"current-page":t.pagenum,"hide-on-single-page":t.pds,layout:"prev, pager, next",total:t.totalcount},on:{"prev-click":t.upPage,"next-click":t.nextPage,"current-change":t.currentPage}})],1),t._v(" "),e("el-dialog",{attrs:{visible:t.dialogVisible,width:"1200px"},on:{"update:visible":function(a){t.dialogVisible=a}}},[e("detailsContract",{attrs:{id:t.sysid}}),t._v(" "),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(a){t.dialogVisible=!1}}},[t._v("取 消")]),t._v(" "),e("el-button",{attrs:{type:"primary"},on:{click:function(a){t.dialogVisible=!1}}},[t._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var v={components:{notApproval:r,yesSub:n,noApproval:e("C7Lr")(c,p,!1,function(t){e("xCd2")},"data-v-4ab3bb6d",null).exports},data:function(){return{pd:1}},methods:{change:function(t){this.pd=t},Refresh:function(){1==this.pd&&this.$refs.notApproval.axios(),2==this.pd&&this.$refs.yesSub.axios(),3==this.pd&&this.$refs.noApproval.axios()}}},u={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"header"},[1==t.pd?e("span",[t._v("新增合同"),e("span",{staticStyle:{color:"red"}},[t._v("未审批")])]):t._e(),t._v(" "),2==t.pd?e("span",[t._v("新增合同"),e("span",{staticStyle:{color:"red"}},[t._v("审批通过")])]):t._e(),t._v(" "),3==t.pd?e("span",[t._v("新增合同"),e("span",{staticStyle:{color:"red"}},[t._v("审批未通过")])]):t._e(),t._v(" "),e("div",{staticClass:"header-right"},[e("el-button",{attrs:{size:"small",type:"warning"},on:{click:t.Refresh}},[t._v("刷新")])],1)]),t._v(" "),e("el-row",{attrs:{gutter:10}},[e("el-col",{attrs:{xs:6,sm:6,md:4,lg:4,xl:4}},[e("div",{staticClass:"box"},[e("ul",[e("li",{class:1==t.pd?"list":"",on:{click:function(a){return t.change(1)}}},[t._v("未审批")]),t._v(" "),e("li",{class:2==t.pd?"list":"",on:{click:function(a){return t.change(2)}}},[t._v("审批通过")]),t._v(" "),e("li",{class:3==t.pd?"list":"",on:{click:function(a){return t.change(3)}}},[t._v("审批未通过")])])])]),t._v(" "),e("el-col",{attrs:{xs:18,sm:18,md:20,lg:20,xl:20}},[e("div",{staticClass:"box-cont"},[1==t.pd?e("notApproval",{ref:"notApproval"}):t._e(),t._v(" "),2==t.pd?e("yesSub",{ref:"yesSub"}):t._e(),t._v(" "),3==t.pd?e("noApproval",{ref:"noApproval"}):t._e()],1)])],1)],1)},staticRenderFns:[]};var h=e("C7Lr")(v,u,!1,function(t){e("FG6/")},"data-v-0cae806e",null);a.default=h.exports},xCd2:function(t,a){}});
//# sourceMappingURL=4.8daf3a16c027ad6dce66.js.map