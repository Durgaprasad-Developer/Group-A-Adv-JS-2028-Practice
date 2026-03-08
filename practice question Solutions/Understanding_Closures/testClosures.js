// State
class CreateCounter{
    count = 0;
    constructor(count){
        this.count = count;
    }
    increment(){
        this.count++;
        return this.count;
    }
}

let c1 = new CreateCounter(0);
let c2 = new CreateCounter(0);

console.log(c1.increment());
// console.log(c1);
console.log(c2.increment());

