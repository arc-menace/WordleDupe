import { defineStore } from 'pinia'
import { ref } from 'vue'
import Word from '../models/word.ts'

export const useGameStore = defineStore('game', {
    state: () => ({
        secretWord: "GREAT",
        currentWord: 0,
        words: ref([
            new Word(5),
            new Word(5),
            new Word(5),
            new Word(5),
            new Word(5),
            new Word(5),
        ]),
        gameIsWon: false
    }),
    actions: {
        submitGuess() {
            let result = this.words[this.currentWord].submitGuess(this.secretWord);
            this.currentWord++;

            return result;
        },

        keydown(event : any) {
            if(this.gameIsWon) {
                return;
            }

            if(/^[a-zA-Z]$/.test(event.key)) {
                this.words[this.currentWord].inputLetter(event.key);
            }
            else if(event.key === 'Backspace') {
                this.words[this.currentWord].backspace();
            }
            else if(event.key === 'Enter') {
                this.gameIsWon = this.submitGuess();
            }
        }
    }
})