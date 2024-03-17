import Letter from './letter.ts'

export default class Word {
    constructor(size : number) {
        for(let i = 0; i < size; i++) {
            this.letters.push(new Letter);
        }
    }

    letters : Letter[] = [];
    currentLetter = 0;

    submitGuess(secretWord : string) {
        let secretWordArray = secretWord.split('');

        let success = true;

        for(let i = 0; i < secretWordArray.length; i++) {
            if(secretWordArray[i] === this.letters[i].letter) {
                this.letters[i].setCorrect();
            }
            else if(secretWordArray.includes(this.letters[i].letter)) {
                //the letter is right, but in the wrong location
                this.letters[i].setCorrectWrongLocation();
                success = false;
            }
            else {
                this.letters[i].setIncorrect();
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