

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

