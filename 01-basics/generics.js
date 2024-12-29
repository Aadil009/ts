function identity(value) {
    return value;
}
console.log(identity(4));
console.log(identity("Hi"));
var response = {
    status: 200,
    data: "Hello"
};
console.log(response);
//generic clsss
var Stack = /** @class */ (function () {
    function Stack() {
        this.items = [];
    }
    Stack.prototype.push = function (item) {
        this.items.push(item);
    };
    Stack.prototype.pop = function () {
        return this.items.pop();
    };
    return Stack;
}());
var numberStack = new Stack();
numberStack.push(1);
numberStack.push(2);
numberStack.push(3);
numberStack.pop();
console.log(numberStack);
