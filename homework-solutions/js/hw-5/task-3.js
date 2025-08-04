/**
 * Создать строку с информацией о количестве гласных и согласных букв в слове.
 * Переменная `word` уже создана и содержит строку со словом.
 * Ожидаемый результат для `hello`: "hello contains 2 vowels and 3 consonants".
 */
const word = 'hello';
lengthWord = word.length;
splitWord = word.split('');
console.log(splitWord);
let vowelsNum = 0;
let consonantsNum = 0;

for (i = 0; i < lengthWord; i++) {
    if (splitWord[i] === 'a' || splitWord[i] === 'e' || splitWord[i] === 'i' || splitWord[i] === 'o' || splitWord[i] === 'u') {
        vowelsNum++;
    } else {
        consonantsNum++;
    }
}

let vowelsAndConsonantsResult = `${word} contains ${vowelsNum} vowels and ${consonantsNum} consonants`;
console.log(vowelsAndConsonantsResult);

// export { vowelsAndConsonantsResult };
