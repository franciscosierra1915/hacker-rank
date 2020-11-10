
const arr = [2, 31, 1, 38, 29, 5, 44, 6, 12, 18, 39, 9, 48, 49, 13, 11, 7, 27, 14, 33, 50, 21, 46, 23, 15, 26, 8, 47, 40, 3, 32, 22, 34, 42, 16, 41, 24, 10, 4, 28, 36, 30, 37, 35, 20, 17, 45, 43, 25, 19];
// const arr = [1, 2, 3, 4, 5, 6, 7];

function minimumSwaps(arr) {
    let swaps = 0;
    let myarr = [...arr].sort((a, b) => a - b);
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== myarr[i]){
            swaps++
        }
    }
    return (swaps - 1)
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

console.log(minimumSwaps(arr))