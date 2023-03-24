const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const word = urlParams.get('word')
console.log(word);

let submitBtn = document.querySelector("#word-submit");
let inputBar = $("#input-bar");
let homePage = document.querySelector(".home-page");
let defPage = document.querySelector(".definition-page");
let inputWord = document.getElementById("default-search");
let wordHere = $('#word-here');
let partOfSpeech = $('#part-of-speech');
let definition = $('#definition');
// Attempting to take the users input word and store into local storage
// Then pull word from local storage and assign it to a variable to get the data from both image generation api and definition
// set value of word to whatever the user inputs into the search bar
inputBar.on("submit", function (event) {
  event.preventDefault();
  console.log(inputWord.value);
  // addWordToLocal(word); //Local storage function
  searchWord(inputWord.value);
});
// function addWordToLocal(wordToAdd) {}

// function retrieveWordFromLocal() {}
searchWord(word);

function searchWord(word) { 
//   window.location.href = "./otherpage.html?word=" + word;
  getDefiniton(word);
  getImage(word);
}

// Figure out way to use innerText/HTML to display definition to its approtiate element
function getDefiniton(word) {
  let wordUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/";

  $.get(wordUrl + word).then(function (data) {
    console.log(data);
    wordHere.text(word);
    definition.text(data[0].meanings[0].definitions[0].definition);
    partOfSpeech.text(data[0].meanings[0].partOfSpeech);

  });
}


function getImage(word) {
  let accessKey = "S_PwB3ZybsVdJ4AgTtZ_Ba_1_CvBzigOpknbKpqCqGI";

  $.get(
    `https://api.unsplash.com/search/photos?page=1&query=${word}&client_id=${accessKey}`
  ).then(function (data) {
    console.log(data);
    let image = data.results[0].urls.full;
    $("body").append(`
        <img src="${image}">
            `);
  });
};