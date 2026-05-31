function pipe(...fns) {

    return function (value) {

        return fns.reduce(
            (current, fn) => fn(current),
            value
        );
    };
}

const process = pipe(
    x => x * 2,
    x => x + 10,
    x => x.toString(),
    x => "Kết quả: " + x
);

console.log(process(5));

function memoize(fn) {

    const cache = {};

    return function (...args) {

        const key =
            JSON.stringify(args);

        if (cache[key]) {
            return cache[key];
        }

        const result = fn(...args);

        cache[key] = result;

        return result;
    };
}

const expensiveCalc = memoize(n => {

    console.log("Đang tính...");

    let total = 0;

    for (let i = 0; i < n; i++) {
        total += i;
    }

    return total;
});

console.log(expensiveCalc(1000000));
console.log(expensiveCalc(1000000));

function debounce(fn, delay) {

    let timeout;

    return function (...args) {

        clearTimeout(timeout);

        timeout = setTimeout(() => {
            fn(...args);
        }, delay);
    };
}

const search = debounce(query => {

    console.log("Searching:", query);

}, 500);

async function retry(fn, maxAttempts = 3) {

    for (
        let attempt = 1;
        attempt <= maxAttempts;
        attempt++
    ) {

        try {

            return await fn();

        } catch (error) {

            if (
                attempt === maxAttempts
            ) {
                throw error;
            }
        }
    }
}