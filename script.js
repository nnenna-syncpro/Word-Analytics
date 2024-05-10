const textareaEl = document.querySelector('.textarea');
const numberOfWordsEl = document.querySelector('.stat__number--words');
const numberOfCharactersEl = document.querySelector('.stat__number--characters');
const numberOfTwitterEl = document.querySelector('.stat__number--twitter');
const numberOfFacebookEl = document.querySelector('.stat__number--facebook');

//using traditional function
const inputHandler = () => {
    //validate input to prevent malicious attack
    if(textareaEl.value.includes('<script>')){
        alert('Warning! You cannot use <script>');
        textareaEl.value = textareaEl.value.replace('<script>', '');
    }

    //get/count the current number of characters typed 
    const numberOfCharacters = textareaEl.value.length;

    //display number of characters typed
    numberOfCharactersEl.textContent = numberOfCharacters;

    //get and set number of words. Split() groups characters into words by using the space as a divider
    let numberOfWords = textareaEl.value.split(' ').length;
    if (numberOfCharacters === 0){
        //BUG: By default .split() always returns an array of at least 1 element
        //FIX: if the string is 0 with no characters, override the length of the array to return 0
        numberOfWords = 0;
    }
    numberOfWordsEl.textContent = numberOfWords;

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
};

textareaEl.addEventListener('input', inputHandler);
