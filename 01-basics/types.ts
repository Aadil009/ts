type Point = {
    x: number
    y: number
}
let point: Point = { x:10, y:20}
console.log("point ::", point)


type User = {
    name: string,
    age: number
}

let user : User = {name: 'aadil', age: 27}
console.log("user:" , user)

let testName : string = "Aadil"
let testAGe : number = 27
let hobbies : string[] = ['swim', 'gym', "game"]
let user2 : [number , string] = [1, 'aadil']
let user3 : [boolean, number, string] = [true, 2, 'aadil']

enum Role {
    admin, user , name
}
let userRole : Role = Role.user
console.log("userRole is : ", userRole)


let randomVar : any = '2'

function add(a : number, b: number): number{
    return a+b
}
console.log(add(2,2))


function printSentence(name: string, greeting: string):string{
    return greeting + " " + name
}
console.log(printSentence("Aadil", "Hello"))