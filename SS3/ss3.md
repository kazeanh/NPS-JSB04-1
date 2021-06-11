Tất tần tật về thuộc tính position trong CSS: Nó là thuộc tính xác định loại của phương pháp định vị trí cho thành phần.
Position: 
    - Static: Giá trị hiển thị Position trong css 1 cách mặc định, các thành phần sẽ nằm theo thứ tự của văn bản
    - Relative: ịnh vị trí tuyệt đối cho các thành phần, không gây ảnh hưởng tới vị trí ban đầu hay các thành phần khác;
    - Absolute: Giúp định vị trí tuyệt đối cho thành phần theo thành phần bao ngoài, hoăc ít nhất theo cửa sổ trình duyệt.
    - Fixed: Định vị giúp cho phần tử luôn cố định 1 chỗ, vd: khi scroll trình duyệt, phần tử sẽ không thay đổi;


Tiện ích: Live Server giúp ta khi lưu code (auto-save) => không cần reload trình duyệt nữa. Nó sẽ tự load lại Browser mỗi khi chúng ta thay đổi code.

- Class: Nhóm những thuộc tính, thẻ có phần tử dùng chung:  => có thể sử dụng cho nhiều thẻ
- Id: Chính là chứng minh thư 1 thẻ => duy nhất => biết id => tìm đc thẻ đó (vì dòng này là duy nhất). Chỉ sử dụng cho 1 thẻ nha và không đặt lại tên id đó nữa.



Buổi 2: mình học về display: block, inline, inline-block,    flex;
Buổi 3: display: flex;
flex là gì? : Giúp các thành phần trong thẻ => trở nên linh hoạt hơn
display: flex; và các thuộc tính đi kèm được sử dụng  nhiều trong việc xử lý các cấu trúc
Cách sử dụng:

order cho 1 thẻ con (với đk là cha đã đc style: display: flex):
    -   order:1; => thẻ con này tiến lên 1 vị trí so với vị trí ban đầu
    -   order:2; => thẻ con này tiến lên 2 vị trí so với vị trí ban đầu
    -   order:0; => thẻ con này đứng nguyên vị trí so với vị trí ban đầu
    -   order:-1; => thẻ con này lùi 1 vị trí so với vị trí ban đầu


