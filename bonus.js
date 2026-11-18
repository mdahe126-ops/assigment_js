function createCounter(int){
       let increment=()=>{return int+1;}
       let decrement=()=>{return int-1;}
       let reset=()=>{return int;}
    return {increment,decrement,reset};
}
console.log(createCounter(5).increment())
console.log(createCounter(5).decrement())
console.log(createCounter(5).reset())