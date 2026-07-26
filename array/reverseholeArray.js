let arr=[1,2,3,4]
// for(let i=arr.length;i>=0;i--){
//     console.log(arr[i])
// }

for(let i=0;i<Math.floor(arr.length/2);i++){
    let temp=arr[i]
    arr[i]=arr[arr.length-1 - i]
    arr[arr.length-i -1]=temp

}
console.log(arr)