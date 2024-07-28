/* Вам необходимо выполнить несколько операций с этим текстом:

Выведите в консоль количество символов в тексте.

Добавьте перенос строки после каждого символа ; и сохраните результат в переменную result.

Удалите все пробелы в переменной result и сохраните результат в переменную substring.

Извлеките подстроку из переменной result, начиная с 28-го символа и до 50-го символа (не включая), из текста и сохраните в переменную newText.

Замените в извлеченной подстроке (newText) все вхождения слова клён на дубе и сохраните результат в переменную replacedText.

Приведите текст в переменной result к верхнему регистру и сохраните результат в переменную replacedText2.

Замените все вхождения слова клён на дуб в переменной result и сохраните результат в переменную replacedText3.

Найдите индекс первого вхождения слова моря в тексте и сохраните в переменную index.

Измените только первую букву в переменной replacedText на заглавную без использования регулярных выражений и сохраните результат в переменную modifiedText.

Выведите значения всех полученных переменных на экран. */

let pText = document.querySelector('#text');
let p1 = document.querySelector('#p1');
let p2 = document.querySelector('#p2');
let p3 = document.querySelector('#p3');
let p4 = document.querySelector('#p4');
let p5 = document.querySelector('#p5');
let p6 = document.querySelector('#p6');
let p7 = document.querySelector('#p7');
let p8 = document.querySelector('#p8');
let p9 = document.querySelector('#p9');

let text = pText.textContent;
let result = text.replace(/;/g, ';\n');
let substring = text.replace(/ /g,'');
let newText = result.slice(28, 50);
let replacedText = newText.replace(/клён/g, 'дубе');
let replacedText2 = result.toUpperCase();
let replacedText3 = result.replace(/клён/g, 'дуб');
let index = text.indexOf('моря');
let modifiedText = replacedText.slice(0,1).toUpperCase() + replacedText.slice(1);

p1.textContent = `1. Количество символов в тексте: ${text.length}`;
p2.textContent = `2. Текст с переносами строк: \n ${result}`;
p3.textContent = `3. Текст с удалёнными пробелами: ${substring}`;
p4.textContent = `4. Извлечение подстроки: ${newText}`;
p5.textContent = `5. Замена "клён" на "дубе": ${replacedText}`;
p6.textContent = `6. Строка result в верхнем регистре: ${replacedText2}`;
p7.textContent = `7. Замена "клён" на "дуб" (все вхождения) в переменной result: ${replacedText3}`;
p8.textContent = `8. Индекс первого вхождения "моря": ${index}`;
p9.textContent = `9. Строка с измененной первой буквой: ${modifiedText}`;

// console.log(`1. Количество символов в тексте: ${text.length}`);
// console.log(`2. Текст с переносами строк: \n ${result}`);
// console.log(`3. Текст с удалёнными пробелами: ${substring}`);
// console.log(`4. Извлечение подстроки: ${newText}`);
// console.log(`5. Замена "клён" на "дубе": ${replacedText}`);
// console.log(`6. Строка result в верхнем регистре: ${replacedText2}`);
// console.log(`7. Замена "клён" на "дуб" (все вхождения) в переменной result: ${replacedText3}`);
// console.log(`8. Индекс первого вхождения "моря": ${index}`);
// console.log(`9. Строка с измененной первой буквой: ${modifiedText}`);


let alphabet = document.querySelector('#alphabet').textContent;
let button = document.querySelector('button');
let randonword = document.querySelector('#randonword');


button.addEventListener('click', function() {
    let newWord = '';
    for (let i = 1; i < 5; i++) {
        let indexLetter =  Math.floor((Math.random() * alphabet.length));
        console.log(indexLetter);
        let newLetter = alphabet.slice(indexLetter, indexLetter+1);
        newWord += newLetter;      
    }
        randonword.innerHTML = newWord;
});
