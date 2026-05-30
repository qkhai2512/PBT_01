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
