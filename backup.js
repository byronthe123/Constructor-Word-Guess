const inquirer = require('inquirer');
const Word = require('./word');
const fs = require('fs');

let wordsArray = ['one', 'two'];

const getWords = (callback) => {
    let words = '';
    fs.readFile('./randomWords.txt', 'utf8', (err, data) => {
        if(err){
            console.log(`Error reading randomWords.txt`);
        }
        // console.log(data);
        words = data;
        words = words.split(' ');
        // console.log(words);
        return callback(words);
    });
}

// console.log(getWords());
let chances = 8;
let score = 0;

const runGame = () => {
    let randomNum = Math.floor(Math.random() * wordsArray.length);
    let randomWord = wordsArray.splice(randomNum, 1)[0];
    let wordToGuess = new Word(randomWord);
    //   console.log(wordToGuess.displayWordToGuess());
    handleGuess(wordToGuess);
}

const nextWord = () => {
    if(wordsArray.length === 0) {
        return false;
    } else {
        return true;
    }
}

const handleGuess = (wordToGuess) => {
    if(chances > 0) {
        inquirer.prompt({
            type: 'string', 
            message: `Chances: ${chances} Score: ${score}\n${wordToGuess.displayWordToGuess()}\nEnter your guess: `,
            name: 'guess'
        }).then(guess => {
            let feedback = `Correct!\n`;
            if(!wordToGuess.processGuess(guess.guess)) {
                chances--;
                feedback = `Incorrect!\n`;
            } 
            console.log(feedback);
            // wordToGuess.processGuess(guess.guess);
            // console.log(`Chances: ${chances} Score: ${score}`);
            if(wordToGuess.checkGuessed()) {
                console.log(`Word guessed correctly: ${wordToGuess.displayWordToGuess()}\n`);
                score++;
                if(nextWord()) {
                    runGame();
                } else {
                    console.log(`Game over.\nYour total score: ${score}.`);
                }
            } else {
                handleGuess(wordToGuess);    
            }
        });
    } else {
        console.log(`No more chances - game over!`);
    }
}

runGame();
