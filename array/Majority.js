function majority(arr){
    let lengthh=arr.length
    for(let i=0;i<lengthh;i++){
        let count=0
        for(let j=0;j<lengthh;j++){
            
            if(arr[i]===arr[j]){
                count++
            }
            
        }
        if(count>lengthh/2){
            return arr[i]
        }
        
    }
    return -1
}
let arr = [1, 1, 2, 1, 3, 5, 1];
console.log(majority)