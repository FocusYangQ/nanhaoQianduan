<template>
  <div class="login-container">
    <div class="logo">
      <img src="../assets/pictures/nanhaologo-normal.png" width="200px">
    </div>
    <div class="login_box">
      <span class="nanhaoTop">欢迎登录南昊光标阅读机云平台</span>
      <div class="content_box"
           :model="user_info">
        <el-input
          class="input_box"
          placeholder="用户名"
          prefix-icon="el-icon-user-solid"
          v-model="user_info.username">
        </el-input>
        <el-input
          class="input_box"
          placeholder="密码"
          prefix-icon="el-icon-unlock"
          v-model="user_info.password"
          type="password">
        </el-input>
      </div>
      <el-button
        class="login-btn"
        type="primary"
        @click="handle_Login()"
      >登录</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data() {
      return {
        imgSrc:require('../assets/pictures/LoginBackground.png'),
        user_info: {
          username: '',
          password: ''
        }
      }
    },
    methods: {
      handle_Login(){

        this.$http.post('testUser').then(res=>{

          if(res.data== true ){

            this.$http.post('p')
            this.$http.post('login',this.user_info).then(res=>{
              console.log(res);
              if(res.data==true){
                return this.$router.push('/Home');
              }
              alert("账号密码错误");
            })

          } else {
            alert("系统正在被使用，请稍后重试……");
          }
        })
      }
    }
  }
</script>

<style>
.login-container{
  background-image: url("../assets/pictures/nanhaodemo1.png");
  background-size: 100% 100%;
  height: 100%;
}
.login_box{
  width: 400px;
  height: 260px;
  border-radius: 10px;
  padding: 50px;
  background-color: #ffffff;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}
.nanhaoTop{
  display: block;
  text-align:center;
  color: #009b82;
  font-size: 20px;
}
.content_box{
  margin-top: 30px;
}
.logo{
  margin-left: 100px;
  padding-top: 40px;
}
.input_box{
  width: 300px;
  margin: 14px;
  padding-left: 50px;
}
.login-btn {
  background-color: #009b82;
  border-color: #20B2AA;
  width: 150px;
  margin-top: 30px;
  margin-left: 120px;
}
</style>
