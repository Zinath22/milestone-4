/*
Problem 1:
আপনার কাছে একটি জাভাস্ক্রিপ্ট ফাংশন রয়েছে যার নাম হলো isValidPhotoName(photoName, imageExtensions)। এই ফাংশনটি দুটি প্যারামিটার গ্রহণ করে: photoName, যা একটি ছবির নাম প্রদর্শন করে, এবং imageExtensions Array, যা .jpg, .png, ইত্যাদি ছবির এক্সটেনশন গুলি ধারণ করে।
আপনার কাজ হলো isValidPhotoName ফাংশনটি সম্পূর্ণ করা যাতে এই ফাংশনের মাধ্যমে পরীক্ষা করা যায় আপনি দেওয়া প্যারামিটার photoName সঠিক ছবির নাম কিনা তা। এই ফাংশনের কাজ হলো true রিটার্ন করা যদি photoName একটি বৈধ ছবির নামের শেষে বিদ্যমান ছবির এক্সটেনশন গুলির মধ্যে যেকোনটি শেষ হয়; অন্যথায়, ফাংশনটি false রিটার্ন করবে।

*/

// .jpg .jpeg .png .gif .ico .JPEG

function isValidPhotoName(photoName, imageExtensions){
    if(typeof photoName !== "string" || !Array.isArray(imageExtensions)){
        return "please provide valid inputs"
    }else{
        for(let item of imageExtensions){
           if(photoName.toLowerCase().endsWith(item.toLowerCase())){
                return true;
           }
        }
        return false;
    }

}


const photo = "image.jpg";
const extensions = [".jpg",".JPEG",".png",".gif",".ico"];

console.log(isValidPhotoName(photo,extensions))

/*problem-2
you will be provided an array of numbers. you have to return array of prime numbers from that input array. 

*/

function findPrimeNumbers(arr){
    if(!Array.isArray(arr)){
        return "please provide me an array of numbers"
    }else{
        
        // 0,1 can not be prime number
        let primes = [];
        for(let item of arr){
            if(item > 1){ //4 
                let isPrime = true;

                for(let i = 2; i< item; i++){ 
                    if(item % i === 0){
                        isPrime = false;
                        break;
                    }
                }
                if(isPrime === true){
                    primes.push(item)
                }
            }

        }
        return primes
    }

}

const numbers = [ 4,8,5,10,19]

console.log(findPrimeNumbers(numbers))

// promlem - 3
/* function name sumOfN(). you will be provided a number n. you have to calculate the total of all numbers between 1 to n . use function recursion
*/

// 3 => 3 + 2 + 1

// 3 + sumOfN(2)
// 3 + 2 + sumOfN(1)
// 3 + 2 + 1

function sumOfN(n){
    if(n === 1){
        return 1;
    }else{
        return n + sumOfN(n-1);
    }
}
const n = 3;
console.log(sumOfN(n))

// let sum = 0;
// for(let i = 1; i<=n; i++){
//     sum+=i
// }



/*
n=5;

1->  5 + sumOfN(4)
2->  5 + 4 + sumOfN(3)
3-> 5+4+3+sumOfN(2)
4-> 5+4+3+2+sumOfN(1)
5-> 5+4+3+2+1

*/