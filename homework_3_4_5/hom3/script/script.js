var number = Math.floor(100 * Math.random()) + 1;
console.log(number);
var count = 5;

document.querySelector('.text__check').onclick = function () {
    if (count > 0) {
        var usernum = document.querySelector('.text__mynum').value;
        usernum = parseInt(usernum);
        var out = document.querySelector('.text__out');
        if (usernum === number) {
            out.innerHTML = alert('Поздравляю! Ты угадал задуманное число. Страница будет перезагружена');
            location.reload();
        } else if (usernum > number) {
            out.innerHTML = 'Число находится ниже';
        } else if (usernum < number) {
            out.innerHTML = 'Число находится выше'
        }
        count = --count;
        document.querySelector('.text__count').innerHTML = 'Осталось попыток ' + count;
    }
    else {
        alert('Попытки закончены. Страница будет перезагружена');
        location.reload();
    }
}




























// var number = Math.floor(100 * Math.random()) + 1;
// console.log(number);
// var count 2;

// document.getElementById('check').onclick = function () {
//     if (count > 0) {
//         var userNum = document.getElementById('mynum').value;
//     }
//     if (usernum === number) {
//         out.innerHTML = 'Ура вы угадали!';
//     }
//     else if (usernum > number) {
//         out.innerHTML = 'Перелет';
//     }
//     else if (usernum < number) {
//         out.innerHTML = 'Недолет';
//     }
//     document.getElementById('count').innerHTML = 'Осталось попыток ' + count;
//     count = count - 1;
// }
// else {
//     alert('Попытки закончены, вы проиграли. Страница будет перезагружена');
//     location.reload();
// }
