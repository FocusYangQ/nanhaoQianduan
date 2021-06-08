<template>
  <div class="allContainer">
    <div class="btnContainer">
      <div class="forBtn1">
        <el-button
          class="upLoadBtn"
          type="primary"
          @click="readCard()"
        >读卡 / 继续读卡</el-button>
      </div>
      <div class="forBtn2" >
        <el-button
          class="confirm"
          type="primary"
          @click="goAhead()"
        >读卡结束</el-button>
      </div>
    </div>
    <div class="displayContainer">
      <el-table
        class="table_container"
        :data="list.slice((currentPage-1)*pagesize,currentPage*pagesize)"
        style="width: 100%">
        <el-table-column width="50px" type="index"></el-table-column>
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
          width="150">
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
          width="300">
        </el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[5, 10, 20, 40]"
          :page-size="pagesize"
          layout="total,sizes,prev, pager, next"
          :total="list.length"
          prev-text="上一页"
          next-text="下一页">
        </el-pagination>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'readCard',
    data(){
      return{
        list : [] ,
        table : [
          {
            label : '姓名',
            prop : 'name'
          } ,
          {
            label : '学号',
            prop : 'stu_id'
          } ,
          {
            label : '成绩',
            prop : 'score'
          } ,
          {
            label : '答案',
            prop : 'answer'
          } ,
        ],
        currentPage: 1, //默认显示页面为1
        pagesize: 10, //    每页的数据条数
        tableData: [], //需要data定义一些，tableData定义一个空数组，请求的数据都是存放这里面
      }
    },
    methods: {

      async readCard() {
        let sum = 0
        let res = await this.$http.post('another')
        sum ++
        console.log("开始读取res:" + res)
        console.log("res.data[0].name:" + res.data[0].name)
        while (res.data[0].name !== "false") {
          console.log("=========================新数据展示========================")
          sum ++
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
          console.log( res.data[0] )
          console.log("测试数据2")
          this.list.push(res.data[0])
          console.log("测试数据3")
          res = await this.$http.post('another')
          console.log("测试数据4")
          console.log("=========================新数据展示结束========================")
        }

        console.log(list)
      },

      goAhead() {
        console.log( this.list.length )

        this.$http.post('setSum' , this.list.length.toString() ).then(res=>{

          if ( res.data === true ) {

          }

        })

      } ,



      //分页菜单
      //每页下拉显示数据
      handleSizeChange: function(size) {
        this.pagesize = size;
      },
      //点击第几页
      handleCurrentChange: function(currentPage) {
        this.currentPage = currentPage;
      },



    }
  }
</script>

<style scoped>
  .allContainer{
    display: block;
    width: 400px;
  }
  .upLoadBtn {
    background-color: #009b82;
  }
  .confirm {
    background-color: #009b82;
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

