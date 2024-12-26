abstract class Photo{
    constructor(
        public cameraMode: string,
        public filter: string
    ){}

    abstract getSepia():void
    getFilter():number{
        return 1
    }
}

class Insta extends Photo{
    constructor(
        public cameraMode:string,
        public filter: string,
        public time:number
        
    ){
        super(cameraMode, filter)
    }

    getSepia(): void {
        console.log("Sepia")
    }
}