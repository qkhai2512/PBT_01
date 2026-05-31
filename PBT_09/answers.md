# PBT_09 - JAVASCRIPT DOM, EVENTS & LOCAL STORAGE

## ANSWERS.MD

---

# PHẦN A — KIỂM TRA ĐỌC HIỂU

## Câu A1 — DOM Tree

### DOM Tree

```text
div#app
├── header
│   ├── h1
│   │   └── "Todo App"
│   └── nav
│       ├── a.active
│       │   └── "All"
│       ├── a
│       │   └── "Active"
│       └── a
│           └── "Completed"
│
└── main
    ├── form#todoForm
    │   ├── input#todoInput
    │   └── button
    │       └── "Add"
    │
    └── ul#todoList
        ├── li.todo-item
        │   └── "Learn HTML"
        │
        └── li.todo-item.completed
            └── "Learn CSS"
```

### Query Selectors

#### Chọn thẻ h1

```js
document.querySelector("h1");
```

#### Chọn input trong form

```js
document.querySelector("#todoForm input");
```

#### Chọn tất cả todo-item

```js
document.querySelectorAll(".todo-item");
```

#### Chọn link active

```js
document.querySelector("a.active");
```

#### Chọn li đầu tiên

```js
document.querySelector("#todoList li:first-child");
```

#### Chọn tất cả a trong nav

```js
document.querySelectorAll("nav a");
```

---

# Câu A2 — innerHTML vs textContent

## innerHTML

* Đọc/Ghi HTML
* Có thể render tags HTML

Ví dụ:

```js
element.innerHTML = "<b>Hello</b>";
```

Kết quả:

```html
<b>Hello</b>
```

được render thành chữ đậm.

---

## textContent

* Chỉ xử lý text thuần
* Không render HTML

Ví dụ:

```js
element.textContent = "<b>Hello</b>";
```

Kết quả hiển thị:

```text
<b>Hello</b>
```

---

## Khi nào dùng?

### innerHTML

Dùng khi:

* Render template HTML
* Tạo giao diện nhanh

### textContent

Dùng khi:

* Hiển thị dữ liệu người dùng nhập
* Tránh XSS

---

## XSS là gì?

Nếu user nhập:

```html
<img src=x onerror="alert('Hacked!')">
```

Code:

```js
result.innerHTML = userInput;
```

Browser sẽ render thẻ img và chạy:

```js
alert("Hacked!");
```

=> Lỗ hổng XSS

---

## Cách sửa

```js
result.textContent = userInput;
```

Hoặc sanitize dữ liệu trước khi render.

---

# Câu A3 — Event Bubbling

HTML:

```html
<div id="outer">
    <div id="inner">
        <button id="btn">Click me</button>
    </div>
</div>
```

---

### Click button bình thường

Output:

```text
BUTTON
INNER
OUTER
```

Giải thích:

Event nổi bọt từ trong ra ngoài:

```text
btn
 → inner
   → outer
```

---

### Có stopPropagation()

```js
e.stopPropagation();
```

Output:

```text
BUTTON
```

Event dừng tại button.

---

# PHẦN C — DEBUG & PHÂN TÍCH

## Câu C1 — Debug DOM Code

### Lỗi 1

Sai:

```js
addEventListener("onclick")
```

Đúng:

```js
addEventListener("click")
```

---

### Lỗi 2

Sai:

```js
countDisplay = count;
```

Đúng:

```js
countDisplay.textContent = count;
```

---

### Lỗi 3

Sai:

```js
historyList.innerHTML = null;
```

Đúng:

```js
historyList.innerHTML = "";
```

---

### Lỗi 4

Sai:

```js
item.remove;
```

Đúng:

```js
item.remove();
```

---

### Lỗi 5

localStorage trả string.

Sai:

```js
count = localStorage.getItem("count");
```

Đúng:

```js
count = Number(localStorage.getItem("count")) || 0;
```

---

### Lỗi 6

History không load lại.

Cần:

```js
historyList.innerHTML =
localStorage.getItem("history") || "";
```

---

### Lỗi 7

Event cho history mất sau refresh.

Cần dùng:

```js
Event Delegation
```

thay vì bind từng li.

---

### Lỗi 8

Nên dùng:

```js
textContent
```

thay cho:

```js
innerHTML
```

nếu chỉ hiển thị text.

---

# Câu C2 — Performance

## Tại sao bind 1000 event là không tốt?

Ví dụ:

```js
1000 elements
1000 event listeners
```

Gây:

* Tốn RAM
* Tốn CPU
* Khó bảo trì

---

## Event Delegation

Chỉ bind 1 event:

```js
parent.addEventListener("click", e => {
    if (e.target.matches(".item")) {
        console.log("clicked");
    }
});
```

Ưu điểm:

* 1 listener duy nhất
* Tự hoạt động với phần tử mới

---

## Code gây 1000 lần reflow

```js
for(let i=0;i<1000;i++){
    const div=document.createElement("div");
    div.textContent=`Item ${i}`;
    document.body.appendChild(div);
}
```

---

## Refactor bằng DocumentFragment

```js
const fragment = document.createDocumentFragment();

for(let i=0;i<1000;i++){
    const div = document.createElement("div");
    div.textContent = `Item ${i}`;
    fragment.appendChild(div);
}

document.body.appendChild(fragment);
```

---

## Tại sao nhanh hơn?

Cách cũ:

```text
1000 append
1000 reflow
1000 repaint
```

Cách mới:

```text
1000 append vào RAM
1 append vào DOM
1 reflow
1 repaint
```

=> Hiệu năng tốt hơn rất nhiều.

---

# SCREENSHOTS CẦN CHỤP

## Todo App

* Add Todo
* Edit Todo
* Filter Active
* Filter Completed
* LocalStorage sau refresh

---

## Product Catalog

* Search
* Category Filter
* Sort
* Modal
* Dark Mode

---

## Form Validator

* Validation lỗi
* Password strength
* Submit thành công

---

## Keyboard App

* Gallery
* Command Palette (Ctrl + K)
* Keyboard Navigation

---

# KẾT LUẬN

Các kỹ thuật đã sử dụng:

✓ DOM Manipulation

✓ createElement()

✓ Event Delegation

✓ LocalStorage

✓ Modal

✓ Search & Filter

✓ Form Validation

✓ Keyboard Shortcuts

✓ Accessibility (ARIA)

✓ Performance Optimization (DocumentFragment)
