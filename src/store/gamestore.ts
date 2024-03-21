import { defineStore } from 'pinia'
import { ref } from 'vue'
import Word from '../models/word.ts'
import WordList from '../models/wordlist.ts'

export const useGameStore = defineStore('game', {
    state: () => ({
        secretWord: ref("" as string),
        currentWord: ref(0),
        words: ref([
            new Word(5),
            new Word(5),
            new Word(5),
            new Word(5),
            new Word(5),
            new Word(5),
        ]),
        gameIsWon: ref(false),
        wordList: new WordList()
    }),
    actions: {
        async submitGuess() {
            if(this.words[this.currentWord].allLettersFilled()) {
                let guessIsRealWord = await this.guessIsRealWord();

                if(guessIsRealWord) {
                    let result = this.words[this.currentWord].submitGuess(this.secretWord);
                    this.currentWord++;
        
                    return result;
                }
                else {
                    this.words[this.currentWord].clearWord();
                }
            }

            return false;
        },

        async guessIsRealWord() : Promise<boolean> {
            let word = this.words[this.currentWord].getWord();

            let url = 'https://api.dictionaryapi.dev/api/v2/entries/en/' + word;

            let isReal = false;

            await fetch(url).then(response => {
                if(response.status === 200) {
                    isReal = true;
                }
            });

            return isReal;
        },

        async keydown(event : any) {
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
                this.gameIsWon = await this.submitGuess();
            }
        },

        resetGame() {
            this.words = [
                new Word(5),
                new Word(5),
                new Word(5),
                new Word(5),
                new Word(5),
                new Word(5),
            ];

            this.currentWord = 0;
            this.gameIsWon = false;

            this.secretWord = this.wordList.getRandomWord();
        }
    }
})