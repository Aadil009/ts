function identity<T>(value: T):T {
    return value
}

console.log(identity<number>(4))
console.log(identity<String>("Hi"))



interface apiResponse <T> {
    status: number
    data: string
}

const response: apiResponse<string> = {
    status: 200,
    data: "Hello"
}
console.log(response)



//generic clsss
class Stack <T> {
    private items: T[] = []

    push(item: T){
        this.items.push(item)
    }

    pop(): T | undefined{
        return this.items.pop()
    }
}

const numberStack = new Stack<number>()

numberStack.push(1)
numberStack.push(2)
numberStack.push(3)
numberStack.pop()

console.log(numberStack)