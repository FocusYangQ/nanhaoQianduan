<template>
  <div class="allContainer">
    <div class="btnContainer">
      <div class="forBtn1">
        <el-button
          class="upLoadBtn"
          type="primary"
          @click="tem"
        >读卡</el-button>
      </div>
      <div class="forBtn2" >
        <el-button
          class="confirm"
          type="primary"
          @click="tem"
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
          prop="stu_id"
          label="成绩"
          width="100">
        </el-table-column>
        <el-table-column
          class="tableColumn"
          prop="stu_id"
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
    name: 'readCard'
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

