
const price=[7,1,5,3,6,4]
let minPrice=price[0]
let maxPrice=0
for(let i=0;i<price.length;i++){
    minPrice=Math.min(minPrice,price[i])
    maxPrice=Math.max(maxPrice,price[i]-minPrice)
}
console.log(maxPrice);