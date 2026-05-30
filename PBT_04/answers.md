# PBT04 - CSS Layout

## A1. Five Position Types

| Position | Chiếm chỗ trong flow | Tham chiếu vị trí           | Cuộn theo trang | Use case            |
| -------- | -------------------- | --------------------------- | --------------- | ------------------- |
| static   | Có                   | Vị trí mặc định             | Có              | Layout thông thường |
| relative | Có                   | Chính nó                    | Có              | Dịch chuyển nhẹ     |
| absolute | Không                | Parent gần nhất có position | Có              | Badge, popup        |
| fixed    | Không                | Viewport                    | Không           | Header, nút lên đầu |
| sticky   | Có                   | Parent + viewport           | Một phần        | Sidebar sticky      |

### Absolute tham chiếu ai?

Nếu parent gần nhất có:

```css
position: relative;
position: absolute;
position: fixed;
position: sticky;
```

thì absolute sẽ bám vào parent đó.

Nếu không có positioned ancestor thì absolute bám theo body.

Nearest Positioned Ancestor là phần tử cha gần nhất có thuộc tính position khác static.
## A2 Flexbox vs Grid

### Trường hợp 1

display:flex

4 items

Bố cục:

[1][2][3][4]

Mỗi item chiếm 25%.

---

### Trường hợp 2

6 items

2 cột

3 hàng

[1][2]

[3][4]

[5][6]

---

### Trường hợp 3

space-between

[1]      [2]      [3]

align-items:center

căn giữa theo chiều dọc.

---

### Trường hợp 4

200px 1fr 200px

[Sidebar][Content][Ads]

---

### Trường hợp 5

7 items

3 cột

3 hàng

[1][2][3]

[4][5][6]

[7]
## C1 Flexbox vs Grid

### Navigation bar

Flexbox

Vì chỉ một chiều ngang.

---

### Instagram Grid

Grid

Vì bố cục dạng hàng và cột.

---

### Blog Layout

Grid

Main + Sidebar.

---

### Footer 4 cột

Grid

Quản lý nhiều cột dễ hơn.

---

### Product Card

Flexbox

Ảnh trên

Text giữa

Button dưới

dùng flex-direction: column.
## C2 Debug Flexbox

### Lỗi 1

Cards cao thấp khác nhau.

Nguyên nhân:

Nội dung khác nhau.

Sửa:

.card{
    display:flex;
    flex-direction:column;
}

.btn{
    margin-top:auto;
}

---

### Lỗi 2

Item không nằm giữa.

Nguyên nhân:

Thiếu justify-content và align-items.

Sửa:

.hero{
    display:flex;
    justify-content:center;
    align-items:center;
}

---

### Lỗi 3

Sidebar bị co.

Nguyên nhân:

Flexbox cho phép shrink.

Sửa:

.sidebar{
    flex-shrink:0;
}