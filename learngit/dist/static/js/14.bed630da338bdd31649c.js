webpackJsonp([14],{Ud7W:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("3cXf"),i=a.n(l),n={name:"add",data:function(){return{input:"",input1:"",pickerOptions:{shortcuts:[{text:"最近一周",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()+6048e5),e.$emit("pick",[t,a])}},{text:"最近一个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()+2592e6),e.$emit("pick",[t,a])}},{text:"最近三个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()+7776e6),e.$emit("pick",[t,a])}}]},value:"",beginTime:"",endTime:"",fileList:[],tableData:[{name:"",brief:"",upload:""},{name:"",brief:"",upload:""},{name:"",brief:"",upload:""},{name:"",brief:"",upload:""},{name:"",brief:"",upload:""}]}},methods:{handleChange:function(e,t){console.log(e),console.log(t)},add:function(){this.tableData.push({name:"",brief:"",upload:""})},del:function(e){var t=this.$createElement;1==this.tableData.length?this.$notify({title:"错误的操作",message:t("i",{style:"color: teal"},"最后一条数据不可删除！")}):this.tableData.splice(e,1)},change:function(e){this.beginTime=e[0],this.endTime=e[1]},preserve:function(e){for(var t=this,a=[],l=0;l<this.tableData.length;l++)""!=this.tableData[l].name&&""!=this.tableData[l].brief&&a.push({documentName:this.tableData[l].name,documentOverview:this.tableData[l].brief});var n=i()({projectNum:this.input,projectName:this.input1,beginTime:this.beginTime,endTime:this.endTime,documentList:a});console.log(n),this.$axios.post("/projectFinal/insertProjectFinal",n).then(function(a){console.log(a),200==a.data.code&&(t.$message({message:a.data.msg,type:"success"}),t.$router.push({name:e})),204==a.data.code&&t.$message.error(a.data.msg)})},cancel:function(e){this.$router.push({name:e})}}},s={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[e._m(0),e._v(" "),a("el-divider"),e._v(" "),a("div",{staticClass:"box"},[a("el-card",{attrs:{shadow:"hover"}},[a("div",{staticClass:"box-top"},[a("el-form",{ref:"form",attrs:{"label-width":"80px"}},[a("ul",[a("li",[a("el-form-item",{attrs:{label:"项目编号"}},[a("el-input",{attrs:{size:"small",placeholder:"请输入项目编号",clearable:""},model:{value:e.input,callback:function(t){e.input=t},expression:"input"}})],1)],1),e._v(" "),a("li",[a("el-form-item",{attrs:{label:"项目名称"}},[a("el-input",{attrs:{size:"small",placeholder:"请输入项目名称",clearable:""},model:{value:e.input1,callback:function(t){e.input1=t},expression:"input1"}})],1)],1),e._v(" "),a("li",[a("el-form-item",{attrs:{label:"计划时间"}},[a("el-date-picker",{attrs:{size:"small",type:"daterange",align:"right","unlink-panels":"","value-format":"yyyy-MM-dd","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":e.pickerOptions},on:{change:e.change},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)],1)])])],1),e._v(" "),a("el-divider"),e._v(" "),a("div",{staticClass:"box-con"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData}},[a("el-table-column",{attrs:{prop:"name",label:"文档名称",width:"300px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{attrs:{size:"small",placeholder:"请输入文档名称",clearable:""},model:{value:t.row.name,callback:function(a){e.$set(t.row,"name",a)},expression:"scope.row.name"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"brief",label:"文档简介"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{attrs:{type:"textarea",autosize:"",size:"small",placeholder:"请输入文档简介",clearable:""},model:{value:t.row.brief,callback:function(a){e.$set(t.row,"brief",a)},expression:"scope.row.brief"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"upload",label:"上传文件",width:"200px"}},[[a("el-upload",{staticClass:"upload-demo",attrs:{action:"http://192.168.43.133:8080/projectFinal/insertProjectFinal","on-change":e.handleChange}},[a("i",{staticClass:"el-icon-upload",staticStyle:{"font-size":"30px"}})])]],2),e._v(" "),a("el-table-column",{attrs:{label:"功能",width:"150px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("i",{staticClass:"el-icon-plus",staticStyle:{"font-size":"20px"},on:{click:e.add}}),e._v(" "),a("i",{staticClass:"el-icon-minus",staticStyle:{"font-size":"20px"},on:{click:function(a){return e.del(t.$index)}}})]}}])})],1)],1),e._v(" "),a("div",{staticClass:"box-bot"},[a("el-button",{attrs:{type:"warning",size:"small"},on:{click:function(t){return e.preserve("addProject")}}},[e._v("保存")]),e._v(" "),a("el-button",{attrs:{type:"info",size:"small"},on:{click:function(t){return e.cancel("addProject")}}},[e._v("取消")])],1)],1)],1)],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("header",[t("h4",[this._v("添加上级项目")])])}]};var o=a("C7Lr")(n,s,!1,function(e){a("k2U7")},"data-v-66a2854f",null);t.default=o.exports},k2U7:function(e,t){}});
//# sourceMappingURL=14.bed630da338bdd31649c.js.map