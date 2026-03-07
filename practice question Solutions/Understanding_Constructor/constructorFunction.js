function Alien(name, tech){
    this.name = name;
    this.tech = tech;
    this.greet = function() {
        console.log(`Hello ${this.name}, You know ${this.tech}`);
    }
}



let alien1 = new Alien("bravo", "js");
let alien2 = new Alien("mitchel Jonson", "java");

console.log(alien1);
console.log(alien2);

alien1.name = "Dj Bravo"
console.log(alien1)