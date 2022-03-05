export const utilService = {
    saveToStorage,
    loadFromStorage,
    makeId,
    shortingSentences,
    getRandomColor
}

function shortingSentences(sentence, wordsCount) {
    sentence = sentence.split(' ')
        // if (wordsCount > sentence.length) wordsCount = sentence.length
    sentence = sentence.slice(0, wordsCount)
    sentence = sentence.join(' ')
    return sentence
}

function saveToStorage(key, value) {
    // console.log('in save');
    localStorage.setItem(key, JSON.stringify(value) || null);
}

function loadFromStorage(key) {
    let data = localStorage.getItem(key);
    return (data) ? JSON.parse(data) : undefined;
}

function makeId(length = 4) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}