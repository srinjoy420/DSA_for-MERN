const arr=["flower","flow","flight"]
let first=arr[0]
let last=arr[arr.length-1]
let maxstring=Math.max(first.length,last.length)


console.log(maxstring);
let i=0
while( i <maxstring && first[i]===last[i]){
    i++
}
console.log(first.substring(0,i));
