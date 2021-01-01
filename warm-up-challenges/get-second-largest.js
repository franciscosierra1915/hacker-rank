const nums = [2,3,6,6,5];

function getSecondLargest(nums) {
    nums.sort((a, b) => b - a);
    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== nums[i + 1]){
            return nums[i + 1]
        }
    }
}

console.log(getSecondLargest(nums))