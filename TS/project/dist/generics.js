"use strict";
const fruits = [];
function identityOne(val) {
    return val;
}
// using any is not a good practice
function identityTwo(val) {
    return val;
}
//Good Practice
function identityThree(val) {
    return val;
}
//Auto,atically returns the type that is passed
identityThree("agni");
//Shortcut to identityThree, anything can be used instead of Type
function identityFour(val) {
    return val;
}
//This the syntax when a non-primitive type is passed
identityFour({ size: "50", price: 20 });
function searchProduct(products) {
    const myIndex = 3;
    return products[myIndex];
}
//Arrow function for the same thing
const searchProductTwo = (products) => {
    const myIndex = 4;
    return products[myIndex];
};
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
