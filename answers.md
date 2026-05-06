Họ và Tên: Bùi Đình Quang Khải
Lớp: 64KTPM5
MSV: 2251172380
## Câu A1 — HTTP & Browser

Nguồn: `01_introduction_html_universe.md` — Phần HTTP, DNS, Browser Rendering

### 1. Các bước khi truy cập https://shopee.vn

Khi người dùng nhập URL vào trình duyệt và nhấn Enter, quá trình diễn ra theo thứ tự sau:

1. DNS Lookup
   Trình duyệt gửi yêu cầu đến DNS server để chuyển domain (shopee.vn) thành địa chỉ IP.

2. Nhận IP Address
   DNS server trả về địa chỉ IP của server chứa website.

3. Thiết lập kết nối TCP
   Trình duyệt thiết lập kết nối TCP với server thông qua quá trình bắt tay ba bước (3-way handshake).

4. Gửi HTTP Request
   Trình duyệt gửi yêu cầu HTTP (thường là GET) tới server để yêu cầu tài nguyên.

5. Server xử lý và trả HTTP Response
   Server xử lý yêu cầu và trả về dữ liệu bao gồm HTML, CSS, JavaScript và các tài nguyên khác.

6. Parse HTML tạo DOM Tree
   Trình duyệt phân tích HTML và xây dựng cấu trúc DOM.

7. Parse CSS tạo CSSOM
   CSS được phân tích để tạo ra CSS Object Model.

8. Xây dựng Render Tree và Layout
   Trình duyệt kết hợp DOM và CSSOM để tính toán bố cục hiển thị.

9. Render (Paint)
   Nội dung được hiển thị lên màn hình cho người dùng.

---

### 2. Tab Network trong DevTools

Tab Network cung cấp thông tin chi tiết về các request giữa trình duyệt và server, bao gồm:

* Danh sách tất cả các request (HTML, CSS, JavaScript, hình ảnh)
* Status Code của từng request (200, 404, 500...)
* Thời gian tải (Time, Waterfall)
* Kích thước tài nguyên (Size)
* Thông tin Request và Response Headers

Yêu cầu screenshot:

* Đánh dấu Status Code của request đầu tiên
* Đánh dấu tổng thời gian load trang
* Đánh dấu một request trả về file CSS

---

## Câu A2 — Semantic HTML

Nguồn: `04_semantic_html.md`

Các lỗi semantic trong đoạn code:

1. Sử dụng thẻ `<div class="header">` thay vì thẻ `<header>`
2. Khu vực menu không sử dụng thẻ `<nav>` nên không thể hiện rõ vai trò điều hướng
3. Nội dung sản phẩm không sử dụng thẻ `<article>`
4. Không có thẻ `<main>` để bao bọc nội dung chính
5. Phần footer sử dụng `<div>` thay vì `<footer>`
6. Không sử dụng `<figure>` và `<figcaption>` cho hình ảnh

Hậu quả:

* Công cụ tìm kiếm khó hiểu cấu trúc nội dung, ảnh hưởng đến SEO
* Các công cụ hỗ trợ (screen reader) khó phân tích nội dung, làm giảm khả năng truy cập

Code đã sửa:

```html
<header>
    <h1>ShopTLU</h1>
    <nav>
        <a href="/">Trang chủ</a>
        <a href="/products">Sản phẩm</a>
    </nav>
</header>

<main>
    <article>
        <h2>iPhone 16 Pro</h2>
        <p><strong>25.990.000đ</strong></p>
        <figure>
            <img src="iphone.jpg" alt="iPhone 16 Pro">
            <figcaption>iPhone 16 Pro</figcaption>
        </figure>
    </article>
</main>

<footer>
    <p>© 2026 ShopTLU</p>
</footer>
```

---

## Câu A3 — Block vs Inline

Kết quả hiển thị:

[Hộp 1]
Text A Text B
[Hộp 2]
Text C Text D
[Hộp 3]

Giải thích:

Thẻ `<div>` là phần tử dạng block nên chiếm toàn bộ chiều ngang và luôn xuống dòng.

Các thẻ `<span>` và `<strong>` là phần tử inline nên không xuống dòng và hiển thị trên cùng một dòng.

Do đó, các đoạn text A, B, C, D sẽ nằm trên cùng một dòng, còn các phần tử div sẽ tách thành các dòng riêng biệt.

---

## Câu A4 — Table

Nguồn: `05_tables_hyperlinks.md`

Sự khác nhau giữa các thẻ:

* `<thead>`: chứa phần tiêu đề của bảng, giúp phân biệt rõ các cột
* `<tbody>`: chứa nội dung chính của bảng
* `<tfoot>`: chứa phần tổng kết hoặc ghi chú cuối bảng

Lý do không nên dùng table để tạo layout:

1. Không hỗ trợ responsive tốt trên các thiết bị di động
2. Cấu trúc phức tạp, khó bảo trì và chỉnh sửa
3. Không mang tính semantic, làm giảm hiệu quả SEO
4. Trình duyệt phải render toàn bộ bảng trước khi hiển thị, ảnh hưởng hiệu năng

---
# PHẦN B — THỰC HÀNH CODE

---

## Bài B1 — Trang Profile cá nhân

### Mô tả bài làm

File `profile.html` được xây dựng theo chuẩn semantic HTML5, sử dụng các thẻ có ý nghĩa rõ ràng thay vì dùng thẻ div thông thường.

### Cấu trúc chính

* `<header>`: chứa thanh điều hướng
* `<nav>`: gồm các liên kết nội bộ đến các phần trong trang (Về tôi, Kỹ năng, Liên hệ)
* `<main>`: chứa nội dung chính

### Phân tích chi tiết

Section "Về tôi":

* Sử dụng `<section>` để nhóm nội dung
* `<article>` dùng để chứa nội dung giới thiệu bản thân
* `<figure>` và `<figcaption>` dùng để hiển thị ảnh đại diện và mô tả ảnh
  → Giúp tăng tính semantic và hỗ trợ SEO

Section "Kỹ năng":

* Sử dụng bảng `<table>` với đầy đủ cấu trúc:

  * `<thead>`: tiêu đề bảng
  * `<tbody>`: dữ liệu kỹ năng
  * `<tfoot>`: ghi chú cuối bảng
    → Đảm bảo đúng chuẩn HTML table

Aside:

* `<aside>` được sử dụng để chứa thông tin liên hệ
  → Đây là nội dung phụ nhưng liên quan

Footer:

* `<footer>` chứa thông tin bản quyền

### Đánh giá

* Sử dụng đúng semantic HTML5
* Không dùng div thừa
* Có đầy đủ meta charset và viewport
* Table đúng cấu trúc chuẩn

---

## Bài B2 — Trang Sản phẩm E-Commerce

### Mô tả bài làm

File `products.html` mô phỏng trang danh sách sản phẩm của một website thương mại điện tử.

### Cấu trúc chính

* `<header>` và `<nav>`: giống bài B1
* `<main>`: chứa toàn bộ nội dung sản phẩm

### Phân tích chi tiết

Section "Sản phẩm nổi bật":

* Sử dụng `<section>` để nhóm các sản phẩm
* Mỗi sản phẩm được đặt trong một `<article>` riêng biệt

Cấu trúc mỗi sản phẩm:

* `<figure>` + `<img>`: hiển thị hình ảnh
* `<h3>`: tên sản phẩm
* `<p>`: mô tả
* `<strong>`: giá sản phẩm
* `<a>`: link "Mua ngay"

→ Việc sử dụng `<article>` giúp mỗi sản phẩm trở thành một đơn vị nội dung độc lập, có lợi cho SEO

Section "Bảng so sánh":

* Sử dụng `<table>` để so sánh sản phẩm
* Có sử dụng `colspan` để gộp cột
  → Thể hiện đúng yêu cầu đề bài

Footer:

* Chứa các liên kết: Chính sách, Liên hệ, FAQ

### Đánh giá

* Có từ 4 sản phẩm trở lên
* Sử dụng đúng semantic HTML
* Có bảng so sánh với colspan
* Code rõ ràng, dễ đọc

---
# PHẦN B3 — DEBUG HTML

Danh sách lỗi:

Lỗi 1: `<!DOCTYPE>` sai, cần sửa thành `<!DOCTYPE html>`
Lỗi 2: thiếu thuộc tính `lang="vi"` trong thẻ `<html>`
Lỗi 3: thẻ `<title>` không được đóng
Lỗi 4: charset viết sai (`utf8` → `UTF-8`)
Lỗi 5: thẻ `<h1>` chưa đóng đúng
Lỗi 6: thẻ `<a>` chưa đóng
Lỗi 7: thẻ `<img>` thiếu dấu ngoặc kép và thuộc tính `alt`
Lỗi 8: thẻ `<b>` đóng sai vị trí
Lỗi 9: bảng thiếu `<thead>` và `<tbody>`
Lỗi 10: sử dụng 2 thẻ `<main>` là sai semantic
Lỗi 11: thẻ `<footer>` chưa đóng `<p>`
Lỗi 12: thiếu thẻ đóng `</html>`

## Bài B4 — Phân tích website thật bằng DevTools

### Website được chọn: shopee.vn

---

### 1. Phân tích tab Elements

Các thẻ semantic được sử dụng:

* `<header>`: chứa logo, thanh tìm kiếm và menu
* `<nav>`: chứa các liên kết điều hướng
* `<footer>`: chứa thông tin cuối trang

Các điểm chưa tối ưu semantic:

* Sử dụng nhiều `<div>` thay vì `<section>`
* Một số khu vực sản phẩm không dùng `<article>`

→ Điều này thường xảy ra do website lớn sử dụng framework và tối ưu hiệu năng hơn là semantic thuần

---

### 2. Phân tích bảng (table)

Nội dung:

* Hiển thị thông tin sản phẩm hoặc dữ liệu có cấu trúc

Quan sát:

* Một số bảng không sử dụng `<thead>` và `<tbody>`
* Nhiều trường hợp sử dụng `<div>` thay cho table

→ Xu hướng hiện đại là hạn chế dùng table cho layout

---

### 3. Phân tích form (ô tìm kiếm)

Thông tin form:

* `method`: GET (thường dùng cho tìm kiếm)
* `action`: gửi dữ liệu đến server xử lý

Các loại input:

* `type="text"`: nhập từ khóa tìm kiếm
* `type="submit"` hoặc button: gửi form

---

### Kết luận

* Website thực tế có sử dụng semantic HTML nhưng không triệt để
* Ưu tiên performance và framework hơn cấu trúc semantic thuần
* Tuy nhiên semantic HTML vẫn rất quan trọng cho SEO và accessibility

# PHẦN B3 — DEBUG HTML

Danh sách lỗi:

Lỗi 1: `<!DOCTYPE>` sai, cần sửa thành `<!DOCTYPE html>`
Lỗi 2: thiếu thuộc tính `lang="vi"` trong thẻ `<html>`
Lỗi 3: thẻ `<title>` không được đóng
Lỗi 4: charset viết sai (`utf8` → `UTF-8`)
Lỗi 5: thẻ `<h1>` chưa đóng đúng
Lỗi 6: thẻ `<a>` chưa đóng
Lỗi 7: thẻ `<img>` thiếu dấu ngoặc kép và thuộc tính `alt`
Lỗi 8: thẻ `<b>` đóng sai vị trí
Lỗi 9: bảng thiếu `<thead>` và `<tbody>`
Lỗi 10: sử dụng 2 thẻ `<main>` là sai semantic
Lỗi 11: thẻ `<footer>` chưa đóng `<p>`
Lỗi 12: thiếu thẻ đóng `</html>`

# PHẦN C — SUY LUẬN

## Câu C1 — Thiết kế cấu trúc HTML

```html
<header>
    <nav>
        <a href="#">Trang chủ</a>
    </nav>
</header>

<main>
    <nav aria-label="breadcrumb">
        <ol>
            <li><a href="#">Trang chủ</a></li>
            <li><a href="#">Điện thoại</a></li>
            <li>iPhone 16</li>
        </ol>
    </nav>

    <section>
        <article>
            <figure>
                <img>
                <figcaption>Ảnh sản phẩm</figcaption>
            </figure>

            <h1>Tên sản phẩm</h1>
            <p>Giá</p>
            <p>Mô tả</p>
        </article>
    </section>

    <section>
        <table></table>
    </section>

    <section>
        <article></article>
    </section>

    <aside>
    </aside>
</main>

<footer>
</footer>
```

---

## Câu C2 — Tranh luận

Quan điểm sử dụng thẻ `<div>` cho toàn bộ cấu trúc trang web là không phù hợp trong phát triển web hiện đại. Semantic HTML đóng vai trò quan trọng trong cả SEO và khả năng truy cập.

Về mặt SEO, các công cụ tìm kiếm như Google dựa vào các thẻ semantic như `<header>`, `<nav>`, `<article>`, `<footer>` để hiểu cấu trúc nội dung của trang web. Nếu chỉ sử dụng `<div>`, công cụ tìm kiếm sẽ gặp khó khăn trong việc xác định nội dung chính, điều hướng hay phần cuối trang, từ đó ảnh hưởng đến thứ hạng tìm kiếm.

Về accessibility, các công cụ hỗ trợ như screen reader sử dụng semantic HTML để giúp người khiếm thị điều hướng trang web dễ dàng hơn. Ví dụ, thẻ `<nav>` cho phép người dùng nhanh chóng truy cập menu chính, trong khi `<div>` không cung cấp thông tin này.

Một ví dụ cụ thể là khi sử dụng `<article>` cho mỗi sản phẩm trong trang thương mại điện tử, nội dung sẽ được hiểu là độc lập, giúp cải thiện khả năng hiển thị trên công cụ tìm kiếm.

Tuy nhiên, thẻ `<div>` vẫn cần thiết trong những trường hợp không có thẻ semantic phù hợp, ví dụ dùng làm container để phục vụ cho việc styling hoặc chia layout. Do đó, việc kết hợp hợp lý giữa semantic HTML và `<div>` là cách tiếp cận tối ưu.
