class MyClass{
    constructor(){
        console.log("initiate")
    }
    add(valOne:number, valTwo:number):number {
        let result
        result = valOne+valTwo
        return result
    }
}

export default MyClass