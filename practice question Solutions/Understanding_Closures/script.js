function outer(){
    let b = 20;
    return function inner(){
        let a = 10;
        return function inner2(){
            console.log(a);
            console.log(b);
        }
    }
}

let in1 = outer();
let inner2 = in1();
inner2()