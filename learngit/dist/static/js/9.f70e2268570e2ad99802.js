webpackJsonp([9],{F67F:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("3cXf"),l=a.n(i),s={components:{addLeveXq:a("WE3X").a},props:["id"],data:function(){return{listData:null,tendetArr:[],height:{position:"relative",height:"300px",cursor:"pointer",overflowY:"auto"},addlist:[[{name:"合同编号",keys:""},{name:"合同名称",keys:""},{name:"公司名称",keys:""},{name:"开始日期",keys:""},{name:"合同附件",keys:""}]],pickerOptions:{disabledDate:function(t){return t.getTime()>Date.now()},shortcuts:[{text:"今天",onClick:function(t){t.$emit("pick",new Date)}},{text:"昨天",onClick:function(t){var e=new Date;e.setTime(e.getTime()-864e5),t.$emit("pick",e)}},{text:"一周前",onClick:function(t){var e=new Date;e.setTime(e.getTime()-6048e5),t.$emit("pick",e)}}]}}},methods:{details:function(){var t=this;this.$axios.get("/project/getOneProjectInfo?sysId="+this.id).then(function(e){t.listData=e.data.data.benJiProjectList})},tenderDetails:function(){var t=this;this.$axios.get("/tender/getOneInfo?sysId="+this.id).then(function(e){console.log(e),t.tendetArr.push(e.data.data)})}},mounted:function(){this.details(),this.tenderDetails()},watch:{id:function(){this.details(),this.tenderDetails()}}},d={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticStyle:{display:"flex","flex-wrap":"wrap","justify-content":"space-between"}},[a("div",{staticStyle:{width:"48.5%",display:"inline-block"}},[a("addLeveXq",{ref:"boxxm",attrs:{id:t.id}})],1),t._v(" "),t._l(t.listData,function(e,i){return a("div",{key:i,staticStyle:{width:"48.5%",display:"inline-block","vertical-align":"top","margin-bottom":"25px"}},[a("el-card",{attrs:{shadow:"hover"}},[a("span",{staticClass:"title"},[t._v("本级项目详情")]),t._v(" "),a("div",[a("label",{staticStyle:{width:"20%","vertical-align":"middle"},attrs:{for:""}},[t._v("项   目    编   号:")]),t._v(" "),a("el-input",{staticStyle:{width:"79%","vertical-align":"middle"},attrs:{disabled:"",type:"textarea",autosize:"",placeholder:"请输入内容",value:e.projectNum}})],1),t._v(" "),a("div",{staticClass:"mar-top"},[a("label",{staticStyle:{width:"20%","vertical-align":"middle"},attrs:{for:""}},[t._v("申   请    单   位:")]),t._v(" "),a("el-input",{staticStyle:{width:"79%","vertical-align":"middle"},attrs:{disabled:"",type:"textarea",autosize:"",placeholder:"请输入内容",value:e.projectForUnit}})],1),t._v(" "),a("div",{staticClass:"mar-top"},[a("label",{staticStyle:{width:"20%","vertical-align":"middle"},attrs:{for:""}},[t._v("是否是采购项目:")]),t._v(" "),a("el-input",{staticStyle:{width:"79%","vertical-align":"middle"},attrs:{disabled:"",type:"textarea",autosize:"",placeholder:"请输入内容",value:e.isCaiGou}})],1),t._v(" "),a("div",{staticClass:"mar-top"},[a("label",{staticStyle:{width:"20%","vertical-align":"middle"},attrs:{for:""}},[t._v("项   目    名   称:")]),t._v(" "),a("el-input",{staticStyle:{width:"79%","vertical-align":"middle"},attrs:{disabled:"",type:"textarea",autosize:"",placeholder:"请输入内容",value:e.projectName}})],1),t._v(" "),a("div",{staticClass:"mar-top"},[a("label",{staticStyle:{width:"20%","vertical-align":"middle"},attrs:{for:""}},[t._v("支 队 领 导意见:")]),t._v(" "),a("el-input",{staticStyle:{width:"79%","vertical-align":"middle"},attrs:{disabled:"",type:"textarea",autosize:"",placeholder:"请输入内容",value:e.leaderOpinion}})],1),t._v(" "),a("div",{staticClass:"mar-top"},[a("label",{staticStyle:{width:"20%","vertical-align":"middle"},attrs:{for:""}},[t._v("支队项目办意见:")]),t._v(" "),a("el-input",{staticStyle:{width:"79%","vertical-align":"middle"},attrs:{disabled:"",type:"textarea",autosize:"",placeholder:"请输入内容",value:e.projectDepartmentOpinion}})],1),t._v(" "),a("div",{staticClass:"mar-top"},[a("label",{staticStyle:{width:"20%","vertical-align":"middle"},attrs:{for:""}},[t._v("建 设 单 位意见: ")]),t._v(" "),a("el-input",{staticStyle:{width:"79%","vertical-align":"middle"},attrs:{disabled:"",type:"textarea",autosize:"",placeholder:"请输入内容",value:e.constructionOpinion}})],1),t._v(" "),a("div",{staticClass:"mar-top"},[a("label",{staticStyle:{width:"20%","vertical-align":"middle"},attrs:{for:""}},[t._v("内   容   摘    要: ")]),t._v(" "),a("el-input",{staticStyle:{width:"79%","vertical-align":"middle"},attrs:{disabled:"",type:"textarea",autosize:"",placeholder:"请输入内容",value:e.projectContent}})],1),t._v(" "),a("div",{staticClass:"mar-top"},[a("label",{staticStyle:{width:"20%","vertical-align":"middle"},attrs:{for:""}},[t._v("预   算   价    格: ")]),t._v(" "),a("el-input",{staticStyle:{width:"79%","vertical-align":"middle"},attrs:{disabled:"",type:"textarea",autosize:"",placeholder:"请输入内容",value:e.projectBudgetPrice}})],1),t._v(" "),a("div",{staticClass:"mar-top"},[a("label",{staticStyle:{width:"20%","vertical-align":"middle"},attrs:{for:""}},[t._v("立   项   依    据: ")]),t._v(" "),a("el-input",{staticStyle:{width:"79%","vertical-align":"middle"},attrs:{disabled:"",type:"textarea",autosize:"",placeholder:"请输入内容",value:e.projectBasis}})],1),t._v(" "),a("div",{staticClass:"mar-top"},[a("label",{staticStyle:{width:"20%","vertical-align":"middle"},attrs:{for:""}},[t._v("承       办      人: ")]),t._v(" "),a("el-input",{staticStyle:{width:"79%","vertical-align":"middle"},attrs:{disabled:"",type:"textarea",autosize:"",placeholder:"请输入内容",value:e.promoterId}})],1),t._v(" "),a("div",{staticClass:"mar-top"},[a("label",{staticStyle:{width:"20%","vertical-align":"middle"},attrs:{for:""}},[t._v("单                位: ")]),t._v(" "),a("el-input",{staticStyle:{width:"79%","vertical-align":"middle"},attrs:{disabled:"",type:"textarea",autosize:"",placeholder:"请输入内容",value:e.projectUnitId}})],1),t._v(" "),a("div",{staticClass:"mar-top"},[a("label",{staticStyle:{width:"20%","vertical-align":"middle"},attrs:{for:""}},[t._v("开   始   日    期: ")]),t._v(" "),a("el-input",{staticStyle:{width:"79%","vertical-align":"middle"},attrs:{disabled:"",type:"textarea",autosize:"",placeholder:"请输入内容",value:e.startTime}})],1),t._v(" "),a("div",{staticClass:"mar-top"},[a("label",{staticStyle:{width:"20%","vertical-align":"middle"},attrs:{for:""}},[t._v("立   项   附    件: ")]),t._v(" "),a("el-input",{staticStyle:{width:"79%","vertical-align":"middle"},attrs:{disabled:"",type:"textarea",autosize:"",placeholder:"请输入内容",value:e.projectAttachment}})],1)])],1)}),t._v(" "),t._l(t.tendetArr,function(e,i){return a("div",{key:i+"1",staticStyle:{width:"48.5%",display:"inline-block","vertical-align":"top","margin-bottom":"25px"}},[a("el-card",{attrs:{shadow:"hover"}},[a("span",{staticClass:"title"},[t._v("招标详情")]),t._v(" "),a("div",[a("label",{staticStyle:{width:"20%","vertical-align":"middle"},attrs:{for:""}},[t._v("招   标    编   号:")]),t._v(" "),a("el-input",{staticStyle:{width:"79%","vertical-align":"middle"},attrs:{disabled:"",type:"textarea",autosize:"",placeholder:"请输入内容",value:e.tenderNum}})],1),t._v(" "),a("div",{staticClass:"mar-top"},[a("label",{staticStyle:{width:"20%","vertical-align":"middle"},attrs:{for:""}},[t._v("申   请    单   位:")]),t._v(" "),a("el-input",{staticStyle:{width:"79%","vertical-align":"middle"},attrs:{disabled:"",type:"textarea",autosize:"",placeholder:"请输入内容",value:e.tenderForUnit}})],1),t._v(" "),a("div",{staticClass:"mar-top"},[a("label",{staticStyle:{width:"20%","vertical-align":"middle"},attrs:{for:""}},[t._v("招   标    方   式:")]),t._v(" "),a("el-input",{staticStyle:{width:"79%","vertical-align":"middle"},attrs:{disabled:"",type:"textarea",autosize:"",placeholder:"请输入内容",value:e.tenderType}})],1),t._v(" "),a("div",{staticClass:"mar-top"},[a("label",{staticStyle:{width:"20%","vertical-align":"middle"},attrs:{for:""}},[t._v("支 队 领 导意见:")]),t._v(" "),a("el-input",{staticStyle:{width:"79%","vertical-align":"middle"},attrs:{disabled:"",type:"textarea",autosize:"",placeholder:"请输入内容",value:e.leaderOpinion}})],1),t._v(" "),a("div",{staticClass:"mar-top"},[a("label",{staticStyle:{width:"20%","vertical-align":"middle"},attrs:{for:""}},[t._v("支队项目办意见:")]),t._v(" "),a("el-input",{staticStyle:{width:"79%","vertical-align":"middle"},attrs:{disabled:"",type:"textarea",autosize:"",placeholder:"请输入内容",value:e.projectDepartmentOpinion}})],1),t._v(" "),a("div",{staticClass:"mar-top"},[a("label",{staticStyle:{width:"20%","vertical-align":"middle"},attrs:{for:""}},[t._v("建 设 单 位意见: ")]),t._v(" "),a("el-input",{staticStyle:{width:"79%","vertical-align":"middle"},attrs:{disabled:"",type:"textarea",autosize:"",placeholder:"请输入内容",value:e.constructionOpinion}})],1),t._v(" "),a("div",{staticClass:"mar-top"},[a("label",{staticStyle:{width:"20%","vertical-align":"middle"},attrs:{for:""}},[t._v("设   计    单   位:")]),t._v(" "),a("el-input",{staticStyle:{width:"79%","vertical-align":"middle"},attrs:{disabled:"",type:"textarea",autosize:"",placeholder:"请输入内容",value:e.tenderDesignUnit}})],1),t._v(" "),a("div",{staticClass:"mar-top"},[a("label",{staticStyle:{width:"20%","vertical-align":"middle"},attrs:{for:""}},[t._v("图   纸   标    号: ")]),t._v(" "),a("el-input",{staticStyle:{width:"79%","vertical-align":"middle"},attrs:{disabled:"",type:"textarea",autosize:"",placeholder:"请输入内容",value:e.drawNum}})],1),t._v(" "),a("div",{staticClass:"mar-top"},[a("label",{staticStyle:{width:"20%","vertical-align":"middle"},attrs:{for:""}},[t._v("预   算   价    格: ")]),t._v(" "),a("el-input",{staticStyle:{width:"79%","vertical-align":"middle"},attrs:{disabled:"",type:"textarea",autosize:"",placeholder:"请输入内容",value:e.projectBudgetPrice}})],1),t._v(" "),a("div",{staticClass:"mar-top"},[a("label",{staticStyle:{width:"20%","vertical-align":"middle"},attrs:{for:""}},[t._v("资   金   来    源: ")]),t._v(" "),a("el-input",{staticStyle:{width:"79%","vertical-align":"middle"},attrs:{disabled:"",type:"textarea",autosize:"",placeholder:"请输入内容",value:e.source}})],1),t._v(" "),a("div",{staticClass:"mar-top"},[a("label",{staticStyle:{width:"20%","vertical-align":"middle"},attrs:{for:""}},[t._v("承       办      人: ")]),t._v(" "),a("el-input",{staticStyle:{width:"79%","vertical-align":"middle"},attrs:{disabled:"",type:"textarea",autosize:"",placeholder:"请输入内容",value:e.tenderAgent}})],1),t._v(" "),a("div",{staticClass:"mar-top"},[a("label",{staticStyle:{width:"20%","vertical-align":"middle"},attrs:{for:""}},[t._v("单                位: ")]),t._v(" "),a("el-input",{staticStyle:{width:"79%","vertical-align":"middle"},attrs:{disabled:"",type:"textarea",autosize:"",placeholder:"请输入内容",value:e.tenderUnit}})],1),t._v(" "),a("div",{staticClass:"mar-top"},[a("label",{staticStyle:{width:"20%","vertical-align":"middle"},attrs:{for:""}},[t._v("开   始   日    期: ")]),t._v(" "),a("el-input",{staticStyle:{width:"79%","vertical-align":"middle"},attrs:{disabled:"",type:"textarea",autosize:"",placeholder:"请输入内容",value:e.startTime}})],1),t._v(" "),a("div",{staticClass:"mar-top"},[a("label",{staticStyle:{width:"20%","vertical-align":"middle"},attrs:{for:""}},[t._v("招   标   附    件: ")]),t._v(" "),a("el-input",{staticStyle:{width:"79%","vertical-align":"middle"},attrs:{disabled:"",type:"textarea",autosize:"",placeholder:"请输入内容",value:e.tenderAttachment}})],1)])],1)}),t._v(" "),t._l(t.addlist,function(e,i){return a("div",{key:i+"1",staticStyle:{width:"48.5%",display:"inline-block","vertical-align":"top","margin-bottom":"25px"}},[a("el-card",{attrs:{shadow:"hover"}},[a("div",{style:t.height},[a("span",{staticClass:"title"},[t._v("新增合同")]),t._v(" "),a("div",t._l(e,function(e,i){return a("div",{key:i,class:0!=i?"mar-top":""},[a("label",{staticStyle:{width:"15%","vertical-align":"middle"},attrs:{for:""}},[t._v(t._s(e.name))]),t._v(" "),"开始日期"!=e.name?a("el-input",{staticStyle:{width:"84%","vertical-align":"middle"},attrs:{type:"textarea",autosize:"",placeholder:"请输入内容"},model:{value:e.keys,callback:function(a){t.$set(e,"keys",a)},expression:"item.keys"}}):t._e(),t._v(" "),"开始日期"==e.name?a("el-date-picker",{staticStyle:{width:"84%","vertical-align":"middle"},attrs:{size:"small","value-format":"yyyy-MM-dd",align:"right",type:"date",placeholder:"选择日期","picker-options":t.pickerOptions},model:{value:e.keys,callback:function(a){t.$set(e,"keys",a)},expression:"item.keys"}}):t._e()],1)}),0)])])],1)})],2)])},staticRenderFns:[]};var r={components:{addContractXq:a("C7Lr")(s,d,!1,function(t){a("xaB+")},"data-v-612491f8",null).exports},data:function(){return{dialogVisible:!1,pds:!0,totalcount:null,pagenum:1,pagesize:10,sysid:null,tableData:[]}},mounted:function(){this.axios()},methods:{axios:function(){var t=this;this.$axios.get("/pack/getPackProjectList?pageNum="+this.pagenum+"&pageSize="+this.pagesize).then(function(e){if(console.log(e),200==e.data.code){var a=e.data.data;t.totalcount=Number(e.data.totalcount),t.tableData=[];for(var i=0;i<a.length;i++)t.tableData.push({bh:a[i].projectNum,dw:a[i].projectForUnit,name:a[i].projectName,jg:a[i].projectBudgetPrice,yj:a[i].projectBasis,id:a[i].sysId,xq:"查看详情"})}204==e.data.code&&console.log("查询失败")})},upPage:function(t){this.pagenum=t,this.axios()},nextPage:function(t){this.pagenum=t,this.axios()},currentPage:function(t){this.pagenum=t,this.axios()},model:function(t){this.dialogVisible=!0,this.sysid=t},Submission:function(){var t,e=this,a=this.$refs.tenderXq.addlist;t={pactNum:a[0][0].keys,pactName:a[0][1].keys,companyId:a[0][2].keys,startTime:a[0][3].keys,pactAttachmentTwo:a[0][4].keys,projectId:String(this.sysid)};var i=l()(t);console.log(i),this.$axios.post("/pack/insertPack",i).then(function(t){console.log(t),200==t.data.code&&(e.$message({message:t.data.msg,type:"success"}),e.dialogVisible=!1,e.axios()),204==t.data.code&&e.$message.error(t.data.msg)})}}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"header"},[a("span",[t._v("新增合同管理")]),t._v(" "),a("div",{staticClass:"header-right"},[a("el-button",{attrs:{size:"small",type:"warning"},on:{click:function(e){return t.axios()}}},[t._v("刷新")])],1)]),t._v(" "),a("el-divider"),t._v(" "),a("div",{staticClass:"table-bot"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[a("el-table-column",{attrs:{prop:"bh",label:"项目编号"}}),t._v(" "),a("el-table-column",{attrs:{prop:"dw",label:"申请单位"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"项目名称"}}),t._v(" "),a("el-table-column",{attrs:{prop:"jg",label:"预算价格"}}),t._v(" "),a("el-table-column",{attrs:{prop:"yj",label:"立项依据"}}),t._v(" "),a("el-table-column",{attrs:{prop:"xq",label:"详情"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticClass:"det",on:{click:function(a){return t.model(e.row.id)}}},[t._v(t._s(e.row.xq)),a("span")])]}}])})],1),t._v(" "),a("el-pagination",{attrs:{background:"","page-size":t.pagesize,"current-page":t.pagenum,"hide-on-single-page":t.pds,layout:"prev, pager, next",total:t.totalcount},on:{"prev-click":t.upPage,"next-click":t.nextPage,"current-change":t.currentPage}})],1),t._v(" "),a("el-dialog",{attrs:{visible:t.dialogVisible,width:"1200px"},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("addContractXq",{ref:"tenderXq",attrs:{id:t.sysid}}),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.Submission}},[t._v("提 交")])],1)],1)],1)},staticRenderFns:[]};var c=a("C7Lr")(r,n,!1,function(t){a("iWIK")},"data-v-a0038dac",null);e.default=c.exports},iWIK:function(t,e){},"xaB+":function(t,e){}});
//# sourceMappingURL=9.f70e2268570e2ad99802.js.map