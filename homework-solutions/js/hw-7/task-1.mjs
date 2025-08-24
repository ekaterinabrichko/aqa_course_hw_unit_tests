/*
1. Бесконечные аргументы
  - Напишите функцию, принимающую на вход любое количество массивов
  - Функция возвращает массив содержащий все элементы переданных массивов.
  - Например: mergeArrays([1,2], [3,4], [5,6]) // [1,2,3,4,5,6]
  - Решить с использованием Spread operator
*/
function mergeArrays() {
  return [].concat(...arguments);
}

/*
  2. Devide by _
    - Написать функцию, которая преобразует любое предложение в вот_Такой_Вот_Вид и возвращает его. 
    - Первое слово должно начинаться с буквы в нижнем регистре, у остальных -  верхнем. 
    - Пример: I am super engineer => i_Am_Super_Engineer
  */
function devideBy(sentence) { 
  const lowerCasedSentence = sentence.toLowerCase();
  const sentenceWithUnderscore = lowerCasedSentence.replace(/\s+/g, "_");
  
  const letters = [...sentenceWithUnderscore];
  
  for (let i = 0; i < letters.length; i++) {
    const hasNext = i + 1 < letters.length;
   
    if (letters[i] === '_' && hasNext && letters[i+1] !== '_') {
      letters[i+1] = letters[i+1].toUpperCase();
    }
  }

  return letters.join("");
}

/*
  3. Фибаначчи
    - Напишите функцию fibonacci(n), возвращающую энное число Фибоначчи
    - числа Фибоначчи (строка Фибоначчи) — числовая последовательность,
      первые два числа которой являются 0 и 1, а каждое последующее за ними число
      является суммой двух предыдущих
    - Например fibonacci(8) //21
  */

function fibonacci(num) {
  const arr = [0, 1];
  if (typeof num !== "number" || num < 0) throw new Error("Incorrect data");
  
  if (num === 0) {
    return arr[0];
  } else if (num === 1) {
    return arr[1];
  } else {
  for (let i = 2; i <= num; i++) {
   arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[num];
}
}

export { mergeArrays, fibonacci, devideBy };
