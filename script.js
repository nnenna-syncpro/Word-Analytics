const textareaEl = document.querySelector('.textarea');
const numberOfWordsEl = document.querySelector('.stat__number--words');
const numberOfCharactersEl = document.querySelector('.stat__number--characters');
const numberOfTwitterEl = document.querySelector('.stat__number--twitter');
const numberOfFacebookEl = document.querySelector('.stat__number--facebook');


textareaEl.addEventListener('input', function(){
    //get/count the current number of characters typed 
    const numberOfCharacters = textareaEl.value.length;

    //display number of characters typed
    numberOfCharactersEl.textContent = numberOfCharacters;

    //get and set number of twitter characters left
    const twitterCharactersLeft = 280 -numberOfCharacters;
    numberOfTwitterEl.textContent = twitterCharactersLeft;

    ////get and set number of Facebook characters left
    const facebookCharactersLeft = 2200 - numberOfCharacters;
    numberOfFacebookEl.textContent = facebookCharactersLeft;
})