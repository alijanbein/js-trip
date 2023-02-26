// const number = prompt("enter 10 numbers")
// const input = []

// let i = 0;

// while (i < number.length){
//     if (isNaN(number[i])){
//         number = prompt("enter 10 numbers")
//         i = 0;
//     }
//     else {
//         input.push(number[i]);
//     }
//     i++;
// }
// const merge = (left, right) => {
//     let output = [];
//     while (left.length && right.length) {
//       if (left[0] < right[0]) {
//         output.push(left.shift());
//       } else {
//         output.push(right.shift());
//       }
//     }
//     return [...output, ...left, ...right];
//   };
//  const  mergeAndSort = (number) => {
//     if (number.length <= 1) return number;
//     let mid = Math.floor(number.length / 2);
//     let left = mergeAndSort(number.slice(0,mid));
//     let right = mergeAndSort(number.slice(mid));
//     return merge(left, right)
// }

// console.log(mergeAndSort(input));

// const palidrom = (string) => {
//     if (string.length == 1) return true;
//     if (string.length == 2) return string[0] == string[1];
//     if (string[0] === string.slice(-1)) return palidrom(string.slice(1,-1)) 
//     return false
// }

// const  isPrime = (age) => {
//     if (age <= 1) return false;
//     if (age == 2) return true;
  
//     for (let i = 2; i < age ; i++) {
//       if (age % i == 0) {
//         return false;
//       }
//     }
//     return true;
//   }

// console.log(isPrime(13));

// function reverse(str) {

//     let newString = [];
//     for (let i = str.length - 1; i >= 0; i--) {
//         newString.push(str[i]);
//     }
//     return newString;
// }
// const  reverseString  = (string) => {
//     const special = {}
//     const letters = []
//     for (let i = 0 ; i < string.length; i++){
//         if (string[i].match(/[a-z]/i)) letters.push(string[i])
//         else special[i] = string[i]
//     }
//     const reversed = reverse(letters)
//     for (key in special){
//         console.log(key,special[key]);
//         reversed.splice(key,0,special[key])
//     }
//     const join = reversed.join("")
//     return join.toString();
// }



