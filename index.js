




// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };


//FUNCTION 1
 function calculateTax(amount){
    return amount * 0.10

 }

 //FUNCTION 2
 function convertToUpperCase(text){
    let result=""
    let smallAlphabet = "abcdefghijklmnopqrstuvwxyz"
    let upperAlphabet ="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      
    for( let i = 0;i < text.lengthh; i++) {
        let currentLetter = text[i]
        let found = false;

        for (let j = 0; j < lowerAlphabet.length; j++) {
            if (currentLetter === lowerAlphabet [j]) {

                result += upperAlphabet[j];
                found = true;
            }
        }

    }
 }