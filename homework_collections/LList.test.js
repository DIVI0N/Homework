var LList = require("./LList");

describe('LList check init', function () {
    it('LList should be defined', function () {
        expect('LList').toBeDefined();
    })
    it('LList should be function', function () {
        expect(typeof LList).toBe('function');
    })
})

describe("LList print", function () {
    var llist = new LList();
    it("should call console.log", function () {
        var value1 = 1;
        llist.add(value1);
        console.log = jest.fn();
        llist.print();
        expect(console.log).toHaveBeenCalled();
        expect(console.log).toBeCalledTimes(1);
        expect(console.log).toHaveBeenCalledWith(value1);
    });
});