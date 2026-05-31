# PBT_07 – JavaScript Basics

## Câu A1 – var / let / const

### Đoạn 1

```js
console.log(x);
var x = 5;
```

Kết quả:

```text
undefined
```

Giải thích:

* var được hoisting lên đầu scope.
* Chỉ khai báo được đưa lên, không đưa giá trị lên.

---

### Đoạn 2

```js
console.log(y);
let y = 10;
```

Kết quả:

```text
ReferenceError
```

Giải thích:

* let có Temporal Dead Zone (TDZ).
* Không thể truy cập trước khi khai báo.

---

### Đoạn 3

```js
const z = 15;
z = 20;
```

Kết quả:

```text
TypeError
```

Giải thích:

* const không được phép gán lại giá trị.

---

### Đoạn 4

```js
const arr = [1,2,3];
arr.push(4);
```

Kết quả:

```js
[1,2,3,4]
```

Giải thích:

* const không đổi reference.
* Nội dung object hoặc array vẫn có thể thay đổi.

---

### Đoạn 5

```js
let a = 1;

{
    let a = 2;
    console.log(a);
}

console.log(a);
```

Kết quả:

```text
Trong block: 2
Ngoài block: 1
```

Giải thích:

* let có block scope.
* Hai biến a là hai biến khác nhau.

---

## Câu A2 – Data Types & Coercion

```js
typeof null
```

Kết quả:

```text
object
```

(JavaScript bug lịch sử)

---

```js
typeof undefined
```

Kết quả:

```text
undefined
```

---

```js
typeof NaN
```

Kết quả:

```text
number
```

---

```js
"5" + 3
```

Kết quả:

```text
"53"
```

---

```js
"5" - 3
```

Kết quả:

```text
2
```

---

```js
"5" * "3"
```

Kết quả:

```text
15
```

---

```js
true + true
```

Kết quả:

```text
2
```

---

```js
[] + []
```

Kết quả:

```text
""
```

---

```js
[] + {}
```

Kết quả:

```text
"[object Object]"
```

---

```js
{} + []
```

Kết quả:

```text
0
```

Giải thích:

* Dấu + với chuỗi sẽ nối chuỗi.
* Dấu -, *, / ép kiểu sang number.

---

## Câu A3 – == và ===

```js
5 == "5"
```

→ true

---

```js
5 === "5"
```

→ false

---

```js
null == undefined
```

→ true

---

```js
null === undefined
```

→ false

---

```js
NaN == NaN
```

→ false

---

```js
0 == false
```

→ true

---

```js
0 === false
```

→ false

---

```js
"" == false
```

→ true

---

Kết luận:

Luôn ưu tiên dùng:

```js
===
```

vì không ép kiểu ngầm và tránh bug.

---

## Câu A4 – Truthy & Falsy

### Các giá trị Falsy

```js
false
0
-0
0n
""
null
undefined
NaN
```

---

```js
if("0")
```

→ In A

---

```js
if("")
```

→ Không in

---

```js
if([])
```

→ In C

---

```js
if({})
```

→ In D

---

```js
if(null)
```

→ Không in

---

```js
if(0)
```

→ Không in

---

```js
if(-1)
```

→ In G

---

```js
if(" ")
```

→ In H

(vì chuỗi có dấu cách vẫn là truthy)

---

## Câu A5 – Template Literals

### Cách 1

```js
const greeting =
`Xin chào ${name}! Bạn ${age} tuổi.`;
```

---

### Cách 2

```js
const url =
`https://api.example.com/users/${userId}/orders?page=${page}`;
```

---

### Cách 3

```js
const html = `
<div class="card">
    <h2>${title}</h2>
    <p>${description}</p>
    <span>Giá: ${price}đ</span>
</div>
`;
```

Ưu điểm:

* Dễ đọc.
* Hỗ trợ xuống dòng.
* Chèn biến bằng `${}`.
