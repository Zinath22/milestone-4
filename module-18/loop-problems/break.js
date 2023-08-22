// for(var i = 1; i <= 20; i++){
//     console.log(i);
//     if(i > 5){
//         break;
//     }
// }

// var roastGiven = 0;
// while(roastGiven < 10){
//     console.log('give me roast');
//     roastGiven++;
//     if(roastGiven > 4){
//         break;
//     }
// }

// var items = ['bottle', 'glas', 'mouse', 'pen', 'book'];
// for(var i =0; i < items.length; i++){
//   var item = items[i];
//   if(item == 'pen'){
//     break;
//   }
//   console.log(item);
// }

var numbers = [45, 87, 89, 56, 32, 51, 25, 100, 155];
for(var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    if(number > 50){
        continue;
    }
       console.log(number);
     }