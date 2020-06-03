<template>
    <!-- 路由中的登录不显示在菜单之中 -->
    <Submenu :name="routerItem.name" v-if="routerItem.show" >
      <template slot="title">
        <img src="@/img/main/product_icon.png" alt="" class="titleIcon" v-if="routerItem.name=='intergralManage'">
        {{routerItem.meta.title}}
      </template>
      <!-- 传递路由name值进来，方便点击跳转对应页面 -->
      <MenuItem :name="menuItem.name" class="menuItem" v-for="menuItem in routerItem.children" :key="menuItem.name">{{menuItem.meta.title}}</MenuItem>
    </Submenu>
</template>

<script>
export default {
    name:'siderItem',
    props:["routerItem"],
    methods:{
      handleSelect(name){
        debugger
        this.$router.push({
          name:name
        })
      }
    },
    mounted(){

    }
}
</script>

<style scoped>
.ivu-menu-submenu{
  text-align: left !important
}
.titleIcon{
  vertical-align: middle;
  margin-right: 6px
}
</style>
