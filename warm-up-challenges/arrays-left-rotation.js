const a = [1, 2, 3, 4, 5]

const d = 3

function rotLeft(a, d) {

    let rotated = a.splice(d)
    rotated.push(...a)
    return rotated

}


rotLeft(a, d)

