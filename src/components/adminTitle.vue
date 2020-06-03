<template>
    <div class="adminTitle">
        <img src="@/img/main/Logo_Blue.png" alt="" class="adminIcon">
        <span>积分商城管理系统</span>    
    </div>
</template>

<script>
export default {
    name:'adminTitle'
}
</script>

<style>
    .adminTitle{
        width: 100%;
        height: 64px;
        font-size: 18px;
        color: #FFFFFF;
        line-height: 64px;
        
    };
    .adminTitle span{
        vertical-align: middle
    }
    .adminIcon{
        display: inline-block;
        vertical-align: middle;
        margin-right: 6px;
    }
</style>
