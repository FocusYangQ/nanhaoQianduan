<template>
  <div class="Container">
    <div class="BtnContainer">
      <el-dropdown>
        <el-button type="primary" class="select_tem">
          {{message}}<i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu class="droproom" slot="dropdown">
          <el-dropdown-item @click.native="select_to43T()">40T型答题卡</el-dropdown-item>
          <el-dropdown-item @click.native="select_to43lu()">43lu型答题卡</el-dropdown-item>
          <el-dropdown-item @click.native="select_to50lu()">50lu型答题卡</el-dropdown-item>
          <el-dropdown-item @click.native="select_to50T()">50T型答题卡</el-dropdown-item>
          <el-dropdown-item @click.native="select_to85T()">85T型答题卡</el-dropdown-item>
          <el-dropdown-item @click.native="select_to90T()">90T型答题卡</el-dropdown-item>
          <el-dropdown-item @click.native="select_to105T()">105T型答题卡</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-button
        class="login-btn"
        type="primary"
        @click="tem()"
      >设置模板</el-button>
    </div>
    <div class="changeTemContainer">
      <div class="dispalyTem">
        <el-input :rows="17" type="textarea" v-model="dataPost.TemText"></el-input>
      </div>
      <div class="displayStdAns">
        <el-dropdown>
          <el-button type="primary" class="select_tem2">
            {{message2}}<i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
          <el-dropdown-menu class="droproom" slot="dropdown">
            <el-dropdown-item @click.native="select_to43T_2()">40T型答题卡</el-dropdown-item>
            <el-dropdown-item @click.native="select_to43T_2()">40T型答题卡</el-dropdown-item>
            <el-dropdown-item @click.native="select_to43lu_2()">43lu型答题卡</el-dropdown-item>
            <el-dropdown-item @click.native="select_to50lu_2()">50lu型答题卡</el-dropdown-item>
            <el-dropdown-item @click.native="select_to50T_2()">50T型答题卡</el-dropdown-item>
            <el-dropdown-item @click.native="select_to85T_2()">85T型答题卡</el-dropdown-item>
            <el-dropdown-item @click.native="select_to90T_2()">90T型答题卡</el-dropdown-item>
            <el-dropdown-item @click.native="select_to105T_2()">105T型答题卡</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-button
          class="setTemBtn0"
          type="primary"
          @click="impoTem()"
        >导入修改模板</el-button>
        <el-input
          class="TemNameDisplay"
          placeholder="模板名称"
          v-model="dataPost.temName">
        </el-input>
        <el-button
          class="setTemBtn"
          type="primary"
          @click="savTem()"
        >保存模板</el-button>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'setTem',
    data() {
      return {
        message: "请选择答题卡类型",
        answer: "尚未上传模板",
        message2: "请选择基础模板",
        dataPost: {
          temName : '',
          TemText : '模板尚未导入'
        }
      }
    },
    methods: {
      select_to43T() {
        this.message = "40T型答题卡"
      },
      select_to43lu() {
        this.message = "43lu型答题卡"
      },
      select_to50lu() {
        this.message = "50lu型答题卡"
      },
      select_to50T() {
        this.message = "50T型答题卡"
      },
      select_to85T() {
        this.message = "85T型答题卡"
      },
      select_to90T() {
        this.message = "90T型答题卡"
      },
      select_to105T() {
        this.message = "105T型答题卡"
      },
      select_to43T_2() {
        this.message2 = "40T型答题卡"
      },
      select_to43lu_2() {
        this.message2 = "43lu型答题卡"
      },
      select_to50lu_2() {
        this.message2 = "50lu型答题卡"
      },
      select_to50T_2() {
        this.message2 = "50T型答题卡"
      },
      select_to85T_2() {
        this.message2 = "85T型答题卡"
      },
      select_to90T_2() {
        this.message2 = "90T型答题卡"
      },
      select_to105T_2() {
        this.message2 = "105T型答题卡"
      },
      impoTem(){
        this.$http.post('readTem',this.message2).then(res=>{
            this.dataPost.TemText = res.data;
        })
      },
      savTem(){
        console.log(this.temName)
        console.log(this.TemText)
        const obj = {
          first : this.temName,
          second : this.TemText
      }
        console.log(obj)
        this.$http.post('saveTem', this.dataPost).then(res=>{
            if(res.data == "0"){
              this.$message.success("模板设置成功");
            } else if(res.data == "2") {
              this.$message.error("文件名重复，文件已存在");
            } else if(res.data == "1") {
              this.$message.error("文件创建失败");
            }
        })
      },

      //导入已有模板
      tem(){
        this.$http.post('set_tem',this.message).then(res=> {
          console.log(res)
          if (res.data == true) {
            alert("模板设置成功");
          } else {
            this.$message.error("请检查IP地址是否正确后重新设置模板");
          }
        })
      },
    }
  }
</script>

<style scoped>
  .Container{
    display: flex;
    background-color: white;
  }
.BtnContainer{
  position: absolute;
  left: 44%;
  margin-top: 20px;
}
  .displayStdAns{
    background-color: white;
    text-align: center;
    width: 250px;
    border: 2px black;
  }
  .TemNameDisplay{
    width: 160px;
    margin-left: 44px;
    margin-top:  20px;
  }
  .changeTemContainer{
    height: 400px;
    display: flex;
    position: absolute;
    left: 33%;
    margin-top: 150px;
  }
  .dispalyTem{
    background-color: white;
    width: 400px;
    height: 300px;
    margin-top: 10px;
    margin-left: 10px;
  }
.setTemBtn{
  width: 160px;
  margin-left: 44px;
  margin-top:  50px;
}
  .setTemBtn0{
    width: 160px;
    margin-left: 44px;
    margin-top:  50px;
  }
  .inputBoxOutside{
    width: 200px;
    height: 200px;
  }
  .select_tem2{
    margin-top: 40px;
    width: 160px;
    margin-left: 44px;
  }
</style>
