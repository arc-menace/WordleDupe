import { defineStore } from 'pinia'
import { ref } from 'vue'
import { POSITION, useToast } from "vue-toastification";
import { TYPE as ToastType } from "vue-toastification";

import Word from '../models/word.ts'
import WordList from '../models/wordlist.ts'

const toast = useToast();

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
        gameIsLost: ref(false),
        wordList: new WordList(),
        guessedIncorrectLetters: ref(new Map<string, string>())
    }),
    actions: {
        async submitGuess() {
            if(this.words[this.currentWord].allLettersFilled()) {
                let alreadyGuessed = this.alreadyGuessedWord()

                let guessIsRealWord = true;
                if(!alreadyGuessed) {
                    guessIsRealWord = await this.guessIsRealWord();
                }
                

                if(!alreadyGuessed && guessIsRealWord) {
                    let result = this.words[this.currentWord].submitGuess(this.secretWord);
                    this.currentWord++;
        
                    if(result) {
                        this.gameIsWon = true;
                        this.showToast("You Win!", 5000, ToastType.SUCCESS);
                    }

                    if(!this.gameIsWon && this.currentWord >= this.words.length) {
                        this.gameIsLost = true;
                        this.showToast(this.secretWord, 5000, ToastType.ERROR);
                    }
                }
                else {
                    this.words[this.currentWord].clearWord();
                }
            }

            return false;
        },

        alreadyGuessedWord() {
            let alreadyGuessed = false;

            for(let i = 0; i < this.currentWord; i++) {
                if(this.words[i].getWord() === this.words[this.currentWord].getWord()) {
                    alreadyGuessed = true;
                    this.showToast("Already guessed word", 3000, ToastType.WARNING);
                    break;
                }
            }

            return alreadyGuessed;
        },

        async guessIsRealWord() : Promise<boolean> {
            let word = this.words[this.currentWord].getWord();

            let url = 'https://api.dictionaryapi.dev/api/v2/entries/en/' + word;

            let isReal = false;

            await fetch(url).then(response => {
                if(response.status === 200) {
                    isReal = true;
                }
                else {
                    console.log("received expected 404 error. word: " + this.words[this.currentWord].getWord() + " not in dictionary");
                    this.showToast("Not a word", 3000, ToastType.WARNING);
                }
            });

            return isReal;
        },

        async keydown(event : any) {
            if(this.gameIsWon || this.gameIsLost) {
                return;
            }

            if(/^[a-zA-Z]$/.test(event.key)) {
                this.words[this.currentWord].inputLetter(event.key);
            }
            else if(event.key === 'Backspace') {
                this.words[this.currentWord].backspace();
            }
            else if(event.key === 'Enter') {
                await this.submitGuess();
            }
        },

        async pressKeyboardKey(keyValue : string) {
            if(this.gameIsWon || this.gameIsLost) {
                return;
            }

            if(/^[a-zA-Z]$/.test(keyValue)) {
                this.words[this.currentWord].inputLetter(keyValue);
            }
            else if(keyValue === 'Back') {
                this.words[this.currentWord].backspace();
            }
            else if(keyValue === 'Enter') {
                await this.submitGuess();
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
            this.gameIsLost = false;

            this.guessedIncorrectLetters = new Map<string, string>();

            this.secretWord = this.wordList.getRandomWord();

            this.showToast("Game Reset", 3000, ToastType.SUCCESS);
        },

        showToast(message : string, timeout : number, type : ToastType = ToastType.DEFAULT) {
            toast(message, {
                type: type,
                position: POSITION.TOP_CENTER,
                timeout: timeout,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: false,
                showCloseButtonOnHover: false,
                hideProgressBar: true,
                icon: false,
                toastClassName: 'wordle-dupe-toast',
                bodyClassName: 'wordle-dupe-toast-body'
            });
        },

        addGuessedLetter(letter : string, guessState : string) {
            this.guessedIncorrectLetters.set(letter, guessState);
        },

        getKeyboardBackground(letter : string) : string {
            let value = this.guessedIncorrectLetters.get(letter)

            if(value != undefined) {
                return value;
            }
            
            return "";
        }
    }
})