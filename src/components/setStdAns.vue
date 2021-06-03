<template>
  <div>
    <div class="btnContainerOutside">
      <div class="btnContainerInside">
        <el-button
          class="all_confirm"
          type="primary"
          width="400px"
          @click="setStdAns()"
        >录入答案</el-button>
        <el-button
          class="all_confirm"
          type="primary"
          width="200px"
          @click="allConfirm()"
        >确认完毕</el-button>
      </div>
    </div>
    <div class="display">
      <div class="displayTemOutside">
        <el-input :rows="16" type="textarea" v-model="stdAns"></el-input>
      </div>
      <div>
        <div class="dispalyTemOutside2">
          <el-input :rows="9" type="textarea" v-model="disSetScore"></el-input>
        </div>
        <div class="inputBox">
          <div class="firstItem">
            <el-input :rows="1" class="elInp1" type="textarea" v-model="first"></el-input>
          </div>
          <span class="forMark">至</span>
          <div class="secondItem">
            <el-input :rows="1" class="elInp2" type="textarea" v-model="second"></el-input>
          </div>
        </div>
        <div class="setScore">
          <span class="scoreFenshu">分数</span>
          <div class="inputScore">
            <el-input :rows="1" class="elInp3" type="textarea" v-model="score"></el-input>
          </div>
        </div>
        <el-button
          class="confirmBtn"
          type="primary"
          width="200px"
          @click="confirm()"
        >确认分值</el-button>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'setStdAns',
  data(){
      return{
        stdAns: "答案尚未录入",
        disSetScore: "尚未设置分数",
        first : '',
        second : '',
        score : ''
      }
  },
  methods: {
    setStdAns(){
      this.$http.post('read_once').then(res=>{
        console.log(res)
        console.log(res.data)
        console.log(res.status)
        if(res.data == "noCard"){
          alert("请检查光标阅读机中是否放置答题卡")
        }
        else if(res.data === "出现A传感器卡纸（同步信号）错"){
          alert("出现A传感器卡纸（同步信号）错")
        }
        else{
          this.stdAns = res.data
        }
      })
    },
    confirm(){
      if(this.disSetScore === "尚未设置分数"){
        this.disSetScore = ""
      }
      this.disSetScore = this.disSetScore + this.first + "~"
        + this.second + "题  " + this.score + "分" + "\n"
    },
    allConfirm(){
      let content = this.stdAns + "---" + "\n" + this.disSetScore
      console.log(content)
      this.$http.post('setStdAns',content)
    }
  }
  }
</script>

<style scoped>
.btnContainerOutside{
  background-color: white;
  width: 500px;
  height: 100px;
  display:flex;
  justify-content:center;
  align-items:center;
  position: absolute;
  left: 35%;
  top: 15%;
}
.btnContainerInside{
  background-color: blue;
  width: 400px;
  display: flex;
}
.displayTemOutside{
  width: 400px;
  height: 350px;
  margin-top: 23px;
  margin-left: 20px;
}
.dispalyTemOutside2{
  background-color: white;
  height: 200px;
  width: 200px;
  margin-top: 23px;
  margin-left: 38px;
}
.dispalyTem{
  width: 400px;
  height: 100%;
}
  .display{
    position: absolute;
    left: 28%;
    top: 35%;
    display: flex;
    background-color: yellow;
    width: 700px;
    height: 400px;
  }
  .all_confirm{
    width: 150px;
    margin: 0 auto;
  }
  .inputBox{
    margin-top: 20px;
    margin-left: 19px;
    background-color: green;
    display: flex;
    width: 240px;
    height: 50px;
  }
  .confirmBtn{
    width: 100px;
    margin-top: 5px;
    margin-left: 88px;
  }
  .firstItem{
    /*background-color: white;*/
    width: 80px;
    height: 30px;
    margin-left: 15px;
    margin-top: 10px;
  }
  .secondItem{
    /*background-color: white;*/
    width: 70px;
    height: 30px;
    margin-top: 10px;
  }
  .inputScore{
    /*background-color: white;*/
    width: 20px;
    height: 30px;
    margin-left: 15px;
    margin-top: 10px;
  }
  .scoreFenshu{
    margin-top: 13px;
    margin-left: 18px;
  }
  .forMark{
    margin-top: 13px;
    margin-left: 15px;
  }
  .elInp1{
    width: 80px;
    margin-left: 10px;
  }
  .elInp2{
    width: 80px;
    margin-left: 8px;
  }
.elInp3{
  width: 80px;
  margin-left: 8px;
}
  .setScore{
    display: flex;
    /*background-color: white;*/
    margin-left: 30px;
  }
  .scoreFenshu{
    margin-left: 50px;
    height: 30px;
  }
</style>
