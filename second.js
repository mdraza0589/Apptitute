for (let i = 1; i <= 10; i++) {
    let str = ""
    if (i % 2 != 0) {
        for (let j = 1; 2 * j <= 11 - i; j++) {
            str += "*";
        }
    }else{
        for(let j = 1;2*j<=i;j++){
            str = str + "*"
        }
    }
    console.log(str);
}
