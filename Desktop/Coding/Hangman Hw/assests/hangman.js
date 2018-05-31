// Create an array of Words
const word = ['uncopyrightable', 'poulty', 'steak', 'lambchop', 'ramen', 'aftershock', 'blueprint', 'artichoke', 'binoculars', 'labrinth', 'ladyfingers'];
// Choose word randomly
let randNum = Math.floor(Math.random() * word.length);
let choosenWord = word[randNum];
let rightWord = [];
let wrongWord = [];
let underScore = [];

let docUnderScore = document.getElementsByClassName('underscore');
let docRightGuess = document.getElementsByClassName('rightGuess');
let docWrongGuess = document.getElementsByClassName('wrongGuess');


// Create underscores based of length of word
let generateUnderscore = () => {
    for(let i = 0; i < choosenWord.length; i++) {
        underScore.push('_');
   }
    return underScore;
}

// Get user's guess
document.addEventListener('keypress', (event) => {
    let keyword = String.fromCharCode(event.keyCode);
// if user's guesses right    
    if(choosenWord.indexOf(keyword) > -1) {
        //console.log(true);
        // add to right word array
        rightWord.push(keyword);
        
        // replace underscore with right letter
        underScore[choosenWord.indexOf(keyword)] = keyword;
        docUnderScore[0].innerHTML = underScore.join(' ');
        docRightGuess[0].innerHTML = rightWord;
        // check to see if user word matches guesses
            if(underScore.join('') == choosenWord) {
                alert('You got it!');
                
            }
        }
    else {
        wrongWord.push(keyword);
        docWrongGuess[0].innerHTML = wrongWord;
    }
    
});
    
docUnderScore[0].innerHTML = generateUnderscore().join(' ');

