//Lilah has a string, , of lowercase English letters that she repeated infinitely many times.
//Given an integer, , find and print the number of letter a's in the first  letters of Lilah's infinite string.
//For example, if the string  and , the substring we consider is , the first  characters of her infinite string. There are  occurrences of a in the substring.

// function repeatedString(s, n) {
//     let fullStr = s
//     let arrayStr 
//     let count = 0

//     while(fullStr.length < n) {
//         fullStr = fullStr.concat(s)
//         fullStr = fullStr.slice(-n)
//         arrayStr  = fullStr.split('')
//     }
//     for(let i = 0; i < fullStr.length; i++) {
//         if(arrayStr[i] === 'a'){
//             count += 1
//         }
//     }

//     return count
// }
// The algorithm above does not execute within the time limits.

let str = "a";
let int = 1000000

function repeatedString(s, n) {

    let count = 0;

    if(n >= s.length) {
        let occurrencesOfA = [...s].filter( e => e === 'a').length;
        // console.log(occurrencesOfA)
        count = Math.floor(n/s.length) * occurrencesOfA;
    }

    let tailOfStringLength = n % s.length;

    for(let i = 0; i < tailOfStringLength; i++) {
        if(s[i] === 'a') {
            count++
        }
    }

    console.log(count)
}

repeatedString(str, int)

