// 1. Если а – четное посчитать а * б, иначе а + б

function multiAndSum(a = 0, b = 0) {
    if (typeof a === 'number' && typeof b === 'number') {
        if (a % 2 === 0) {
            return +a * +b;
        } else {
            return +a + +b;
        }
    } else {
        return 'Введите числа';
    }
}

function сoordinates(x = 0, y = 0) {
    if (typeof x === 'number' && typeof y === 'number') {
        if (x > 0 && y > 0) {
            return 'точка лежит в 1 четверти';
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
        }
    } else {
        return 'Введите числа';
    }
}

function sumThreePosNum(a = 1, b = 1, c = 1) {
    if (typeof a === 'number' && typeof b === 'number' && typeof c === 'number') {
        if (a > 0 && b > 0 && c > 0) {
            return +a + +b + +c;
        } else if (a === 0 || b === 0 || c === 0) {
            return '0 - не положительное число';
        }
        else {
            return 'Нет положительного числа';
        }
    } else {
        return 'Введите числа';
    }
}

function maxExpression(a = 0, b = 0, c = 0) {
    if (typeof a === 'number' && typeof b === 'number' && typeof c === 'number') {
        return (a * b * c) > (a + b + c) ? (a * b * c) + 3 : (a + b + c) + 3;
    } else {
        return 'Введите числа';
    }
}

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
module.exports = { multiAndSum, сoordinates, sumThreePosNum, maxExpression, rating }