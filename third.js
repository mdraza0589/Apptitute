// for (let i = 1; i <= 5; i++) {
//     let left = "";
//     let right = "";

//     // Create left pattern
//     for (let j = 1; j <= i; j++) {
//         left += "* ";
//     }

//     // Create right pattern
//     for (let j = 1; j <= i; j++) {
//         right += "* ";
//     }

//     // Combine with padding (adjust spaces for alignment)
//     console.log(left.padEnd(12, ' ') + right);
// }




// for(let i=1;i<=5;i++){
//     let str = "";
//     for(let j=1;j<=5-i;j++){
//         str+=" ";
//     }
//     for(let k=1;k<=i;k++){
//         str+="*"
//     }
//     console.log(str);
// }


let arr = [1,2,3,5];

let n = arr.length+1;
let expectedSum  = (n*(n+1))/2;


// let actualSum = arr.reduce((acc, val) => acc + val, 0);


let actualSum = 0;
for (let i = 0; i < arr.length; i++) {
    actualSum += arr[i];
}


let newNumber = expectedSum  - actualSum;
console.log(newNumber);


