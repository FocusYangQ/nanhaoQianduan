<template>
  <div class="forBtn">
    <el-button
      class="handleAccess"
      type="primary"
      @click="handleAccess()"
    >联机</el-button>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'access',
    methods: {
      handleAccess() {
        this.$http.post('socket').then(res => {
          if(res.data == true){
            this.$http.post('online').then(res =>{
              if(res.data == true){
                this.$message.success("联机成功");
              } else {
                alert("Online指令发送失败");
              }
            })
          } else{
            alert("Socket建立失败");
          }
        })
      },
    }
  }
</script>

<style scoped>
.handleAccess{
  width: 250px;
  height: 100px;
  font-size: 32px;
}
  .forBtn{
    position: absolute;
    left: 45%;
    top: 45%;
  }
</style>
