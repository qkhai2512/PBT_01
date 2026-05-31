console.log("===== CLASSIC FIZZBUZZ =====");

for (let i = 1; i <= 100; i++) {

    let result = "";

    if (i % 3 === 0) result += "Fizz";

    if (i % 5 === 0) result += "Buzz";

    console.log(result || i);
}

function customFizzBuzz(limit, rules) {

    for (let i = 1; i <= limit; i++) {

        let output = "";

        for (const rule of rules) {

            if (i % rule.divisor === 0) {
                output += rule.word;
            }
        }

        console.log(output || i);
    }
}

console.log("\n===== CUSTOM FIZZBUZZ =====");

customFizzBuzz(30, [
    { divisor: 3, word: "Fizz" },
    { divisor: 5, word: "Buzz" },
    { divisor: 7, word: "Jazz" }
]);