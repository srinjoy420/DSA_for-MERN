function maxDiff(arr){
    if(arr.length<2){
        return 0
    }
    let maxval=arr[0]
    let minval=arr[0]

    for(let i=1;i<arr.length;i++){
        if(arr[i]<minval){
            minval=arr[i]
        }
        else if(arr[i]>maxval){
            maxval=arr[i]
        }
    }
    return maxval-minval
}
console.log(maxDiff([7,1,5,3,6,4]));

