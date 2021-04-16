// 1.Составьте алгоритм, который считает, сколько времени вам нужно на приготовление яиц.
// Правила:
// -Яйца варить 5 минут
// -Вместительность емкости не более 5 яиц одновременно

function getCookingTime(eggsAmount) {
    return Math.ceil(eggsAmount / 5) * 5;
}
console.log(getCookingTime(0)); //returns 0
console.log(getCookingTime(5)); //returns 5
console.log(getCookingTime(9)); //returns 10 (because capacity is 5 so we need to do it 2 times)

// 2.Получая массив чисел. Все они либо нечетные, либо четные, кроме одного. Тебе нужно его найти.

function getNumber(array) {
    var result;
    var even = [];
    var odd = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            even.push(array[i]);
        } else {
            odd.push(array[i]);
        }
    }
    if (even.length > odd.length) {
        result = odd['0'];
    } else {
        result = even['0'];
    }
    return result;
}
console.log(getNumber([1, 5, 7, 9, 15, 19, 777, -15, -11, 4, 9, 23, -17])); //returns 4
console.log(getNumber([0, 2, 8, -4, 0, -122, 13, -4, 28, 12])); //returns 13

// 3. Принимая массив объектов и случайную строку. У объектов может быть ключ: «title» с разными значениями. Создайте алгоритм, 
// который фильтрует массив, заданный как первый параметр, и возвращает массив объектов, которые содержат в своих заголовках 
// заданную строку в качестве второго параметра (без учета регистра).

var arr = [
    { title: 'Some title1' },
    { title: 'I like JS' },
    { user: 'This obj doesn\’t have key title js' },
    { title: 'Js - is the best!' }
];

function findTitle(arr, str) {
    str = str.toLowerCase();
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].hasOwnProperty('title') && arr[i].title.toLowerCase().includes(str)) {
            newArr.push(arr[i]);
        }
    }
    return arr = newArr;
}
console.log(findTitle(arr, 'js')); // return [{ title: 'I like JS'}, { title: 'Js - is the best!' }]

// 4. Принимая строку, ваша функция должна вернуть обьект, в котором ключи – символы строки, значение – количество повторений символов в строке

function countCharacters(string) {
    var result = {};
    string = string.toLowerCase();
    for (var i = 0; i < string.length; i++) {
        if (string[i].charCodeAt() > 96 && string[i].charCodeAt() < 123 || string[i].charCodeAt() > 47 && string[i].charCodeAt() < 58) {
            if (result[string[i]] = result[string[i]]) {
                result[string[i]] += 1
            } else {
                result[string[i]] = 1;
            }
        }
    }
    return result;
}

console.log(countCharacters('sparrow')) // should return {s: 1, p: 1, a: 1, r: 2, o: 1, w: 1}
console.log(countCharacters('aabcddeffge')) // should return {a: 2, b: 1, c: 1, d: 2, e: 2, f: 2, g: 1}
console.log(countCharacters('a 2ab !d')) // should return {a: 2, b:1, d:1, 2:1}

// 5. Принимая число, ваша функция должна найти следующий положительный палиндром большего размера.

function getNextPalindrome(number) {
    var result = '';
    for (var i = ++number; i > 0; i++) {
        if (palindrome(i)) {
            result = i;
            break;
        }
    }
    return result;
}
function palindrome(num) {
    num = num.toString();
    var res = '';
    for (var i = num.length - 1; i > -1; i--) {
        res += num[i];
    }
    if (+res === +num && res.length > 1) {
        return true;
    }
    else {
        return false;
    }
}

console.log(getNextPalindrome(7)); // returns 11
console.log(getNextPalindrome(99)); //returns 101
console.log(getNextPalindrome(132)); // returns 141
console.log(getNextPalindrome(888)); // returns 898
console.log(getNextPalindrome(999)); // returns 1001