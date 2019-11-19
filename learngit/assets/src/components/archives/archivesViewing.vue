<template>
    <div id="app">
        <header>
            <p>档案查看</p>
        </header>
        <!--内容  -->
        <div class="content"> 
        <div class="content-top">
        <Row :gutter="16">
        <i-col :lg="12" :xl="7" :md="24">
            <label for="sort" class="title">项目类型:</label>
            <Select v-model="model1" clearable style="width:65%;">
        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
    </Select>
        </i-col>
        <i-col :lg="12" :xl="7" :md="24">
            <label for="name" class="title">项目名称:</label>
            <Select v-model="model2" clearable style="width:65%;">
        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
    </Select>
        </i-col>
        <i-col :lg="12" :xl="7" :md="24">
             <label for="time" class="title">项目时间:</label>
             <DatePicker type="date" placeholder="请选择时间" style="width: 65%"></DatePicker>
        </i-col>
        <i-col :lg="12" :xl="3" :md="24">
             <Button type="info">导出打印</Button>
        </i-col>
         </Row>
         </div>
         <!--表单  -->
         <div class="content-table">
             <Table :columns="columns1" :data="data1"></Table>
         </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
             cityList: [
                    {
                        value: '立项',
                        label: '立项'
                    },
                    {
                        value: '招标',
                        label: '招标'
                    },
                    {
                        value: '合同',
                        label: '合同'
                    },
                    {
                        value: '竣工验收',
                        label: '竣工验收'
                    },
                    {
                        value: '审计资料',
                        label: '审计资料'
                    }
                ],
                model1: '',
                model2: '',
                columns1: [
                    {
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Age',
                        key: 'age'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    },
                    {
                        title: 'Date',
                        key: 'date'
                    }
                ],
                data1: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ]
        }
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
    .content{
        border: 1px solid #eee;
        border-top: 2px solid #eee;
        margin: 15px;
        height: 100%;
        transition: all 1s;
    }
    .content:hover{
        box-shadow: 1px 1px 15px #999;
    }
    .content .content-top{
        height: 100%;
        /* padding: 15px 0; */
        border-bottom: 1px solid #eee;
        margin: 0 15px;
        text-align: center;
    }
    .content .content-top .title{
        font-weight: bold;
        padding-right: 5%;
    }
    .content .content-top >>> .ivu-input{
        text-align: center;
    }
    .content .content-top >>> .ivu-col{
        margin: 15px 0;
    }
    /* 表单 */
    .content-table{
        width: 100%;
        padding: 0 15px;
        margin: 15px 0;
    }
    .content-table >>> .ivu-table-header thead tr th{
        text-align: center;
    }
    .content-table >>> .ivu-table td{
        text-align: center;
    }
</style>