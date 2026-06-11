function missingNumber(arr){
    for(let i=0;i<arr.length;i++){
        let found=false
        for(let j=0;j<arr.length;j++){
            if(arr[j]===i){
                found=true
                break;
            }
        }
        if(!found){
            return 1
        }
    }
    return -1
}

const arr = [8, 2, 4, 5, 3, 7, 1];
console.log(missingNumber(arr));