function milesToKilometer(miles){
    const kilometer = miles *1.609;
    return kilometer
}
const roadMiles = 60 ;
const roadKilometer = milesToKilometer(roadMiles);
console.log(roadKilometer);