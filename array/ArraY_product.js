
// let product=1
// for(let i=0;i<arr.length;i++){
//     product=product*arr[i]
// }
// console.log(product);
// let res=[]
// for(let i=0;i<arr.length;i++){
//   res.push(product/arr[i])
// }
// console.log(res);


////witout the devive operator

let arr = [1, 2, 3, 4]
let res = []
for (let i = 0; i < arr.length; i++) {
    let product = 1
    for (let j = 0; j < arr.length; j++) {
        if (i !== j) {
            product *= arr[j]

        }
      

    }
      res.push(product)
}
console.log(res);


