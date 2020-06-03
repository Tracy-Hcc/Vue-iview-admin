<template>
    <div class="tabsView">
        <Breadcrumb class="breadcrumb">
            <BreadcrumbItem :to="item.path" v-for="item in breadCrumbList" :key="item.name">{{item.meta.title}}</BreadcrumbItem>
        </Breadcrumb>
        <Tabs  type="card" closable :value="$route.name" @on-click='selectTabs' @on-tab-remove='removeTabs'>
            <TabPane :label="item.meta.title" :name='item.name' v-for="item in tabList" :key="item.name"></TabPane>
        </Tabs>
    </div>
</template>

<script>
import {mapMutations, mapState} from 'vuex'
export default {
    name:'tabsView',
    methods:{
        //用mapMutations从vuex中引入已经定义好的方法，相当于在当前组件注册这个方法
       ...mapMutations([
           'UPDATE_ROUTER',
           'REMOVE_ROUTER'
        ]),
        //选择某一个tab,把当前tab的name传进来
        selectTabs(name){
            this.$router.push({
                name:name
            })
        },
        removeTabs(name){
            this.REMOVE_ROUTER(name);
            this.$router.push({
                name: this.newPath.name
            })
        }
    },
    watch:{
    //  监听路由发生变化，切换tab页的时候，路由变化，在tabList里面增加数据
    "$route"(newRoute){
        this.UPDATE_ROUTER(newRoute)
    }
  },
  computed: {
    //  把tablist从vuex中取出来，并且当前组件中this.tablist可以访问到
      ...mapState({
        tabList:state => state.tabView.tabList,
        breadCrumbList:state => state.breadCrumb.breadCrumbList,
        newPath:state=> state.tabView.newPath
      })
  },
  mounted(){
      this.UPDATE_ROUTER(this.$route);
  }
}
</script>

<style scoped>
    .tabsView{
        padding-top: 16px;
        padding-left: 32px;
        background-color: #fff;
        text-align: left
    }
    .active{
        color: #1790FF;
        border-bottom: 3px solid #1790FF;
    }
    .ivu-tabs{
        margin-top: 18px;        
    }
    .ivu-tabs>>>.ivu-tabs-bar{
        margin-bottom: 0 ;
        border: none
    }
    .ivu-tabs>>>.ivu-tabs-nav-container{
        height: auto !important
    }
    .ivu-tabs>>>.ivu-tabs-tab{
        font-size: 14px !important;
        padding: 8px 16px !important;
        height: auto !important
    }
</style>
