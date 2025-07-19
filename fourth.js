for (let i = 1; i <= 5; i++) {
    let row = "";

    // Left stars
    for (let j = 1; j <= i; j++) {
        row += "*";
    }

    // Middle spaces (adjusted)
    for (let j = 1; j <= 5 - i; j++) {
        row += " ";
    }

    // Right stars
    for (let j = 1; j <= i; j++) {
        row += "*";
    }

    console.log(row);
}
