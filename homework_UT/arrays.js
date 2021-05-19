// 1. Найти минимальный элемент массива

function minElement(array) {
    if (Array.isArray(array)) {
        var min = '';
        for (var i = 0; i < array.length; i++) {
            if (min > array[i]) {
                min = array[i];
            }
        }
        return min;
    }
    else return 'error';
}

// 2 Найти максимальный элемент массива

function maxElement(array) {
    if (Array.isArray(array)) {
        var max = '';
        for (var i = 0; i < array.length; i++) {
            if (max < array[i]) {
                max = array[i];
            }
        }
        return max;
    }
    else return 'error';
}

// 3. Найти индекс минимального элемента массива

function minIndex(array) {
    if (Array.isArray(array) && array.length !== 0) {
        var min = 0;
        for (var i = 1; i < array.length + 1; i++) {
            if (array[min] > array[i]) {
                min = i;
            }
        }
        return min;
    }
    else return 'error';
}

// 4. Найти индекс максимального элемента массива 

function maxIndex(array) {
    if (Array.isArray(array) && array.length !== 0) {
        var max = 0;
        for (var i = 1; i < array.length + 1; i++) {
            if (array[max] < array[i]) {
                max = i;
            }
        }
        return max;
    }
    else return 'error';
}

// 5. Посчитать сумму элементов массива с нечетными индексами

function sumElemOddIndex(array) {
    if (Array.isArray(array) && array.length !== 0) {
        var sum = 0;
        for (var i = 0; i < array.length; i++) {
            if (i % 2 !== 0) {
                sum += array[i];
            }
        }
        return sum;
    }
    else return 'error';
}

// 6. Сделать реверс массива (массив в обратном направлении)

function reverse(array) {
    if (Array.isArray(array)) {
        var newArray = [];
        for (var i = 0; i < array.length; i++) {
            newArray[i] = array[array.length - i - 1];
        }
        return newArray;
    }
    else return 'error';
}

// 7. Посчитать количество нечетных элементов массива

function oddElemArray(array) {
    if (Array.isArray(array) && array.length !== 0) {
        var res = 0;
        for (var i = 0; i < array.length; i++) {
            if (array[i] % 2 !== 0) {
                res += 1;
            }
        }
        return res;
    }
    else return 'error';
}

// 8. Поменять местами первую и вторую половину массива, например, для массива 
// 1 2 3 4, результат 3 4 1 2

function swapArray(array) {
    if (Array.isArray(array)) {
        var half1 = Math.round(array.length / 2);
        var half2 = array.length - half1;
        var reverse = [];
        for (var i = 0; i < half2; i++) {
            reverse[i] = array[i + half1];
        }
        for (var j = 0; j < half1; j++) {
            reverse[j + half2] = array[j];
        }
        return reverse;
    }
    else return 'error';
}

// 9. Отсортировать массив (пузырьком (Bubble), выбором (Select), вставками (Insert)) 

function bubble(array) {
    if (Array.isArray(array)) {
        var newArray = [];
        for (var j = 0; j < array.length; i++) {
            for (var i = 0; i < array.length; i++) {
                if (array[i] > array[i + 1]) {
                    var swap = array[i];
                    array[i] = array[i + 1]
                    array[i + 1] = swap;
                }
            }
            newArray[array.length - 1] = array[array.length - 1];
            array.pop();
        }
        return newArray;
    }
    else return "error";
}

function select(array) {
    if (Array.isArray(array)) {
        var newArray = [];
        for (var i = 0; i < array.length;) {
            var res = array[0];
            indexRes = 0;
            for (var j = 0; j < array.length + 1; j++) {
                if (array[j] < res) {
                    res = array[j];
                    indexRes = j;
                }
            }
            newArray.push(res);
            array.splice(indexRes, 1);
        }
        return newArray;
    }
    else return 'error';
}

function insert(array) {
    if (Array.isArray(array)) {
        for (var i = 1; i < array.length; i++) {
            var res = array[i];
            var j = i;
            while (j > 0 && array[j - 1] > res) {
                array[j] = array[j - 1];
                j--;
            }
            array[j] = res;
        }
        return array;
    }
    else return 'error';
}

module.exports = { minElement, maxElement, minIndex, maxIndex, sumElemOddIndex, reverse, oddElemArray, swapArray, bubble, select, insert }