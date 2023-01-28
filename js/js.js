const startBtn = document.querySelector('.start');
const welcomePage = document.querySelector('.welcome-page');
const winnerPage = document.querySelector('.winner-page');
const main = document.querySelector('.main');
const back = document.querySelector('.back');
const itemvalue = document.querySelector('.form-control');
const elements = document.querySelector('.elements-container');
const addBtn = document.querySelector('.add-item');
const error = document.querySelector(".error");
const clear = document.querySelector('.clear');
const closeBox = document.querySelector('.close-box');
const choose = document.querySelector('.chose');
const winner = document.querySelector('.winner-item');
const repeat = document.querySelector('.repeat');

const closeFirst = () => {
    welcomePage.classList.toggle('d-none');
    main.classList.toggle('d-none');
}

const addNote = () => {
    if (itemvalue.value !== "") {
        error.style.visibility = 'hidden';
        createNote();
    } else {
        error.innerHTML = 'Musisz wpisac wartość!';
        error.style.visibility = 'visible';
    }
}

let selectedValue;
let cardID = 0;
const array = [];

const createNote = () => {
    const newNote = document.createElement('div');
    newNote.classList.add('new-item');
    newNote.setAttribute('id', cardID);
    newNote.innerHTML = `<p>${itemvalue.value}</p>`;
    array.push(itemvalue.value);
    elements.appendChild(newNote);
    cardID++;
    itemvalue.value = '';
}

const los = () => {
    const losIt = array[Math.floor(Math.random() * array.length)];
    if (array.length < 2) {
        error.style.visibility = 'visible';
        error.innerHTML = 'Musisz dodać minimum dwóch uczestników!!';
    } else {
        setTimeout(() => {
            winnerPage.classList.toggle('d-none');
            main.classList.toggle('d-none');
            winner.textContent = `${losIt}`;
        }, 1000);
    }
}

const deleteAll = () => {
    elements.innerHTML = '';
    cardID = 0;
    error.style.visibility = 'hidden';
    itemvalue.value = '';
    array.length = 0;
}

const repeatLos = () => {
    winnerPage.classList.toggle('d-none');
    main.classList.toggle('d-none');
    setTimeout(los, 1000);
}


closeBox.addEventListener('click', function () {
    array.length = ""
    winnerPage.classList.toggle('d-none')
    elements.textContent = ''
    main.classList.toggle('d-none')
})

document.getElementById("item").addEventListener("keydown", function (event) {
    // event.preventDefault();
    if (event.key == 'Enter' && itemvalue.value >= '1') { event.preventDefault(); createNote() }

    else {
        error.style.visibility = 'visible';
    }

});

repeat.addEventListener('click', repeatLos)
clear.addEventListener('click', deleteAll)
choose.addEventListener('click', los)
addBtn.addEventListener('click', addNote)
startBtn.addEventListener('click', closeFirst)

