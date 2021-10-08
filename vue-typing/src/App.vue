<template>
  <div id="app">
    <typing-header></typing-header>
    <typing-text v-on:scorePlus="scoreAdd"></typing-text>
    <count-time :propscore="score"  :startBtnClick="resetScore"></count-time>
    <!-- <count-time v-model="score"  :startBtnClick="resetScore"></count-time> -->
  </div>
</template>

<script>
import TypingHeader from './components/TypingHeader.vue';
import TypingText from './components/TypingText.vue';
import CountTime from './components/CountTime.vue';
//import TypingFooter from './components/TypingFooter.vue';


export default {
  components : {
    TypingHeader,
    TypingText,
    CountTime,
    //TypingFooter
  },
  data() {
    return {
      score: 0,
      status: false,
    }
  },
  methods: {
    scoreAdd(score) {
      this.score = score;
    },
    resetScore(score) {
      this.score = score;
    }
  },

}
</script>

<style scoped>

</style>
