const a = "fcrxzwscanmligyxyvym";
const b = "jxwtrhvujlmrpdoqbisbwhmgpmeoke"; 

function makeAnagram(a, b) {
    // let aToArray = a.split("");
    // let bToArray = b.split("");

    // let objectA = new Object();
    // let objectB = new Object();
    
    // for(let i = 0; i < aToArray.length; i++){
    //     if(aToArray[i] in objectA){
    //         objectA[aToArray[i]] += 1
    //     } else {
    //         objectA[aToArray[i]] = 1
    //     }
    // }

    // for(let i = 0; i < bToArray.length; i++){
    //     if(bToArray[i] in objectB){
    //         objectB[bToArray[i]] += 1
    //     } else {
    //         objectB[bToArray[i]] = 1
    //     }
    // }

    let freqs = {};
    a.split('').forEach(char => freqs[char] = (freqs[char] || 0) + 1); // increment
    b.split('').forEach(char => freqs[char] = (freqs[char] || 0) - 1); // decrement
    console.log(Object.keys(freqs).reduce((sum, key) => sum + Math.abs(freqs[key]), 0));
    
}

makeAnagram(a, b)



