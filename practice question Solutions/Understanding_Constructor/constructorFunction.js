function Alien(name, tech){
    this.name = name;
    this.tech = tech;
    // this.greet = function() {
    //     console.log(`Hello ${this.name}, You know ${this.tech}`);
    // }
}

Alien.prototype.greet = function() {
    console.log(`Hello ${this.name}, You know ${this.tech}`);
}

console.log("Prototype of Alien: ", Alien.prototype)

// function alien(name, tech) {
// // setDetails : function (name, tech){
// this.name = name;
// this.tech = tech;
// // }
// }



let alien1 = new Alien("bravo", "js");
let alien2 = new Alien("mitchel Jonson", "java");

// let star1 = new alien("mitchel stark", "baller");
// let star2 = new alien("Mbape", "Striker");

console.log(alien1);
console.log(alien2);

// console.log(star1);
// console.log(star2);


alien1.name = "Dj Bravo"
console.log(alien1)

alien1.greet()
