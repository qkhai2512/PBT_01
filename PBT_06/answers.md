# PBT_06 - Bootstrap 5

## PHẦN A — ĐỌC HIỂU

# Câu A1 — Grid System

### Layout của đoạn code

```html
<div class="col-12 col-md-6 col-lg-3">Box 1</div>
<div class="col-12 col-md-6 col-lg-3">Box 2</div>
<div class="col-12 col-md-6 col-lg-3">Box 3</div>
<div class="col-12 col-md-6 col-lg-3">Box 4</div>
```

| Kích thước    | Số cột | Layout                         |
| ------------- | ------ | ------------------------------ |
| < 768px       | 1 cột  | Box1, Box2, Box3, Box4 xếp dọc |
| 768px - 991px | 2 cột  | Box1 Box2 / Box3 Box4          |
| >= 992px      | 4 cột  | Box1 Box2 Box3 Box4            |

### Giải thích

`col-md-6`

* md = breakpoint từ 768px trở lên
* 6 = chiếm 6/12 cột
* tương đương 50% chiều rộng hàng

Không cần viết:

```html
col-sm-12
```

vì Bootstrap Mobile First.

Mặc định nếu không khai báo thì mỗi cột sẽ chiếm toàn bộ chiều rộng trên mobile.

---

# Câu A2 — Utilities & Components

## d-none d-md-block

```html
<div class="d-none d-md-block">
```

Ý nghĩa:

* Mobile (<768px): ẩn
* Tablet/Desktop (>=768px): hiện dạng block

---

## Một số Spacing Utilities

### mt-3

```html
mt-3
```

Margin Top mức 3.

---

### mb-4

```html
mb-4
```

Margin Bottom mức 4.

---

### ms-2

```html
ms-2
```

Margin Start (trái).

---

### px-4

```html
px-4
```

Padding trái và phải.

---

### py-3

```html
py-3
```

Padding trên dưới.

---

### mb-auto

```html
mb-auto
```

Margin bottom tự động.

---

## Container

### container

Container cố định theo breakpoint.

### container-fluid

Chiếm toàn bộ chiều rộng màn hình.

### container-md

100% khi nhỏ hơn md.

Từ md trở lên sẽ có max-width cố định.

---

# PHẦN C

# Câu C1 — Tùy biến Bootstrap

Muốn đổi màu primary từ xanh sang:

```css
#E63946
```

Quy trình:

1. Cài Sass

```bash
npm install -g sass
```

2. Tạo file:

```scss
$primary: #E63946;
```

3. Import Bootstrap source SCSS

```scss
@import "bootstrap";
```

4. Compile

```bash
sass custom.scss custom.css
```

---

Không nên:

```css
.btn-primary{
 background:red;
}
```

vì:

* Khó bảo trì
* Không đồng bộ màu hệ thống
* Các component khác vẫn dùng màu cũ

Nên sửa Sass Variable để toàn bộ hệ thống Bootstrap đổi theo.

---

# Câu C2 — So sánh Bootstrap và CSS thuần

## CSS Thuần

Ưu điểm:

* Toàn quyền kiểm soát
* Tối ưu kích thước file
* Không phụ thuộc framework

Nhược điểm:

* Viết nhiều CSS
* Tốn thời gian

---

## Bootstrap

Ưu điểm:

* Phát triển rất nhanh
* Có sẵn Grid
* Responsive mặc định
* Nhiều component

Nhược điểm:

* File CSS lớn
* Giao diện dễ giống nhau
* Tùy biến sâu khó hơn

---

## Khi nào nên dùng Bootstrap

* Landing Page
* Dashboard
* Website nội bộ
* Prototype nhanh

---

## Khi nào không nên dùng

* Website cần thiết kế độc quyền
* Hệ thống UI quá đặc thù
* Muốn tối ưu hiệu năng tối đa

---

# KẾT LUẬN

Bootstrap giúp tăng tốc phát triển giao diện bằng Grid System, Utilities và Components có sẵn. Tuy nhiên đối với các dự án cần tính tùy biến cao, CSS thuần hoặc các giải pháp thiết kế riêng sẽ phù hợp hơn.
