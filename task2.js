const n = Math.floor(Math.random() * 9) + 1; // random n from 1 to 9
console.log(n);
// const result = n + Number(String(n) + String(n)) + Number(String(n) + String(n) + String(n));
// const result = n + Number(String(n) + n) + Number(String(n) + n + n);
const result = n + +(String(n) + n) + +(String(n) + n + n);
console.log(result);