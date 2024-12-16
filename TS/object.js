"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "agni",
    email: "agni@gmail.com",
    isActive: false
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: "agni", isPaid: true });
function createCourse() {
    return { name: "TS", price: 0 };
}
var newUser = { name: "agni", isPaid: true, email: "agni@gmail.com" };
createUser(newUser);
