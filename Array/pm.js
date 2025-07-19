function primeNumber(num) {
    let arr = Array(num);
    let index = 0;

    function checkPrime(number) {

        if (number < 2) {
            return false;
        }
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                return false;
            }
        }
        return true;
    }

    for(let i=0;i<num;i++){
        if(checkPrime(i)){
            arr[index]=i;
            index +=1;
        }
    }
    return arr.slice(0, index);
    
}
console.log(primeNumber(10));


