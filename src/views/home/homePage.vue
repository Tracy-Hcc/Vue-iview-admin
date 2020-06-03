<template>
  <div class="homePage">
    <Table border :columns="columns5" :data="data5" @on-row-click='show'></Table>
  </div>
</template>

<script>
export default {
  name: "homePage",
  data() {
    return {
      columns5: [
        {
          title: "Date",
          key: "date",
          sortable: true
        },
        {
          title: "Name",
          key: "name"
        },
        {
          title: "Age",
          key: "age",
          sortable: true
        },
        {
          title: "Address",
          key: "address"
        }
      ],
      data5: [
        {
          name: "John Brown",
          age: 18,
          address: "New York No. 1 Lake Park",
          date: "2016-10-03"
        },
        {
          name: "Jim Green",
          age: 24,
          address: "London No. 1 Lake Park",
          date: "2016-10-01"
        },
        {
          name: "Joe Black",
          age: 30,
          address: "Sydney No. 1 Lake Park",
          date: "2016-10-02"
        },
        {
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park",
          date: "2016-10-04"
        }
      ]
    };
  },
  methods:{
      show(index){
          console.log(index)
      }
  },
  mounted() {
    
  }
};
</script>

<style scoped>
.homePage {
  height: 100px;
  background-color: #fff;
}
</style>
