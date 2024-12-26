"use strict";
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.course_count = 1;
        this.city = "Dhaka";
    }
    get CourseCount() {
        return this.course_count;
    }
    set CourseCount(courseCount) {
        if (courseCount < 1) {
            throw new Error("course count should be more than 1");
        }
        this.course_count = courseCount;
    }
}
class Subuser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this.course_count = 4;
    }
}
const agni = new User("agni@gmail.com", "agni");
console.log(agni);
agni.CourseCount = 3;
console.log(agni.CourseCount);
