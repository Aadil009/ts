var point = { x: 10, y: 20 };
console.log("point ::", point);
var user = { name: 'aadil', age: 27 };
console.log("user:", user);
var testName = "Aadil";
var testAGe = 27;
var hobbies = ['swim', 'gym', "game"];
var user2 = [1, 'aadil'];
var user3 = [true, 2, 'aadil'];
var Role;
(function (Role) {
    Role[Role["admin"] = 0] = "admin";
    Role[Role["user"] = 1] = "user";
    Role[Role["name"] = 2] = "name";
})(Role || (Role = {}));
var userRole = Role.user;
console.log("userRole is : ", userRole);
var randomVar = '2';
function add(a, b) {
    return a + b;
}
console.log(add(2, 2));
function printSentence(name, greeting) {
    return greeting + " " + name;
}
console.log(printSentence("Aadil", "Hello"));
