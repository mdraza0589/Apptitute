let arr = [1, 3, 4, 2];
for (let i = 0; i < arr.length; i++) {
    let str = ""
    for (let j = i; j < arr.length; j++) {
        str += arr[j];
        console.log(str);
    }
}




// let arr = [1, 3, 4, 2];
// for (let i = 0; i < arr.length; i++) {
//     for (let j = i; j < arr.length; j++) {
//         let str = ""
//         for (let k = i; k <= j; k++) {
//             str += arr[k];
//         }
//         console.log(str);
//     }
// }

