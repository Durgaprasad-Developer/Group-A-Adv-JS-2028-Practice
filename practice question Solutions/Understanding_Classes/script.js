class Pizza{
    static totalPizza = 0;
    #size
    constructor(size, crust){
        this.#size = size;
        this.crust = crust;
        Pizza.totalPizza++;
    }

    serve() {
        console.log(`From Pizza`)
    }
    static getTotalPizza() {
        console.log(`${Pizza.totalPizza}`);
    }
    #gettingSize() {
        console.log(`Getting Size`)
    }

    getSize() {
        this.#gettingSize();
        console.log(this.#size);
        return this.crust
    }
}

// class StuffedPizza extends Pizza{
//     constructor(size, crust, stuff){
//         super(size, crust)
//         this.stuff = stuff;
//     }
//     serve(){
//         console.log(`From StuffedPizza`)
//     }
// }

let pizza1 = new Pizza("Medium", "Thick");
let pizza2 = new Pizza("Medium", "Thick");
// let pizza1 = new Pizza("Medium", "Thick");
Pizza.getTotalPizza();

pizza1.getSize();

// pizza1.gettingSize();
// Encapsulation (Private)

