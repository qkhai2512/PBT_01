# PBT03 - Answers

## A1. 3 cách nhúng CSS

### Inline CSS

```html
<p style="color:red;">Hello</p>
```

Ưu điểm:

* Nhanh
* Áp dụng trực tiếp

Nhược điểm:

* Khó bảo trì
* Không tái sử dụng

Khi dùng:

* Test nhanh

### Internal CSS

```html
<style>
p {
    color: blue;
}
</style>
```

Ưu điểm:

* Dễ quản lý hơn inline

Nhược điểm:

* Chỉ dùng cho 1 trang

Khi dùng:

* Website nhỏ

### External CSS

```html
<link rel="stylesheet" href="style.css">
```

Ưu điểm:

* Tái sử dụng
* Dễ bảo trì

Nhược điểm:

* Thêm request tải file

Khi dùng:

* Hầu hết các dự án

### Thứ tự ưu tiên

Inline > Internal/External

Vì Inline có specificity cao hơn.

---

## A2. CSS Selectors

1. h1 → ShopTLU

2. .price →

* 25.990.000đ
* 45.990.000đ

3. #app header →

* header.top-bar.dark

4. nav a:first-child →

* Home

5. .product.featured h2 →

* MacBook Pro

6. article > p →

* 25.990.000đ
* Mô tả sản phẩm...
* 45.990.000đ
* Mô tả sản phẩm...

7. a[href="/"] →

* Home

8. .top-bar.dark h1 →

* ShopTLU

---

## A3. Box Model

### Box 1

width = 400

padding = 20 × 2 = 40

border = 5 × 2 = 10

Chiều rộng hiển thị = 450px

Không gian chiếm = 470px

### Box 2

Chiều rộng hiển thị = 400px

Content thực tế = 350px

Không gian chiếm = 420px

### Margin Collapse

25px và 40px

Khoảng cách = 40px

Không phải 65px vì margin collapse.

Nếu:

-10px và 40px

Khoảng cách = 30px

---

## A4. Specificity

Rule A

(0,0,1)

Rule B

(0,1,0)

Rule C

(1,0,0)

Rule D

(0,1,1)

Màu cuối cùng:

red

Vì ID thắng class.

Nếu inline style:

orange

Nếu Rule A có !important:

black

Vì !important ưu tiên cao hơn.
