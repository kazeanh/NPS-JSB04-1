Các thẻ block: p, div, ol, li, ul, nav(thường để code navbar), header, footer,.. 
Các thẻ inline: span, a, b (in đậm chữ), i (in nghiêng), mark (highlight chữ), s, 
strong (nhấn mạnh chữ), 

Để thêm chiều dài + rộng cho 1 thẻ đang ở trong 1 dòng VD: span trong code

1. display: block; các item (thẻ) có kiểu block luôn đc xuống dòng và chiếm toàn bộ width  nếu width chưa được set trong style;
=> đổi display: inline; => display: inline-block;
- Các item có kiểu display: block; sẽ set được width, height, margin, padding đầy đủ 4 hướng (top, bottom, left, right);
- Margin: khoảng cách từ thẻ đang set tới thẻ khác (Phần màu da cam trên web)
- padding: khoảng cách từ cạnh của thẻ đang set tới nội dung bên trong.
(padding: là phần xanh lá cây trên màn hình web).


2. display: inline; Với kiểu inline thì các item sẽ nằm trên cùng 1 dòng;
vd như thẻ span, nếu các items vượt quá độ dài của dòng => item sẽ xuống dòng mới.
- Các item có kiểu display: inline; thì không thể set width + height;
- Các inline item sẽ chỉ có thể điều chỉnh margin và padding: left and right


3. display: inline-block; Sẽ sắp xếp giống dạng display: inline;,
=> các item sẽ đc xếp cùng nhau trên 1 dòng;
Tuy nhiên, các items sẽ có thuộc tính của display; block; sẽ set được width, height, margin, padding đầy đủ 4 hướng (top, bottom, left, right);
=> display: inline-block; Thường được dùng để code thanh navbar.


///////////////////


Thẻ ol và ul tạo danh sách HTML

*Thẻ ol tạo danh sách có thứ tự
    - Để tạo ds có thứ tư ta sử dụng thẻ <ol> (ordered list), và mỗi phần tử
    trong danh sách được định nghĩa = thẻ <li> bên trong VD
    - Các pohanaf tử trong danh sách ol tự động được đánh số 1,2,3
    - Có thể dùng thuộc tính type gán bằng a,A,i,... để thiết lập 1 sô kiểu đánh số.
        + a dùng chữ thường để đánh chỉ số
        + i 
        + A -> A,B,C,D,...
        + 1
        + I để đánh theo số la mã


*Thẻ ul tạo danh sách không có thứ tự (khác nhau là thay ol -> ul): thay thế các ký tự bên trên -> hình tròn; (trong style có thể bỏ hình tròn)
