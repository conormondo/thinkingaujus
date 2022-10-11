const { response } = require("express");

// Grabs age date
function getAge() {
    const bd = new Date(1994, 03, 12);
    let elapsed = Date.now() - bd
    let age = elapsed / 1000 / 60 / 60 / 24 / 365
    return Math.floor(age)
}
// Updates age element
function updateAge() {
    document.body.querySelector('#age').innerText = getAge();
}

function showSandwich(recsJson) {
    const recName = document.getElementById('recName');
    const recBlurb = document.getElementById('recBlurb');
    const recId = document.getElementById('recId');
    const recRestaurant = document.getElementById('recRestaurant');

    let choice = Math.floor(Math.random() * recsJson.length - 1);
    let sandwich = recsJson[choice]

    recName.innerText = sandwich.name;
    recBlurb.innerText = sandwich.blurb;
    recId.innerText = sandwich.id;
    recRestaurant.innerText = sandwich.restaurant;

    console.log('Randomly selected number: ', choice + 1)
    console.log(recsJson[choice])
}

// Random sandwich call
function getRandomSandwich() {
    
    // TODO: Make work
    fetch('/data')
    .then(response => response.json())
    .then(data => showSandwich(data));

    return;
};