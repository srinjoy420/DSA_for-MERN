// let s1="egg"
// let s2="add"
// if(s1.length!==s2.length){
//     return false
// }
// let n=s1.length
// for(let i =0;i<n;i++){
//     let c1=s1[i]
//     let c2=s2[i]
//    for(let j=0;j<n;j++){
//     if(s1[j]===c1 && s2[j]!==c2){
//         return false
//     }
//     if(s2[j]===c2 && s2[j]!==c1){
//         return false
//     }
//    }


// }
// function isoMorficStr(s1,s2){
//     if(s1.length!==s2.length){
//             return false
//         }
//         let n=s1.length
//         for(let i =0;i<n;i++){
//             let c1=s1[i]
//             let c2=s2[i]
//            for(let j=0;j<n;j++){
//             if(s1[j]===c1 && s2[j]!==c2){
//                 return false
//             }
//             if(s2[j]===c2 && s2[j]!==c1){
//                 return false
//             }
//            }


//         }
//         return true
// }
// if(isoMorficStr("egg","add")){
//     console.log("true");

// }
// else{
//     console.log("false");

// }

function isOmorfic(s1, s2) {
    if (s1.length !== s2.length) {
        return false
    }
    const mapSt={}
    const mapTs={}
    for(let i=0;i<s1.length;i++){
        let c1=s1[i]
        let c2=s2[i]
        if(mapSt[c1]!==undefined){
            if(mapSt[c1]!==c2) return false
            else{
                mapSt[c1]=c2
            }
        }
        if(mapTs[c2]!==undefined){
            if(mapTs[c2]!==c1) return false
            else{
                mapTs[c2]=c1
            }
        }
    }
    return true
}
console.log(isOmorfic("egg","add"));
