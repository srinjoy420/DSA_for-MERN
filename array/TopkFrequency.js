const arr=[3,1,4,4,5,6,1]
let obj={}
const k=2
for(let i=0;i<arr.length;i++){
    obj[arr[i]]=(obj[arr[i]] || 0)+1
   
}
const res=[]
for(let key in obj ){
    if(obj[key]===k){
        res.push(key)
    }
}
console.log(res.join( " "));
