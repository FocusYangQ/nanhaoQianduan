<template>
  <div class="allContainer">
    <div class="btnContainer">
      <div class="forBtn1">
        <el-upload
          ref="upload"
          action="/"
          :show-file-list="false"
          :on-change="importExcel"
          :auto-upload="false">
          <el-button
            class="uploadBtn"
            slot="trigger"
            icon="el-icon-upload"
            size="small"
            type="primary">
            上传姓名库
          </el-button>
        </el-upload>
      </div>
      <div class="forBtn2" >
        <el-button
          class="confirm"
          type="primary"
          @click="confirmNames()"
        >确认</el-button>
      </div>
    </div>
    <div class="displayContainer">
      <el-table
        class="table_container"
        :data="showlist.slice((currentPage-1)*pagesize,currentPage*pagesize)"
        stripe
        style="width: 100%">
        <el-table-column width="200px" type="index"></el-table-column>
        <el-table-column
          class="tableColumn"
          label="姓名"
          prop="name"
          width="400">
        </el-table-column>
        <el-table-column
          class="tableColumn"
          prop="stuId"
          label="学号"
          width="400">
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
          :total="showlist.length"
          prev-text="上一页"
          next-text="下一页">
        </el-pagination>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import xlsx from "xlsx"
export default {
  name: 'setNaTem',
  data(){
    return{
      showlist: "",
      tableTitleData:[
        {
          label: '姓名',
          prop: 'name'
        },
        {
          label: '学号',
          prop: 'stuId'
        },
      ],
      currentPage: 1, //默认显示页面为1
      pagesize: 10, //    每页的数据条数
      tableData: [], //需要data定义一些，tableData定义一个空数组，请求的数据都是存放这里面
    }
  },
  mounted() {
    this.getData();
  },
  methods:{
    confirmNames(){
      this.$http.post('uploadTable', this.showlist).then(res=>{
        if(res.data === true){
          alert("姓名库导入成功")
        }
      })
    },
    importExcel(file){
      let self = this;
      const types = file.name.split(".")[1];
      const fileType = ["xlsx", "xlc", "xlm", "xls", "xlt", "xlw", "csv"].some(
        item => item === types
      );
      if (!fileType) {
        alert("格式错误！请重新选择");
        return;
      }
      this.file2Xce(file).then(tab => {
        if (tab && tab.length > 0) {
          this.tab = tab;
          if (this.tab.length != 0) {
            this.xlscList = [];
            this.tab[0].sheet.forEach(item => {
              if (item.indexOf("C") != -1) {
                let inputInfo = item.split("'");
                if (inputInfo.length == 2) {
                  self.xlscList.push(inputInfo[1]);
                }
              }
            });
          }
          if (this.xlscList.length != 0) {
            this.setInputToForm();
          }
        }
      });
    },
    setInputToForm(){
      if (this.xlscList.length > 13) {
          this.form.safetyPointCheckDTO.sensitiveInfoCollection = this.xlscList[1],
          this.form.safetyPointCheckDTO.dataTransSecurity = this.xlscList[2],
          this.form.safetyPointCheckDTO.dataLocalStorageSecurity = this.xlscList[1],
          this.form.safetyPointCheckDTO.sensitiveInfoUse = this.xlscList[1],
          this.form.safetyPointCheckDTO.permissionList = this.xlscList[1],
          this.form.safetyPointCheckDTO.dynamicLoadFunction = this.xlscList[1],
          this.form.safetyPointCheckDTO.updateFunction = this.xlscList[1],
          this.form.safetyPointCheckDTO.classLoaderInjectFunction = this.xlscList[1],
          this.form.safetyPointCheckDTO.logSecurity = this.xlscList[1],
          this.form.safetyPointCheckDTO.componentSecurity = this.xlscList[1],
          this.form.safetyPointCheckDTO.encryDecryAlgorithm = this.xlscList[1],
          this.form.safetyPointCheckDTO.databaseSecurity = this.xlscList[1],
          this.form.safetyPointCheckDTO.staticCodeCheck = this.xlscList[1]
      }else{
        this.$message({
          message: '上传格式错误',
          type: 'warning'
        })
      }
    },
    async file2Xce(file) {
      let self = this;
      return new Promise(function(resolve, reject) {
        const reader = new FileReader();
        reader.onload = function(e) {
          const data = e.target.result;
          this.wb = xlsx.read(data, {
            type: "binary"
          });

          const worksheet0 = this.wb.Sheets[this.wb.SheetNames[0]];
          const myData = xlsx.utils.sheet_to_json(worksheet0);
          self.showlist = myData;

          let arr = [];
          for( let i = 0 ; i < myData.length ; i ++ ) {

            console.log( myData[i].姓名 )
            console.log( myData[i].准考证号 )

            // arr.push({name:myData[i].姓名.toString(),stuId:myData[i].学号.toString()})
            arr.push({name:myData[i].姓名,stuId:myData[i].准考证号.toString()})
          }
          self.showlist=arr

          const result = [];
          this.wb.SheetNames.forEach(sheetName => {
            console.log("sheetName:" + sheetName)
            result.push({
              sheetName: sheetName,
              sheet: xlsx.utils.sheet_to_formulae(this.wb.Sheets[sheetName])
            });
          });
          resolve(result);
        };
        reader.readAsBinaryString(file.raw);
      });
    },



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
  .uploadBtn {
    background-color: #009b82;
  }
  .confirm {
    background-color: #009b82;
  }
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
  .uploadBtn{
    width: 160px;
    height: 40px;
  }
  .confirm{
    width: 160px;
  }
</style>
