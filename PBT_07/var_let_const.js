// ===== VAR =====

console.log("VAR");

console.log(x);

var x = 5;

console.log(x);

// ===== LET =====

console.log("\nLET");

try {
    console.log(y);

    let y = 10;
} catch (error) {
    console.log(error.message);
}

// ===== CONST =====

console.log("\nCONST");

try {
    const z = 15;

    z = 20;
} catch (error) {
    console.log(error.message);
}

// ===== CONST ARRAY =====

console.log("\nCONST ARRAY");

const arr = [1, 2, 3];

arr.push(4);

console.log(arr);

// ===== BLOCK SCOPE =====

console.log("\nBLOCK SCOPE");

let a = 1;

{
    let a = 2;

    console.log("Trong block:", a);
}

console.log("Ngoài block:", a);