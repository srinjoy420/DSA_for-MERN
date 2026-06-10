function interSect(a,b){
    let res=[]
    for(let i=0;i<a.length;i++){
        for(let j=0;j<b.length;j++){
            if(a[i]===b[j] && !res.includes(a[i])){
                 res.push(a[i])
            }
        }
    }
    return res
}

let a = [1, 2, 3, 2, 1];
let b = [3, 2, 2, 3, 3, 2];
console.log(interSect(a,b))