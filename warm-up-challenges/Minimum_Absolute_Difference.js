const arr = [ -59, -36, -13, 1, -53, -92, -2, -96, -54, 75]

function minimumAbsoluteDifference(arr) {
    arr.sort((a, b) => a - b);
    let minimumValues = [];
    for(let i = 0; i < arr.length - 1; i++){
        // minimumValues = [...minimumValues, Math.abs(arr[i] - arr[i + 1])]
        // for(let j = 0; j < arr.length; j++){
        //     if(arr[i] !== arr[j]){
        //         minimumValues = [...minimumValues, Math.abs(arr[i] - arr[j])]
        //     }
        // }
        if (i < arr.length - 1) {
            minimumValues.push(Math.abs(arr[i] - arr[i + 1]));
        }
    }
    // minimumValues.sort((a, b) => a - b);
    let minAbsoluteDifference = Math.min(...minimumValues);
    console.log(minAbsoluteDifference)
    // console.log(minimumValues)
}

minimumAbsoluteDifference(arr)