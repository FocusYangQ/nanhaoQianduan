<template>
  <div>
    <el-card class="box-card">
      <div class="content_box">
        <div class="set_name_box">
          <el-upload
            class="upload-demo"
            action="http://localhost:8080/upload"
            :on-preview="handlePreview"
            :limit="3"
            :file-list="fileList">
            <el-button
              class="set_name"
              type="primary"
              @click="set_name_list()"
            >上传姓名列表</el-button>
          </el-upload>
        </div>
        <div class="read_card">
          <el-button
            class="exportData"
            type="primary"
            @click="exportData()"
          >导出数据</el-button>
          <el-button
            class="read"
            type="primary"
            @click="read()"
          >读卡</el-button>
          <el-button
            class="read"
            type="primary"
            @click="clearData()"
          >清空数据</el-button>
          <el-button
            class="read"
            type="primary"
            @click="read()"
          >继续读卡</el-button>
        </div>
      </div>
        <el-table
          class="table_container"
          :data="list"
          style="width: 100%">
          <el-table-column type="index"></el-table-column>
          <el-table-column
            label="姓名"
            width="200"
            prop="name">
          </el-table-column>
          <el-table-column
            prop="stu_id"
            label="学号"
            width="200">
          </el-table-column>
          <el-table-column
            prop="score"
            label="成绩"
            width="200">
          </el-table-column>
          <el-table-column
            label="答案"
            width="200"
            prop="answer">
          </el-table-column>
        </el-table>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: 'SocreResul',
    data(){
      return{
        score_res: {
          name: '',
          id: '',
          answer: '',
          score: ''
        },
        list:[],
        tableTitleData: [
          {
            label: '姓名',
            prop: 'name'
          },
          {
            label: '学号',
            prop: 'stu_id'
          },
          {
            label: '成绩',
            prop: 'score'
          }
        ]
      }
    },
    created(){
    },
    methods:{
      async read() {
        let res = await this.$http.post('another')
        console.log( "开始读取res:" + res)
        console.log( "res.data[0].name:" + res.data[0].name)
        while( res.data[0].name !== "false" ){
          console.log("=========================新数据展示========================")
          console.log("进入while循环读取res.data:" + res.data)
          console.log("测试数据1")
          if(res.data[0].name == "EN16"){
            this.$message.error("光标阅读机无卡");
            break;
          } else if(res.data[0].name == "EN05"){
            this.$message.error("光标阅读机A传感器检测点线错");
            break;
          } else if(res.data[0].name == "EN09"){
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
      clearData(){
        this.list = [];
      },
      set_name(){},
      read_another(){
        this.$http.post('another').then(res=>{
          this.list.push(res.data[0])
        })
      },
      handlePreview(file) {
        if(file==true){
          this.$message.success("姓名库设置成功");
        }
        window.open(file.respond.url);
      },
      exportData(){
        // 导出表格的表头设置
        let allColumns = this.tableTitleData
        var columnNames = []
        var columnValues = []
        for (var i = 0; i < allColumns.length; i++) {
          columnNames[i] = allColumns[i].label
          columnValues[i] = allColumns[i].prop
        }
        require.ensure([], () => {
          const { export_json_to_excel } = require('vendor/Export2Excel')
          const tHeader = columnNames
          const filterVal = columnValues

          const listForExport = this.list
          const data = this.formatJson(filterVal, listForExport)
          export_json_to_excel(tHeader, data, 'ExcelTest')
        })
      },
      formatJson(filterVal, jsonData) {
        return jsonData.map(v => filterVal.map(j => v[j]))
      }
    }
  }
</script>

<style scoped>
  .content_box{
    display: flex;
  }
  .box-card {
    width: 100%;
    box-shadow: 0 1px 1px rgba(0,0,0,0.15);
  }
  .read{
    width: 100px;
    margin-left: 60px;
    background-color: #009b82;
    border-color: #20B2AA;
  }
  .table_container{
    margin-top: 45px;
  }
  .set_name{
    background-color: #009b82;
    border-color: #20B2AA;
    width: 150px;
    margin-left: 40px;
  }
  .read_another{
    background-color: #009b82;
    border-color: #20B2AA;
    margin-left: 20px;
  }
  .set_name_box{
    width: 300px;
  }
</style>
