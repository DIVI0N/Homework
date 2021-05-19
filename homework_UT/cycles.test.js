var { sumEveRange, checkPrimeNumber, rootOfNaturalNumber, rootOfNaturalNumBinary, factorialNum, sumNum, num123 } = require('./cycles.js')

describe('sumEveRange', function () {
    it('should be defined', function () {
        expect(sumEveRange).toBeDefined()
    })
    it('should be a function', function () {
        expect(typeof sumEveRange).toBe('function')
    })
    it('function result', function () {
        expect(sumEveRange()).toBe('2450 49');
    })
})

describe('checkPrimeNumber', function () {
    it('should be defined', function () {
        expect(checkPrimeNumber).toBeDefined()
    })
    it('should be a function', function () {
        expect(typeof checkPrimeNumber).toBe('function')
    })
    it('should work only with numbers', function () {
        expect(checkPrimeNumber('rg123ku')).toBe('error')
    })
    it('shouldnt work without arguments', function () {
        expect(checkPrimeNumber()).toBe('error')
    })
    it('value should be a prime', function () {
        expect(checkPrimeNumber(11)).toBe(true)
    })
    it('value should not be a prime', function () {
        expect(checkPrimeNumber(4, 6, 8)).toBe(false)
    })
    it('value should not be a prime', function () {
        expect(checkPrimeNumber(0)).toBe(false)
    })
})

describe('rootOfNaturalNumber', function () {
    it('should be defined', function () {
        expect(rootOfNaturalNumber).toBeDefined()
    })
    it('should be a function', function () {
        expect(typeof rootOfNaturalNumber).toBe('function')
    })
    it('should work only with numbers', function () {
        expect(rootOfNaturalNumber('rg123ku')).toBe('error')
    })
    it('shouldnt work without arguments', function () {
        expect(rootOfNaturalNumber()).toBe('error')
    })
    it('should be 3', function () {
        expect(rootOfNaturalNumber(11)).toBe(3)
    })
})

describe('rootOfNaturalNumBinary', function () {
    it('should be defined', function () {
        expect(rootOfNaturalNumBinary).toBeDefined()
    })
    it('should be a function', function () {
        expect(typeof rootOfNaturalNumBinary).toBe('function')
    })
    it('should work only with numbers', function () {
        expect(rootOfNaturalNumBinary('rg123ku')).toBe('error')
    })
    it('shouldnt work without arguments', function () {
        expect(rootOfNaturalNumBinary()).toBe('error')
    })
    it('should be 3', function () {
        expect(rootOfNaturalNumBinary(11)).toBe(3)
    })
})

describe('factorialNum', function () {
    it('should be defined', function () {
        expect(factorialNum).toBeDefined()
    })
    it('should be a function', function () {
        expect(typeof factorialNum).toBe('function')
    })
    it('should work only with numbers', function () {
        expect(factorialNum('rg123ku')).toBe('error')
    })
    it('shouldnt work without arguments', function () {
        expect(factorialNum()).toBe('error')
    })
    it('should be factorial', function () {
        expect(factorialNum(4)).toBe(24)
    })
})

describe('sumNum', function () {
    it('should be defined', function () {
        expect(sumNum).toBeDefined()
    })
    it('should be a function', function () {
        expect(typeof sumNum).toBe('function')
    })
    it('should work only with numbers', function () {
        expect(sumNum('rg123ku')).toBe('error')
    })
    it('shouldnt work without arguments', function () {
        expect(sumNum()).toBe('error')
    })
    it('should be sumNum', function () {
        expect(sumNum(777)).toBe(21)
    })
})

describe('num123', function () {
    it('should be defined', function () {
        expect(num123).toBeDefined()
    })
    it('should be a function', function () {
        expect(typeof num123).toBe('function')
    })
    it('should work only with numbers', function () {
        expect(num123('rg123ku')).toBe('error')
    })
    it('shouldnt work without arguments', function () {
        expect(num123()).toBe('error')
    })
    it('should be mirror', function () {
        expect(num123(123)).toBe(321)
    })
})