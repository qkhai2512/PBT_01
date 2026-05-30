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