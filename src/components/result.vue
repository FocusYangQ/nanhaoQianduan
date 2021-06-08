<template>
  <div class="allContainer">
    <div class="btnContainer">
      <div class="forBtn1">
        <el-button
          class="upLoadBtn"
          type="primary"
          @click="tem()"
        >显示数据</el-button>
      </div>
      <div class="forBtn2" >
        <el-button
          class="confirm"
          type="primary"
          @click="exportDataTo()"
        >导出数据</el-button>
      </div>
    </div>
    <div class="displayContainer">
      <div class="inputScore">
        <el-input :rows="20" class="elInp3" type="textarea" v-model="resForDis"></el-input>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'result' ,

    data () {

      return {

        resForDis : "尚未录入" ,
        exData : {
          exportData : ''
        }

      }

    } ,

    methods : {

      tem() {

        let self = this;

        this.$http.post('averageScore').then( res => {

          console.log( res.data )
          self.resForDis = "平均分:   " + res.data + "\n\n"

          self.resForDis += "正答率:   \n"
          this.$http.post('corRate').then( res => {

            console.log( res.data )
            let len = Object.getOwnPropertyNames ( res.data ).length
            console.log ( len ) ;
            for ( var i = 0 ; i < len ; i ++ ) {

              console.log( i )
              self.resForDis +=  "第" + ( i + 1 ) + "题：  " + res.data [ i ] + "\n"

            }

          } )

        } )

      } ,

      exportDataTo ( ) {

        console.log ( this.resForDis )
        this.$http.post( 'saveResult' , this.resForDis ).then( res => {



        } )

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
