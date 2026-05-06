Họ Và Tên: Bùi Đình Quang Khải
MSV: 2251172380
Lớp: 64KTPM5
# PHIẾU BÀI TẬP 02

HTML5 FORMS & MEDIA — Biểu mẫu, Validation & Đa phương tiện

---

# PHẦN A — KIỂM TRA ĐỌC HIỂU

---

## Câu A1 — Input Types

Nguồn: tuan_1_html5/07_forms_interactive.md

1. type="email" → Ô nhập dạng text, tự kiểm tra có ký tự "@" và đúng định dạng email → Dùng cho đăng ký tài khoản hoặc đăng nhập

2. type="password" → Ô nhập bị ẩn ký tự → Dùng cho mật khẩu người dùng

3. type="number" → Ô nhập số, có nút tăng giảm → Dùng cho số lượng sản phẩm

4. type="tel" → Ô nhập số điện thoại → Dùng trong form giao hàng

5. type="date" → Hiển thị lịch chọn ngày → Dùng chọn ngày sinh hoặc ngày giao

6. type="radio" → Chọn một trong nhiều lựa chọn → Dùng cho giới tính hoặc phương thức thanh toán

7. type="checkbox" → Có thể chọn nhiều lựa chọn → Dùng cho đồng ý điều khoản

8. type="range" → Thanh kéo giá trị → Dùng chọn số ngày giao hàng hoặc mức giá

9. type="file" → Cho phép upload file → Dùng upload ảnh đại diện

10. type="url" → Kiểm tra định dạng đường link → Dùng nhập website cá nhân

---

## Câu A2 — Validation Attributes

Nguồn: tuan_1_html5/07_forms_interactive.md

Trường hợp 1: <input type="text" required value="">
Kết quả: Không submit được
Giải thích: Thuộc tính required bắt buộc phải nhập dữ liệu, nếu để trống sẽ bị trình duyệt chặn

Trường hợp 2: <input type="email" value="abc">
Kết quả: Báo lỗi
Giải thích: Giá trị không đúng định dạng email vì thiếu ký tự "@"

Trường hợp 3: <input type="number" min="1" max="10" value="15">
Kết quả: Không submit được
Giải thích: Giá trị 15 vượt quá max (10)

Trường hợp 4: <input type="text" pattern="[0-9]{10}" value="abc123">
Kết quả: Báo lỗi
Giải thích: Không khớp pattern yêu cầu 10 chữ số

Trường hợp 5: <input type="password" minlength="8" value="123">
Kết quả: Báo lỗi
Giải thích: Độ dài nhỏ hơn minlength (8 ký tự)

Sau khi test thực tế trong file validation_test.html, kết quả trùng với dự đoán do trình duyệt thực hiện validation phía client.

---

## Câu A3 — Accessibility

Nguồn: tuan_1_html5/07_forms_interactive.md

Thẻ label rất quan trọng vì giúp screen reader đọc đúng tên của input. Khi sử dụng label với thuộc tính for liên kết tới id của input, người dùng khiếm thị sẽ hiểu rõ trường đang nhập là gì. Ngoài ra, người dùng có thể click vào label để focus vào input.

Thẻ fieldset và legend dùng để nhóm các trường liên quan. Ví dụ trong form đăng ký, có thể nhóm “Thông tin cá nhân”, “Tài khoản”, “Địa chỉ”. Điều này giúp cả người dùng và công cụ hỗ trợ hiểu cấu trúc form.

aria-label được dùng khi không có label hiển thị, ví dụ icon search. Không nên dùng aria-label khi đã có label vì sẽ gây trùng thông tin và khó bảo trì.

---

## Câu A4 — Media

Nguồn: tuan_1_html5/06_graphics_multimedia.md

Thuộc tính loading="lazy" giúp trì hoãn việc tải ảnh cho đến khi ảnh xuất hiện trong viewport. Điều này giúp cải thiện tốc độ tải trang và giảm băng thông.

Không nên dùng lazy loading với ảnh quan trọng ở đầu trang vì sẽ làm chậm hiển thị nội dung chính.

Trong thẻ video nên cung cấp nhiều source để đảm bảo tương thích trình duyệt. Một số định dạng phổ biến là mp4, webm và ogg.

Thuộc tính alt dùng để mô tả nội dung ảnh, hỗ trợ SEO và accessibility.

Ví dụ:

* Ảnh sản phẩm: "iPhone 16 Pro màu Titan 256GB"
* Ảnh trang trí: alt=""
* Biểu đồ: "Biểu đồ doanh thu quý 1 năm 2026 tăng 20 phần trăm"

---

## Câu A5 — So sánh figure và img

Cách 1 chỉ dùng img phù hợp với ảnh đơn giản không cần chú thích, ví dụ logo, icon, hình trang trí.

Cách 2 dùng figure và figcaption khi ảnh cần mô tả thêm nội dung, ví dụ sản phẩm, biểu đồ, ảnh bài viết.

Ví dụ:

* img: logo công ty, icon menu
* figure: ảnh sản phẩm kèm giá, ảnh blog kèm chú thích

---

# PHẦN C — PHÂN TÍCH VÀ SUY LUẬN

---

## Câu C1 — Debug Form

Lỗi 1: Input "Tên" không có label
Sửa: thêm <label for="name">Tên</label> và id

Lỗi 2: Email không có required
Sửa: thêm required

Lỗi 3: Password không có validation
Sửa: thêm minlength

Lỗi 4: Không kiểm tra confirm password
Sửa: cần JavaScript

Lỗi 5: Phone dùng type text
Sửa: dùng type="tel" và pattern

Lỗi 6: Select không có label
Sửa: thêm label

Lỗi 7: Checkbox không liên kết label
Sửa: dùng label for

Lỗi 8: Submit không có type rõ ràng
Sửa: dùng button type="submit"

---

## Câu C2 — Thiết kế Validation

Pattern:
CMND/CCCD: [0-9]{12}
Số tài khoản: [0-9]{10,15}

HTML5 validation không đủ an toàn cho hệ thống ngân hàng vì chỉ kiểm tra phía client và có thể bị bypass.

Các validation HTML không làm được:

* Kiểm tra dữ liệu trùng trong database
* So sánh nhiều trường (confirm password)
* Logic phức tạp (ví dụ tuổi hợp lệ theo ngày hiện tại)

Rủi ro nếu chỉ validate frontend:

* Người dùng có thể bypass bằng DevTools
* Dữ liệu sai hoặc độc hại vẫn gửi lên server

Do đó cần validate thêm ở backend để đảm bảo bảo mật và tính chính xác dữ liệu.

---
