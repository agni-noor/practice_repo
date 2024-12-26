const fruits:Array<string> = []

function identityOne(val:boolean | string):boolean | string{
    return val
}


// using any is not a good practice
function identityTwo(val:any):any{
    return val
}


//Good Practice
function identityThree<Type>(val:Type):Type{
    return val
}
//Auto,atically returns the type that is passed
identityThree("agni")

//Shortcut to identityThree, anything can be used instead of Type
function identityFour<T>(val:T):T{
    return val
}

interface Bottle{
    size:string
    price:number
}
//This the syntax when a non-primitive type is passed
identityFour<Bottle>({size:"50", price:20})