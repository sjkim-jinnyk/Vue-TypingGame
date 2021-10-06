<template>
  <div class="wordTyping">
    <div class="wordText">{{ word }}</div>
    <input type="text" v-model="inputText" class="wordInput" v-on:keyup.enter="matchText">
  </div>
</template>

<script>
//import getWords from '../api/indexApi.js';
import axios from 'axios';

export default {
  data() {
    return {
      word : 'hello',
      inputText : '',
      score : 0,
      wordArray : [],
      index: null,
    }
  },
  methods: {
    matchText() {
      if(this.word.toLowerCase()===this.inputText.toLowerCase()) {
        this.wordCreate();
        this.score+=1;
        this.$emit('scorePlus', this.score);
        this.clearText();
      }
    },
    clearText() {
      this.inputText = '';
    },
    wordCreate() {
      this.index = Math.floor(Math.random() * this.wordArray.length);
      this.word = this.wordArray[this.index];
  
    }   
  },
  created() {
    axios.get('https://random-word-api.herokuapp.com/word?number=100')
      .then(response => this.wordArray = response.data)
  }

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