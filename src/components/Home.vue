<template xmlns:white-space="http://www.w3.org/1999/xhtml">
  <el-container class="container">
    <el-header class="header">
      <div class="nanhaoLogo">
        <img src="../assets/pictures/nanhaologo-tran.png" height="50px" alt="">
      </div>
      <div class="setIp">
        <el-button
          class="setIpBtn"
          type="success"
          @click="handleSetIp()"
        >设置ip</el-button>
      </div>
    </el-header>
    <el-container>
      <el-aside class="aside" width="200px">
      </el-aside>
      <el-main class="main">
      <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    name: 'Home',
    data(){
      return{
        message:"请选择答题卡类型",
        answer: "",
        ip:"192.168."
      }
    },
    methods:{
      set_tem(){
        this.$http.post('set_tem',this.message).then(res=>{
          console.log(res)
        })
      },
      set_answer(){
        this.$http.post('read_once').then(res=>{
          console.log(res)
          this.answer=res.data
        })
      },
      reset_answer(){
        this.answer="答案尚未设置"
      },
      confirm(){
        this.$router.push('/SocreResult');
      },
      ip_confirm(){
        this.$http.post('set_ip',this.ip).then(res=>{
          if(res.data==true){
            this.$message.success("ip设置成功");
          }
        })
      },
      resend(){
        this.$http.post('shutdown');
      },
      handleSetIp(){
        return this.$router.push('/setIp');
      }
    }
  }
</script>

<style scoped>
.container{
  height: 100%;
}
.header{
  background-image: url("../assets/pictures/header-green.png");
  display: flex;
  position: relative;
  padding-left: 0;
}
.aside{
  background-color: #d3dcd6;
}
.main{
  background-color: #e9eef3;
  height: 100%;
}
.setIpBtn{
  background-color: #009b82;
  border-color: #20B2AA;
}

  .setIp{
    margin-top: 8px;
    margin-right: 50px;
    float: right;
    position:absolute;right:0px;
  }
  .nanhaoLogo{
    margin-left: 40px;
  }
</style>
