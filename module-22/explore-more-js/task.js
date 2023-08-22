// 1.feet to inch 
function feetToInch (number){
    const convert = number * 12;
    return convert;
}
const feet =2;
const result= feetToInch(feet);
console.log(result);

// 2. sentimeter to meter
function sentimeterToMeter (number){
    const convert = number * 0.01;
    return convert;
}
const sentimeter = 1000;
const result2 =sentimeterToMeter(sentimeter);
console.log(result2);

// 3. paper
function paperRequirements(num1, num2, num3){
    const book1 = 100;
    const book2 = 200;
    const book3 = 300;

    const book1PaperRequire = num1 * book1;
    const book2PaperRequire = num2 * book2;
    const book3PaperRequire = num3 * book3;

    const totalPageRequire = book1PaperRequire + book2 + book3PaperRequire;
    return totalPageRequire; 
}
const paperCount = paperRequirements(1,1,1);
console.log(paperCount);

// 4. best friend 
function bestFriend(friendsName){
let bestFriend = friendsName[0];
    for(let i= 0; i<friendsName.length;i++){
        const element = friendsName[i];
        if(element.length>bestFriend.length){
            bestFriend = element;
        }
    }
return bestFriend;
}

const friends = ['kaniz', 'nus', 'israt','shehab','ahamed'];
const friendName = bestFriend(friends);
console.log(friendName);

// 5. positive number
function onlyPositive(number){
    for(let i = 0; i < number.length; i++){
        const element = number[i];
        if (element < 0){
            // element.push(numbers);
            break;
        }
        console.log(element);
    }
}
const numbers = [40, 55, 60, 66, 71, 90, -20, -44];
const positiveNumbers = onlyPositive(numbers);
console.log(positiveNumbers);
