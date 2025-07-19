accounts = [[1, 2, 3], [3, 2, 1]];

for(let i=0;i<accounts.length;i++){
    let str = 0;
    for(let j=0;j<accounts[i].length;j++){
        str+=accounts[i][j];
    }
    console.log(str);
    
}

