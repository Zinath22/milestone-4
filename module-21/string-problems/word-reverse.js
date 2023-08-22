function reverseWords(str){
    const words = str.split(' ');
    const result = [];
    for( i =words.length - 1; i >= 0; i--){
       const element = words[i];
        result.push(element);
    }
    const reversed =result.join(' ');
    return reversed;

}

const mystring = 'I am a good girl';
const reversed=reverseWords(mystring);
console.log('reverse name:', reversed);
