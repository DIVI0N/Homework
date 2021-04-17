// 1. Если а – четное посчитать а * б, иначе а + б

function multiAndSum(a = 0, b = 0) {
    if (a % 2 === 0) {
        return +a * +b;
    } else {
        return +a + +b;
    }
}

module.exports = { multiAndSum }