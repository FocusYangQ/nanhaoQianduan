<template xmlns:white-space="http://www.w3.org/1999/xhtml">
  <el-container class="container">
    <el-header class="header" style="height: 80px">
      <div class="nanhaoLogo">
        <img src="../assets/pictures/nanhaologo-tran.png" height="50px" alt="">
      </div>
    </el-header>
    <el-container>
      <el-aside class="aside" width="200px">
        <el-row class="tac">
          <el-col :span="12">
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose">
              <el-menu-item index="1" class="asideChoose"
                            @click="handleSetIp()">
                <span slot="title">IP设置</span>
              </el-menu-item>
              <el-menu-item index="2" class="asideChoose"
                            @click="handleAccess()">
                <span slot="title">联机</span>
              </el-menu-item>
              <el-menu-item index="3" class="asideChoose"
                            @click="handleSetTem()">
                <span slot="title">导入模板</span>
              </el-menu-item>
              <el-menu-item index="4" class="asideChoose"
                            @click="handleSetNaTem()">
                <span slot="title">导入姓名库</span>
              </el-menu-item>
              <el-menu-item index="5" class="asideChoose"
                            @click="handleSetStdAns()">
                <span slot="title">录入答案</span>
              </el-menu-item>
              <el-menu-item index="6" class="asideChoose"
                            @click="readCard()">
                <span slot="title">读卡</span>
              </el-menu-item>
              <el-menu-item index="7" class="asideChoose2"
                            @click="disresult()">
                <span slot="title">统计结果</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
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
        ip:"192.168.",
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
      },
      handleAccess(){
        return this.$router.push('/access');
      },
      handleSetTem(){
        return this.$router.push('/setTem');
      },
      handleSetNaTem(){
        return this.$router.push('/setNaTem');
      },
      readCard(){
        return this.$router.push('/readCard');
      },
      handleSetStdAns(){
        return this.$router.push('/setStdAns');
      },
      disresult(){
        return this.$router.push('/result');
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
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
    margin-top : 10px ;
  }
  .tac{
    width: 200px;
  }
  .asideChoose{
    margin-bottom: 20px;
    width: 150px;
  }
  .asideChoose2{
  }
  .el-menu-vertical-demo{
    width: 150px;
    margin-left: 25px;
    margin-top: 50px;
  }
</style>
