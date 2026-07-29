let str1="ajejf"
let str2="abffnd"
str1=str1.split("")
str2=str2.split("")
let char1={}
let char2={}
for(let i=0;i<str1.length;i++){
    char1[str1[i]]=(char1[str1[i]] || 0)+1
}
for(let i=0;i<str2.length;i++){
    char2[str2[i]]=(char2[str2[i]] || 0)+1
}
console.log(char1);
let res=""
for(let key of str1){
    if(char2[key]){
        res+=key
    }
        

}
console.log(res);
