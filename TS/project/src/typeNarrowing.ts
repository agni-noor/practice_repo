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