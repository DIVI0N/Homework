var { multiAndSum, сoordinates, sumThreePosNum, maxExpression, rating } = require('./conditionalOperators.js')
describe('multiAndSum', function () {
    it('should be defined', function () {
        expect(multiAndSum).toBeDefined()
    })
    it('should work only with numbers', function () {
        expect(multiAndSum('o', '1')).toBe('Введите числа')
    })
    it('should be a function', function () {
        expect(typeof multiAndSum).toBe('function')
    })
    it('should work with two arguments', function () {
        expect(multiAndSum(2, 4)).toBe(8)
    })
    it('should work with two arguments', function () {
        expect(multiAndSum(5, 5)).toBe(10)
    })
    it('should work without arguments', function () {
        expect(multiAndSum()).toBe(0)
    })
    it('should work with one argument', function () {
        expect(multiAndSum(4)).toBe(0)
    })
    it('should work with one argument', function () {
        expect(multiAndSum(3)).toBe(3)
    })
})

describe('сoordinates', function () {
    it('should be defined', function () {
        expect(сoordinates).toBeDefined()
    })
    it('should be a function', function () {
        expect(typeof сoordinates).toBe('function')
    })
    it('should work only with numbers', function () {
        expect(сoordinates('one', '3')).toBe('Введите числа')
    })
    it('should work without arguments', function () {
        expect(сoordinates()).toBe('точка лежит в (0;0)')
    })
    it('x > 0 && y > 0', function () {
        expect(сoordinates(4, 1)).toBe('точка лежит в 1 четверти')
    })
    it('x > 0 && y < 0', function () {
        expect(сoordinates(3, -2)).toBe('точка лежит в 4 четверти')
    })
    it('x < 0 && y > 0', function () {
        expect(сoordinates(-1, 3)).toBe('точка лежит в 2 четверти')
    })
    it('x < 0 && y < 0', function () {
        expect(сoordinates(-1, -1)).toBe('точка лежит в 3 четверти')
    })
    it('x === 0 && y > 0', function () {
        expect(сoordinates(0, 3)).toBe('точка лежит в 1 и 2 четверти')
    })
    it('x === 0 && y < 0', function () {
        expect(сoordinates(0, -1)).toBe('точка лежит в 4 и 3 четверти')
    })
    it('x > 0 && y === 0', function () {
        expect(сoordinates(3, 0)).toBe('точка лежит в 1 и 4 четверти')
    })
    it('x < 0 && y === 0', function () {
        expect(сoordinates(-3, 0)).toBe('точка лежит в 2 и 3 четверти')
    })
})

describe('sumThreePosNum', function () {
    it('should be defined', function () {
        expect(sumThreePosNum).toBeDefined()
    })
    it('should be a function', function () {
        expect(typeof sumThreePosNum).toBe('function')
    })
    it('should work only with numbers', function () {
        expect(sumThreePosNum('1', 'one', '2')).toBe('Введите числа')
    })
    it('should work positive arguments', function () {
        expect(sumThreePosNum(1, 2, 3)).toBe(6)
    })
    it('should work without arguments', function () {
        expect(sumThreePosNum(0, 0, 0)).toBe('0 - не положительное число')
    })
    it('should work negative arguments', function () {
        expect(sumThreePosNum(-1, -2, -3)).toBe('Нет положительного числа')
    })
})

describe('maxExpression', function () {
    it('should be defined', function () {
        expect(maxExpression).toBeDefined()
    })
    it('should be a function', function () {
        expect(typeof maxExpression).toBe('function')
    })
    it('should work only with numbers', function () {
        expect(maxExpression('1', '2', 's')).toBe('Введите числа')
    })
    it('should work without arguments', function () {
        expect(maxExpression()).toBe(3)
    })
    it('should work with one arguments', function () {
        expect(maxExpression(3)).toBe(6)
    })
    it('should work with two arguments', function () {
        expect(maxExpression(2, 4)).toBe(9)
    })
    it('should work with negative arguments', function () {
        expect(maxExpression(-3, 1, 1)).toBe(2)
    })
    it('should work with positive arguments', function () {
        expect(maxExpression(3, 2, 5)).not.toBe(3)
    })
})

describe('rating', function () {
    it('should be defined', function () {
        expect(rating).toBeDefined()
    })
    it('should be a function', function () {
        expect(typeof rating).toBe('function')
    })
    it('should work only with numbers', function () {
        expect(rating('-3')).toBe('Оценка ставится в диапазоне[0-100]')
    })
    it('should work with interval 0-19', function () {
        expect(rating(5)).toBe('Оценка:F')
    })
    it('should work with interval 20-39', function () {
        expect(rating(25)).toBe('Оценка:E')
    })
    it('should work with interval 40-59', function () {
        expect(rating(52)).toBe('Оценка:D')
    })
    it('should work with interval 60-74', function () {
        expect(rating(74)).toBe('Оценка:C')
    })
    it('should work with interval 75-89', function () {
        expect(rating(75)).toBe('Оценка:B')
    })
    it('should work with interval 90-100', function () {
        expect(rating(100)).toBe('Оценка:A')
    })
})