// console.log(4%2);
// console.log(98%2);
// console.log(144%2);
// console.log(1286%2);

// console.log(7%2);
// console.log(83%2);
// console.log(145%2);
// console.log(1287%2);

function isEven(number){
    const remainder = number % 2;

    if(remainder === 0){
        // console.log('number is even');
        return true;
    }
    else{
        // console.log('number is odd')
        return false;
    }
}
const myNumberIsEven = isEven(303);
console.log(myNumberIsEven);
const herNumberIsEven = isEven(1280);
console.log(herNumberIsEven);
