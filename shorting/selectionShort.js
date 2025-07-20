let arr = [2,4,1,6,20,5];
let n = arr.length;

for(let i=0;i<n-1;i++){
    let si=i;
    for(let j=i+1;j<n;j++){
        if (arr[si]>arr[j]){
            si=j;
        }
    }
    let temp = arr[i];
    arr[i] = arr[si];
    arr[si] = temp;
}

console.log(arr);

