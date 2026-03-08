function Memorization(){
    let cache = {};
    return function(n,m,cb){
        let key = `${n}+${m}`;
        if(cache[key]) return cb(cache[key]);

        setTimeout(()=>{
        cache[key] = n+m;
        cb(cache[key]);
        },1000)
    }
}

let add1 = Memorization();

add1(2,2,(res)=>{
    console.log(`firstCall1 ${res}`);
})

add1(2,2,(res)=>{
    console.log(`secondCall1 ${res}`);
})

add1(3,2,(res)=>{
    console.log(`firstCall2 ${res}`);
})

add1(3,2,(res)=>{
    console.log(`secondCall2 ${res}`);
})