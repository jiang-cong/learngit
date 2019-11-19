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
             <div class="btn"> <!--@click="submission"-->
            <Button type="warning" icon="md-document">提交</Button>
            </div>
        </div>
        <div class="mind" v-if="pd==1"><!--智能表格-->
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
            pageSize:10,//一页显示条数
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
                    title: '金额小计',
                    key: 'money'
                },
                {
                    title: '查看详情',
                    key: 'details',
                    render: (h, params) => {
                        return h('div', [
                            h('Icon', {
                                props: {
                                    type: 'ios-search',
                                },
                                style: {
                                    marginRight: '5px',
                                    fontSize:'20px',
                                    cursor: 'pointer'
                                },
                                on: {
                                    click: () => {
                                        this.show(params.index)
                                    }
                                }
                            })
                        ]);
                    }
                    }
                ],
                data1: [],//table表格数据基础
            columns2: [//table表格头部智能硬件
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
                    title: '设备名称',
                    key: 'money'
                },
                {
                title: '查看详情',
                key: 'details',
                render: (h, params) => {
                    return h('div', [
                        h('Icon', {
                            props: {
                                type: 'ios-search',
                            },
                            style: {
                                marginRight: '5px',
                                fontSize:'20px',
                                cursor: 'pointer'
                            },
                            on: {
                                click: () => {
                                    this.show(params.index)
                                }
                            }
                        })
                    ]);
                }
                    }
                ],
                data2: [],//table表格数据智能硬件
                columns3: [//table表格头部智能软件
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
                    title: '软件名称',
                    key: 'money'
                },
                {
                title: '查看详情',
                key: 'details',
                render: (h, params) => {
                    return h('div', [
                        h('Icon', {
                            props: {
                                type: 'ios-search',
                            },
                            style: {
                                marginRight: '5px',
                                fontSize:'20px',
                                cursor: 'pointer'
                            },
                            on: {
                                click: () => {
                                    this.show(params.index)
                                }
                            }
                        })
                    ]);
                }
                    }
                ],
                data3: [],//table表格数据智能软件
        }
    },
    methods:{
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
                        money:newarr[i].facilityName
                        })
                    }
            })
        },
        page(num){//智能大类软件的切换页
            this.software(this.fathersysId,num);//执行智能大类的软件数据
            this.pagecurr2 = num;//第几页
        },
        basePage(num){//基础大类分页
        this.pagecurr = num;//第几页
          this.basebig(this.fathersysId,num);//基础大类数据
        },
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
                        money:newarr[i].facilityName
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
                money:res2.data.list[i].softwitName
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
                        money:newarr[i].money
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
    .mind >>> .ivu-icon{
        width: 100%;
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