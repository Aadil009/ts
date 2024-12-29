//union types
function printId(id) {
    if (typeof id === "string") {
        console.log("string id");
    }
    else {
        console.log("number id");
    }
}
printId(1);
printId('1');
var adminUserIntersection = {
    id: 1,
    name: 'adil',
    permissions: ['create', 'delete']
};
console.log("adminuserintersectin value:", adminUserIntersection);
