<template>
  <div class="count">
    <div class="scoreBox">
        <span class="countTime">
            남은 시간: <span class="second">{{ time }}</span>초
        </span>
        
        <span class="countTotal"> 
            획득 점수 : <span class="total">{{ scores }}</span>점
        </span>
    </div>
    <div class="startBtn">
        <button class="btn" v-on:click="startClick" :class="{gameSet:isPlaying===true}">
            {{ gameText }}
        </button>
    </div>
  </div>
</template>

<script>
export default {
  // data() {
  //   return {
  //     time: 10,
  //     timeInterval: null,
  //     isPlaying: false,
  //     startText: '게임 시작',
  //     score: 0,
  //   }
  // },
  // props: ['propscore'],
  computed: {
    scores() {
      return this.$store.state.score;
    },
    time() {
      return this.$store.state.time;
    },
    gameText() {
      return this.$store.state.startText;
    },
    isPlaying() {
      return this.$store.state.status;
    }
  },
  methods: {
    startClick() {
      this.$store.commit('gameStart');
      this.$store.commit('inputBox');
    },
    // gameStart() {
    //   this.isPlaying = true;
    //   this.$emit('startBtnClick', this.score);
    //   this.startText = '게임 중';
    //   this.timeInterval = setInterval(()=>{
    //     this.time--;
    //     if(this.time===0) {
    //         clearInterval(this.timeInterval);
    //         this.time = 10;
    //         this.isPlaying = false;
    //         this.startText = '게임 시작';
    //     }
    //   },1000);
      
    // },
  },
}
</script>

<style scoped>
.count {
    margin: 50px 0;
    display: flex;
    flex-direction: column;
}
.countTime{
    padding: 0 30px 0 0;
}
.second, .total {
    font-size: 30px;
}
.scoreBox {
    padding-bottom: 2.5rem;
}
.btn{
    color: white;
    background-color: royalblue;
    padding: 5px 20px;
    border: none;
    width: 200px;
    height: 30px;
    cursor: pointer;
}
.gameSet {
    background: #ccc;
    cursor: not-allowed;
}
</style>