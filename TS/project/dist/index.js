"use strict";
class User {
    constructor(email, name) {
        this.city = "Dhaka";
        this.email = email;
        this.name = name;
    }
}
const agni = new User("agni@gmail.com", "agni");
console.log(agni);
