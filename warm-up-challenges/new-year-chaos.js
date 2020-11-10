const arr = [1, 2, 5, 3, 4, 7, 8, 6]

function minimumBribes(arr) {

    // let orderedArray = []
    // let count = 0
    // let chaos = 'Too chaotic'

    // for(let i = 1; i <= arr.length; i++ ){
    //     orderedArray = [...orderedArray, i];
    // }
    // for(let j = 0; j < arr.length; j++){
    //     if(arr[j] % orderedArray[j] === 0){
    //         console.log(`All good here at ${arr[j]} and ${orderedArray[j]}`)
    //     } else {
    //         console.log('Im consufed)
    //     }
    // }
    let swaps = 0
    for (let i = 0; i < arr.length; i++) {
        let bribes = arr[i] - (i + 1)
        let maxAdvance = arr[i] - 2 > 0 ? arr[i] - 2 : 0
        if (bribes > 2) {
            console.log('Too chaotic')
            return
        }
        for (let j = maxAdvance; j < i; j++) {
            if (arr[j] > arr[i]) swaps++
        }
    }
    return swaps
}

minimumBribes(arr)

