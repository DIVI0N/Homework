var IList = require("./IList");

var AList = function (capacity) {
    IList.call(this, capacity);
    this.size = 0;
    this.offset = 0;
    this.DEFAULT_CAPACITY = 10;
    this.array = (() => {
        if (!this.capacity) {
            return new Array(this.DEFAULT_CAPACITY);
        } else if (typeof this.capacity === "number") {
            return new Array(this.capacity);
        } else if (Array.isArray(this.capacity)) {
            this.size = this.capacity.length;
            return this.capacity;
        } else {
            throw new Error("Exception message");
        }
    })();

    this.ensureCapacity = function () {
        var newArray = new Array(this.array.length + Math.floor(this.array.length * 1.5));
        for (var i = 0; i < this.array.length; i++) {
            newArray[i] = this.array[i];
        }
        this.array = newArray;
    };

    this.addValue = function (value) {
        this.array[this.offset++] = value;
        this.size++;
    };
};

AList.prototype = Object.create(IList.prototype);
AList.prototype.constructor = AList;

AList.prototype.getSize = function () {
    return this.size;
};

AList.prototype.add = function (value) {
    if (this.size === this.array.length) {
        this.ensureCapacity();
        this.addValue(value);
    } else {
        if (this.array[this.offset]) {
            this.offset++;
            this.add(value);
        } else {
            this.addValue(value);
        }
    }
};

AList.prototype.set = function (value, index) { //
    if (index < 0 || index > this.array.length - 1) {
        throw new Error("ArrayIndexOutBoundsException");
    }
    if (!this.array[index]) {
        this.array[index] = value;
        this.size++;
    } else {
        this.array[index] = value;
    }
};

// AList.prototype.get = function (index) {
//     return this.array[index];
// };

AList.prototype.remove = function (value) {
    var arr = [];
    for (var i = 0; i < this.array.length; i++) {
        if (this.array[i] !== value) {
            arr.push(this.array[i]);
        }
        else this.size--;
    }
    this.array = arr;
};

AList.prototype.toArray = function () {
    var arr = [];
    arr.push(this.size);
    arr.push(this.DEFAULT_CAPACITY);
    arr.push(this.array);
    return arr;
};

// AList.prototype.toString = function () {
//     return this.array.toString();
// };

AList.prototype.contains = function (value) {
    var result = false;
    for (var i = 0; i < this.array.length; i++) {
        if (this.array[i] === value) {
            result = true;
        }
    }
    return result;
};

AList.prototype.minValue = function () {
    var minVl = this.array[0];
    for (var i = 0; i < this.array.length + 1; i++) {
        if (this.array[i] < minVl) {
            minVl = this.array[i];
        };
    };
    return minVl;
};

AList.prototype.maxValue = function () {
    var maxVl = this.array[0];
    for (var i = 0; i < this.array.length + 1; i++) {
        if (this.array[i] > maxVl) {
            maxVl = this.array[i];
        };
    };
    return maxVl;
};

AList.prototype.minIndex = function () {
    var minIndex = 0;
    for (var i = 1; i < this.array.length + 1; i++) {
        if (this.array[minIndex] > this.array[i]) {
            minIndex = i;
        };
    };
    return minIndex;
};

AList.prototype.maxIndex = function () {
    var maxIndex = 0;
    for (var i = 1; i < this.array.length + 1; i++) {
        if (this.array[maxIndex] < this.array[i]) {
            maxIndex = i;
        };
    };
    return maxIndex;
};

AList.prototype.reverse = function () {
    var arr = [];
    for (var i = this.array.length - 1; i > -1; i--) {
        arr.push(this.array[i]);
    };
    return this.array = arr;
};

AList.prototype.halfReverse = function () {
    var half = Math.round(this.array.length / 2);
    var halfRevers = [];
    for (var i = half; i < this.array.length; i++) {
        halfRevers.push(this.array[i]);
    };
    halfRevers.push(this.array[half - 1]);
    for (var j = 0; j < half - 1; j++) {
        halfRevers.push(this.array[j]);
    };
    return this.array = halfRevers;
};

AList.prototype.retainAll = function (array) {
    var arr = [];
    this.size = 0;
    for (var i = 0; i < this.array.length; i++) {
        for (var j = 0; j < array.length; j++) {
            if (this.array[i] == array[j]) {
                arr.push(this.array[i]);
                this.size++;
            };
        };
    };
    return this.array = arr;
};

AList.prototype.removeAll = function (array) {
    var arr = [];
    this.size = 0;
    for (var i = 0; i < this.array.length; i++) {
        for (var j = 0; j < array.length; j++) {
            if (this.array[i] == array[j]) {
                delete this.array[i];
            };
        };
        if (this.array[i] !== undefined) {
            arr.push(this.array[i]);
            this.size++;
        };
    };
    return this.array = arr;
};

// AList.prototype.sort = function () {

// };

AList.prototype.print = function () {
    for (var i = 0; i < this.array.length; i++) {
        console.log(this.array[i]);
    };
};

module.exports = AList;