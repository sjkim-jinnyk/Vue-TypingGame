<template>
  <div class="wordTyping">
    <div class="wordText">{{ word }}</div>
    <input type="text" v-model="inputText" :ref="inputFocus" v-on:keyup.enter="matching" :disabled="inputBlock">
  </div>
</template>

<script>
//import getWords from '../api/indexApi.js';
//import axios from 'axios';

export default {
  data() {
    return {
      // word : 'hello',
      inputText : '',
    }
  },
  computed: {
    word() {
      return this.$store.state.word;
    },
    inputFocus() {
      return this.$store.state.inputFocus;
    },
    inputBlock() {
      return this.$store.state.inputBlock;
    }

  },
  // props: ['propstatus'],
  methods: {
    matching() {
      if(this.inputText !='') {
        const text = this.inputText.trim();
        this.$store.dispatch('createdText');
        this.$store.commit('matchText',text);
        this.$store.commit('timeReset');
        this.clearText();
      }
    },
    // matchText() {
    //   if(this.word.toLowerCase()===this.inputText.toLowerCase()) {
    //     this.wordCreate();
    //     this.score+=1;
    //     this.$emit('scorePlus', this.score);
    //     this.clearText();
    //   }
    // },
    clearText() {
      this.inputText = '';
    },
    // wordCreate() {
    //   this.index = Math.floor(Math.random() * this.wordArray.length);
    //   this.word = this.wordArray[this.index];
  
    // }   
  },
  // created() {
  //   axios.get('https://random-word-api.herokuapp.com/word?number=100')
  //     .then(response => this.wordArray = response.data)
  // }
  updated() {
    this.$refs.FocusIn.focus();  // 게임스타트 버튼 누르면 refs의 이름이 inputOpen으로 바뀌기 떄문에 updated에 올린다. 
  
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