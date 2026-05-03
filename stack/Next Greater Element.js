let arr = [ 6, 8, 0, 1, 3 ];
let stack=[]
let res=[]
for(let i=arr.length-1;i>=0;i--){
    while(stack.length>0 && stack[stack.length-1]<=arr[i]){
        stack.pop()
    }
    if(stack.length===0){
         res.push(-1)
    }
    else{
         res.push(stack[stack.length-1]) //top of stack
    }
    stack.push(arr[i])
}
res.reverse()
console.log(res);
