// Object.prototype.myMap = function(cb, thisAg){
// let arr = [];
//     for(let i=0; i<this.length; i++){
//         arr.push(cb(this[i]));
//     }
//     return arr;
// }

// let list = [1,2,3];

// let array = list.myMap((l) => {
//     return l * 2
// })

// console.log(array);



// [1,2,3].myMap(function(num){
//    console.log(this);
// });

const obj = { multiplier: 10};

// [2,3,4].myMap(function(num){
//     return num * this.multiplier;
// }, obj)



const arr = [10,20,30];

let list = arr.map(function(num){
    return num * this.multiplier;
}, obj);

console.log(list)