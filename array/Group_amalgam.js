const arr=["eat","tea","tan","ate","nat","bat"]
const obj={}

for(word of arr){
    let sort=word.split("").sort().join("")
    if(!obj[sort]){
        obj[sort]=[]
    }
    obj[sort].push(word)
    
    
}
const valuesarray=Object.values(obj)
console.log(valuesarray);




// const input = "eat";
// const output = input.split('').sort().join('');

// console.log(output)


