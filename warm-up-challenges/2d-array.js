const myArray = [
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 9, 2, -4, -4, 0],
    [0, 0, 0, -2, 0, 0],
    [0, 0, -1, -2, -4, 0],
  ];



function hourglassSum(arr) {
    
    let rows = arr.length;
    let columns = arr.length;
    let count = -63

    for(let i = 0; i < rows - 2; i++){
        for(let j = 0; j < columns - 2; j++) {
            let hourGlass = arr[i][j] + arr[i][j + 1] + arr[i][j + 2] + arr[i + 1][j + 1] + arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];
            count = Math.max(count, hourGlass)
        }
    }

    console.log(count)
    // return count
}

hourglassSum(myArray)