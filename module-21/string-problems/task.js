// function findMax(a, b, c) {
//     if (a >= b && a >= c) {
//         return a;
//     } else if (b >= a && b >= c) {
//         return b;
//     } else {
//         return c;
//     }
// }

// // Example usage
// const num1 = 5;
// const num2 = 12;
// const num3 = 8;

// const maxNum = findMax(num1, num2, num3);
// console.log("The maximum number is:", maxNum);



// function findMaxNumber(num1, num2, num3) {
//     return Math.max(num1, num2, num3);
//   }
  
  
//   const maxNumber = findMaxNumber(10, 5, 8);
//   console.log(maxNumber);


  
  

// Write a function that will take 3 parameters and will return the min number
// first time do it using if-else

function findMin(a, b, c) {
    if (a <= b && a <= c) {
        return a;
    } else if (b <= a && b <= c) {
        return b;
    } else {
        return c;
    }
}

// Example usage
const num1 = 5;
const num2 = 12;
const num3 = 8;

const minNum = findMin(num1, num2, num3);
console.log("The minimum number is:", minNum);

// second time do it using Math.min or Math.min
function findMinNumber(num1, num2, num3) {
    return Math.min(num1, num2, num3);
}

// Example usage
const minNumber = findMinNumber(10, 5, 8);
console.log(minNumber); // This will output 5


// p-1
function minInArray(numbers){
    let largest = numbers[0];
    for(let i = numbers.length; i>=0; i--){
  const index = i;
  const element = numbers[index];
  if(element < largest){
    largest = element;
  }
    }
    return largest;
}

const smallest =[167, 190, 120, 165, 137, 265];
const small = minInArray(smallest);
console.log('small number is:', small);

//  or
// function findSmallestNumber(arr) {
   
//     let smallest = arr[0]; 
    
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] < smallest) {
//         smallest = arr[i];
//       }
//     }
    
//     return smallest;
//   }
  
 
//   const numbers = [5, 2, 8, 1, 3];
//   const smallestNumber = findSmallestNumber(numbers);
//   console.log("The smallest number is:", smallestNumber);

//   average 
function calculateArrayAverage(arr) {
 

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            sum += arr[i];
        }
    }

    const average = sum / arr.length;
    return average;
}

const numbers = [10, 20, 30, 40, 50];
const result = calculateArrayAverage(numbers);
console.log("Average:", result);
// 4

function calculateRectangleArea(length, width) {
    if (length <= 0 || width <= 0) {
      return "Length and width must be greater than zero";
    }
  
    const area = length * width;
    return area;
  }
  
  const length = 5; 
  const width = 3; 
  
  const area = calculateRectangleArea(length, width);
  console.log("Area of the rectangle:", area);

//   5
function getSecondLargest(nums) {
    let largest = nums[0];
    let secondLargest = nums[0];
    for (let i = 1; i < nums.length; ++i) {
        if (nums[i] > largest) {
            secondLargest = largest;
            largest = nums[i];
        } else if (nums[i] > secondLargest && nums[i] < largest) {
            secondLargest = nums[i];
        }
    }
    return secondLargest;
}
const arr = [1, 3, 4] 
console.log(getSecondLargest(arr))

