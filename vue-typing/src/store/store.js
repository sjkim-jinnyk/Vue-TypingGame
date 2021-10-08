import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        score: 0,
        status: false,
        startText: '게임시작',
        timeInterval: null,
        time: 10,
        word: 'hello',
        index: null,
        wordArray: [],
        inputFocus: 'FocusOut',
        inputBlock: true,
    },
    mutations: {
        gameStart(state) {
            state.status = true;
            state.startText = '게임 중';
            state.timeInterval = setInterval(()=>{
            state.time--;
            if(state.time===0) {
                clearInterval(state.timeInterval);
                state.time = 10;
                state.status = false;
                state.startText = '게임 시작';
                state.inputBlock = true;
                state.score = 0;
            }
            },1000); 
        },
        matchText(state, text) {
            if(state.word.toLowerCase()===text.toLowerCase()) {
                state.score+=1;
            }
        },
        wordCreate(state,data) {
            state.wordArray = data;
            state.index = Math.floor(Math.random() * state.wordArray.length);
            state.word = state.wordArray[state.index];
        },
        timeReset(state) {
            state.time = 10;
        },
        inputBox(state) {
            state.inputFocus = 'FocusIn';
            state.inputBlock = false;
        }
    },
    actions: {
        createdText(context) {
            axios.get('https://random-word-api.herokuapp.com/word?number=100')
                .then( ({data}) => {
                    return context.commit('wordCreate', data);
                })
                .catch(error=>console.log(error))
        }
    },
})