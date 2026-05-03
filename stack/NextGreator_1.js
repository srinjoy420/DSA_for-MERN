function nectGreator1(num1,num2){
    let stack=[]
    let d={}
    for(let i=num2.length-1;i>=0;i--){
        while(stack.length>0 && stack[stack.length-1] <=num2[i]){
            stack.pop()
        }
        if(stack.length===0){
            d[num2[i]]=-1
        }
        else{
            d[num2[i]]=stack[stack.length-1]
        }
         stack.push(num2[i])
       
    }
    return num1.map(x => d[x])
    
}
console.log(nectGreator1([4, 1, 2], [1, 3, 4, 2]));  // [-1, 3, -1]
console.log(nectGreator1([2, 4], [1, 2, 3, 4]));