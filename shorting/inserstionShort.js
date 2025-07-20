let arr = [2,5,1,6,20,16];
let n = arr.length;

for(let i=0;i<n;i++){
    let curr = arr[i];
    let prev = i-1;
    while(prev>=0 && arr[prev]<curr){
        arr[prev+1] = arr[prev];
        prev--;
    }
    arr[prev+1] = curr;
}

console.log(arr);
