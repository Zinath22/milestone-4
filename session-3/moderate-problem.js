/*
তোমাকে একটা function দেওয়া হবে called findingBadData(). এটা ইনপুট হিসেবে একটা array নিবে। array তে যেকোনো সংখ্যক কতগুলো number থাকবে। number গুলো negative number (less than zero) ও হতে পারে, আবার positive number (greater than or equal to zero) ও হতে পারে। কোনও number যদি negative হয় সেটাকে আমরা বলব “Bad Data”. কোনও number যদি positive হয় সেটাকে আমরা বলব “Good Data”. 
এখন তোমার task: array তে কতগুলো Bad data আছে সেটা খুঁজে বের করতে হবে এবং সেই নাম্বার টা return করতে হবে।
Sample Input & Output:-
Input: [ 1,2,5 ]
Output: 0
Input: [ 2, -5, -7, -13 ]
Output: 3
*/

// function findingBadData(arr){
//     if(!Array.isArray(arr)){
//         return "please provide me an array of number"
//     }
//     else{
//         let badData = 0;
//         for(let i = 0; i<arr.length; i++){
//             if(typeof arr[i] !== "number"){
//                 return "please provide me an array of number"
//             }
//             else{
//                 if(arr[i] < 0){
//                     badData++;
//                 }
//             }
//         }
//         return badData
//     }
//   }

//         const x = [ 1,2,5];

// console.log(findingBadData(x))
//   OR 
//         for(let item of arr){
//             if(typeof item !== "number"){
//                 return "please provide me an array of number"
//             }else{
//                 if(item < 0){
//                     badData++; // badData = badData + 1;
//                 }
//             }
//         }
//         return badData
//     }
// }

// const x = [ 2, -5, -7, -13 ];

// console.log(findingBadData(x))
   
// extra 
// const x = false;

// console.log(!x) // false -> true

// const arr = [1,2,3,4];
// const x = "hello"

// // console.log(Array.isArray(x))

// if(!Array.isArray(x)){
//     console.log('this is not an array')
// }



/*
Problem 5: Convert your gems into diamond
তোমাকে একটা function দেওয়া হবে called gemsToDiamond(). এটা ইনপুট হিসেবে তিনটা number ( তোমাদের ৩ বন্ধুর gems এর সংখ্যা ) নিবে। 
১ম বন্ধুর প্রতি gems এর ক্ষমতা = 21
২য় বন্ধুর প্রতি gems এর ক্ষমতা = 32
৩য় বন্ধুর প্রতি gems এর ক্ষমতা = 43
[ gems এর ক্ষমতা বলতে একটা gems কে কয়টা diamond এ convert করা যাবে সেটা বুঝানো হচ্ছে। ]
এখন তোমার task: সব বন্ধুর gems মিলিয়ে total কতটি diamond পাবে সেটা বের করতে হবে। total diamond এর সংখ্যা যদি 1000 এর দিগুন এর উপর হয়ে যায় সেক্ষেত্রে total diamond থেকে 2000 বাদ দিয়ে যতগুলো diamond অবশিষ্ট থাকবে, ততগুলো তোমরা পাবে।
Sample Input & Output:-
Input: 1, 1, 1
Output: 96
Input: 20, 200, 50
Output: 6970
Input: 100, 5, 1
Output: 303

*/

// function gemsToDiamond(x,y,z){
//     if(typeof x !== "number" || typeof y !== "number" || typeof z !== "number"){
//         return "please provide me valid number input"
//     }else if(x < 0 || y < 0 || z < 0){
//         return "please provide me all positive numbers"
//     }else if(x%1 !== 0 || y%1 !== 0 || z%1 !== 0){
//         return "please provide me all integer number"
//     }
//     else{

        /*
১ম বন্ধুর প্রতি gems এর ক্ষমতা = 21
২য় বন্ধুর প্রতি gems এর ক্ষমতা = 32
৩য় বন্ধুর প্রতি gems এর ক্ষমতা = 43
        */

//         const frnd1 = 21;
//         const frnd2 = 32;
//         const frnd3 = 43;

//         const total = (x * frnd1) + (y * frnd2) + (z * frnd3);

//         if(total > 2000){
//             return total - 2000;
//         }else{
//             return total;
//         }

//     }

// }

// console.log(gemsToDiamond(100, 5, 1))


// function name printDetails(). you will be provided an object. you have to use the properties of the object and make a meaning full sentence. if there are any property missing you have to print there (nai);

/*
const obj = {
    name: "mehedy",
    age:26,
    email:"abc@gmail.com"
}
Amar nam mehedy, amar boyos 26, amar email abc@gmail.com, amar bou nai. 
*/


function printDetails(person){
    if(typeof person !== "object"){
        return "please provide me a valid object"
    }
    else{
        const name = person.name || "nai";
        const age = person.age || "nai";
        const email = person.email || "nai";
        const bou = person.bou || "nai";
        return "amar nam "+name+". amar boyos "+age+". amar email "+email+". amr bou "+bou;
    }

}

const obj = {
    name: "mehedy",
    age:26,
    email:"abc@gmail.com"
}

console.log(printDetails(obj))