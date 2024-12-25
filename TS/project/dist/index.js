"use strict";
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.city = "Dhaka";
    }
}
const agni = new User("agni@gmail.com", "agni");
console.log(agni);
