
const meetings = [ [6,9], [11,14], [17,20], [15,18] ]
// const meetings = [[6,9], [9,14], [15,16], [17,20]]

// Output [[6,14], [15,20]]

function mergeMeetings(meetings){
    let mergedList = [];
    let sorted = meetings.sort((a, b) => a[0] - b[0]);

    return mergedList;



}

mergeMeetings(meetings)

const arrays = [[1,2,3,4,5], [-1,0]]

function mergeSorted(arrays){
    let mergedList = [];
    // let count = 0;
    // for (let i = 0; i < arrays.length; i++) {
    //  // for (let j = 0; j < arrays[i].length; j++) {
    //     //     for (let k = 0; k < arrays[i + 1]; k++) {

    //     //     }
    //     // }
    //     while (count < arrays[i].length || count < arrays[i + 1].length) {
    //         let pointer1 = arrays[i][i];
    //         let pointer2 = arrays[i + 1][i];
    //     }
    // }
    for(let i = 0; i < arrays.length; i++){
        mergedList = [...mergedList, ...arrays[i]];
    }
    mergedList.sort((a,b) => a - b)
    console.log(mergedList)
}

mergeSorted(arrays)


// function mergeSorted(arrays){
//   const elementIdxs = arrays.map(() => 0);
//   console.log(elementIdxs);
// }

// mergeSorted(arrays)
const arrays = [[1, 5, 9, 21], [-1, 0], [-124, 81, 121], [3, 6, 12, 20, 150]]

const sortedList = [-124];

const elementIdxs = [0, 0, 1, 0];

const smallestItems = [{arrayIdx: 0, num: 1}, {arrayIdx: 1, num: -1}, {arrayIdx: 2, num: -124}, {arrayidx: 3, num: 3}];

const nextItem = {arrayIdx: 2, num: -124}

const meetings = [ [9,14], [17,20], [15,18], [6,9] ]
// const meetings = [[6,9], [9,14], [15,16], [17,20]]

// Output [[6,14], [15,20]]

function mergeMeetings(meetings){

    // let sorted = meetings.sort((a, b) => a[0] - b[0]);



}

mergeMeetings(meetings)