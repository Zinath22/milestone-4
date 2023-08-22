function factorial(number){
    let result = 1;
    for( let i= 1; i <= number; i++){
        result = result * i;
    }
    return result;
}
const result = factorial(9);
console.log(result);

//  quiz 
function print(a, b, c){
    return a+2;
    return a*b;
    return b*c+a;
   }
   console.log(print(1,2,3));


