const n = 6

function factorial(n) {
    let result = n;
    for( let i = n - 1; i > 0; i--){
        result = result * i;
    }
    return result
}

console.log(factorial(n))