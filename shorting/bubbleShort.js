let arr = [1,3,2,2,5,4,6,12];
let n = arr.length;

for(let i=0;i<n-1;i++){
    for(let j=0;j<n-i-1;j++){
        if(arr[j]>arr[j+1]){  // for ascending use > , for descendin use <
            let a = 0;
            a = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = a;
        }
    }
}

console.log(arr);


