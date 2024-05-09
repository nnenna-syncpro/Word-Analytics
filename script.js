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

    //constraints for exceeding twitter limit
    if (twitterCharactersLeft < 0){
        numberOfTwitterEl.classList.add('stat__number--limit');
        numberOfTwitterEl.textContent = 0;
    }else{
        numberOfTwitterEl.classList.remove('stat__number--limit');
        numberOfTwitterEl.textContent = twitterCharactersLeft;
    }

    //constraints for exceeding facebook limit
    if(facebookCharactersLeft < 0){
        numberOfFacebookEl.classList.add('stat__number--limit');
        numberOfFacebookEl.textContent = 0;
    }else{
        numberOfFacebookEl.classList.remove('stat__number--limit');
        numberOfFacebookEl.textContent = facebookCharactersLeft;
    }
})


//hdvhdfvj knj kndkfjb hdjfbkjndvjk ndvjn djn ingfijkb ngjkfn vjkc ndvjh bijdkfnv jdfn ifdhbvndfjkvndfvjkdfnvkjdnfkvjc jfnv;kjenfjkvnfkjn vjhfkdbhdfjfv bjhdfb hbuihiudnbiveoufnvienrviunvbrvhberivunhrinvueirbv reuhfvnvhuwnvuorbeviujrevounrevinoerid erfvnohurjdnvoiwrndvihberihbviuehr