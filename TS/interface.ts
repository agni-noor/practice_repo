interface User{
    readonly id:number,
    name:string,
    email:string,
    googleId?:string,
    // startTrial:()=>string
    startTrial():string,
    getCoupon(couponName:string, value:number):number
}

interface User{
    githubToken:string
}

interface Admin extends User{
    role: "admin" | "ta" | "sthelse"
}
const user:Admin = {id:22,name:"Agni", email:"agni@gmail.com",
    startTrial:()=>{
        return "any string"
    },
    role:"admin",
    getCoupon:(name:"agni", value:10 )=>{
        return 10;
    },
    githubToken:"abc"
}