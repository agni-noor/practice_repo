//In Js, the typeof an array is object
//The printAll function checks type for string, array of string an null but doesn't check for emoty string\
//This shouldn't be done

function printAll(val:string | string[] | null){
    if(val){
        if(typeof val === "object"){
            for(const s of val){
                console.log(s)
            }
        }else if(typeof val === "string"){
            console.log(val)

        }
    }
}


interface User{
    name:string,
    email:string
}

interface Admin{
    name:string,
    email:string,
    isAdmin:boolean
}

function isAdmin(account: User | Admin){
    if("isAdmin" in account){
        return account.isAdmin
    }
}

type Fish ={ swim():void}
type Bird ={fly():void}

function isFish(pet: Fish | Bird):pet is Fish{
    return (pet as Fish).swim !== undefined
}



//Now ts can identify the type of Fish in the two conditional blocks
function getFood(pet:Fish|Bird){
    if(isFish(pet)){
        pet
        console.log("Fish food")
    }else{
        pet
        console.log("Bird food")
    }
}

interface Circle{
    kind:"circle",
    radius:number
}
interface Square{
    kind:"square",
    side:number
}

interface Rectangle{
    kind:"rectangle",
    length:number,
    width:number
}

type Shape= Circle | Square

function getTrueShape(shape:Shape){
    if(shape.kind==="circle"){
        return shape.radius
    }else{
        return shape.side
    }
}
function getArea(shape:Shape){
    switch (shape.kind) {
        case "circle":
            
            return shape.radius
        
        case "square":
            return shape.side
    
        default:
            const _defaultforshape: never = shape
            return _defaultforshape
    }
}