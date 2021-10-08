<template>
  <div class="starBtn">
    <button class="btn" v-on:click="gameStart">
      게임시작
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      time: 10,

    }
  },
  methods: {
    gameStart() {
      setInterval(()=>{
        this.time--;
      },1000)
    }
  }

}
</script>

<style scoped>
.btn{
    color: white;
    background-color: royalblue;
    padding: 5px 20px;
    border: none;
    width: 200px;
    height: 30px;
    cursor: pointer;
}
</style>