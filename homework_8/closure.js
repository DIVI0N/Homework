
// 1. Новый фильм "Как натренировать своего дракона” только выпустили! В кассах кинотеатра много людей, стоящих в огромную очередь. 
// У каждого из них есть банкнота в 100, 50 или 25 долларов. Билет на «Бэтмен против Супермена: На заре справедливости» стоит 25 долларов. 
// Вася в настоящее время работает клерком. Он хочет продать билет каждому человеку в этой очереди. Может ли Вася продать каждому билет и 
// отдать сдачу, если у него изначально нет денег и он продает билеты строго в том порядке, в котором люди следуют в очереди? Верните YES, 
// если Вася может продать каждому билет и отдать сдачу. В противном случае верните NO. Может ли Вася продать каждому билет и отдать сдачу?
// Условия:
// * принимает массив из очереди людей
//     * возвращает строку

function tickets(person) {
    if (Array.isArray(person)) {
        var cash = 0;
        var res = '';
        function findCash(counter) {
            if (counter >= person.length) {
                return res = 'Yes';
            }
            else if (person[counter] - cash === 25 || person[counter] - cash === 0) {
                cash += 25;
                findCash(counter + 1);
            }
            else {
                return res = 'NO. Vasya will not have enough money to give change to ' + person[counter] + ' dollars';
            }
        }
        findCash(0);
        return res;
    }
    else return 'err';
}

// console.log(tickets([25, 25, 50]));
// console.log(tickets([25, 100]));
// console.log(tickets([25, 25, 50, 100]));
// console.log(tickets([25, 50, 100]));
// console.log(tickets(['25', '25', '50', '100']));
// console.log(tickets(['25', '50', '100']));

module.exports = { tickets }