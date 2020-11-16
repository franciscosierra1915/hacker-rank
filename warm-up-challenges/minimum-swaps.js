
const arr = [1, 3, 5, 2, 4, 6, 7]
// const arr = [1, 2, 3, 4, 5, 6, 7];

function minimumSwaps(arr) {

    let swaps = 0;
    for (let i = 0; i < arr.length; i++){
        let currentElement = arr[i];
        let position =  i + 1;
        if( currentElement !== position){
            let targetIndex
            for(let j = 0; j < arr.length; j++){
                if(arr[j] === position){
                    targetIndex = j;
                    break
                }
            }
        arr[targetIndex] = currentElement;
        arr[i] = position;
        swaps += 1
        }

    }
    return swaps

    // let myarr = [...arr].sort((a, b) => a - b);
    // for(let i = 0; i < arr.length; i++){
    //     if(arr[i] !== myarr[i]){
    //         swaps++
    //     }
    // }
    // return (swaps - 1)
    // for (let i = 0; i < arr.length; i++) {
    //     let currentNum = arr[i];
    //     let correctValue = i + 1;
    //     let correctNum; 
    //     if(currentNum !== correctValue){
    //         for(let j = 0; i < arr.length; j++){
    //             if(arr[j] === correctValue){
    //                 correctNum = arr[j]
    //             }
    //         }
    //     }
    // let correctNum = arr.filter(num => num === (i + 1))
    // return orderedArray = [...orderedArray, arr[i + 1], arr[i]]
    // let orderedArray = [];
    // let i = 0;
    // while(){
    //     if(arr[i] !== (i + 1)){
    //     }
    // }
    // return swaps
}

minimumSwaps(arr)