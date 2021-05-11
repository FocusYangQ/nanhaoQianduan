<template>
  <div class="main_container">
    <div class="btn_container">
      <div class="set_tem">
        <div class="set_tem_float">
          <el-dropdown>
            <el-button type="primary" class="select_tem">
              {{message}}<i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu class="droproom" slot="dropdown">
              <el-dropdown-item @click.native="select_to43lu()">43lu型答题卡</el-dropdown-item>
              <el-dropdown-item @click.native="select_to50lu()">50lu型答题卡</el-dropdown-item>
              <el-dropdown-item @click.native="select_to50T()">50T型答题卡</el-dropdown-item>
              <el-dropdown-item @click.native="select_to90T()">90T型答题卡</el-dropdown-item>
              <el-dropdown-item @click.native="select_to105T()">105T型答题卡</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <el-button
            class="login-btn"
            type="primary"
            @click="set_tem()"
          >设置模板</el-button>
          <el-button
            class="login-btnsetTemAnother"
            type="primary"
            @click="set_temAnother()"
          >重新设置模板</el-button>
        </div>
      </div>
      <div class="set_std_ans">
        <div class="display_std_ans">
          <div class="dispaly_answer" v-html="answer"></div>
        </div>
        <div class="std_ans_control">
          <el-button
            class="set_std_ans_button1"
            type="primary"
            @click="set_answer"
          >录入答案</el-button>
          <el-button
            class="set_std_ans_button2"
            type="primary"
            @click="reset_answer()"
          >重置答案</el-button>
          <el-button
            class="all_confirm"
            type="primary"
            @click="confirm()"
          >确认</el-button>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'setTemAndAns',
    data(){
      return{
        message:"请选择答题卡类型",
        answer: "答案尚未设置",
      }
    },
    methods:{
      select_to43lu(){
        this.message="43lu型答题卡"
      },
      select_to50lu(){
        this.message="50lu型答题卡"
      },
      select_to50T(){
        this.message="50T型答题卡"
      },
      select_to90T(){
        this.message="90T型答题卡"
      },
      select_to105T(){
        this.message="105T型答题卡"
      },
      set_tem(){
        this.$http.post('socket').then(res=>{
            if(res.data == true){
              this.$http.post('set_tem',this.message).then(res=>{
                console.log(res)
                if(res.data == true){
                  this.$message.success("模板设置成功");
                }
                else{
                  this.$message.error("请检查IP地址是否正确后重新设置模板");
                }
              })
            }
            else {
              this.$message.error("连接建立失败，请检查设置的ip是否正确");
            }
        })
      },
      set_temAnother(){
        this.$http.post('setTemAnother',this.message).then(res=>{
          console.log(res)
          if(res.data == "true"){
            this.$message.success("模板设置成功");
          }
          else{
            this.$message.error("模板设置失败");
          }
        })
      },
      set_answer(){
        this.$http.post('read_once').then(res=>{
          console.log(res)
          if(res.data == "noCard"){
            this.answer="请检查光标阅读机中是否放置答题卡"
          }
          else{
            this.answer=res.data
          }
        })
      },
      reset_answer(){
        this.answer="答案尚未设置"
      },
      confirm(){
        this.$router.push('/SocreResult');
      }
    }
  }
</script>

<style scoped>

  .main_container{
    width: 100%;
    height: 100%;
  }
  .btn_container{
    width:800px;
    height: 500px;
    margin: auto
  }
  .login-btnsetTemAnother{
    background-color: #009b82;
    border-color: #20B2AA;
    margin-left: 323px;
    margin-top: 20px;
    width: 151px;
  }
  .set_tem{
    background-color: white;
    margin-top: 30px;
  }
  .set_tem_float{
    width: 500px;
    height: 150px;
    margin: 0 auto;
  }
  .select_tem{
    background-color: #009b82;
    border-color: #20B2AA;
  }
  .set_std_ans{
    display: flex;
    height: 350px;
    background-color: white;
  }
  .droproom{
    width: 135px;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .std_ans_control{
    padding-left: 50px;
    padding-right: 50px;
    margin-left: 100px;
    width: 100px;
  }
  .display_std_ans{
    width: 400px;
    height: 100%;
  }
  .set_std_ans_button1{
    margin-top: 30px;
    background-color: #009b82;
    border-color: #20B2AA;
  }
  .set_std_ans_button2{
    background-color: #009b82;
    border-color: #20B2AA;
    margin-top: 30px;
    margin-left: 0;
  }
  .all_confirm{
    background-color: #009b82;
    border-color: #20B2AA;
    display: block;
    width: 100px;
    margin: 90px 0px auto;
  }
  .select_tem{
    width: 200px;
  }
  .dispaly_answer{
    width: 300px;
    height: 200px;
    margin-left: 160px;
    margin-top: 20px;
  }
</style>
