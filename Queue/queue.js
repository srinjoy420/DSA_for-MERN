class queue{
    constructor(){
        this.s=[]
    }
    length(){
        return this.s.length
    }
    enqueue(value){
        this.s.push(value)
    }
    dequeue(){
        this.s.shift()
    }
    printqueue(){
        for(let i=0;i<this.s.length;i++){
            console.log(this.s[i]);
            
        }
    }
}