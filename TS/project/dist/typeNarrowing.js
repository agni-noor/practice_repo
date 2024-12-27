"use strict";
//In Js, the typeof an array is object
//The printAll function checks type for string, array of string an null but doesn't check for emoty string\
//This shouldn't be done
function printAll(val) {
    if (val) {
        if (typeof val === "object") {
            for (const s of val) {
                console.log(s);
            }
        }
        else if (typeof val === "string") {
            console.log(val);
        }
    }
}
function isAdmin(account) {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
}
function isFish(pet) {
    return pet.swim !== undefined;
}
//Now ts can identify the type of Fish in the two conditional blocks
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        console.log("Fish food");
    }
    else {
        pet;
        console.log("Bird food");
    }
}
function getTrueShape(shape) {
    if (shape.kind === "circle") {
        return shape.radius;
    }
    else {
        return shape.side;
    }
}
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return shape.radius;
        case "square":
            return shape.side;
        default:
            const _defaultforshape = shape;
            return _defaultforshape;
    }
}
