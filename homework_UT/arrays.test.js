var { minElement, maxElement, minIndex, maxIndex, sumElemOddIndex, reverse, oddElemArray, swapArray, bubble, select, insert } = require('./arrays.js')

describe('minElement', function () {
    it('should be defined', function () {
        expect(minElement).toBeDefined()
    })
    it('should be a function', function () {
        expect(typeof minElement).toBe('function')
    })
    it('should work only with arrays', function () {
        expect(minElement(6156)).toBe('error')
    })
    it('should work only with argument', function () {
        expect(minElement()).toBe('error')
    })
    it('should work with empty array', function () {
        expect(minElement([])).not.toBe(0)
    })
    it('should work with various length array', function () {
        expect(minElement([-1, 5, 0, 8, -7, 10, -2])).toBe(-7)
    })
})

describe('maxElement', function () {
    it('should be defined', function () {
        expect(maxElement).toBeDefined()
    })
    it('should be a function', function () {
        expect(typeof maxElement).toBe('function')
    })
    it('should work only with arrays', function () {
        expect(maxElement(6156)).toBe('error')
    })
    it('should work only with argument', function () {
        expect(maxElement()).toBe('error')
    })
    it('should work with empty array', function () {
        expect(maxElement([])).not.toBe(0)
    })
    it('should work with various length array', function () {
        expect(maxElement([-1, 5, 0, 8, -7, 10, -2])).toBe(10)
    })
})

describe('minIndex', function () {
    it('should be defined', function () {
        expect(minIndex).toBeDefined()
    })
    it('should be a function', function () {
        expect(typeof minIndex).toBe('function')
    })
    it('should work only with arrays', function () {
        expect(minIndex(6156)).toBe('error')
    })
    it('should work only with argument', function () {
        expect(minIndex()).toBe('error')
    })
    it('should work with empty array', function () {
        expect(minIndex([])).not.toBe(0)
    })
    it('should work with various length array', function () {
        expect(minIndex([-1, 5, 0, 8, -7, 10, -2])).toBe(4)
    })
})

describe('maxIndex', function () {
    it('should be defined', function () {
        expect(maxIndex).toBeDefined()
    })
    it('should be a function', function () {
        expect(typeof maxIndex).toBe('function')
    })
    it('should work only with arrays', function () {
        expect(maxIndex(6156)).toBe('error')
    })
    it('should work only with argument', function () {
        expect(maxIndex()).toBe('error')
    })
    it('should work with empty array', function () {
        expect(maxIndex([])).not.toBe(0)
    })
    it('should work with various length array', function () {
        expect(maxIndex([-1, 5, 0, 8, -7, 10, -2])).toBe(5)
    })
})

describe('sumElemOddIndex', function () {
    it('should be defined', function () {
        expect(sumElemOddIndex).toBeDefined()
    })
    it('should be a function', function () {
        expect(typeof sumElemOddIndex).toBe('function')
    })
    it('should work only with arrays', function () {
        expect(sumElemOddIndex(6156)).toBe('error')
    })
    it('should work only with argument', function () {
        expect(sumElemOddIndex()).toBe('error')
    })
    it('should work with empty array', function () {
        expect(sumElemOddIndex([])).not.toBe(0)
    })
    it('should work with various length array', function () {
        expect(sumElemOddIndex([-1, 5, 0, 8, -7, 10, -2])).toBe(23)
    })
})

describe('reverse', function () {
    it('should be defined', function () {
        expect(reverse).toBeDefined()
    })
    it('should be a function', function () {
        expect(typeof reverse).toBe('function')
    })
    it('should work only with arrays', function () {
        expect(reverse(6156)).toBe('error')
    })
    it('should work only with argument', function () {
        expect(reverse()).toBe('error')
    })
    it('should work with empty array', function () {
        expect(reverse([])).not.toBe(0)
    })
    it('should work with an array', function () {
        expect(reverse([-1, 5, 0, 8, -7, 10, -2])).toStrictEqual([-2, 10, -7, 8, 0, 5, -1])
    })
})

describe('oddElemArray', function () {
    it('should be defined', function () {
        expect(oddElemArray).toBeDefined()
    })
    it('should be a function', function () {
        expect(typeof oddElemArray).toBe('function')
    })
    it('should work only with arrays', function () {
        expect(oddElemArray(6156)).toBe('error')
    })
    it('should work only with argument', function () {
        expect(oddElemArray()).toBe('error')
    })
    it('should work with empty array', function () {
        expect(oddElemArray([])).not.toBe(0)
    })
    it('should work with an array', function () {
        expect(oddElemArray([-1, 5, 0, 8, -7, 10, -2])).toBe(3)
    })
})

describe('swapArray', function () {
    it('should be defined', function () {
        expect(swapArray).toBeDefined()
    })
    it('should be a function', function () {
        expect(typeof swapArray).toBe('function')
    })
    it('should work only with arrays', function () {
        expect(swapArray(6156)).toBe('error')
    })
    it('should work only with argument', function () {
        expect(swapArray()).toBe('error')
    })
    it('should work with empty array', function () {
        expect(swapArray([])).not.toBe(0)
    })
    it('should work with an array', function () {
        expect(swapArray([1, 2, 3, 4])).toStrictEqual([3, 4, 1, 2])
    })
})

describe('bubble', function () {
    it('should be defined', function () {
        expect(bubble).toBeDefined()
    })
    it('should be a function', function () {
        expect(typeof bubble).toBe('function')
    })
    it('should work only with arrays', function () {
        expect(bubble(6156)).toBe('error')
    })
    it('should work only with argument', function () {
        expect(bubble()).toBe('error')
    })
    it('should work with empty array', function () {
        expect(bubble([])).not.toBe(0)
    })
    it('should work with an array', function () {
        expect(bubble([3, 4, 1, 2])).toStrictEqual([1, 2, 3, 4])
    })
})

describe('select', function () {
    it('should be defined', function () {
        expect(select).toBeDefined()
    })
    it('should be a function', function () {
        expect(typeof select).toBe('function')
    })
    it('should work only with arrays', function () {
        expect(select(6156)).toBe('error')
    })
    it('should work only with argument', function () {
        expect(select()).toBe('error')
    })
    it('should work with empty array', function () {
        expect(select([])).not.toBe(0)
    })
    it('should work with an array', function () {
        expect(select([3, 4, 1, 2])).toStrictEqual([1, 2, 3, 4])
    })
})

describe('insert', function () {
    it('should be defined', function () {
        expect(insert).toBeDefined()
    })
    it('should be a function', function () {
        expect(typeof insert).toBe('function')
    })
    it('should work only with arrays', function () {
        expect(insert(6156)).toBe('error')
    })
    it('should work only with argument', function () {
        expect(insert()).toBe('error')
    })
    it('should work with empty array', function () {
        expect(insert([])).not.toBe(0)
    })
    it('should work with an array', function () {
        expect(insert([3, 4, 1, 2])).toStrictEqual([1, 2, 3, 4])
    })
})