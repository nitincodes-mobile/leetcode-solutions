/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numMap = new Map();
    let left = 0;
    let right = nums.length - 1;
    
    for(let i = 0; i< nums.length ; i++){
        let compliments = target - nums[i]
        if(numMap.has(compliments)){
                return [numMap.get(compliments), i];
        }
         numMap.set(nums[i], i);
    }
};

// Brute Force for unsorted Array 

var twoSum = function (nums, target){
    for(let i = 0; i < nums.length ; i++){
        for(let j = i + 1 ; j < nums.length ; j++){
            if(nums[i] + nums[j] === target){
                return [i,j]
            }
        }
    
    }
}


// Brute for Sorted Array 
var twoSum = function(nums, target){
    let left = 0;
    let right = nums.length -1;

    while(left < right){
        if(nums[left] +  nums[right] > target){
            right--;
        } 
        else if(nums[left] +  nums[right] < target){
        left++;
        }
        else{
            return [left, right]
        }
    }

}

