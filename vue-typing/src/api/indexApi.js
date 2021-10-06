import axios from 'axios';

export default{
    getWords() {
        return axios.get('https://random-word-api.herokuapp.com/word?number=100');
    } 
}