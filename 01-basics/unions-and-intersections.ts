//union types
function printId(id: string | number) {
    if(typeof id === "string"){
        console.log("string id")
    }
    else{
        console.log("number id")
    }
}

printId(1)
printId('1')

//intersection type
type UserIntersection = {
    id: number
    name: string
}
type AdminIntersection = {
    permissions: string[]
}
type AdminUserIntersection = UserIntersection & AdminIntersection;

const adminUserIntersection: AdminUserIntersection = {
    id: 1,
    name: 'adil',
    permissions: ['create', 'delete']
}
console.log("adminuserintersectin value:", adminUserIntersection)