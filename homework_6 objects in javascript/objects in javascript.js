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