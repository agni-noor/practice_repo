const User = {
    name: "agni",
    email:"agni@gmail.com",
    isActive: false
}

function createUser({name:string, isPaid:boolean}){}

createUser({name:"agni",isPaid:true})

function createCourse():{name:string, price:number}{
    return {name:"TS", price:0}
}

let newUser = {name:"agni", isPaid:true,email:"agni@gmail.com"}
createUser(newUser)

export{}
