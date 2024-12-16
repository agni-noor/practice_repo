type User = {
    name:string,
    email:string,
    isPaid: boolean
}

function createUser(user:User):User{
    return {name:"",email:"", isPaid:true};
}

createUser({name:"",email:"", isPaid:true})

type CardNumber = {
    cardNumber: string
}

type CardDate = {
    cardDate: string
}

type CardDetails = CardNumber& CardDate & {
    cvv: string
}