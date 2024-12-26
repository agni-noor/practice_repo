class User{

    protected course_count = 1
    city:string = "Dhaka"
    constructor(
        public email:string,
        public name:string
    )
    {}

    get CourseCount():number{
        return this.course_count
    }
    set CourseCount(courseCount:number){
        if(courseCount<1){
            throw new Error("course count should be more than 1")
        }
        this.course_count = courseCount
    }
}
class Subuser extends User{
    isFamily:boolean = true
    changeCourseCount(){
        this.course_count = 4
    }
}

const agni = new User("agni@gmail.com", "agni")
console.log(agni)
agni.CourseCount=3
console.log(agni.CourseCount)