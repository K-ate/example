let cyrrlic_ph = ['Привычка - вторая натура', 'Заметьте хорошо!', 'Беда не приходит одна', 'Через тернии к звёздам'];
let latin_ph = ['Consuetudo est altera natura', 'Nota bene', 'Nulla calamitas sola', 'Per aspera ad astra'];
let counter = 0;


let phrasesContainer = document.querySelector('.container');
let endContainer = document.querySelector('.end');

let button1 = document.querySelector('#button1');
let button2 = document.querySelector('#button2');


button1.onclick = createText;
button2.onclick = newColor;


function newColor() {
    let phrasesToColor = document.querySelectorAll('.phrase:not(.phrase.left)');
    for (let phrase of phrasesToColor) {
        phrase.classList.add('colored');
    }

    let phrasesToColor2 = document.querySelectorAll('.phrase.left');
    for (let phrase of phrasesToColor2) {
        phrase.classList.remove('colored');
    }
}

function getRandomIndex() {
    return Math.floor(Math.random() * cyrrlic_ph.length);
}

function setPhraseListener() {
    let container = document.querySelectorAll('.phrase');
    for (let phrase of container) {
        phrase.onclick = toLeft;
    }
}

function toLeft() {
    this.classList.add('left');
    this.textContent = this.dataset.latin;
}

function createText() {
    if (cyrrlic_ph.length == 0) {
        endContainer.textContent = 'Фразы закончились!';
    } else {
        counter+=1;

        let phraseNumber = getRandomIndex();

        phrasesContainer.innerHTML += `
        <p data-latin="${counter}. ${[latin_ph[phraseNumber]]}" class="phrase">${counter}. ${cyrrlic_ph[phraseNumber]}</p>
    `

        cyrrlic_ph.splice(phraseNumber, 1);
        latin_ph.splice(phraseNumber, 1);

        setPhraseListener();
    }
}





