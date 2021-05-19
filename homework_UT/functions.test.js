var { getDay, distanceBetweenTwoPoints } = require('./functions.js')

describe('getDay', function () {
    it('should be defined', function () {
        expect(getDay).toBeDefined()
    })
    it('should be a function', function () {
        expect(typeof getDay).toBe('function')
    })
    it('should work only with numbers', function () {
        expect(getDay('rg123ku')).toBe('error')
    })
    it('shouldnt work without arguments', function () {
        expect(getDay()).toBe('error')
    })
    it('should be day', function () {
        expect(getDay(1)).toBe('Пн')
    })
})

describe('distanceBetweenTwoPoints', function () {
    it('should be defined', function () {
        expect(distanceBetweenTwoPoints).toBeDefined()
    })
    it('should be a function', function () {
        expect(typeof distanceBetweenTwoPoints).toBe('function')
    })
    it('should work only with numbers', function () {
        expect(distanceBetweenTwoPoints('rg123ku')).toBe('error')
    })
    it('shouldnt work without arguments', function () {
        expect(distanceBetweenTwoPoints()).toBe('error')
    })
    it('should be day', function () {
        expect(distanceBetweenTwoPoints(20, 1, 4, 9)).toBe(19.64)
    })
})