<template>
    <div id="app">
        <header>
            <p>公司资产</p>
        </header>
        <!-- 新增内容 -->
        <div class="content">
        <Row>
        <i-col :xs="24" :sm="24" :md="6" :lg="4">
            <ul class="content-ul">
                <li @click="change(1)" :class="cut==1?'content-li':''" style="margin-bottom:10px;">智能交通项目</li>
                <li @click="change(2)" :class="cut==2?'content-li':''">基础交通项目</li>
            </ul>
        </i-col>
        <i-col :xs="24" :sm="24" :md="18" :lg="20">
            <div class="content-table">
                 <Table border :columns="columns1" :data="data1"></Table>
                 <div class="page" v-if="pd">
                 <Page :total=total :page-size=pageSize @on-change="page2" />
                 </div>
            </div>
        </i-col>
        </Row>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            cut:1,
            columns1: [
                    {
                        title: '项目名称',
                        key: 'name'
                    },
                    {
                        title: '项目简介',
                        key: 'synopsis'
                    },
                    {
                        title: '状态',
                        key: 'state'
                    },
                    {
                        title: '详情',
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
                data1: [],
                pageNum:1,//第几页
                pageSize:2,//一页显示条数
                total:0,//总条数
                pd:true,
        }
    },
    methods:{
        change(number){//判断tab切换
            this.cut = number;
            if(this.cut==1){
                this.axios(this.pageNum,this.pageSize);
            }
            if(this.cut==2){
                this.axios2(this.pageNum,this.pageSize);
            }
        },
        page(num){//基础交通项目的切换页
            this.axios2(num,this.pageSize)
        },
         page2(num){//智慧交通项目的切换页
            this.axios(num,this.pageSize)
        },
          axios(pageNum,pageSize){//智慧交通项目
            this.$axios.get(`/build/selectall?buildNum=ZN&pageNum=${pageNum}&pageSize=${pageSize}&statusNum=441`).then(res=>{
                // console.log(res)
                 this.data1 = [];
                var newarr = res.data.list;
                 this.total = res.data.total;
                for(var i = 0;i<newarr.length;i++){
                    this.data1.push({
                        name:newarr[i].buildName,
                        synopsis:newarr[i].buildContent,
                        state:newarr[i].statusName,
                        buildNum:newarr[i].buildNum
                        })
                }
                if(res.data.pages<=1){
                    this.pd = false;
                    // console.log(this.pd)
                }else if(res.data.pages>1){
                    this.pd = true;
                }
            })
        },
        axios2(pageNum,pageSize){//基础交通项目
            this.$axios.get(`/build/selectall?buildNum=JC&pageNum=${pageNum}&pageSize=${pageSize}&statusNum=441`).then(res=>{
                console.log(res)
                this.data1 = [];
                var newarr = res.data.list;
                this.total = res.data.total;
                for(var i = 0;i<newarr.length;i++){
                    this.data1.push({
                        name:newarr[i].buildName,
                        synopsis:newarr[i].buildContent,
                        state:newarr[i].statusName,
                        buildNum:newarr[i].buildNum
                        })
                }
                 if(res.data.pages<=1){
                    this.pd = false;
                    // console.log(this.pd)
                }else if(res.data.pages>1){
                    this.pd = true;
                }
            })
        },
        show(i){//跳转到新增页面
            this.$router.push({
                name:'CompanyApproval',
                query:{
                    pd:this.cut,
                    buildNum:this.data1[i].buildNum
                }
            })
        }
    },
    mounted(){
        this.axios(this.pageNum,this.pageSize);
    }
}
</script>
<style scoped>
     header{
        height: 60px;
        width: 100%;
        font-size: 23px;
        line-height: 60px;
        padding-left: 25px;
        border-bottom: 1px solid #eee;
    }
    /* 新增内容 */
    .content{
        width: 100%;
    }
    .content .ivu-row{
        margin: 15px;
    }
    .content-table >>> .ivu-icon{
        width: 100%;
    }
    .content .content-ul{
        margin: 0;
        padding: 0;
        list-style: none;
        text-align: center;
        border: 1px solid #999;
        padding: 10px;
        border-radius: 5px;
        border-top: 3px solid #999;
        transition: 1s all;
        margin-bottom: 15px;
    }
    .content .content-ul:hover{
        box-shadow: 1px 1px 10px #999;
    }
    .content .content-ul li{
        width: 85%;
        margin: 0 auto;
        font-size: 14px;
        padding: 5px 0;
        cursor: pointer;
        transition: all 1s;
    }
    .content .content-ul .content-li{
        background: #999;
        color: white;
        border-radius: 5px;
    }
    .content-table{
        margin-left:1%;
        position: relative;
        transition: all 1s;
    }
    .content-table:hover{
         box-shadow: 1px 1px 10px #999;
    }
    .content-table >>> .ivu-table-header thead tr th{
        text-align: center;
    }
    .content-table >>> .ivu-table td{
        text-align: center;
    }
    .content-table >>> .ivu-table-cell{
         overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    /* 分页 */
    .content-table .page{
        position: absolute;
        bottom: -50px;
        left: 50%;
        transform: translateX(-50%);
    }
</style>