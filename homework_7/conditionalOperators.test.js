var { multiAndSum } = require('./conditionalOperators.js')
describe('multiAndSum', function () {
    it('should be defined', function () {
        expect(multiAndSum).toBeDefined()
    })
    it('it is a function', function () {
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
