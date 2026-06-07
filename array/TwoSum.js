// nums = [2,7,11,15]
// target = 9
// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i]+arr[j]===target){
//             return i+j
//             // [i,j]
//         }
//     }
// }


const nums = [2,7,11,15]
let target=9
function twoSum(nums,target){
    for(let i=0;i<nums.length;i++){
        for(let j=0;j<nums.length;j++){
            if(nums[i]+nums[j]===target){
                return [i,j]
            }
        }
    }
    return []

}
console.log(twoSum(nums,target))