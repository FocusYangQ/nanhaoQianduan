<template>
  <div>
    <div class="centerContainer">
      <div class="UDPContain">
        <!--      <span>探测IP地址</span>-->
        <el-input
          class="UDPTest"
          placeholder="UDP字段：192.168.xxx.255"
          v-model="UDP">
        </el-input>
        <el-button
          class="UDPTestBtn"
          type="primary"
          @click="handleUDPTest()"
        >探测</el-button>
      </div>
      <div class="IPContain">
        <el-input
          class="IPDisplay"
          placeholder="IP地址是："
          v-model="IPAdress">
        </el-input>
        <el-button
          class="SetIp"
          type="primary"
          @click="handleIP()"
        >确认</el-button>
      </div>
      <div>
        <el-button
          class="toSetTemAndAns"
          type="primary"
          @click="handleToSetTemAndAns()"
        >返回</el-button>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'test',
    data(){
      return {
        UDP: '',
        IPAdress: ''
      }
    },
    methods: {
      handleUDPTest(){
        this.$http.post('UDPTest',this.UDP).then(res=>{
          console.log(res);
          if(res.data!="wrong"){
            this.IPAdress=res.data;
          }else {
            this.$message.error("未获取ip地址");
          }
        })
      },
      handleIP(){
        this.$http.post('set_ip',this.IPAdress).then(res=>{
          if(res.data==true){
            this.$message.success("ip设置成功");
          }
        })
      },
      handleToSetTemAndAns(){
        return this.$router.push('/setTemAndAns');
      }
    }
  }
</script>

<style scoped>
.UDPTest{
  width: 300px;
}
  .IPDisplay{
    width: 300px;
  }
  .centerContainer{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
  .UDPContain{
    margin-bottom: 20px;
  }
  .UDPTestBtn{
    background-color: #009b82;
    border-color: #20B2AA;
    margin-left: 20px;
  }
  .SetIp{
    background-color: #009b82;
    border-color: #20B2AA;
    margin-left: 20px;
  }
  .toSetTemAndAns{
    background-color: #009b82;
    border-color: #20B2AA;
    width: 120px;
    margin-top: 40px;
    margin-left: 130px;
  }
</style>
