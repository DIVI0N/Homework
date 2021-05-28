var ITree = require("./ITree");

var BStree = function () {
    this.size = 0;
    this.root = null;
    this.Node = function (value) {
        this.value = value;
        this.left = null;
        this.right = null;
    };

    this.insertNode = function (node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            };
        };
    };

    this.inOrderTraverse = function (node, callback) {
        if (node) {
            this.inOrderTraverse(node.left, callback);
            callback(node.value);
            this.inOrderTraverse(node.right, callback);
        };
    };
};
BStree.prototype = Object.create(ITree.prototype);
BStree.prototype.constructor = BStree;

BStree.prototype.init = function (array) {
    if (!Array.isArray(array)) {
        return;
    }
    for (var i = 0; i < array.length; i++) {
        this.insert(array[i]);
    };
};

module.exports = BStree;