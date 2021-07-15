- Function là gì?

  - Hàm, chức năng, gọi chung là subprogram (Chương trình con) có thể được gọi ở bên ngoài (reUse) hoặc chính bên trong nó (đệ quy).

- Khai báo hàm?
  cú pháp:
  C1: khai bao thông thường
  function <tên hàm> (){

}

C2: Biểu thức hàm (hàm trong biến)
cú pháp

const/ let/var <tên hàm> = function(){

}

- Các ràng buộc về tên hàm

  - Tên hàm phải được bắt đầu = chữ cái (a-z, A-Z) hoặc ký tự \_.
  - Tên hàm khong được đặt bắt đầu = số, các ký tự !== ký tự \_.

- Phân loại hàm

  1. Hàm cơ bản: Đây là dạng hàm cơ bản nhất trong JS, cú pháp có dạng như sau"
     function doSomeThing(){
     // Do Something
     }

  2. Hàm có tham số truyền vào: (Rất hay sử dụng)\*\*\*
     function funName(param_1, ..., pram_n){
     //code
     }
     Trong đó

     - funName: tên hàm
     - param_1, ..., pram_n: là các tham số mà các bạn muốn truyền vào (không giới hạn số lượng).
       Vd: Tạo hàm tính tổng 2 số:

  3. Hàm có tham số mặc định
     Hàm có truyền tham số và đồng thời xét luôn giá trị mặc định cho các tham số đó
     function funName(param_1 = value_1, ..., pram_n=value_2){
     //code
     }

  4. Hàm có và không trả về giá trị


      + Đối với hàm có giá trị trả về thì phải sử dụng từ khóa return
      + Ngược lại với hàm không có giá trị trả về thì không có từ khóa return
      function getSum(a,b){
          return a+b;
      }

- Gọi hàm: Thực thi hà. vd:
const sayHello = function () {
    console.log("Hello World!");
}

sayHello(); // goi ham






- Object  là gì? (Đối tượng): trong JS là 1 tập hợp các cặp khóa - giá trị, tương tự như bản đồ, từ điển, hay hash-table trong ngôn ngữ lập trình khác.
    + Đối tượng là 1 tập hợp các thuộc tính
    + Thuộc tính là 1 cặp khóa - giá trị chứa tên và giá trị
    + Tên thuộc tính là một giá trị duy nhất có thể bị ép buộc vào 1 chuỗi và trỏ đến 1 giá trị
    + Giá trị thuộc tính có thể là bất cứ giá trị nào, bao gồm các đối tượng khác hoặc các hàm, được liên kết với tên/ khóa.

-Tạo đối tượng: (3 cách)
    +C1: sử dụng từ khóa {}
    +C2: sử dụng từ khóa new Object()
    +C3: sử dụng phương thức static

VD: 