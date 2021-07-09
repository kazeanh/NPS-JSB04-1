- Buổi trước:   Luyện tập if-(else-if)-else
                Vòng lặp: 3 vòng lặp cơ bản (while - [do-while] - for)

- Buổi này: Mảng: và thao tác với mảng
            + Mảng là gì?: Mảng là 1 tập hợp các phần tử cố định có cùng 1 kiểu, được lữu trữ liên tiếp nhau trong các ô nhớ. (Kiểu phần tử trong mảng: có thể là: Number, String, boolean, ...).
            
            + Khai báo mảng: Để khai báo mảng. Ta khai báo theo cú pháp sau:
            C1: let/var <tên mảng> = [];
                * Khi khai báo mảng, các bạn có thể khai báo luôn mảng hiện tại
                có bao nhiêu tử luôn. VD: let arr = [1,2]; => mảng có 2 phần tử
                                                = [1,2,3]; => mảng có 3 phần tử
                * Vị trí của phần tử mảng bắt đầu từ số 0: VD: let arr = [1,2]; => mảng có 2 phần tử. 
                Phần tử thứ 0: 1
                PHần tử thứ 1: 2

            C2: let <tên mảng> = new Array();

            + Kiểm tra xem đó có phải là 1 Array(mảng) hay không?

            + Nguyên tắc C,R,U,D trong mảng: 
                *C: Create: thêm phần tử trong mảng
                *R: Read: Đọc mảng
                *U: Update: Sửa/ thay đổi giá trị phần tử trong mảng
                *D: Delete: Xóa phần tử trong mảng.

            + C: Thêm 1 phần tử vào mảng: sử dụng câu lệnh <tên mảng>.push(value);
            với value: là giá trị mình muốn thêm: VD
                * Phần tử được thêm sẽ ở vị Cuối mảng: <tên mảng>.push("giá trị thêm vào")

                * Phần tử được thêm sẽ ở vị Đầu mảng: <tên mảng>.unShift("giá trị thêm vào")

                * Phần tử được thêm ở vị trí bất kỳ trong mảng: 

            + R: Đọc mảng: Đơn giản sủ dụng câu lệnh console.log(<tên mảng>), alert(<tên mảng>), document.write(<tên mảng>) để in ra mảng của mình.

            + U: Update phần tử mảng: 
                *C1: <tên mảng>.splice( vị trí muốn update, số phần tử muốn xóa từ vị trí đó đổ lên, thêm phần tử vào vị trí đã xóa)

                C2: <tên mảng>[vị trí muốn update] = "giá trị muốn update"