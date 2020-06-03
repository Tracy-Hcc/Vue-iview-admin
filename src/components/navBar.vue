<template>
    <Menu mode="horizontal" class="nav">
        <Badge>
            <img src="@/img/main/ser_icon.png" alt="" class="iconImg">
        </Badge>
        <Badge dot>
            <img src="@/img/main/mes_icon.png" alt="" class="iconImg">
        </Badge>
        <div class="user">
            <img src="@/img/main/headPic.jpg" alt="" class="headImg">
            <p class="usname">爱阳</p>
            <p class="loginOut" @click="handelClick()"> 退出</p>
        </div>
    </Menu>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    name:"navBar",
    methods:{
        ...mapActions([
            'logout'
        ]),
        handelClick(){
            let _this = this;
            this.logout().then(res => {
                console.log(res)
                _this.$router.push({
                    name:'login'
                })
            }).catch(err =>{
                console.log(err)
            })
        }
    }
}
</script>

<style scoped>
    .ivu-menu-horizontal{
        height: initial;
        line-height: initial;
        padding: 18px 24px;
        text-align: right
    }
    .ivu-badge{
        display: inline-block;
        height: 24px;
        width: 24px;
        text-align: center;
        vertical-align: middle;       
        margin-right:18px;
    }
    .iconImg{
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -7px;
        margin-left: -6px;
    }
    .user{
        display: inline-block;
        vertical-align: middle;        
        height: 28px;
    }
    .headImg{
        width: 24px;
        height: 24px;
        border-radius: 100px;
        border: 1px solid #ccc;
        display: inline-block;
        line-height: 28px;
        vertical-align: middle;
    }
    .usname{
        display: inline-block;
        font-size: 14px;
        color:#333333;
        line-height: 28px;
        margin-left: 4px;
        vertical-align: middle;
    }
    .loginOut{
        display: inline-block;
        font-size: 14px;
        color:#B32020;
        line-height: 28px;
        margin-left: 18px;
        vertical-align: middle;
        cursor: pointer;
    }
</style>
