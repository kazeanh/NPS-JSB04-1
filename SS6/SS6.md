- Giới thiệu tổng quan về ngôn ngữ lập trình Javascript:

    + Tại sao lại tên là Javascript? Javascript ra đời khi mà ngôn ngữ Java đang cực kỳ hot lúc bấy giờ. Nên => đặt có chữ Java ở đầu để => hot trend => kéo người dụng Java => sang sử dụng Javascript => rất rất thành công.

    + Javascript là ngôn ngữ lập trình đồng bộ hay bất đồng bộ?
        Đồng bộ: xếp hàng lần lượt (người sau đợi người trước xong rồi tới mình)
        Bất đồng bộ: Mạnh ai người nấy được. (xử lý liền hết).

        ==> Javascript là ngôn ngữ lập trình bất đồng bộ.
        ==> Tốc độ xử lý thuật toán cực kỳ nhanh. Nhưng có  1 yếu điểm là khi
        mà mình cần phải đợi 1 tiến trình gì đó. Thì Javascript khong đợi mà nó
        thực hiện đồng thời các câu lệnh sau.

    + Ngôn ngữ lập trình có: Biến, không toán tử, không có vòng lặp, câu lệnh điều kiện
    , không có hướng đối tượng.

    + Khai báo biến: 
        * const là hằng số: => cannot change value;
        * So sánh let && var
                    ^ let: Biến cục bộ: Chỉ được sử dụng trong khối của nó => ngoài khối => không sử dụng đc
                    ^ var: Biến toàn cục. Có thể sử dụng đc trong toàn file.

                    => Nên sau này các Dev chúng ta sẽ sử dụng: let;
    
    + Các kiểu dữ liệu nguyên thủy của Javascript:
        * Number: kiểu số
        * String: kiểu chuỗi: 3 loai ngoac:  ``, '', "". 
        * Boolean: kiếu đúng/sai
        * undefined: Không xác định
        * Null: không tồn tại giá trị
    
    + Câu điều kiện: Cú pháp
        * if(điều kiện){ // kiểm tr điều kiện  nếu đúng thì 
            .. Thực hiện code trong ngoặc
        }
        Sai thì bỏ qua chạy lệnh dưới
        else{
            nếu đk trên trả về sai thì code chạy ở đây
        }

        * else if (){} là điều kiện con bên trong của if else

    + Toán tử: Các phep toán cơ bản
        * >: Lớn hơn
        * <: Nhỏ hơn
        * =: phép gán
        * ==: Dấu bằng (so sánh tương đối)
        * ===: So sánh về giá trị và kiểu dữ liệu.  (so sánh tuyệt đối)
        * !==: Phép khác trong toán học.

        * Toán tử 3 ngôi: (điều kiện) ? câu lệnh 1 : câu lệnh 2;
        kiểm tra điều kiện: Nếu đk đúng => chạy câu lệnh 1
                            Nếu đk sai => chạy câu lệnh 2
    
    + Vòng lặp: Tại sao phải có vòng lặp nhỉ?
        * Khi khối lượng công việc gặp phải rất nhiều và như nhau
        * while: Kiểm tra điều kiện, nếu đúng => chạy code và lặp lại.
             while(điều kiện){

             }
             
        * do while: Lặp lần đầu tiên, kiểm tra điều kiện, Nếu đúng => lặp.
            do{

            }
            while( điều kiện);

        * for: Vòng lặp biết trước số lần lặp. 
        B1: chạy lệnh 1 lần đầu tiên và duy nhất
        B2: kiểm tra điều kiện tại câu lệnh 2. Nếu đúng => chạy code. Chạy lệnh 3
        B3: Lặp lại: kiểm tra lại điều kiện ở lệnh 2. Nếu đúng => chạy code. Chạy lệnh 3 và tiếp tục lặp cho tới điều kiện lệnh 2 trả về "false"

            for(lệnh 1 ; lệnh 2: điều kiện ; lệnh 3 ){
                    ... code
            }