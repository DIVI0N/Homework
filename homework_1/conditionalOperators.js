// 1. Если а – четное посчитать а * б, иначе а + б

function multiAndSum(a, b) {
    if (a % 2 === 0) {
        return +a * +b;
    } else {
        return +a + +b;
    }
}
console.log(multiAndSum('2', '7'))
console.log(multiAndSum(21, 10))

// 2. Определить какой четверти принадлежит точка с координатами(х, у)

function сoordinates(x, y) {
    if (x > 0 && y > 0) {
        return 'точка лежит в 1 четверти';
    } else if (x > 0 && y < 0) {
        return 'точка лежит в 4 четверти';
    } else if (x > 0 && y < 0) {
        return 'точка лежит в 4 четверти';
    } else if (x < 0 && y > 0) {
        return 'точка лежит в 2 четверти';
    } else if (x < 0 && y < 0) {
        return 'точка лежит в 3 четверти';
    } else if (x === 0 && y > 0) {
        return 'точка лежит в 1 и 2 четверти';
    } else if (x === 0 && y < 0) {
        return 'точка лежит в 4 и 3 четверти';
    } else if (x > 0 && y === 0) {
        return 'точка лежит в 1 и 4 четверти';
    } else if (x < 0 && y === 0) {
        return 'точка лежит в 2 и 3 четверти';
    } else if (x === 0 && y === 0) {
        return 'точка лежит в (0;0)';
    } else {
        return 'Введите числа';
    }
}
console.log(сoordinates('text', 0))
console.log(сoordinates(1, 0))

// 3. Найти суммы только положительных из трех чисел

function sumThreePosNum(a, b, c) {
    if (a > 0 && b > 0 && c > 0) {
        return +a + +b + +c;
    } else if (a === 0 || b === 0 || c === 0) {
        return '0 - не положительное число';
    }
    else {
        return 'Нет положительного числа';
    }
}
console.log(sumThreePosNum(1, 0, 4))
console.log(sumThreePosNum(1, 3, 4))

// 4. Посчитать выражение(макс(а * б * с, а + б + с)) + 3
// 1) Cпособ
function maxExpression(a, b, c) {
    return (a * b * c) > (a + b + c) ? (a * b * c) + 3 : (a + b + c) + 3;
}
console.log(maxExpression(0, 0, 0))

// 2) Cпособ
function maxExpression(a, b, c) {
    if ((a * b * c) > (a + b + c)) {
        return a * b * c + 3 + '=mul';
    } else if ((a * b * c) < (a + b + c)) {
        return a + b + c + 3 + '=sum';
    }
    else {
        return 'mul = sum = 3';
    }
}
console.log(maxExpression(0, 0, 0))

// 5. Написать программу определения оценки студента по его рейтингу

function rating(r) {
    if (r >= 0 && r <= 19) {
        return 'Оценка:F';
    }
    else if (r >= 20 && r <= 39) {
        return 'Оценка:E';
    }
    else if (r >= 40 && r <= 59) {
        return 'Оценка:D';
    }
    else if (r >= 60 && r <= 74) {
        return 'Оценка:C';
    }
    else if (r >= 75 && r <= 89) {
        return 'Оценка:B';
    }
    else if (r >= 90 && r <= 100) {
        return 'Оценка:A';
    } else {
        return 'Оценка ставится в диапазоне[0-100]';
    }
}
console.log(rating('101'))