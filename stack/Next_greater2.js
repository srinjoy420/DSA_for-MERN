let arr = [6, 8, 0, 1, 3];
let stack = [];
let res = [];
let n = arr.length;

for (let i = (2 * n) - 1; i >= 0; i--) {
    while (stack.length > 0 && arr[stack[stack.length - 1]] <= arr[i % n]) {
        stack.pop();
    }
    if (i < n) {                                          
        res.push(stack.length === 0 ? -1 : arr[stack[stack.length - 1]]);
    }
    stack.push(i % n);                                   
}

res.reverse();                                           
console.log(res);  // [8, -1, 1, 3, 6]