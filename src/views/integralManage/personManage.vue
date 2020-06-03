<template>
  <div class="personManage">
    <div class="queryDiv">
      <div class="queryItem">
        <span class="condition">业务机构：</span>
        <Select>
          <Option v-for="item in 5" :value="111" :key="item">{{ item }}</Option>
        </Select>
      </div>
      <div class="queryItem">
        <span class="condition">人员姓名：</span>
        <Input placeholder="请输入"/>
      </div>
      <div class="queryItem">
        <span class="condition">人员状态：</span>
        <Select>
          <Option v-for="item in 5" :value="111" :key="item">{{ item }}</Option>
        </Select>
      </div>
      <Button type="primary">查 询</Button>
      <Button>重 置</Button>
    </div>
    <div class="tableDiv">
      <Table :columns="columns1" :data="data1" height='600'>
        <template slot-scope="{ row, index }" slot="action">
            <span class="slotBtn">编辑</span>
            <span>|</span>
            <span class="slotBtn">禁止登陆</span>
        </template>
      </Table>
    </div>
    <div class="tablePage">
        <Page :total="50"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "personManage",
  data() {
    return {
      columns1: [
        {
          title: "业务机构",
          key: "name"
        },
        {
          title: "人员姓名",
          key: "personName"
        },
        {
          title: "工号",
          key: "number"
        },
        {
          title: "职位",
          key: "job"
        },
        {
          title: "人员状态",
          key: "status"
        },
        {
          title: "手机号",
          key: "phone"
        },
        {
          title: "微信号",
          key: "wechat"
        },
        {
          title: "操作",
          slot: 'action'
        }
      ],
      data1: [
        {
          name: "John Brown",
          personName: 18,
          number: "New York No. 1 Lake Park",
          job: "2016-10-03",
          status:'00',
          phone:'00',
          wechat:'11'
        }
      ]
    };
  }
};
</script>

<style scoped>
.personManage {
  background-color: #fff;
  padding: 20px;
  position: relative;
  /* margin: 20px 0; */
  /* min-height:100% */
}
.queryDiv {
  text-align: left;
}
.queryItem {
  display: inline-block;
  margin-right: 48px;
}
.ivu-select {
  width: 200px;
}
.condition {
  font-size: 14px;
  color: #000000;
  margin-right: 4px;
}
.ivu-input-wrapper-default {
  display: inline-block;
  width: 200px;
}
.ivu-btn {
  padding: 4px 16px;
  margin-right: 8px;
  font-size: 14px;
}
.tableDiv{
    padding-top: 24px;
    padding-bottom: 48px;
}
.slotBtn{
    color: #1790FF;
    font-size: 14px;
    margin: 0 2px;
    cursor: pointer;
}
.ivu-table-wrapper{
    border: none
}
.ivu-table-wrapper>>>.ivu-table-cell{
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px
}
.ivu-table-wrapper>>>th .ivu-table-cell{
    font-size: 14px;
    color: #000000
}
.tablePage{
    position: absolute;
    bottom: 0;
    right: 0;
    margin-right: 20px;
    margin-bottom: 24px;
}
@media(min-width: 1920px){
  .ivu-input-wrapper-default {
    display: inline-block;
    width: 270px;
  }
  .ivu-select {
    width: 270px;
  }
}
</style>
