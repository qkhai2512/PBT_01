const secretNumber =
    Math.floor(Math.random() * 100) + 1;

const guessedNumbers = [];

let attempts = 0;

const maxAttempts = 7;

while (attempts < maxAttempts) {

    let input = prompt(
        `Lần ${attempts + 1}/${maxAttempts}\nNhập số từ 1 đến 100`
    );

    let guess = Number(input);

    if (
        isNaN(guess) ||
        guess < 1 ||
        guess > 100
    ) {
        alert("Vui lòng nhập số từ 1 đến 100");
        continue;
    }

    if (guessedNumbers.includes(guess)) {
        alert("Bạn đã đoán số này rồi!");
        continue;
    }

    guessedNumbers.push(guess);

    attempts++;

    if (guess === secretNumber) {
        alert(
            `Bạn đoán đúng sau ${attempts} lần!`
        );
        break;
    }

    if (guess < secretNumber) {
        alert("Cao hơn");
    }
    else {
        alert("Thấp hơn");
    }
}

if (attempts === maxAttempts) {
    alert(
        `Bạn đã hết lượt! Đáp án là ${secretNumber}`
    );
}