<template>
  <div class="allContainer">
    <div class="btnContainer">
      <div class="forBtn1">
        <el-button
          class="upLoadBtn"
          type="primary"
          @click="readCard()"
        >读卡</el-button>
      </div>
      <div class="forBtn2" >
        <el-button
          class="confirm"
          type="primary"
          @click="goAhead()"
        >继续读卡</el-button>
      </div>
    </div>
    <div class="displayContainer">
      <el-table
        class="table_container"
        :data="list"
        style="width: 100%">
        <el-table-column width="200px" type="index"></el-table-column>
        <el-table-column
          class="tableColumn"
          label="姓名"
          width="100"
          prop="name">
        </el-table-column>
        <el-table-column
          class="tableColumn"
          prop="stu_id"
          label="学号"
          width="100">
        </el-table-column>
        <el-table-column
          class="tableColumn"
          prop="score"
          label="成绩"
          width="100">
        </el-table-column>
        <el-table-column
          class="tableColumn"
          prop="answer"
          label="答案"
          width="100">
        </el-table-column>
      </el-table>
    </div>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'readCard',
    data(){
      return{

      }
    },
    methods: {
      async readCard() {
        let res = await this.$http.post('another')
        console.log("开始读取res:" + res)
        console.log("res.data[0].name:" + res.data[0].name)
        while (res.data[0].name !== "false") {
          console.log("=========================新数据展示========================")
          console.log("进入while循环读取res.data:" + res.data)
          console.log("测试数据1")
          if (res.data[0].name == "EN16") {
            this.$message.error("光标阅读机无卡");
            break;
          } else if (res.data[0].name == "EN05") {
            this.$message.error("光标阅读机A传感器检测点线错");
            break;
          } else if (res.data[0].name == "EN09") {
            this.$message.error("A传感器同步框计数值超界");
            break;
          }
          console.log("res.data[0]:" + res.data[0])
          console.log("测试数据2")
          this.list.push(res.data[0])
          console.log("测试数据3")
          res = await this.$http.post('another')
          console.log("测试数据4")
          console.log("=========================新数据展示结束========================")
        }
        console.log(list)
      },
      async goAhead() {
        let res = await this.$http.post('another')
        console.log("开始读取res:" + res)
        console.log("res.data[0].name:" + res.data[0].name)
        while (res.data[0].name !== "false") {
          console.log("=========================新数据展示========================")
          console.log("进入while循环读取res.data:" + res.data)
          console.log("测试数据1")
          if (res.data[0].name == "EN16") {
            this.$message.error("光标阅读机无卡");
            break;
          } else if (res.data[0].name == "EN05") {
            this.$message.error("光标阅读机A传感器检测点线错");
            break;
          } else if (res.data[0].name == "EN09") {
            this.$message.error("A传感器同步框计数值超界");
            break;
          }
          console.log("res.data[0]:" + res.data[0])
          console.log("测试数据2")
          this.list.push(res.data[0])
          console.log("测试数据3")
          res = await this.$http.post('another')
          console.log("测试数据4")
          console.log("=========================新数据展示结束========================")
        }
        console.log(list)
      }
    }
  }
</script>

<style scoped>
  .allContainer{
    display: block;
    width: 400px;
  }
  .btnContainer{
    height: 100px;
    width: 600px;
    display: flex;
    position: absolute;
    left: 35%;
    top: 15%;
    background-color: white;
  }
  .displayContainer{
    position: absolute;
    left: 30%;
    top: 30%;
    background-color: yellow;
    margin-top: 20px;
    width: 800px;
  }
  .forBtn1{
    width: 300px;
    padding-left: 20px;
    display:flex;
    justify-content:center;
    align-items:center;
  }
  .forBtn2{
    display:flex;
    justify-content:center;
    align-items:center;
    height: 100px;
    width: 300px;
    text-align: center;
  }
  .upLoadBtn{
    width: 160px;
  }
  .confirm{
    width: 160px;
  }
</style>

