const nums=[1,7,3,6,5,6]
let leftsum=0
let rightSum=nums.reduce((sum,a)=>sum+a,0)
// console.log(rightSum);


for(let i=0;i<nums.length;i++){
    rightSum=rightSum-nums[i]
    if(leftsum===rightSum){
      console.log(i)
      break
         
    }
    leftsum=leftsum+nums[i]

}