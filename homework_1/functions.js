// 1. Получить строковое название дня недели по номеру дня.

function getDay(a) {
    var d = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Суб', 'Вос'];
    return d[a + 1];
}
console.log(getDay(3))

// 2. Найти расстояние между двумя точками в двухмерном декартовом пространстве.

function distanceBetweenTwoPoints(x1, x2, y1, y2) {
    var res = (((x2 - x1) ** 2) + ((y2 - y1) ** 2)) ** 0.5;
    return res;
}
console.log(distanceBetweenTwoPoints(20, 1, 4, 9));

// 3. Вводим число(0-999), получаем строку с прописью числа.

function getStringFromNumber(number) {
    if (number === 0) {
        return 'ноль';
    }
    var str = '';
    var hundreds = ['', 'сто', 'двести', 'триста', 'четыреста',
        'пятьсот', 'шестьсот', 'семьсот', 'восемсот', 'девятьсот'];
    var dim = ['', 'десять', 'двадцать', 'тридцать', 'сорок', 'пятьдесят',
        'шестьдесят', 'семьдесят', 'восемдесят', 'девяносто'];
    var chast = ['', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать',
        'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];
    var numeric = ['', 'один', 'два', 'три', 'четыре',
        'пять', 'шесть', 'семь', 'восемь', 'девять'];

    var indexOfHundreds = Math.floor(number / 100);
    str = str + hundreds[indexOfHundreds];
    number = number % 100;
    var index = Math.floor(number / 10);
    if (Math.floor(number / 10) > 1) {
        str += ' ' + dim[index];
    }
    return str;
}

var str = getStringFromNumber(340);
console.log(str)