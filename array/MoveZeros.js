let arr=[0,1,0,3,12]
let pos=0
//for the non zero
for(let i=0;i<arr.length;i++){
    if(arr[i]!==0){
        arr[pos]=arr[i]
        pos++
    }
}
// for the zero part
for(let i=pos;i<arr.length;i++){
    arr[i]=0
}
console.log(arr);
