# PBT_08 - JavaScript Functions, Scope, Arrays & Objects

## PHẦN A — KIỂM TRA ĐỌC HIỂU

---

# Câu A1 - Function Declaration vs Expression vs Arrow Function

## Function Declaration

```js
function tinhThueBaoHiem(luong) {
    const thue = luong > 11000000 ? luong * 0.1 : 0;

    return {
        thue,
        thuc_nhan: luong - thue
    };
}
```

## Function Expression

```js
const tinhThueBaoHiem = function (luong) {
    const thue = luong > 11000000 ? luong * 0.1 : 0;

    return {
        thue,
        thuc_nhan: luong - thue
    };
};
```

## Arrow Function

```js
const tinhThueBaoHiem = (luong) => {
    const thue = luong > 11000000 ? luong * 0.1 : 0;

    return {
        thue,
        thuc_nhan: luong - thue
    };
};
```

### So sánh Hoisting

Function Declaration được hoisting toàn bộ:

```js
sayHello();

function sayHello() {
    console.log("Hello");
}
```

Kết quả:

```txt
Hello
```

Function Expression và Arrow Function không được hoisting đầy đủ:

```js
sayHello();

const sayHello = () => {
    console.log("Hello");
};
```

Kết quả:

```txt
ReferenceError
```

### Kết luận

| Loại                 | Hoisting |
| -------------------- | -------- |
| Function Declaration | Có       |
| Function Expression  | Không    |
| Arrow Function       | Không    |

---

# Câu A2 - Scope & Closure

## Đoạn 1

```js
function counter() {
    let count = 0;

    return {
        increment: () => ++count,
        decrement: () => --count,
        getCount: () => count
    };
}

const c = counter();
```

Kết quả:

```txt
1
2
3
2
2
```

Giải thích:

Biến count nằm trong closure nên vẫn được ghi nhớ sau khi hàm counter() kết thúc.

---

## Đoạn 2

### Với var

```js
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log("var:", i), 100);
}
```

Output:

```txt
var: 3
var: 3
var: 3
```

### Với let

```js
for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log("let:", j), 200);
}
```

Output:

```txt
let: 0
let: 1
let: 2
```

### Giải thích

* var chỉ có function scope.
* Sau khi vòng lặp kết thúc i = 3.
* Các callback đều dùng cùng một biến i.

let tạo block scope riêng cho mỗi vòng lặp nên giữ được giá trị riêng.

---

# Câu A3 - Array Methods

```js
const nums = [1,2,3,4,5,6,7,8,9,10];
```

### 1. Lấy số chẵn

```js
nums.filter(n => n % 2 === 0);
```

Kết quả:

```js
[2,4,6,8,10]
```

### 2. Nhân mỗi số với 3

```js
nums.map(n => n * 3);
```

### 3. Tính tổng

```js
nums.reduce((sum,n) => sum + n,0);
```

Kết quả:

```js
55
```

### 4. Tìm số đầu tiên > 7

```js
nums.find(n => n > 7);
```

Kết quả:

```js
8
```

### 5. Có số > 10 không

```js
nums.some(n => n > 10);
```

Kết quả:

```js
false
```

### 6. Tất cả > 0 không

```js
nums.every(n => n > 0);
```

Kết quả:

```js
true
```

### 7. Tạo chuỗi chẵn lẻ

```js
nums.map(
    n => `Số ${n} là ${n % 2 === 0 ? "chẵn" : "lẻ"}`
);
```

### 8. Đảo ngược mảng không mutate

```js
[...nums].reverse();
```

Kết quả:

```js
[10,9,8,7,6,5,4,3,2,1]
```

---

# Câu A4 - Object Destructuring & Spread

```js
const product = {
    name: "iPhone 16",
    price: 25990000,
    specs: {
        ram: 8,
        storage: 256,
        color: "Titan"
    }
};
```

### Destructuring

```js
const {
    name,
    price,
    specs: { ram, color }
} = product;
```

Output:

```txt
iPhone 16 25990000 8 Titan
```

### specs

```js
console.log(specs);
```

Kết quả:

```txt
ReferenceError
```

Vì không tạo biến specs.

---

### Spread

```js
const updated = {
    ...product,
    price: 23990000,
    sale: true
};
```

Output:

```txt
23990000
true
25990000
```

product gốc không đổi.

---

### Shallow Copy

```js
const copy = { ...product };

copy.specs.ram = 16;

console.log(product.specs.ram);
```

Kết quả:

```txt
16
```

Giải thích:

Spread chỉ copy nông (shallow copy).

Object specs vẫn tham chiếu cùng vùng nhớ.

---

# PHẦN C — SUY LUẬN

---

# Câu C1 - Refactor Code

Phiên bản tối ưu:

```js
const processOrders = orders =>
    orders
        .filter(
            o =>
                o.status === "completed" &&
                o.total > 100000
        )
        .map(({ id, customer, total }) => ({
            id,
            customer,
            total,
            discount: total * 0.1,
            finalTotal: total * 0.9
        }))
        .sort(
            (a, b) =>
                b.finalTotal - a.finalTotal
        );
```

Đã sử dụng:

* filter()
* map()
* sort()
* destructuring
* arrow function

---

# Câu C2 - miniArray

## map

```js
map(arr, fn) {
    const result = [];

    for(let i = 0; i < arr.length; i++) {
        result.push(
            fn(arr[i], i, arr)
        );
    }

    return result;
}
```

## filter

```js
filter(arr, fn) {
    const result = [];

    for(let i = 0; i < arr.length; i++) {

        if(fn(arr[i], i, arr)) {
            result.push(arr[i]);
        }

    }

    return result;
}
```

## reduce

```js
reduce(arr, fn, initialValue) {

    let accumulator = initialValue;

    for(let i = 0; i < arr.length; i++) {

        accumulator = fn(
            accumulator,
            arr[i],
            i,
            arr
        );

    }

    return accumulator;
}
```

## Hoàn chỉnh

```js
const miniArray = {

    map(arr, fn) {

        const result = [];

        for(let i = 0; i < arr.length; i++) {
            result.push(
                fn(arr[i], i, arr)
            );
        }

        return result;
    },

    filter(arr, fn) {

        const result = [];

        for(let i = 0; i < arr.length; i++) {

            if(fn(arr[i], i, arr)) {
                result.push(arr[i]);
            }

        }

        return result;
    },

    reduce(arr, fn, initialValue) {

        let accumulator = initialValue;

        for(let i = 0; i < arr.length; i++) {

            accumulator = fn(
                accumulator,
                arr[i],
                i,
                arr
            );

        }

        return accumulator;
    }

};
```

### Test

```js
console.log(
    miniArray.map(
        [1,2,3],
        x => x * 2
    )
);

console.log(
    miniArray.filter(
        [1,2,3,4],
        x => x > 2
    )
);

console.log(
    miniArray.reduce(
        [1,2,3,4],
        (a,b) => a + b,
        0
    )
);
```

Output:

```txt
[2,4,6]
[3,4]
10
```

---

# KẾT LUẬN

Các kiến thức đã thực hành:

* Function Declaration
* Function Expression
* Arrow Function
* Scope
* Closure
* Array Methods
* Object Destructuring
* Spread Operator
* Higher Order Functions
* Functional Programming
* Shopping Cart Closure
* Memoization
* Debounce
* Retry Pattern
* Refactor Legacy Code
* Tự xây dựng map/filter/reduce

Đây là các kiến thức cốt lõi của JavaScript ES6+ và được sử dụng thường xuyên trong ReactJS, NodeJS và các framework hiện đại.
