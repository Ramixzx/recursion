const isString = (string) => {
    return typeof string == 'string'
}

const stringReverse = (string) => {
        let processedText = string.toLowerCase().trim()

        if (processedText !== '') {
                      // isPalindramo --> false --> aloh
                     /// isPalindramo()  --> + a
                    //// isPalindramo(a)        --> + l
                   ///// isPalindramo(la)              --> + o    
                  ////// isPalindramo(ola)                    --> + h  
            const response = stringReverse(processedText.substring(1)) + processedText.charAt();

            return response
        }else {
            return processedText
        }
}


const isPalindramo = (string, callback) => {
    if(isString(string)) {
        let stringReverse = callback(string);
        let processedText = string.toLowerCase().trim()
        
        if(processedText == stringReverse) {
            return console.log(`The word ${string.trim()} is a palindrome`)
        } else {
            return console.log(`The word ${string.trim()} is not a palindrome`)
        }
    } else {
        console.log(`The ${string} argument is not a string`)
    }
}

//test
isPalindramo('DABALEARROZALAZORRAELABAD', stringReverse);