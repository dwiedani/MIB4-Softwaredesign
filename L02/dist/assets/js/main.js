function reverseWords(sentence) {
    var words = sentence.split(' ');
    var resultString = '';
    for (var i = words.length - 1; i >= 0; i--) {
        resultString += words[i] + " ";
    }
    return resultString;
}
function reverseSentence(sentence) {
    var characters = sentence.split('');
    var resultString = '';
    for (var i = characters.length - 1; i >= 0; i--) {
        resultString += characters[i];
    }
    return resultString;
}
function reverseLetters(sentence) {
    var resultString = reverseSentence(sentence);
    resultString = reverseWords(resultString);
    return resultString;
}
console.log(reverseWords('Die Maus frisst Käse'));
console.log(reverseSentence('Die Maus frisst Käse'));
console.log(reverseLetters('Die Maus frisst Käse'));
