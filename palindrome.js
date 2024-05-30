/* METOD 1
// program to reverse a string

function reverseString(str) {

    // empty string
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

// take input from the user
const string = prompt('Enter a string: ');

const result = reverseString(string);
console.log(result);
*/


function reverseString(str) {
    // Split the string into an array of characters
    //let reversedString = str.split('').reverse().join('');
    //console.log(reversedString)

    let reverse = ''
    for (let char of str ) {
        reverse = char + reverse
    }
     console.log(reverse)
    
    // Reverse the array of characters
    //charArray.reverse();
    
    // Join the reversed array back into a string
    //let reversedStr = charArray.join('');
    
    //return reversedStr;
}

// Example usage
let originalString = "hello";
let reversedString = reverseString(originalString);


//console.log("Original String: " + originalString); // Output: "hello"
//console.log("Reversed String: " + reversedString); // Output: "olleh"

