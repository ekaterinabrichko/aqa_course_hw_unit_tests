/**
 * Создать строку с информацией о количестве гласных и согласных букв в слове.
 * Переменная `word` уже создана и содержит строку со словом.
 * Ожидаемый результат для `hello`: "hello contains 2 vowels and 3 consonants".
 */
const word = 'hello';
lengthWord = word.length;
splitWord = word.split('');
console.log(splitWord);
const vowels = ['a', 'e', 'i', 'o', 'u'];
const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
let vowelsNum = 0;
let consonantsNum = 0;


for (i = 0; i < lengthWord; i++) {
    if (vowels.includes(splitWord[i])) {
        vowelsNum++;
    } else if (consonants.includes(splitWord[i])) {
        consonantsNum++;
    }
}

let vowelsAndConsonantsResult = `${word} contains ${vowelsNum} vowels and ${consonantsNum} consonants`;
console.log(vowelsAndConsonantsResult);

export { vowelsAndConsonantsResult };
