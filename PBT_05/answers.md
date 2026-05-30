# PBT_05 - CSS Responsive & SCSS

**Họ và tên:** ....................................

**MSSV:** ........................................

---

# PHẦN A — KIỂM TRA ĐỌC HIỂU

## Câu A1 — Viewport & Mobile-First

### 1. Thẻ meta viewport chuẩn

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### 2. Giải thích

#### width=device-width

Thiết lập chiều rộng viewport bằng đúng chiều rộng thiết bị.

Ví dụ:

* iPhone 375px → viewport = 375px
* Tablet 768px → viewport = 768px

#### initial-scale=1.0

Đặt mức zoom ban đầu là 100%.

Trang web hiển thị với tỷ lệ chuẩn khi tải lần đầu.

---

### 3. Nếu thiếu thẻ viewport

Trình duyệt di động sẽ giả lập một màn hình desktop khoảng 980px.

Kết quả:

* Chữ rất nhỏ
* Layout desktop bị thu nhỏ
* Người dùng phải zoom để đọc nội dung
* Responsive hoạt động không đúng

---

### 4. Mobile-First

CSS mặc định được viết cho điện thoại trước.

Ví dụ:

```css
.card{
    width:100%;
}

@media(min-width:768px){
    .card{
        width:50%;
    }
}
```

Ưu điểm:

* Tối ưu mobile
* Hiệu năng tốt
* CSS ngắn gọn hơn
* Google khuyến nghị

---

### 5. Desktop-First

CSS mặc định cho desktop trước.

Ví dụ:

```css
.card{
    width:50%;
}

@media(max-width:768px){
    .card{
        width:100%;
    }
}
```

Nhược điểm:

* Nhiều CSS ghi đè
* Khó bảo trì hơn

---

### 6. So sánh

| Mobile-First       | Desktop-First      |
| ------------------ | ------------------ |
| Bắt đầu từ mobile  | Bắt đầu từ desktop |
| Dùng min-width     | Dùng max-width     |
| Tối ưu mobile      | Tối ưu desktop     |
| Google khuyến nghị | Ít được dùng hơn   |

---

## Câu A2 — Breakpoints

### Breakpoints phổ biến

| Breakpoint | Kích thước | Thiết bị    |
| ---------- | ---------- | ----------- |
| xs         | <576px     | Mobile      |
| sm         | >=576px    | Mobile lớn  |
| md         | >=768px    | Tablet      |
| lg         | >=992px    | Laptop      |
| xl         | >=1200px   | Desktop     |
| xxl        | >=1400px   | Desktop lớn |

---

### Ví dụ số cột sản phẩm

| Thiết bị | Số cột |
| -------- | ------ |
| Mobile   | 1      |
| Tablet   | 2      |
| Laptop   | 3      |
| Desktop  | 4      |

---

## Câu A3 — Media Queries

CSS:

```css
.container { width: 100%; padding: 10px; }

@media (min-width: 576px) {
    .container { width: 540px; }
}

@media (min-width: 768px) {
    .container { width: 720px; }
}

@media (min-width: 992px) {
    .container { width: 960px; }
}

@media (min-width: 1200px) {
    .container { width: 1140px; }
}
```

### Kết quả

| Chiều rộng màn hình | Width container |
| ------------------- | --------------- |
| 375px               | 100%            |
| 600px               | 540px           |
| 800px               | 720px           |
| 1000px              | 960px           |
| 1400px              | 1140px          |

---

## Câu A4 — SCSS Basics

### 1. Variables

Cho phép lưu giá trị vào biến.

```scss
$primary-color: #6366f1;

.button{
    background:$primary-color;
}
```

Ưu điểm:

* Dễ thay đổi màu sắc
* Tái sử dụng nhiều lần

---

### 2. Nesting

Cho phép viết CSS lồng nhau.

```scss
.card{

    h3{
        color:red;
    }

    p{
        color:gray;
    }

}
```

Sau khi compile:

```css
.card h3{
    color:red;
}

.card p{
    color:gray;
}
```

---

### 3. Mixins

Tạo đoạn CSS tái sử dụng.

```scss
@mixin flex-center{
    display:flex;
    justify-content:center;
    align-items:center;
}

.box{
    @include flex-center;
}
```

---

### 4. Extend

Kế thừa CSS.

```scss
.btn{
    padding:10px;
    border-radius:6px;
}

.btn-primary{
    @extend .btn;
    background:blue;
}
```

---

### 5. Tại sao browser không đọc được SCSS?

Trình duyệt chỉ hiểu CSS.

SCSS phải được biên dịch sang CSS.

Ví dụ:

```bash
sass style.scss style.css
```

Hoặc:

```bash
sass --watch style.scss:style.css
```

---

# PHẦN C — PHÂN TÍCH

## Câu C1 — Phân tích YouTube Responsive

### Mobile (375px)

* Menu chuyển thành hamburger
* Sidebar ẩn
* Video hiển thị 1 cột
* Thanh tìm kiếm thu gọn

### Tablet (768px)

* Sidebar dạng icon
* Video 2–3 cột
* Header vẫn hiển thị đầy đủ

### Desktop (1440px)

* Sidebar mở rộng
* Video hiển thị 4–5 cột
* Toàn bộ menu xuất hiện

---

### Navigation thay đổi

| Thiết bị | Navigation     |
| -------- | -------------- |
| Mobile   | Hamburger      |
| Tablet   | Sidebar icon   |
| Desktop  | Sidebar đầy đủ |

---

### Lưới video

| Thiết bị | Số cột |
| -------- | ------ |
| Mobile   | 1      |
| Tablet   | 2-3    |
| Desktop  | 4-5    |

---

### Thành phần bị ẩn trên mobile

* Sidebar đầy đủ
* Một số menu phụ
* Danh mục mở rộng

---

### Font size

Font trên mobile nhỏ hơn desktop để tối ưu không gian hiển thị.

---

### Ví dụ Media Queries

```css
@media (min-width:768px)
```

```css
@media (min-width:1024px)
```

---

## Câu C2 — Responsive Restaurant Strategy

### Mobile Layout

```text
HEADER

HERO IMAGE

FOOD IMAGE 1
FOOD IMAGE 2
FOOD IMAGE 3
FOOD IMAGE 4
FOOD IMAGE 5
FOOD IMAGE 6

BOOKING FORM

GOOGLE MAP

FOOTER
```

Đặc điểm:

* Gallery 1 cột
* Form nằm dưới gallery
* Không có sidebar

---

### Tablet Layout

```text
HEADER

HERO IMAGE

IMAGE IMAGE
IMAGE IMAGE
IMAGE IMAGE

BOOKING FORM

GOOGLE MAP

FOOTER
```

Đặc điểm:

* Gallery 2 cột
* Form nằm phía trên map
* Không dùng sidebar

---

### Desktop Layout

```text
HEADER

HERO IMAGE

IMAGE IMAGE IMAGE
IMAGE IMAGE IMAGE

FORM      MAP

FOOTER
```

Đặc điểm:

* Gallery 3 cột
* Form và map hiển thị song song
* Tận dụng không gian màn hình lớn

---

### CSS Skeleton Mobile First

```css
.gallery{
    display:grid;
    grid-template-columns:1fr;
    gap:20px;
}

.booking-layout{
    display:grid;
    grid-template-columns:1fr;
    gap:20px;
}

@media(min-width:768px){

    .gallery{
        grid-template-columns:1fr 1fr;
    }

}

@media(min-width:1024px){

    .gallery{
        grid-template-columns:1fr 1fr 1fr;
    }

    .booking-layout{
        grid-template-columns:1fr 1fr;
    }

}
```

---

# KẾT LUẬN

Qua bài thực hành này em đã tìm hiểu:

* Responsive Design
* Mobile First
* Media Queries
* Breakpoints
* CSS Grid
* Flexbox
* CSS Animation
* SCSS Variables
* SCSS Nesting
* SCSS Mixins
* SCSS Extend

Đồng thời áp dụng để xây dựng giao diện responsive hoạt động trên Mobile, Tablet và Desktop.
