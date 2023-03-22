
// When I click the search bar, I want to type a word into it
// After I type out my word I click ENTER or press the "Search" button to search the word
// Then I am present with the word I searched, the definitions, antonyms and synonyms and an image representing the word
// The word, definitions, antonyms and synonyms, should all be pulled from https://dictionaryapi.dev/


// Quote API
// var category = 'something'
// $.ajax({
//     method:'GET',
//     url: 'https://api.dictionaryapi.dev/api/v2/entries/en/something',
//     contentType: 'application/json',
//     success: function(result) {
//         console.log(result[0].word);
//     }
// })


// $.ajax({
//     method: 'GET',
//     url: 'https://api.api-ninjas.com/v1/quotes?category=',
//     headers: { 'X-Api-Key': '/445waBLzIB9gpxRtEBL6w==H1EI9w79nq1cXGWp'},
//     contentType: 'application/json',
//     success: function(result) {
//         console.log(result[0].quote);
//     },
//     error: function ajaxError(jqXHR) {
//         console.error('Error: ', jqXHR.responseText);
//     }
// });




// let word = '';
// let wordUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

// $.get(wordUrl + word).then(function(data) {
//     console.log(data[0].word);
// });


let keyword = '';
let accessKey = 'S_PwB3ZybsVdJ4AgTtZ_Ba_1_CvBzigOpknbKpqCqGI';

$.get(`https://api.unsplash.com/search/photos?page=1&query=${keyword}&client_id=${accessKey}`).then(function(data) {
    console.log(data);
    let image = data.results[0].urls.full;
    $('body').append(`
        <img src="${image}">
    `)
});










// button.addEventListener('click', function(){

// });