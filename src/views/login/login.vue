<template>
    <div class="login">
        <div class="main">
            <div class="longin_icon">
                <img src="./../../img/conleft.png" alt="">
            </div>    
            <div class="loginData">
                <div class="adminTitle">积分商城管理系统</div>
                <div class="user">
                    <img src="./../../img/username.png" alt="" class="inputIcon">
                    <input type="username" placeholder="请输入账号" v-model="usName" @blur="checkInput(usName,'usName')">
                </div>
                <div class="tip">{{usNameTip}}</div>
                <div class="pwd">
                    <img src="./../../img/password.png" alt="" class="inputIcon">
                    <input type="password" placeholder="请输入密码" v-model="pwd" @blur="checkInput(pwd,'pwd')">
                </div>
                <div class="tip">{{pwdTip}}</div>
                <div class="remeber">
                    <input type="checkbox" class="check">
                    <span>记住密码</span>    
                </div>
                <div class="loginAdmin" @click="loginAdmin()">登录</div>
            </div>
        </div>       
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: 'login',
    data(){
        return{
            usName:'',
            pwd:'',
            usNameTip:'',
            pwdTip:''
        }
    },
    methods:{
        ...mapActions([
            'login'
        ]),
        //登录
        loginAdmin(){                      
            if(this.usName==''){
                this.usNameTip = '账号不能为空';
                return
            }else if(this.pwd==''){
                this.pwdTip = '密码不能为空';
                return
            }else{
                this.usNameTip = '';
                this.pwdTip = '';
            }
            this.$Loading.start(); 
            let _this = this;
            this.login({
                userName: this.usName,
                password: this.pwd
            }).then(res => {
                console.log(res)
                _this.$Message.success('This is a success tip');
                _this.$router.push({
                    path:'/'
                })
                _this.$Loading.finish();
            }).catch(error => {
                console.log(error)
            })
            
        },
        //清除提示
        checkInput(val,type){
            if(val==''){
                if(type=='usName'){
                    this.usNameTip = '账号不能为空'
                }else{
                    this.pwdTip = '密码不能为空'
                }  
                return 
            }else{
                if(type=='usName'){
                    this.usNameTip = ''
                }else{
                    this.pwdTip = ''
                } 
            }

        }
    },
    created(){

    },
    mounted(){
        
    }

}
</script>

<style scoped>
    .login{
        width: 100%;
        height: 100%;
        background:rgba(48,95,173,1);
        position: relative;
        overflow: hidden;
    }
    .main{
        width: 72%;
        height: 80%;
        background-color: #fff;
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%,-50%);
        -ms-transform: translate(-50%,-50%);
        transform: translate(-50%,-50%);

    }
    .longin_icon{
        width: 60%;
        float: left;
    }
    .longin_icon img{
        width: 100%;
    }
    .loginData{
        width: 40%;
        float: right;
    }
    .adminTitle{
        font-size: 42px;
        color: #333333;
        margin-bottom: 30px;
        margin-top: 30%;
    }
    input{   
        width: 82%;
        height: 32px;
        border: none;
        outline: none;
        vertical-align: middle;
        margin-left: 2%;
        font-size: 18px;
        color: #999999
    }
    .user{
        display: inline-block;
        width: 64%;
        padding-bottom: 14px;
        border-bottom: 1px solid #EEEEEE;
        margin-top: 6%;
    }
    .pwd{
        display: inline-block;
        width: 64%;
        padding-bottom: 14px;
        border-bottom: 1px solid #EEEEEE;
        margin-top: 6%;
    }
    .inputIcon{
        vertical-align: middle;
        height: 30px;
    }
    .tip{
        width: 64%;
        margin: 0 auto;
        text-align: left;
        height: 20px;
        font-size: 14px;
        color: red;
        line-height: 20px;
        margin-top: 6px;
    }
    .remeber{
        text-align: left;
        margin: 0 auto;
        width: 64%;
        color: #999999;
        font-size: 18px;
        margin-top: 20px;
    }
    .check{
        width: 16px;
        border: 1px solid #D9D9D9;
        background-color: #fff;
        vertical-align: middle
    }
    .remeber span{
        vertical-align: middle
    }
    /* 样式兼容 */
    input::-webkit-input-placeholder{
        font-size: 18px;
        color: #999999;
        line-height: 32px;
    }
    input:-moz-placeholder{
        font-size: 18px;
        color: #999999;
        line-height: 32px;
    }
    input:-ms-input-placeholder{
        font-size: 18px;
        color: #999999;
        line-height: 32px;
    }
    .loginAdmin{
        width: 64%;
        height: 60px;
        background-color: #1890FF;
        font-size: 28px;
        line-height: 60px;
        color: #fff;
        margin: 0 auto;
        border-radius: 100px;
        margin-top: 10%;
        cursor: pointer;
    }
</style>
