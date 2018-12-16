const Letter = require('./letter');

class Word {
  constructor(word){
    this.wordToGuess = word;
    this.lettersArray = this.getLettersArray();
  }

  getWord() {
    return this.wordToGuess;
  }

  getLettersArray() {
    let lettersArray = [];
    let toArray = Array.from(this.wordToGuess);
    for(let i = 0; i < toArray.length; i++) {
      let letter = new Letter(toArray[i]); 
      lettersArray.push(letter);
    }
    return lettersArray;
  }

  displayWordToGuess() {
    // display
    let display = '';
    for(let i = 0; i < this.lettersArray.length; i++) {
      if(this.lettersArray[i].guessed) {
        // console.log(lettersArray[i].letter + ' ');
        display += this.lettersArray[i].letter + ' ';
      } else {
        // console.log('_ ');
        display += '_ ';
      }
    }

    return display;
  }

  processGuess(letter) {
    let correctGuess = false;
    for(let i = 0; i < this.lettersArray.length; i++) {
      if(this.lettersArray[i].letter === letter) {
        this.lettersArray[i].guessed = true;
        correctGuess = true;
      }
    }
    if(correctGuess) {
      return true;
    } else {
      return false;
    }
  }

  checkGuessed() {
    let toReturn = true;
    for(let i = 0; i < this.lettersArray.length; i++) {
        if(this.lettersArray[i].guessed === false) {
            toReturn = false;
        }
    }
    return toReturn;
  }
}



module.exports = Word;