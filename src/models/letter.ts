export default class Letter {
    letter : string = "";
    color : string = "transparent";

    setLetter(letter : string) {
        this.letter = letter.toUpperCase();
    }

    setIncorrect() {
        this.color = "red";
    }

    setCorrectWrongLocation() {
        this.color = "#b59f3b";
    }

    setCorrect() {
        this.color = "#538d4e";
    }
}