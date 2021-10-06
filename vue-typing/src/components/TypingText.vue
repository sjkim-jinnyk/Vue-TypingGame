<template>
  <div class="wordTyping">
    <div class="wordText">{{ word }}</div>
    <input type="text" v-model="inputText" class="wordInput" v-on:keyup.enter="matchText">
  </div>
</template>

<script>
export default {
  data() {
    return {
      word : 'Hello',
      inputText : '',
      score : 0,
    }
  },
  methods: {
    matchText() {
      if(this.word.toLowerCase()===this.inputText.toLowerCase()) {
        this.score+=1;
        this.$emit('scorePlus', this.score);
        this.clearText();
      }
    },
    clearText() {
      this.inputText = '';
    }   
  },

}
</script>

<style scoped>
.wordTyping {
    margin: 50px 0;
}
.wordTyping .wordText {
    color: royalblue;
    font-size: 70px;
}
.wordTyping input {
    width: 300px;
    height: 25px;
}
</style>