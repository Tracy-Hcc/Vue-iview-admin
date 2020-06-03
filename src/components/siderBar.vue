<template>
    <div class="layout-outer">
      <Sider collapsible hide-trigger reverse-arrow  class="left-sider" width='240'>
        <Menu 
          class="left-siderMenu ivu-layout-sider"  
          width='100%'     
          :theme="mytheme"
          :open-names="openNames"
          :active-name="$route.name"
          @on-select="handleSelect"
          ref="menu"
        >
          <adminTitle></adminTitle>
          <siderItem v-for="router in routers" :key="router.name" :routerItem="router"></siderItem>
        </Menu>
      </Sider>
    </div>     
</template>

<script>
import adminTitle from "./adminTitle"
import siderItem from './siderItem.vue'
import { mapGetters} from 'vuex'
import { getOpenArrByName } from '@/lib/util.js'
export default {
  name: "siderBar",
  components: {
    adminTitle,
    siderItem
  },
  data() {
    return {
      mytheme:'dark'
    };
  },
  methods:{
    //点击某一个菜单选项，跳转页面
    handleSelect(name){
      this.$router.push({
        name:name
      })
    }
  },
  computed: {
      ...mapGetters([
        'routers'
      ]),
      //获取当前打开的name数组，当参数this.$route.name变化时，重新触发计算属性
      openNames () {
        return getOpenArrByName(this.$route.name, this.routers)
      }
  },
  watch: {
    //  监听打开的数组的数据变化
    openNames () {
      this.$nextTick(() => {
        this.$refs.menu.updateOpened()
      })
    }
  },
  mounted(){
    console.log(this.openNames)
  }
};
</script>

<style scoped>
.layout-outer{
  width: 13.3%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99
}
.left-sider,.left-siderMenu {
  height: 100%;
}
.ivu-layout-sider >>> .ivu-menu-submenu >>> .ivu-menu-item:hover {
  background: #fff !important;
}
</style>
