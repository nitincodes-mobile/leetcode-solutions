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