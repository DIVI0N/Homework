var AList = require("./AList");

describe("AList check init capacity", function () {
    test("init_empty", function () {
        var list = new AList();
        expect(list.array.length).toBe(list.DEFAULT_CAPACITY);
    });
    test("init_capacity", function () {
        var CAPACITY = 30;
        var list = new AList(CAPACITY);
        expect(list.array.length).toBe(CAPACITY);
    });
    test("init_array", function () {
        var ARRAY = [1, -2, 3, 15, -60, 90];
        var list = new AList(ARRAY);
        expect(list.array).toEqual(ARRAY);
        expect(list.getSize()).toBe(ARRAY.length);
        expect(list.array.length).toBe(ARRAY.length);
    });
});

describe("AList add values", function () {
    test("add first", function () {
        var list = new LList();
        console.log("size = ", list.getSize());
        list.add(10);
        console.log("size = ", list.getSize());
        console.log(list.array);
        var expected = [10, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined];
        expect(list.array).toEqual(expected);
        expect(list.getSize()).toBe(1);
    });

    test("add ensure capacity", function () {
        var list = new AList();
        for (var i = 0; i < 10; i++) {
            list.add(i);
        }
        list.add(50);
        console.log(list.array);
        console.log(list.array.length);
    });
});

describe("AList set values", function () {
    test("set first", function () {
        var list = new AList();
        list.add(10);
        list.add(5);
        list.add(3);
        list.set(50, 5);
        list.add(-100);
        list.add(150);
        list.add(250);
        console.log(address);
    });
});

describe("AList print", function () {
    it("should call console.log", function () {
        var test = new AList(1);
        var value_ = 1;
        console.log = jest.fn();
        test.add(value_);
        test.print();
        expect(console.log).toBeCalledTimes(1);
        expect(console.log).toHaveBeenCalledWith(value_);
        expect(console.log).not.toHaveBeenCalledWith();
    });
});