        //  (1)

var num1 = 113;
var num2 = 79;
var num3 = 45;
 
if(num1 > num2){
    if(num1 > num3){
        console.log(num1);
    }
    else{
        console.log(num3);
    }
}
else{
    if(num2 > num3){
        console.log(num2)
    }
    else{
        console.log(num3)
    }
}

            //   (2)
 var side1 = 9;
 var side2 = 8;
 var side3 = 9;
 if(side1 == side2 || side1 == side3 || side2 == side3){
    console.log('isosceles')
 }           