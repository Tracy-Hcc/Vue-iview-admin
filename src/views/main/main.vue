<template>
  <div class="main">
    <siderBar></siderBar>    
    <div class="rightContainer">
      <navBar></navBar>
      <tabsView></tabsView>
      <viewMain></viewMain>
    </div>
  </div>
</template>

<script>
import navBar from "./../../components/navBar.vue"
import siderBar from "./../../components/siderBar.vue"
import tabsView from "./tabsView.vue"
import viewMain from "./viewMain.vue"
import { mapMutations } from "vuex"
export default {
  name: "admin_main",
  components: {
    navBar,
    siderBar,
    tabsView,
    viewMain
  },
  data() {
    return {

    }
  },
  methods: {
    ...mapMutations([
        "setBreadCrumb"
      ])
  },
  computed: {

  },
  mounted() {
      //初始化面包屑导航
    this.setBreadCrumb(this.$route);
  },
  watch: {
    $route(route) {
      this.setBreadCrumb(this.$route);
    }
  }
};
</script>

<style scoped>
.main{
  width: 100%;
  height:100%;
}
.rightContainer {
  height:100%;  
  padding-left: 13.3%;
  overflow-x:hidden;
  overflow-y: auto
}
</style>
