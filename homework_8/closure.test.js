var { tickets } = require('./closure')

describe("tickets", function () {
    it("should be defined ", function () {
        expect(tickets).toBeDefined();
    });
    it("should be function", function () {
        expect(typeof tickets).toBe("function");
    });
    it("shouldn't work without arguments", function () {
        expect(tickets()).not.toBe('Yes');
    });
    it("should work only with arrays", function () {
        expect(tickets('xz')).toBe('err');
    });
    it("should work with arrays", function () {
        expect(tickets(['25', '25', '50', '100'])).toBe('Yes');
    });
    it("should not return Yes", function () {
        expect(tickets([25, 100])).not.toBe('Yes');
    })
})