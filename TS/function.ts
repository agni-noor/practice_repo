function addTwo(num:number):number{
    return num+2;
}

function login(name:string, email:string, isPaid:boolean = false){
    console.log(name);
    return email;
}

login("agni", "agni@gmail.com")


const arrowFunc = (s:string): string=>{
    return s;
}

const fruits = ["apple", "orange","grape"];

fruits.map((fruit):string=>{
return `This is a ${fruit}`
})

function consoleError(errmsg:string):void{
    console.log(errmsg);
}
function handleError(errmsg:string):never{
    throw new Error(errmsg)
}

export{} 