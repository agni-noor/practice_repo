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