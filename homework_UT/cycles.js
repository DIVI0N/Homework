// 1. Найти сумму четных чисел и их количество в диапазоне от 1 до 99

function sumEveRange() {
    var sum = 0;
    var j = 0;
    for (var i = 1; i < 100; i++) {
        if (i % 2 === 0) {
            sum += i;
            j++;
        }
    }
    return '' + sum + ' ' + j;
}

// 2. Проверить простое ли число? (число называется простым, если оно делится только само на себя и на 1)

function checkPrimeNumber(num) {
    if (typeof num === 'number') {
        for (var i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        if (num <= 1) {
            return false;
        }
        return true;
    }
    else return 'error';
}
// console.log(checkPrimeNumber(13))

// 3. Найти корень натурального числа с точностью до целого 
// (рассмотреть вариант последовательного подбора и метод бинарного поиска)

function rootOfNaturalNumber(a) {
    if (typeof a === 'number') {
        var num;
        for (var i = 0; i * i <= a; i++) {
            num = i;
        }
        return num;
    }
    else return 'error';
}
// console.log(rootOfNaturalNumber(9))
// console.log(rootOfNaturalNumber(144))


function rootOfNaturalNumBinary(a) {
    if (typeof a === 'number') {
        var high = a;
        var mid = 0;
        var low = 0;
        while (high - low > 1) {
            mid = Math.floor((high + low) / 2);
            if (mid * mid <= a) {
                low = mid;
            } else {
                high = mid;
            }
        }
        return low;
    }
    else return 'error';
}
// console.log(rootOfNaturalNumberBinary(180))


// 4. Вычислить факториал числа n. n! = 1*2*…*n-1*n;

function factorialNum(n) {
    if (typeof n === 'number') {
        var factorial = 1;
        for (var i = 1; i < n + 1; i++) {
            factorial *= i;
        }
        return factorial;
    }
    else return 'error';
}
// console.log(factorialNum(7))

// 5. Посчитать сумму цифр заданного числа

function sumNum(n) {
    if (typeof n === 'number') {
        var sum = 0;
        var j = 0;
        while (n) {
            j = n % 10;
            n = (n - j) / 10;
            sum += j;
        }
        return sum;
    }
    else return 'error';
}
// console.log(sumNum(3342))

// 6. Вывести число, которое является зеркальным отображением последовательности 
// цифр заданного числа, например, задано число 123, вывести 321.

function num123(n) {
    if (typeof n === 'number') {
        var a = '';
        var res = '';
        while (n) {
            a = (n % 10);
            res += a;
            n = (n - a) / 10;
        }
        return +res;
    }
    else return 'error';
}
// console.log(num123(123))

module.exports = { sumEveRange, checkPrimeNumber, rootOfNaturalNumber, rootOfNaturalNumBinary, factorialNum, sumNum, num123 }