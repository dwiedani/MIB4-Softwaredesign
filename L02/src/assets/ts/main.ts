function reverseWords(sentence: string) {
  const words = sentence.split(' ');
  let resultString: string = '';
  for (let i = words.length - 1; i >= 0; i--) {
    resultString += `${words[i]} `;
  }
  return resultString;
}

function reverseSentence(sentence: string) {
  const characters = sentence.split('');
  let resultString: string = '';
  for (let i = characters.length - 1; i >= 0; i--) {
    resultString += characters[i];
  }
  return resultString;
}

function reverseLetters(sentence: string) {
  let resultString: string = reverseSentence(sentence);
  resultString = reverseWords(resultString);
  return resultString;
}

console.log(reverseWords('Die Maus frisst Käse'));
console.log(reverseSentence('Die Maus frisst Käse'));
console.log(reverseLetters('Die Maus frisst Käse'));
