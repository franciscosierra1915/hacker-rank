const a = 4;
const b = 5;

function rectangle(a, b) {
    let object = {
        length: a,
        width: b,
        perimeter: 2 * (a + b),
        area: a * b
    };
    return object;
}

console.log(rectangle(a, b));