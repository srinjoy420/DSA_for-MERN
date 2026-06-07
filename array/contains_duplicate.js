function containsDuplicate(nums){
    for(let i=0;i<nums.legth;i++){
        for(let j=i+1;j<nums.legth;j++){
            if(nums[i]===nums[j]){
                return true
            }
        }
    }
    return false
}
console.log(containsDuplicate([1,2,3,4,5,6,7,8,9,10]))