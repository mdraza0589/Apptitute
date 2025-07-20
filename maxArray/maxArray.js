let arr = [2, 4,80, 5, 70];
let n = arr.length;
let max = arr[0];
for (let i = 0; i < n; i++) {
    if (max >arr[i]){
        max = arr[i];
    }
}

console.log(max);
