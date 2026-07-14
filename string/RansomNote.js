function ranSomeNopte(ransome,voi){
    let obj={}
    if(ransome.length>voi.length){
        return false
    }
    for(let i=0;i<voi.length;i++){
        let c=voi[i]
        if(obj[c]){
            obj[c]++
        }
        else{
            obj[c]=1
        }

       
      
       

    }
    for(let i=0;i<ransome.length;i++){
        let c=ransome[i]
        if(!obj[c]){
            return false
        }
        obj[c]--
    }
    return true
    

}
console.log(ranSomeNopte("aa","abb"));