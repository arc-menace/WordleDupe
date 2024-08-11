import Letter from './letter.ts'
import { useGameStore } from '../store/gamestore.ts';

export default class Word {
    constructor(size : number) {
        for(let i = 0; i < size; i++) {
            this.letters.push(new Letter);
        }
    }

    letters : Letter[] = [];
    currentLetter = 0;

    allLettersFilled() : boolean {
        let allFilled = true;

        for(let i = 0; i < this.letters.length; i++) {
            if(this.letters[i].letter === '') {
                allFilled = false;
            }
        }

        return allFilled;
    }

    getWord() {
        let word = '';

        for(let i = 0; i < this.letters.length; i++) {
            word += this.letters[i].letter;
        }

        return word;
    }

    clearWord() {
        for(let i = 0; i < this.letters.length; i++) {
            this.letters[i].letter = '';
        }

        this.currentLetter = 0;
    }

    submitGuess(secretWord : string) {
        let gameStore = useGameStore();

        let secretWordArray = secretWord.split('').filter(char => char.trim() !== '').slice(0, -1);

        let success = true;

        for(let i = 0; i < this.letters.length; i++) {
            if(secretWordArray[i] === this.letters[i].letter) {
                this.letters[i].setCorrect();
                gameStore.addGuessedLetter(this.letters[i].letter, "var(--success)");
            }
            else if(secretWordArray.includes(this.letters[i].letter)) {
                //the letter is right, but in the wrong location
                this.letters[i].setCorrectWrongLocation();
                gameStore.addGuessedLetter(this.letters[i].letter, "var(--warning)");
                success = false;
            }
            else {
                this.letters[i].setIncorrect();
                gameStore.addGuessedLetter(this.letters[i].letter, "var(--wrong-letter)");
                success = false;
            }
        }

        return success;
    }

    inputLetter(letter : string) {
        if(this.currentLetter === this.letters.length - 1 && this.letters[this.currentLetter].letter != '') {
            return;
        }

        this.letters[this.currentLetter].setLetter(letter);
        
        if(this.currentLetter < this.letters.length - 1) {
            this.currentLetter++;
        }
    }

    backspace() {
        if(this.letters[this.currentLetter].letter != ''){
            this.letters[this.currentLetter].setLetter('');
            if(this.currentLetter > 0) {
                this.currentLetter--;
            }
        }
        else {
            if(this.currentLetter > 0) {
                this.currentLetter--;
            }
            this.letters[this.currentLetter].setLetter('');
        }        
    }
}