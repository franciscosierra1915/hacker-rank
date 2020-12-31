const s = 'adfgt';

function getLetter(s){
    let setA = ["a","e", "i","o","u"];
    let setB = ["b","c","d","f","g"];
    let setC = ["h","j","k","l","m"];
    let setD = ["n","p","q","r","s","t","v","w","x","y","z"];
    if(setA.includes(s[0])){
        return 'A'
    } else if(setB.includes(s[0])){
        return 'B'
    } else if(setC.includes(s[0])){
        return 'C'
    } else if(setD.includes(s[0])){
        return 'D'
    }
};

console.log(getLetter(s))