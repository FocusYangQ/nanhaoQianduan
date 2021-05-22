<template>
  <div>
    <div class="btnContainerOutside">
      <div class="btnContainerInside">
        <el-button
          class="all_confirm"
          type="primary"
          width="400px"
          @click="confirm()"
        >录入答案</el-button>
        <el-button
          class="all_confirm"
          type="primary"
          width="200px"
          @click="confirm()"
        >设置分数</el-button>
      </div>
    </div>
    <div class="display">
      <div class="displayTemOutside">
        <div class="dispalyTem" v-html="answer"></div>
      </div>
      <div>
        <div class="dispalyTemOutside2">
          <div class="dispalyTem" v-html="disSetScore"></div>
        </div>
        <div class="inputBox">
          <div class="firstItem">
            <div class="firstItemInputBox" v-html="first"></div>
          </div>
          <span class="forMark">~</span>
          <div class="secondItem">
            <div class="secondItemInputBox" v-html="second"></div>
          </div>
          <span class="scoreFenshu">分数</span>
          <div class="inputScore">
            <div class="setScore" v-html="setScore"></div>
          </div>
        </div>
        <el-button
          class="confirmBtn"
          type="primary"
          width="200px"
          @click="confirm()"
        >确认</el-button>
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
        answer: "答案尚未录入" +
          "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" +
          "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        disSetScore: "尚未设置分数",
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
  background-color: blue;
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
    margin-left: 38px;
    background-color: green;
    display: flex;
    width: 200px;
    height: 50px;
  }
  .confirmBtn{
    width: 100px;
    margin-top: 20px;
    margin-left: 88px;
  }
  .firstItem{
    background-color: white;
    width: 20px;
    height: 30px;
    margin-left: 15px;
    margin-top: 10px;
  }
  .secondItem{
    background-color: white;
    width: 20px;
    height: 30px;
    margin-left: 15px;
    margin-top: 10px;
  }
  .inputScore{
    background-color: white;
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
</style>
