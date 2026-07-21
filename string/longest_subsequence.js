function longestSubSequence(s){
    let totalStringLength=0
    for(let i=0;i<s.length;i++){
        let currentStringSet=new Set()
        for(let j=i;j<s.length;j++){
            if(currentStringSet.has(s[j])){
                break
            }
            else{
                currentStringSet.add(s[j])
            }
        }
         totalStringLength=Math.max(totalStringLength,currentStringSet.size)

    }
    return totalStringLength
}

console.log(longestSubSequence("abcdefabcbb"));
