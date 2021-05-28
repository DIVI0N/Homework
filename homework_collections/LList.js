var IList = require("./IList");

var LList = function () {
    this.size = 0;
    this.root = null;
    this.Node = function (value) {
        this.value = value;
        this.next = null;
    };
};

LList.prototype = Object.create(IList.prototype);
LList.prototype.constructor = LList;

LList.prototype.clear = function () {
    this.size = 0;
    this.root = null;
};

// LList.prototype.getSize = function () {
//     return this.size;
// };

// LList.prototype.add = function (value) {

// };

// LList.prototype.set = function (value, index) {

// };

// LList.prototype.get = function (index) {

// };

// LList.prototype.remove = function (value) {

// };

LList.prototype.toArray = function () {
    var array = new Array(this.size);
    var index = 0;
    var tempNode = this.root;
    while (tempNode !== null) {
        array[index++] = tempNode.value;
        tempNode = tempNode.next;
    }
    return array;
};

// LList.prototype.toString = function () {

// };

LList.prototype.contains = function (value) {
    var tempNode = this.root;
    while (tempNode !== null) {
        if (tempNode.value === value) {
            return true;
        }
        tempNode = tempNode.next;
    }
    return false;
};

// LList.prototype.minValue = function () {

// };

// LList.prototype.maxValue = function () {

// };

// LList.prototype.minIndex = function () {

// };

// LList.prototype.maxIndex = function () {

// };

// LList.prototype.reverse = function () {

// };

// LList.prototype.retainAll = function (array) {

// };

// LList.prototype.removeAll = function (array) {

// };

LList.prototype.print = function () {
    var tempNode = this.root;
    for (var i = 0; i < this.size; i++) {
        console.log(tempNode.value);
        tempNode = tempNode.next;
    }
}

module.exports = LList;