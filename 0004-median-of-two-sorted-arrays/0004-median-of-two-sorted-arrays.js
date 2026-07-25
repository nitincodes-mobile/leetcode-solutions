/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let newArray = [...nums1,...nums2].sort((a,b) => a-b);
let evenArray = newArray.length % 2 == 0
let median = Math.floor(newArray.length / 2);
if(evenArray){
    return (newArray[median] + newArray[median-1])/2
}
else{
    return newArray[median]
}
};