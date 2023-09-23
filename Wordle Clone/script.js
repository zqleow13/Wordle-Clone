/*let grid = document.querySelector('#game');

let guessesAllowed = 6;

let wordLength = 5;

// generate 5 rows
let fragment = document.createDocumentFragment();

let generateGrid = () => {

Array.from({length: guessesAllowed}).forEach(() => {
    let row = document.createElement('div');
    row.classList.add('row');

Array.from({length: wordLength}).forEach(() => {
    let tile = document.createElement('div');
    tile.classList.add('tile');

    row.appendChild(tile);
});

    fragment.appendChild(row);
});

grid.appendChild(fragment);

};

// where each row contains 6 columns

// append to grid (not sure what this means tbh)

// when user press button, the button works and the letter appear */

const buttonElements = document.querySelectorAll('button');
let row = 1;
let letter = 1;
const wordForTheDay = "Queue";
const wordElements = document.querySelectorAll(".row");

buttonElements.forEach((element) => {
    element.addEventListener('click', function() {
        keypress(element.attributes["data-key"].value)
    });
});


function populateWord(key) {
    if (letter < 6) {
        wordElements[row - 1].querySelectorAll('.tile')[letter - 1].innerText = key;
        letter++;
    }
}

function checkWord() {
    const letterElements = wordElements[row - 1].querySelectorAll(".tile");

    letterElements.forEach((element, index) => {
        const indexOfLetterInWordOfTheDay = wordForTheDay.toLowerCase().indexOf
        (element.innerText.toLowerCase());

        if (indexOfLetterInWordOfTheDay === index) {
            element.classList.add('word-green');
        } else if (indexOfLetterInWordOfTheDay > 0) {
            element.classList.add('word-yellow');
        } else {
            element.classList.add('word-grey'); 
        }
    });
}




function enterWord() {
    if (letter < 6) {
        alert('Not enough letters');
    } else {
        checkWord();
        row += 1;
        letter = 1;
    }
}

function deleteLetter() {
    const letterElements = wordElements[row - 1].querySelectorAll('.tile');
    for (let index = letterElements.length - 1; index >= 0; index--) {
        const element = letterElements[index];
        if (element.innerText !== '') {
            element.innerText = '';
            letter--;
            break;
        }
    }
}

function keypress(key) {
    if (key.toLowerCase() === 'enter') {
        enterWord();
    } else if (key.toLowerCase() === 'del') {
        deleteLetter();
    } else {
        populateWord(key);
    }
    
}


