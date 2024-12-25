class User{
    city:string = "Dhaka"
    constructor(
        public email:string,
        public name:string
    )
    {}
}

const agni = new User("agni@gmail.com", "agni")
console.log(agni)