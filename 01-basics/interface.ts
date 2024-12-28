interface User2 {
    id: number
    name: string
}


let testUser2 : User2 = {id:1, name:"adil"}
console.log("testuser:", testUser2)

type Point1 ={
    x: number
    y: number
}

let pointTest2 : Point1 = {x:10, y:20}



//difference in interface vs intersecting types

interface Admin extends User2 {
    permissions: string []
}

type SuperAdmin = User2 & {permissions: string[]}
let admin2 : Admin = {
    id: 2,
    name: "aadil", 
    permissions: ["Full", "All"]
}
console.log("admin:", admin2)