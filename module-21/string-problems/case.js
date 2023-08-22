const userName = 'blackPink';
const userInput = 'blackPink';
console.log(userName.toLowerCase());
console.log(userInput.toUpperCase());
console.log(userInput.toLocaleLowerCase());
if (userName.toLowerCase() === userInput.toLowerCase()){
    console.log('valid user');
}
else {
    console.log('invalid user');
}