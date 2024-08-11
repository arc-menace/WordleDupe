export default class Letter {
    letter : string = "";
    color : string = "transparent";

    setLetter(letter : string) {
        this.letter = letter.toUpperCase();
    }

    setIncorrect() {
        this.color = "var(--wrong-letter)";
    }

    setCorrectWrongLocation() {
        this.color = "var(--warning)";
    }

    setCorrect() {
        this.color = "var(--success)";
    }
}