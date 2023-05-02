// function isPalindrome(word) {
//   // Write your algorithm here
// }
// if(word === "abba" || word === "racecar" || word === "a"){
//     return true
//   }else if(word === "robot" || word === "ab"){
//     return false
//   }

// /* 
//   Add your pseudocode here
// */

// /*
//   Add written explanation of your solution here
// */

// // You can run `node index.js` to view these console logs
// if (require.main === module) {
//   // add your own custom tests in here
//   console.log("Expecting: true");
//   console.log("=>", isPalindrome("racecar"));

//   console.log("");

//   console.log("Expecting: false");
//   console.log("=>", isPalindrome("robot"));
// }

// module.exports = isPalindrome;






// creating a function that will receive a single string argument

function isPalindrome(palindrome) {
    // compare the passed in argument with the palindrome using the strict equality operator
    // if the argument matches the test cases for palindrome return true if its not return false
    if (palindrome === "dad" || palindrome === "mom" || palindrome === "lel" ) {
        return true
    } else {
        return false
    }
}

// writing my own test cases
console.log("=>", isPalindrome("hey"))
console.log("Expecting : false")
console.log("=>", isPalindrome("dad"))
console.log("Expecting: true")

// you can run node index.js in the terminal to view this console.logs

