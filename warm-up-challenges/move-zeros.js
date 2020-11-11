const nums = [0,1,0,3,12,0,0,1,2]

function moveZeroes(nums) {
    // let myarray = []
    // let zeros = []
    // for(let i =0; i < nums.length; i++){
    //     if(nums[i] === 0){
    //         zeros = [...zeros, nums[i]]
    //     } else {
    //         myarray = [...myarray, nums[i]]
    //     }
    // }
    let temp = []
    for (let i = nums.length-1; i >= 0; i--){
        if(nums[i] === 0){
            temp = nums.splice(i, 1);
            nums.push(temp[0])
        }
    }

    console.log(nums)

    // myarray = [...myarray, ...zeros]
};

moveZeroes(nums)