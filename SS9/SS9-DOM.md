- JS la một ngôn ngữ được sử dụng trong trình duyệt (Browser) nên nó đóng vai trò khá là quan trọng trong ứng dụng website. => Nhiệm vụ JS là thao tác với các tài liệu HTML kết hợp cú pháp riêng của nó để tạo nên 1 trang web đầy tính năng. Để thao tác với các thẻ HTML thông qua 1 cơ chế là DOM.

- DOM là gì??:
    + Viết tắt của Document Object Model: mô hình các đối tượng trong tài liệu HTML
    + Trong mỗi thẻ HTML có phân cấp cha - con với các thẻ khác 
    + Trong DOM có nhiệm vụ xử lý các vấn đề như đổi thuộc tính thẻ, đổi cấu trúc HTML của thẻ, .. DOM dùng để truy xuất các tài  dạng HTML và XML.

    Vd: 
      document.getElementById("main-content")
            .innerHTML = "Chào mừng các em tới thế giới này";
    * Giaỉ thích: đoạn code trên có ý nghĩa tìm thẻ có id ="main-content" và gán nội dung HTML bên trong của thẻ này = dòng chữ "Chào mừng các em tới thế giới này".

    + Với DOM, JS có được tất cả sức mạnh cần thiết để tạo HTML động.
        * JS thay đổi all các phần tử HTML trong trang
        * JS thay đổi all các thuộc tính HTML trong trang
        * JS thay đổi all các phong cách CSS trong trang
        * JS loại bỏ các yếu tố HTML và thuộc tính hiện tại
        * JS thêm mới các yếu tố HTML và các thuộc tính
        .....


- Các thuộc tính và phương thức thường gặp: 
Thuộc tính:
    + id: định danh -là duy nhất cho mỗi phần tử thẻ
    + className: Tên Lớp -Cũng dùng để truy xuất trực tiếp như id, nhưng 1 class Name có thể dùng cho nhiều phần tử



