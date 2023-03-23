$(document).ready(function(){
    $('.modal').modal();

    //listen for submit on the search bar (event listener "submit")
    // when event happens the do $.get(dictionaryBaseUrl + searchTeamFromSearchBar)
    // then with data put on page
  });

// When I click the search bar, I want to type a word into it
// TODO store search bar class into a variable
// TODO set a searchWord variable to an empty string
// TODO create an event listener for the a click on our "search" button and run searchFunc
/* searchFunc will grab the searched words' definition, antonyms and synonyms along with an example 
        of it being used in a sentence from the dictionary API*/
// searchFunc will also get an image using our searchWord variable as the keyword and display the image onto the page

var submitBtn = document.querySelector('#word-submit')

var inputBar = $('#input-bar');

let homePage = document.querySelector('.home-page')
let defPage = document.querySelector('.definition-page')
console.log(this)
submitBtn.addEventListener('click', function(event){
    event.preventDefault();
    var word = "test"  // get actual value from form
    addWordToLocal(word);
    searchWord(word)
})
function addWordToLocal(wordToAdd) {

}
function retrieveWordFromLocal(){

}
function searchWord(word) {
    window.location.href="./otherpage.html?word=" + word
    // homePage.classList.add('hidden')
    // defPage.classList.remove('hidden')
}



// let word = '';
// let wordUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

// $.get(wordUrl + word).then(function(data) {
//     console.log(data[0].word);
// });

let keyword = "";
let accessKey = "S_PwB3ZybsVdJ4AgTtZ_Ba_1_CvBzigOpknbKpqCqGI";

$.get(
  `https://api.unsplash.com/search/photos?page=1&query=${keyword}&client_id=${accessKey}`
).then(function (data) {
  console.log(data);
  let image = data.results[0].urls.full;
  $("body").append(`
        <img src="${image}">
    `);
});










// button.addEventListener('click', function(){

// });