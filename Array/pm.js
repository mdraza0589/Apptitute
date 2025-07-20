let arr = [];

for(let i=2;i<=20;i++){
    let isPrime = true;
    for(let j=2;j<i;j++){
        if(i%j===0){
            isPrime = false;
            break;
        }
    }
    if(isPrime){
        arr.push(i);
    }
}

console.log(arr);

