/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

function isPalindrom(word) {
  if (typeof word === 'string'){
    const lowerCasedWord = word.toLowerCase();
  const reversedWord = lowerCasedWord.split('').reverse().join('');
  return lowerCasedWord === reversedWord;
  } else {
    return false;
  }
  
}

/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/

function findLongestWords(sentence) {
  const longestWords = [];

  if (typeof sentence !== 'string' || sentence === '') {
    return longestWords;
  }

  const words = sentence.split(" ");
  let maxLength = 0;

  for (let word of words) {
    if (word.length > maxLength) {
      maxLength = word.length;
    }
  }

  for (let word of words) {
    if (word.length === maxLength) {
      longestWords.push(word);
    }
  }

  return longestWords;
}

export { isPalindrom, findLongestWords };
