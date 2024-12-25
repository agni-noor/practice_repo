class User{
    email:string
    name:string
    readonly city:string = "Dhaka"
    constructor(email:string, name:string){
        this.email= email
        this.name= name

    }
}

const agni = new User("agni@gmail.com", "agni")
console.log(agni)