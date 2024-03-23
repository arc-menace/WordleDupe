export default class Letter {
    letter : string = "";
    color : string = "transparent";

    setLetter(letter : string) {
        this.letter = letter.toUpperCase();
    }

    setIncorrect() {
        this.color = "var(--error)";
    }

    setCorrectWrongLocation() {
        this.color = "var(--warning)";
    }

    setCorrect() {
        this.color = "var(--success)";
    }
}