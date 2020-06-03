<template>
    <div class="viewMain">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>       
    </div>
</template>

<script>

export default {
    name:'viewMain',
    mounted(){
        console.log(this.$store)
    }
}
</script>

<style scoped>
    .viewMain{
        padding:20px;
        min-height: calc(100% - 158px);
    }
</style>
