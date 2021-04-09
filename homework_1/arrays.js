// 1. Найти минимальный элемент массива

function minElement(array) {
    var min = '';
    for (var i = 0; i < array.length; i++) {
        if (min > array[i]) {
            min = array[i];
        }
    }
    return min;
}
console.log(minElement([-1, 5, 0, 8, -7, 10, -2]))

// 2 Найти максимальный элемент массива

function minElement(array) {
    var max = '';
    for (var i = 0; i < array.length; i++) {
        if (max < array[i]) {
            max = array[i];
        }
    }
    return max;
}
console.log(minElement([-1, 5, 0, 8, -7, 10, -2]))

// 3. Найти индекс минимального элемента массива

function minIndex(array) {
    var min = 0;
    for (var i = 1; i < array.length + 1; i++) {
        if (array[min] > array[i]) {
            min = i;
        }
    }
    return min;
}
console.log(minIndex([-1, 5, 0, 8, -7, 10, -2]))

// 4. Найти индекс максимального элемента массива 

function maxIndex(array) {
    var max = 0;
    for (var i = 1; i < array.length + 1; i++) {
        if (array[min] < array[i]) {
            max = i;
        }
    }
    return max;
}
console.log(minIndex([-1, 5, 0, 8, -7, 10, -2]))

// 5. Посчитать сумму элементов массива с нечетными индексами

function sumElemOddIndex(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        if (i % 2 !== 0) {
            sum += array[i];
        }
    }
    return sum;
}
console.log(sumElemOddIndex([-1, 5, 0, 8, -7, 10, -2]))

// 6.Сделать реверс массива (массив в обратном направлении)

function reverse(array) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        newArray[i] = array[array.length - i - 1];
    }
    return newArray;
}
console.log(reverse([-1, 5, 0, 8, -7, 10, -2]))

// 7.	Посчитать количество нечетных элементов массива

function oddElemArray(array) {
    var res = 0;
    for (var i = 0; i < array.length + 1; i++) {
        if (array[i] % 2 !== 0) {
            res += 1;
        }
    }
    return res - 1;
}
console.log(oddElemArray([-1, 5, 0, 8, -7, 10, -2]))