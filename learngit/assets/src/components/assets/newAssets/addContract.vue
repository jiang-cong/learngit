<template>
    <div id="app">
    <!-- table表格 -->
    <Row>
    <i-col :xs="24" :sm="24" :md="6" :lg="5" :xl="4" :xxl="3">
    <div class="box">
    <div class="big" v-if="pd==1">
        <!-- <span>智能大类/小类：</span>
    <Cascader :data="data4" :load-data="loadData" @on-change="intellectData" change-on-select style="width:70%;display:inline-block;"></Cascader> -->
    <Menu active-name='1'>
        <MenuGroup title="智能资产类别">
            <MenuItem :name=item.name v-for="(item,index) in data4" :key="index" @click.native="hardwareData(item.name,pageNum,item.label)">
                <Icon :type=item.icon />
                {{item.label}}
            </MenuItem>
        </MenuGroup>
    </Menu>
    </div>
    <div class="small" v-if="pd==2">
        <!-- <span>基础大类/小类：</span>
     <Cascader :data="data5" :load-data="loadData2" @on-change="baseData" change-on-select style="width:70%;display:inline-block;"></Cascader> -->
     <Menu active-name="1">
        <MenuGroup title="基础资产类别">
            <MenuItem :name=item.name v-for="(item,index) in data5" :key="index" @click.native="basebig(item.name,pageNum,item.label)">
                <Icon :type=item.icon />
                {{item.label}}
            </MenuItem>
        </MenuGroup>
    </Menu>
    </div>
    </div>
    </i-col>
    <i-col :xs="24" :sm="24" :md="18" :lg="19" :xl="20" :xxl="21">
    <div class="header-bottom">
        <div class="header-title">
            <div>资源列表</div>
             <div class="btn">
            <Button type="info" icon="md-add" @click="add">新增</Button>
            <Button type="success" icon="md-create">修改</Button>
            <Button type="error" icon="md-trash">删除</Button>
            <Button type="warning" icon="md-document" @click="submission">提交</Button>
            </div>
        </div>
        <div class="mind" v-if="pd==1"><!--智能表格-->
        <!-- <Tabs type="card" v-model="tab">
        <TabPane label="智能硬件" name="hardware" @on-click='this.tab = hardware'>
             <div class="header-title">
            <div>资源列表</div>
             <div class="btn">
            <Button type="info" icon="md-add" size="small" @click="add">新增</Button>
            <Button type="success" size="small" icon="md-create">修改</Button>
            <Button type="error" size="small" icon="md-trash">删除</Button>
            <Button type="warning" size="small" icon="md-document">提交</Button>
            </div>
        </div>
             <Table border ref="selection" :columns="columns2" :data="data2"></Table>智能表格硬件
             <div class="page" v-if="pd6==0">大类数据的分页
                 <Page v-if="pd7" :total=total :page-size=pageSize @on-change="hardwarePage" />
            </div>
            <div class="page" v-if="pd6==1">小类数据的分页
                 <Page v-if="pd8" :total=total :page-size=pageSize @on-change="HardwarePageSmall" />
            </div>
        </TabPane>
        <TabPane label="智能软件" name="software" @on-click='this.tab = software'>
             <div class="header-title">
            <div>资源列表</div>
             <div class="btn">
            <Button type="info" size="small" icon="md-add" @click="add">新增</Button>
            <Button type="success" size="small" icon="md-create">修改</Button>
            <Button type="error" size="small" icon="md-trash">删除</Button>
            <Button type="warning" size="small" icon="md-document">提交</Button>
            </div>
        </div>
            <Table border ref="selection" :columns="columns3" :data="data3"></Table>智能表格软件
            <div class="page" v-if="pd6==0">大类数据的分页
                 <Page v-if="pd4" :total=total :page-size=pageSize @on-change="page" />
            </div>
            <div class="page" v-if="pd6==1">小类数据的分页
                 <Page v-if="pd5" :total=total :page-size=pageSize @on-change="pageSmall" />
            </div>
        </TabPane>
        </Tabs> -->
        <div class="hardware" v-if="pd1"><!--硬件资源-->
            <p>智能<span style="color:#388FE8">硬件</span>资源</p>
        <Table border ref="selection" :columns="columns2" :data="data2"></Table><!--智能表格硬件-->
        <div class="page"><!--大类硬件数据的分页-->
                 <Page v-if="pd7" :current=pagecurr :total=total1 :page-size=pageSize @on-change="hardwarePage" />
            </div>
        </div>
        <div class="software" v-if="pd2"><!--软件资源-->
            <p>智能<span style="color:#E44E0E">软件</span>资源</p>
        <Table border ref="selection" :columns="columns3" :data="data3"></Table><!--智能表格软件-->
        <div class="page"><!--大类软件数据的分页-->
                 <Page v-if="pd4" :current=pagecurr2 :total=total :page-size=pageSize @on-change="page" />
            </div>
        </div>
        </div>
        <div v-if="pd==2">
        <Table border ref="selection" :columns="columns1" :data="data1"></Table><!--基础表格-->
          <div class="page"><!--大类数据的分页-->
                <Page v-if="pd9" :current=pagecurr :total=total :page-size=pageSize @on-change="basePage" />
            </div>
          <!-- <div class="page" v-if="pd11==1">小类数据的分页
                <Page v-if="pd10" :total=total :page-size=pageSize @on-change="basePageSmall" />
          </div> -->
        </div>
    </div>
    </i-col>
    </Row>
    <!-- 模态框 -->
     <Modal
        v-model="modal"
        title="资产录入"
        width="70%"
        @on-ok="ok"
        @on-cancel="cancel"
        @on-visible-change="openModel">
        <div class="model">
        <ul>
            <li>
            <span>合同名称：</span>
            <Input v-model="addData.value" placeholder="请输入合同名称" clearable style="width: 300px" />
            </li>
            <li>
            <span>资产大类：</span>
            <Input v-model="addData.model8" disabled placeholder="请输入资产大类" clearable style="width: 300px" />
            <!-- <Select v-model="addData.model8" @on-change="select" @on-clear="delbig" clearable style="width:300px">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select> -->
            </li>
            <li v-if="pd3==0||pd==2">
            <span>资产小类：</span>
            <!-- <Input v-model="value" placeholder="请输入合同名称" clearable style="width: 300px" /> -->
            <Select v-model="addData.model9" labelInValue clearable @on-change="selectChange" style="width:300px">
            <Option v-for="item in cityList2" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
            </li>
            <li v-if="pd3==1">
            <span>资产小类：</span>
            <!-- <Input v-model="value" placeholder="请输入合同名称" clearable style="width: 300px" /> -->
            <Select v-model="addData.model9" disabled labelInValue clearable @on-change="selectChange" style="width:300px">
            <Option v-for="item in cityList2" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
            </li>
            <li v-if="pd==2" style="padding:0;">
            <div style="padding:15px 0;" v-for="(item,index) in addData.value27" :key="index">
            <span>类&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别：</span>
            <Input style="width: 270px;" v-model="addData.value27[index]" placeholder="请输入资产类别" clearable />
             <Icon type="ios-add-circle" style="font-size:25px;vertical-align: middle;" @click="addType" />
            </div>
            </li>
            <li v-if="pd==2" style="padding:0;">
            <div style="padding:15px 0;" v-for="(item,index) in addData.value28" :key="index">
            <span>规&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;格：</span>
            <Input v-model="addData.value28[index]"  placeholder="请输入规格" clearable style="width: 270px" />
            <Icon type="ios-add-circle" style="font-size:25px;vertical-align: middle;" @click="addSpecifications" />
            </div>
            </li>
             <li v-if="pd==2" style="padding:0;">
            <div style="padding:15px 0;" v-for="(item,index) in addData.value29" :key="index">
            <span>品&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;牌：</span>
            <Input v-model="addData.value29[index]" placeholder="请输入品牌" clearable style="width: 270px" />
            <Icon type="ios-add-circle" style="font-size:25px;vertical-align: middle;" @click="addBrand" />
            </div>
            </li>
             <li v-if="pd==2" style="padding:0;">
            <div style="padding:15px 0;" v-for="(item,index) in addData.value30" :key="index">
            <span>数&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;量：</span>
            <Input v-model="addData.value30[index]" placeholder="请输入数量" clearable style="width: 270px" />
            <Icon type="ios-add-circle" style="font-size:25px;vertical-align: middle;" @click="addNum" />
            </div>
            </li>
             <li v-if="pd==2" style="padding:0;">
            <div style="padding:15px 0;" v-for="(item,index) in addData.value31" :key="index">
            <span>启用金额：</span>
            <Input @on-blur="plusNumber" v-model="addData.value31[index]" placeholder="请输入启用金额" clearable style="width: 270px" />
            <Icon type="ios-add-circle" style="font-size:25px;vertical-align: middle;" @click="addEnable" />
            </div>
            </li>
             <li v-if="pd==2">
            <span>金额小计：</span>
            <Input disabled v-model="addData.value32" placeholder="请输入金额小计" clearable style="width: 300px" />
            </li>
             <li v-if="pd==2">
            <span>建设单位：</span>
            <Input v-model="addData.value33" placeholder="请输入建设单位" clearable style="width: 300px" />
            </li>
            <li v-if="pd3==0&&pd==1">
            <span>设备名称：</span>
            <Input v-model="addData.value1" placeholder="请输入资产类别" clearable style="width: 300px" />
            </li>
            <li v-if="pd3==1&&pd==1">
            <span>软件名称：</span>
            <Input v-model="addData.value20" placeholder="请输入软件名称" clearable style="width: 300px" />
            </li>
            <li v-if="pd3==1&&pd==1">
            <span>软件简介：</span>
            <Input v-model="addData.value21" type="textarea" :autosize="true" placeholder="请输入软件简介" style="width: 300px" />
            </li>
            <li v-if="pd3==1&&pd==1">
            <span>发布方式：</span>
            <Input v-model="addData.value22" placeholder="请输入软件名称" clearable style="width: 300px" />
            </li>
            <li v-if="pd3==1&&pd==1">
            <span>部署服务器IP：</span>
            <Input v-model="addData.value23" placeholder="请输入软件名称" clearable style="width: 275px" />
            </li>
            <li v-if="pd3==0&&pd==1">
            <span>设&nbsp;&nbsp;备&nbsp;&nbsp;IP：</span>
            <Input v-model="addData.value2" placeholder="请输入资产类别" clearable style="width: 300px" />
            </li>
            <li>
            <span>启用日期：</span>
            <DatePicker type="date" v-model="addData.date1" @on-change="time2" format="yyyy-MM-dd" placeholder="请输入启用日期" clearable style="width: 300px"></DatePicker>
            </li>
            <li>
            <span>竣工日期：</span>
            <DatePicker type="date" v-model="addData.date" @on-change="time1" format="yyyy-MM-dd" placeholder="请输入竣工日期" clearable style="width: 300px"></DatePicker>
            </li>
            <li v-if="pd==1">
            <span>启用价值：</span>
            <Input v-model="addData.value3" placeholder="请输入资产类别" clearable style="width: 300px" />
            </li>
             <li v-if="pd==2">
            <span>预计使用年限：</span>
            <Input v-model="addData.value34" placeholder="请输入资产类别" clearable style="width: 270px" />
            </li>
            <li v-if="pd==1">
            <span>预计使用年限：</span>
            <Input v-model="addData.value4" disabled placeholder="请输入资产类别" clearable style="width: 270px" />
            </li>
            <li v-if="pd==1">
            <span>质保期限：</span>
            <Input v-model="addData.value5" placeholder="请输入资产类别" clearable style="width: 300px" />
            </li>
            <li v-if="pd3==1&&pd==1">
            <span>开发厂商：</span>
            <Input v-model="addData.value24" placeholder="请输入软件名称" clearable style="width: 300px" />
            </li>
            <li v-if="pd3==0">
            <span>详细位置：</span>
            <Input v-model="addData.value6" placeholder="请输入资产类别" clearable style="width: 300px" />
            </li>
            <li v-if="pd3==0&&pd==1">
            <span>经&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;度：</span>
            <Input v-model="addData.value7" placeholder="请输入资产类别" clearable style="width: 300px" />
            </li>
            <li v-if="pd3==0&&pd==1">
            <span>纬&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;度：</span>
            <Input v-model="addData.value8" placeholder="请输入资产类别" clearable style="width: 300px" />
            </li>
            <li v-if="pd3==0&&pd==1">
            <span>品牌名称：</span>
            <Input v-model="addData.value9" placeholder="请输入资产类别" clearable style="width: 300px" />
            </li>
            <li v-if="pd3==0&&pd==1">
            <span>品牌型号：</span>
            <Input v-model="addData.value10" placeholder="请输入资产类别" clearable style="width: 300px" />
            </li>
            <li v-if="pd==1">
            <span>负责民警：</span>
            <Input v-model="addData.value11" placeholder="请输入资产类别" clearable style="width: 300px" />
            </li>
            <li v-if="pd==1">
            <span>管理单位：</span>
            <Input v-model="addData.value12" disabled placeholder="请输入资产类别" clearable style="width: 300px" />
            </li>
            <li v-if="pd==1">
            <span>运维单位：</span>
            <Input v-model="addData.value13" placeholder="请输入资产类别" clearable style="width: 300px" />
            </li>
            <li v-if="pd==1">
            <span>运维负责人：</span>
            <Input v-model="addData.value14" placeholder="请输入资产类别" clearable style="width: 290px" />
            </li>
            <!-- <li>
            <span>联系电话：</span>
            <Input v-model="addData.value15" placeholder="请输入资产类别" clearable style="width: 300px" />
            </li> -->
            <li v-if="pd3==0&&pd==1">
            <span>供电方式：</span>
            <Input v-model="addData.value16" placeholder="请输入资产类别" clearable style="width: 300px" />
            </li>
            <li v-if="pd==1">
            <span>是否启用：</span>
            <Input v-model="addData.value17" placeholder="请输入资产类别" clearable style="width: 300px" />
            </li>
            <li v-if="pd3==1&&pd==1">
            <span>是否正常访问：</span>
            <Input v-model="addData.value25" placeholder="请输入软件名称" clearable style="width: 270px" />
            </li>
            <li>
            <span>备&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注：</span>
            <Input v-model="addData.value26" placeholder="请输入软件名称" clearable style="width: 300px" />
            </li>
            <li v-if="pd3==0&&pd==1">
            <span>供电正常：</span>
            <Input v-model="addData.value18" placeholder="请输入资产类别" clearable style="width: 300px" />
            </li>
            <li v-if="pd3==0&&pd==1">
            <span>联网正常：</span>
            <Input v-model="addData.value19" placeholder="请输入资产类别" clearable style="width: 300px" />
            </li>
        </ul>
        <div class="img">
            <Upload
        multiple
        type="drag"
        action="//jsonplaceholder.typicode.com/posts/">
        <div style="padding: 20px 0">
            <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
            <p>上传设备照片</p>
        </div>
    </Upload>
        </div>
        </div>
    </Modal>
    <Modal
        v-model="modal1"
        title="请选择新增类别"
        @on-ok="ok1"
        @on-cancel="cancel1"
        :mask-closable="false">
        <RadioGroup v-model="single">
        <Radio label="智能硬件"></Radio>
        <Radio label="智能软件"></Radio>
        </RadioGroup>
    </Modal>
    </div>
</template>
<script>
export default {
    data(){
        return{
            pagecurr2:1,//软件的当前页码
            pagecurr:1,//硬件和基础的当前页码
            bigname:'',//新增模态框里的大类
            buildNum:'',//项目编号
            single: '智能硬件',//模态框判断里的单选框 
            fathersysId:null,//大类的sysId
            // sonsysId:null,//小类sysId
            total:0,//软件总条数 基础总条数
            total1:0,//硬件总条数
            pageNum:1,//第几页
            pageSize:2,//一页显示条数
            // tab:'hardware',//tab标签绑定的name值
            data4:[],//智能大类/小类
            data5:[],//基础大类/小类
            pd:'',//判断是智慧还是基础项目 路由传来的值
            pd1:true,//判断是智能硬件吗
            pd2:false,//判断是智能软件吗
            pd3:0,//新增的内容判断是智能硬件还是软件
            pd4:false,//软件大类分页是否显示
            // pd5:false,//软件小类分页是否显示
            // pd6:0,//判断是小类还是大类分页 0大类 1小类
            pd7:false,//硬件大类分页是否显示
            // pd8:false,//硬件小类分页是否显示
            pd9:false,//基础大类分页
            // pd10:false,//基础小类分页
            // pd11:0,//判断是基础大类还是小类0为大类1为小类
            cityList: [],//资产新增大类数据
            cityList2: [],//资产新增小类数据
            addData:{
            value:'',//合同名称
            model8: '',//资产大类选择数据
            model9: '',//资产小类选择数据
            value1:'',//设备名称
            value2:'',//设备IP
             date:'',//竣工日期
            date1:'',//启用时间
            value3:'',//启用价值
            value4:'5',//预计使用年限
            value5:'',//质保期限
            value6:'',//详细位置
            value7:'',//经度
            value8:'',//纬度
            value9:'',//品牌名称
            value10:'',//品牌型号
            value11:'',//负责民警
            value12:'科研所',//管理单位
            value13:'',//运维单位
            value14:'',//运维负责人
            value15:'',//联系电话
            value16:'',//供电方式
            value17:'',//是否启用
            value18:'',//供电正常
            value19:'',//联网正常
            value20:'',//软件名称
            value21:'',//软件简介
            value22:'',//发布方式
            value23:'',//部署服务器IP
            value24:'',//开发厂商
            value25:'',//是否正常访问
            value26:'',//备注
            value27:[''],//类别
            value28:[''],//规格
            value29:[''],//品牌
            value30:[''],//数量
            value31:[''],//启用金额
            value32:null,//金额小计
            value33:'',//建设单位
            value34:'',//基础的预计使用年限
            },
            nameLabel:'',//小类的label值
            model8Sysid:'',//基础大类id
            modal:false,//新增模态框开关
            modal1:false,//询问模态框的开关
            columns1: [//table表格头部基础的
                {
                    type: 'selection',
                    width: 60,
                    align: 'center'
                },
                {
                    title: '资产编号',
                    key: 'number'
                },
                {
                    title: '合同名称',
                    key: 'name'
                },
                {
                    title: '资产类别',
                    key: 'category'
                },
                {
                    title: '项目编号',
                    key: 'project'
                },
                {
                    title: '启用金额',
                    key: 'money'
                },
                ],
                data1: [],//table表格数据基础
            columns2: [//table表格头部智能硬件
                {
                    type: 'selection',
                    width: 60,
                    align: 'center'
                },
                {
                    title: '资产编号',
                    key: 'number'
                },
                {
                    title: '合同名称',
                    key: 'name'
                },
                {
                    title: '运维单位',
                    key: 'category'
                },
                {
                    title: '项目编号',
                    key: 'project'
                },
                {
                    title: '资产管理审批状态',
                    key: 'money'
                },
                ],
                data2: [],//table表格数据智能硬件
                columns3: [//table表格头部智能软件
                {
                    type: 'selection',
                    width: 60,
                    align: 'center'
                },
                 {
                    title: '项目编号',
                    key: 'project'
                },
                {
                    title: '管理单位',
                    key: 'number'
                },
                {
                    title: '合同名称',
                    key: 'name'
                },
                {
                    title: '运维单位',
                    key: 'category'
                },
               
                {
                    title: '资产管理审批状态',
                    key: 'money'
                },
                ],
                data3: [],//table表格数据智能软件
        }
    },
    methods:{
        add(){//点击增加打开模态框
            if(this.fathersysId==8){
                this.modal1 = true;//询问新增硬件还是软件的模态框
                this.single = '智能硬件';
            }else{
                this.modal = true;//打开新增模态框
                this.addData.value4 = 5;
            }
        },
        addType(){//类别增加
            this.addData.value27.push('');
        },
        addSpecifications(){//规格增加
            this.addData.value28.push('');
        },
        addBrand(){//品牌增加
            this.addData.value29.push('');
        },
        addNum(){//数量增加
            this.addData.value30.push('');
        },
        addEnable(){//启用金额增加
            this.addData.value31.push('');
        },
        plusNumber(){//启用金额相加的数据
        let result = this.addData.value31.reduce((pre, cur, index) => {
           if(this.addData.value31.length>1){
                return Number(pre) + Number(cur);
           }else if(this.addData.value31.length<=1){
               return Number(cur);
           }
        })
        this.addData.value32 = result;
        },
        submission(){//提交所有数据
            this.$axios.get(`/build/assetsubmit?buildNum=${this.buildNum}&statusNum=441`).then(res=>{
                this.$router.push({
                    name:'AddAssets'
                })
            })
        },

        ok () {//新增模态框确定键
        if(this.pd==1){
             if(this.single=='智能软件'){
            this.Software(this.fathersysId);
        }else if(this.single=='智能硬件'){
           this.baseNewData(this.fathersysId);
        }
        }else if(this.pd==2){
            this.basicsData();
        }
       
        },

        cancel () {//新增模态框取消键
            this.$Message.info('取消');
        },
        ok1 () {//询问软硬件模态框确定键
        if(this.single=='智能硬件'){//如果是硬件显示硬件的新增信息
            this.pd3 = 0;//硬件新增消息显示
            this.modal = true;//打开新增模态框
            this.addData.value4 = 5;
            this.addData.model9 = '';
        }else if(this.single=='智能软件'){//如果是软件显示软件的新增信息
            this.pd3 = 1;//软件新增消息显示
            this.modal = true;//打开新增模态框
            this.addData.value4 = 10;
            this.addData.model9 = 1;
        }
        },
        cancel1 () {//询问软硬件模态框取消键
            this.$Message.info('取消');
        },
        baseNewData(num){//新增智能硬件数据
            var newobj =this.$qs.stringify({
                sysId:String(this.fathersysId),//硬件资产id
                hardwitNum:'ZN2108022016110500001',//硬件资产编号
                buildNum:this.buildNum,//项目编号
                pactName:this.addData.value,//合同名称
                // hardwitBigType:this.addData.model8,//资产大类id
                hardwitSmallType:this.addData.model9,//资产小类id
                facilityName:this.addData.value1,//设备名称
                facilityIp:this.addData.value2,//设备IP
                startTime:this.addData.date1,//启用日期
                stopTime:this.addData.date,//竣工日期
                startMoney:this.addData.value3,//启用价值
                planYear:this.addData.value4,//预计使用年限
                qualityYear:this.addData.value5,//质保期限
                place:this.addData.value6,//详细位置
                longitude:this.addData.value7,//经度
                latitude:this.addData.value8,//纬度
                brandName:this.addData.value9,//品牌名称
                brandType:this.addData.value10,//品牌型号
                takePoliceId:this.addData.value11,//负责民警id
                maintenanceUnit:this.addData.value13,//运维单位id
                maintenancePoliceId:this.addData.value14,//运维单位负责人id
                powerType:this.addData.value16,//供电方式
                start:this.addData.value17,//是否启用
                power:this.addData.value18,//供电正常
                computer:this.addData.value19,//联网正常
                submit:1,
                ps:this.addData.value26,//备注
            })
            this.$axios.post(`/hardwit${num}/mysubmit`,newobj).then(res=>{
                 this.$Message.info('数据提交成功');
                 this.addData.model8 = this.bigname;
                 if(num==8){
                     this.software(num,this.pageNum);
                     this.pagecurr = 1;
                     this.hardwareData(num,this.pageNum,this.bigname);
                 }else{
                     this.pagecurr = 1;
                     this.hardwareData(num,this.pageNum,this.bigname)
                 }
                 this.addData.value = '';//合同名称
                 this.addData.model9 = '';//资产小类
                 this.addData.value1 = '';//设备名称
                 this.addData.value2 = '';//设备IP
                 this.addData.date1 = '';//启用日期
                 this.addData.date = '';//竣工日期
                 this.addData.value3 = '';//启用价值
                 this.addData.value4 = '';//预计使用年限
                 this.addData.value5 = '';//质保期限
                 this.addData.value6 = '';//详细位置
                 this.addData.value7 = '';//经度
                 this.addData.value8 = '';//纬度
                 this.addData.value9 = '';//品牌名称
                 this.addData.value10 = '';//品牌型号
                 this.addData.value11 = '';//负责民警id
                 this.addData.value13 = '';//运维单位id
                 this.addData.value14 = '';//运维单位负责人id
                 this.addData.value16 = '';//供电方式
                 this.addData.value17 = '';//是否启用
                 this.addData.value18 = '';//供电正常
                 this.addData.value19 = '';//联网正常
                 this.addData.value26 = '';//备注
            }).catch(err=>{
                this.$Message.error('数据提交失败,请检查数据格式重新提交。');
            })
        },
        Software(num){//新增智能软件数据
            var newobj =this.$qs.stringify({
                sysId:String(this.fathersysId),//软件资产id
                softwitNum:'ZN2108022016110500001',//软件资产编号
                buildNum:this.buildNum,//项目编号
                pactName:this.addData.value,//合同名称
                // hardwitBigType:this.addData.model8,//资产大类
                // softwitSmallType:this.addData.model9,//资产小类
                softwitName:this.addData.value20,//软件名称
                softContent:this.addData.value21,//软件简介
                issueType:this.addData.value22,//发布方式
                softIp:this.addData.value23,//部署服务器ip
                startTime:this.addData.date1,//启用日期
                stopTime:this.addData.date,//竣工日期
                startMoney:this.addData.value3,//启用价值
                planYear:this.addData.value4,//预计使用年限
                qualityYear:this.addData.value5,//质保期限
                climax:this.addData.value24,//开发厂商
                takePoliceId:this.addData.value11,//负责民警id
                maintenanceUnit:this.addData.value13,//运维单位id
                maintenancePoliceId:this.addData.value14,//运维单位负责人id
                start:this.addData.value17,//是否启用
                visit:this.addData.value25,//是否正常访问
                ps:this.addData.value26,//备注
                submit:1
            })
            this.$axios.post(`/softwit/mysubmit`,newobj).then(res=>{
                console.log(res)
                 this.$Message.info('数据提交成功');
                 this.addData.model8 = this.bigname;
                 this.software(num,this.pageNum);
                 this.pagecurr2 = 1;//第几页

                 this.addData.value = '';//合同名称
                 this.addData.model9 = '';//资产小类
                 this.addData.value20 = '';//软件名称
                 this.addData.value21 = '';//软件简介
                 this.addData.value22 = '';//发布方式
                 this.addData.value23 = '';//部署服务器ip
                 this.addData.date1 = '';//启用日期
                 this.addData.date = '';//竣工日期
                 this.addData.value3 = '';//启用价值
                 this.addData.value4 = '';//预计使用年限
                 this.addData.value5 = '';//质保期限
                 this.addData.value24 = '';//开发厂商
                 this.addData.value11 = '';//负责民警id
                 this.addData.value13 = '';//运维单位id
                 this.addData.value14 = '';//运维单位负责人id
                 this.addData.value16 = '';//供电方式
                 this.addData.value17 = '';//是否启用
                 this.addData.value25 = '';//是否正常访问
                 this.addData.value26 = '';//备注
            }).catch(err=>{
                this.$Message.error('数据提交失败,请检查数据格式重新提交。');
            })
        },
        basicsData(){//基础新增数据
        var newobj =this.$qs.stringify({
            sysId:String(this.fathersysId),//基础资产id
            basicsNum:'ZN2108022016110500001',//基础资产编号
            buildNum:this.buildNum,//项目编号
            pactName:this.addData.value,//合同名称
            basicsName:this.nameLabel,//名称(小类的)
            basicsBigType:this.model8Sysid,//基础大类id
            basicsSmallType:this.addData.model9,//基础小类id
            typeList:this.addData.value27,//基础类别
            specificaList:this.addData.value28,//规格
            brandList:this.addData.value29,//品牌
            numberList:this.addData.value30,//数量
            startMoneyList:this.addData.value31,//启用金额
            money:this.addData.value32,//金额小计
            construcUnit:this.addData.value33,//建设单位
            startTime:this.addData.date1,//投入使用时间
            stopTime:this.addData.date,//竣工验收时间
            planYear:this.addData.value34,//预计使用年限
            place:this.addData.value6,//位置详细信息
            ps:this.addData.value26,//备注
            submit:1
        })
        console.log(newobj)
        this.$axios.post(`/basics/mysubmit`,newobj).then(res=>{
            console.log(res)
              this.$Message.info('数据提交成功');
              this.basebig(this.fathersysId,this.pageNum);

              this.addData.value = '';//合同名称
              this.addData.model9 = '';//资产小类
              this.addData.value27 = [''];//基础类别
              this.addData.value28 = [''];//规格
              this.addData.value29 = [''];//品牌
              this.addData.value30 = [''];//数量
              this.addData.value31 = [''];//启用金额
              this.addData.value32 = null;//金额小计
              this.addData.value33 = '';//建设单位
              this.addData.date1 = '';//启用日期
              this.addData.date = '';//竣工日期
              this.addData.value34 = '';//预计使用年限
              this.addData.value6 = '';//位置详细信息
              this.addData.value26 = '';//备注
        }).catch(err=>{
                this.$Message.error('数据提交失败,请检查数据格式重新提交。');
            })
        },
        selectChange(value){//下拉框关闭时获取小类label值
            if(value != undefined){
                this.nameLabel = value.label;
            }
            console.log(this.nameLabel)
        },
        openModel(state){//打开关闭模态框事件
                if(state==true){//打开模态框了
            this.addData.model8 = this.bigname;
            if(this.pd == 1){//是1的话执行智能的小类
                  this.$axios.get(`/witsmall/selectall?witbigId=${this.fathersysId}`).then(res=>{
                  console.log(res)
                this.cityList2 = [];
                for(let i = 0;i<res.data.length;i++){
                        this.cityList2.push(
                    {
                    value:res.data[i].witsmallNum,
                    label:res.data[i].witsmallName
                    }
                        )
                }
            })
            }else if(this.pd == 2){//是2的话执行基础小类
                this.$axios.get(`/basicssmall/selectall?basicsbigId=${this.fathersysId}`).then(res=>{
                  console.log(res)
                this.cityList2 = [];
                for(let i = 0;i<res.data.length;i++){
                        this.cityList2.push(
                    {
                    value:res.data[i].basicssmallNum,
                    label:res.data[i].basicssmallName
                    }
                        )
                }
            })
            }

                }
        },
         time1(e) {//竣工日期
            this.addData.date = e;
        },
         time2(e) {//启用日期
            this.addData.date1 = e;
        },
        hardwarePage(num){//智能大类硬件切换页
            // this.hardwareData(this.fathersysId,num,this.bigname);//执行智能大类硬件数据
                 this.$axios.get(`/hardwit${this.fathersysId}/selectall?hardwitBigType=${this.fathersysId}&pageNum=${num}&pageSize=${this.pageSize}&buildNum=${this.buildNum}&statusNum=441`).then(res=>{//智能大类硬件数据
                    this.pagecurr = num;//第几页
                     this.bigname = this.bigname;
                    this.data2 = [];
                    this.total1 = res.data.total;
                    if(res.data.pages <= 1){//分页判断隐藏显示 当为一页时隐藏
                    this.pd7 = false;
                    }else if(res.data.pages > 1){
                        this.pd7 = true;
                    }
                    var newarr = res.data.list;
                    for(let i = 0;i<newarr.length;i++){//表格数据
                        this.data2.push({
                        number:newarr[i].hardwitNum,
                        name:newarr[i].pactName,
                        category:newarr[i].maintenanceUnit,
                        project:newarr[i].buildNum,
                        money:newarr[i].pactAppNum
                        })
                    }
            })
        },
        // HardwarePageSmall(num){//智能小类硬件切换页
        //     this.hardwareDataSmall(this.fathersysId,this.sonsysId,num);//智能小类数据
        // },
        page(num){//智能大类软件的切换页
            this.software(this.fathersysId,num);//执行智能大类的软件数据
            this.pagecurr2 = num;//第几页
        },
        // pageSmall(num){//智能小类软件的切换页
        //     this.softwareSamll(this.fathersysId,this.sonsysId,num);//智能小类的数据
        // },
        basePage(num){//基础大类分页
        this.pagecurr = num;//第几页
          this.basebig(this.fathersysId,num);//基础大类数据
        },
        // basePageSmall(){//基础小类分页
        //   this.basesmall(this.fathersysId,this.sonsysId,num);//执行基础小类数据
        // },
        axios(){//智能大类
            this.$axios.get(`/witbig/selectall`).then(res=>{
                this.fathersysId = String(res.data[0].sysId);
                this.bigname = res.data[0].witbigName;
                var newarr = [
                    {icon:'ios-videocam'},
                    {icon:'ios-radio-outline'},
                    {icon:'ios-open'},
                    {icon:'ios-analytics'},
                    {icon:'ios-car'},
                    {icon:'ios-clipboard'},
                    {icon:'logo-rss'},
                    {icon:'ios-people'},
                    {icon:'md-laptop'},
                    {icon:'md-git-compare'}
                    ];
                for(let i = 0;i<res.data.length;i++){
                this.data4.push({
                    name:res.data[i].sysId,
                    label:res.data[i].witbigName,
                    icon:newarr[i].icon
                })
                }
            })
        },
            hardwareData(fathersysId,num,name2){//智能大类硬件数据
            this.fathersysId = fathersysId;
            if(name2==''){
                this.bigname = '视频监控系统';
            }else{
                this.bigname = name2;
                this.pagecurr = num;
            }
                 this.$axios.get(`/hardwit${fathersysId}/selectall?hardwitBigType=${fathersysId}&pageNum=${num}&pageSize=${this.pageSize}&buildNum=${this.buildNum}&statusNum=441`).then(res=>{//智能大类硬件数据
                    console.log(res)
                    this.pd4 = false;
                    // this.pd5 = false;
                    this.data2 = [];
                    this.pd3 = 0;
                    if(this.fathersysId==8){//判断是硬件资源还是软件资源pd1为硬件pd2为软件
                        this.pd1 = true;
                        this.pd2 = true;
                        this.software(this.fathersysId,this.pageNum)
                    }else{
                        this.pd1 = true;
                        this.pd2 = false;
                    }
                    this.total1 = res.data.total;
                    if(res.data.pages <= 1){//分页判断隐藏显示 当为一页时隐藏
                    this.pd7 = false;
                    }else if(res.data.pages > 1){
                        this.pd7 = true;
                    }
                    var newarr = res.data.list;
                    for(let i = 0;i<newarr.length;i++){//表格数据
                        this.data2.push({
                        number:newarr[i].hardwitNum,
                        name:newarr[i].pactName,
                        category:newarr[i].maintenanceUnit,
                        project:newarr[i].buildNum,
                        money:newarr[i].pactAppNum
                        })
                    }
            })
            },
            software(fathersysId,num){//智能大类软件数据
                this.$axios.get(`/softwit/selectall?hardwitBigType=${fathersysId}&pageNum=${num}&pageSize=${this.pageSize}&buildNum=${this.buildNum}&statusNum=441`).then(res2=>{
                console.log(res2)
                this.data3 = [];
                this.total = res2.data.total;
                // this.pd6 = 0;//判断数据是小类还是大类 分页 0大类 1小类
                if(res2.data.pages <= 1){
                    this.pd4 = false;
                }else if(res2.data.pages > 1){
                    this.pd4 = true;
                }
                for(let i = 0;i<res2.data.list.length;i++){
                this.data3.push({
                number:res2.data.list[i].manageUnit,
                name:res2.data.list[i].pactName,
                category:res2.data.list[i].maintenanceUnit,
                project:res2.data.list[i].buildNum,
                money:res2.data.list[i].pactAppNum
                })
            }
            })
            },
             axios2(){//基础大类
            this.$axios.get(`/basicsbig/selectall`).then(res=>{
                console.log(res)
                this.model8Sysid = res.data[0].sysId;//基础大类的id
                this.bigname = res.data[0].basicsbigName;
                this.fathersysId= String(res.data[0].sysId);;
                var newarr = [{
                    icon:'ios-recording'
                },{icon:'md-warning'}]
                for(let i = 0;i<res.data.length;i++){
                    this.data5.push({
                        name:res.data[i].sysId,
                        label:res.data[i].basicsbigName,
                        icon:newarr[i].icon
                    })
                }
            })
        },
        basebig(fathersysId,pageNum,bigName){//基础大类数据
            this.$axios.get(`/basics/selectall?basicsBigType=${fathersysId}&pageNum=${pageNum}&pageSize=${this.pageSize}&buildNum=${this.buildNum}&statusNum=461`).then(res=>{
                console.log(res)
                 this.fathersysId = fathersysId;
                 if(bigName == ''){
                     this.bigname = '交通信号灯';
                     this.model8Sysid = 1;
                 }else if(bigName != ''){
                     this.bigname = bigName;
                     this.pagecurr = pageNum;
                     this.model8Sysid = fathersysId;
                 }
                 console.log(this.pagecurr);
                 this.data1 = [];
                var newarr = res.data.list;
                // this.pd11 = 0;
                this.total = res.data.total;
                if(res.data.pages <= 1){
                    this.pd9 = false;
                }else if(res.data.pages > 1){
                    this.pd9 = true;
                }
                for(let i = 0;i<newarr.length;i++){
                    this.data1.push({
                        number:newarr[i].basicsNum,
                        name:newarr[i].pactName,
                        category:newarr[i].type,
                        project:newarr[i].buildNum,
                        money:newarr[i].startMoney
                    })
                }
            })
        },
    },
    mounted(){
        this.pd = this.$route.query.pd;
        this.buildNum = this.$route.query.buildNum;
        if(this.$route.query.pd==1){
            this.axios();
        }
       if(this.$route.query.pd==2){
            this.axios2();
        }
    }
}
</script>
<style scoped>
    /* .header-btn{
        height: 50px;
        line-height: 50px;
        margin: 0 15px;
        border-bottom: 1px solid #999;
    }
    .header-btn .contravt-name{
        text-align: center;
    }
    .header-btn .contravt-name label{
        font-size: 15px;
        font-weight: bold;
    }
    .btn{
        text-align: center;
    }
    .btn button{
        margin-left: 1%;
    } */
    /* 大类小类 */
    .box{
        text-align: center;
        /* border: 1px solid #999; */
        /* margin: 15px; */
        /* padding: 15px; */
    }
    .box >>> .ivu-cascader-menu .ivu-cascader-menu-item-active{
        background-color: white;
        color: #515a6e;
    }
    .box .big .ivu-menu,.box .small .ivu-menu{
        text-align: left;
        width: 100% !important;
    }
    /* 智能大类数据分页 */
    .page{
        position: relative;
        height: 32px;
        margin-top: 10px; 
    }
    .page >>> .ivu-page{
        position: absolute;
        left: 50%;
        transform: translateX(-50%)
    }
    /* table表格 */
    /* 智能大类 */
    .hardware p,.software p{
        padding: 10px;
        font-weight: bold;
    }
    .header-bottom{
        margin: 15px;
        /* border: 1px solid #999; */
    }
    /* .header-bottom >>> .ivu-tabs-bar{
        margin-bottom: 0;
    }
    .header-bottom >>> .ivu-tabs-nav{
        width:100%;
    }
    .header-bottom >>> .ivu-tabs.ivu-tabs-card>.ivu-tabs-bar .ivu-tabs-tab{
        width: 49.8%;
        text-align: center;
        /* border-radius: 34px 34px 0 0; */
    /* } */ 
    .header-bottom .header-title{
        display: flex;
        padding: 10px;
        background: #eee;
    }
    .header-bottom .header-title div:nth-child(1){
        flex: 1;
        font-weight: bold;
        font-size: 15px;
        transform: translateY(10%);
    }
    .header-bottom .header-title div:nth-child(2){
        flex: 4;
        text-align: right;
    }
     .header-bottom >>> .ivu-table-header thead tr th{
        text-align: center;
    }
    .header-bottom >>> .ivu-table td{
        text-align: center;
    }
    .header-bottom >>> .ivu-table td span{
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    /* 模态框 */
    .model{
        height: 500px;
        overflow: hidden;
        overflow-y: scroll;
    }
    .model ul{
        list-style: none;
        padding: 0;
        margin: 0 auto;
        width: 90%;
    }
    .model ul li{
        width: 100%;
        border-bottom: 1px solid #999;
        padding: 15px 0;
        text-align: center;
        transition: 0.5s all;
     }
     .model ul li:hover{
         box-shadow: 1px 1px 10px #999;
         border-radius: 5px;
     }
     .model ul li span{
         font-weight: bold;
         display: inline-block;

     }
     /* 上传设备照片 */
     .img{
         margin-top: 15px;
     }
     /* 媒体查询 */
     @media (min-width: 992px) and (max-width: 1660px) {
         .box .ivu-cascader{
             width: 100% !important;
         }
     }
     @media (min-width: 768px) and (max-width: 992px) {
         .box .ivu-cascader{
             width: 100% !important;
         }
     }
</style>