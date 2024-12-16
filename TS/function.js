"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
function login(name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    console.log(name);
    return email;
}
login("agni", "agni@gmail.com");
var arrowFunc = function (s) {
    return s;
};
var fruits = ["apple", "orange", "grape"];
fruits.map(function (fruit) {
    return "This is a ".concat(fruit);
});
