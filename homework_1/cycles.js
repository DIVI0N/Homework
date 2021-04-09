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
console.log(sumEveRange())

// 2. Проверить простое ли число? (число называется простым, если оно делится только само на себя и на 1)

function checkPrimeNumber(num) {
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
console.log(checkPrimeNumber(13))

// 3. Найти корень натурального числа с точностью до целого 
// (рассмотреть вариант последовательного подбора и метод бинарного поиска)

function rootOfNaturalNumber(a) {
    var num;
    for (var i = 0; i * i <= a; i++) {
        num = i;
    }
    return num;
}
console.log(rootOfNaturalNumber(9))
console.log(rootOfNaturalNumber(144))


function rootOfNaturalNumBinary(a) {
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
    return console.log(low), a;
}
console.log(rootOfNaturalNumberBinary(180))


// 4. Вычислить факториал числа n. n! = 1*2*…*n-1*n;

function factorialNum(n) {
    var factorial = 1;
    for (var i = 1; i < n + 1; i++) {
        factorial *= i;
    }
    return factorial;
}
console.log(factorialNum(7))

// 5. Посчитать сумму цифр заданного числа

function sumNum(n) {
    var sum = 0;
    var j = 0;
    while (n) {
        j = n % 10
        n = (n - j) / 10
        sum += j;
    }
    return sum;
}
console.log(sumNum(3342))

// 6. Вывести число, которое является зеркальным отображением последовательности 
// цифр заданного числа, например, задано число 123, вывести 321.

function num123(n) {
    var a = '';
    var res = '';
    while (n) {
        a = (n % 10).toString();
        res += a;
        n = (n - a) / 10;
    }
    return +res;
}
console.log(num123(123))