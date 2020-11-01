const q = [1, 2, 5, 3, 4, 7, 8, 6]

function minimumBribes(q) {

    // let orderedArray = []
    // let count = 0
    // let chaos = 'Too chaotic'

    // for(let i = 1; i <= q.length; i++ ){
    //     orderedArray = [...orderedArray, i];
    // }
    // for(let j = 0; j < q.length; j++){
    //     if(q[j] % orderedArray[j] === 0){
    //         console.log(`All good here at ${q[j]} and ${orderedArray[j]}`)
    //     } else {
    //         console.log('Im consufed)
    //     }
    // }
    let swaps = 0
    for (let i = 0; i < q.length; i++) {
        let bribes = q[i] - (i + 1)
        let maxAdvance = q[i] - 2 > 0 ? q[i] - 2 : 0
        if (bribes > 2) {
            console.log('Too chaotic')
            return
        }
        for (let j = maxAdvance; j < i; j++) {
            if (q[j] > q[i]) swaps++
        }
    }
    return swaps
}

minimumBribes(q)

