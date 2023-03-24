//TODO listen for submit on the search bar DONE
// When I click the search bar, I want to type a word into it
// TODO store search bar class into a variable DONE
// TODO set a searchWord variable to an empty string
// TODO create an event listener for the a click on our "search" button and run searchWord DONE
/* !! searchWord will grab the searched words' definition, antonyms and synonyms along with an example 
        of it being used in a sentence from the dictionary API */
// searchWord will also get an image using our searchWord variable as the keyword and display the image onto the page

let submitBtn = document.querySelector("#word-submit");
let inputBar = $("#input-bar");
let homePage = document.querySelector(".home-page");
let defPage = document.querySelector(".definition-page");
let inputWord = document.getElementById("default-search");
// Attempting to take the users input word and store into local storage
// Then pull word from local storage and assign it to a variable to get the data from both image generation api and definition
let word = "" // get actual value from form
// set value of word to whatever the user inputs into the search bar
inputBar.on("submit", function (event) {
  event.preventDefault();
  console.log(inputWord.value);
  // addWordToLocal(word); //Local storage function
  searchWord(inputWord.value);
});
// function addWordToLocal(wordToAdd) {}

// function retrieveWordFromLocal() {}

function searchWord(word) { 
  window.location.href = "./otherpage.html?word=" + word;
  getDefiniton(word);
  getImage(word);
}

// Figure out way to use innerText/HTML to display definition to its approtiate element
function getDefiniton(word) {
  let wordUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/";

  $.get(wordUrl + word).then(function (data) {
    console.log(data[0].word);
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

// WHEN everything is done and working then work on the local storage aspect of the app
// Store searched words into local storage and definitons
