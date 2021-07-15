/**
 * Đề bài tập mảng 1 chiều như sau:
Nhập từ bàn phím mảng số nguyên gồm n phần tử.


Tính trung bình cộng các số lẻ ở vị trí chẵn
Tìm số lớn nhất trong mảng vừa nhập
Tìm vị trí các số nhỏ nhất trong mảng
Đếm các số chính phương có trong mảng
Hiển thị các số nguyên tố có trong mảng lên màn hình
Thay thế các phần tử âm có trong mảng bằng giá trị 0
Xóa các phần tử âm có trong mảng
Sắp xếp mảng đã nhập theo thứ tự tăng dần
 */


// Vi dụ về khai báo hàm: Để định nghĩa 1 hàm in ra chữ "Hello World!!"

// function sayHello (){
//     console.log("Hello World!");
// }

//  định nghĩa thành công 1 hàm


// định nghĩa hàm C2: (Hàm trong biến)
const sayHello = function () {
    console.log("Hello World!");
}

// C3: Tuy nhiên 1 tên có thể được cung cấp trong 1 biểu thức hàm.
// const sayHello = function sayHello(){
//     console.log("Hello World!");
// }
//  cách này chủ yếu sử dụng để debug nhận dạng hàm trong stack traces.


// VD hàm tính tổng 2 số:

// function getSum(a, b) {
//     console.log("Tổng: " + (a + b));
// }


// Vd: Hàm có tham số mặc định
// function getSum(a =5, b =10){
//     console.log("Tổng: " + (a + b));
// }


//VD: Hàm có trả về giá trị
// function getSum(a,b){
//     return a+b;
// }



/**
 * Đề bài tập mảng 1 chiều như sau:
Nhập từ bàn phím mảng số nguyên gồm n phần tử.


1.Tính trung bình cộng các số lẻ ở vị trí chẵn
2.Tìm số lớn nhất trong mảng vừa nhập
3.Tìm vị trí các số nhỏ nhất trong mảng
4.Đếm các số chính phương có trong mảng
5.Hiển thị các số nguyên tố có trong mảng lên màn hình
6.Thay thế các phần tử âm có trong mảng bằng giá trị 0
7.Xóa các phần tử âm có trong mảng
8.Sắp xếp mảng đã nhập theo thứ tự tăng dần
 */

let n = Number(prompt("Nhập số phần tử trong mảng"));
console.log(typeof (n));

let array = [];

for (let i = 0; i < n; i++) {
    array[i] = Number(prompt(`Nhập vào phần tử thứ ${i + 1}`));
}
console.log(array);

// Voi Bai01;
// function Bai01() {
//     let tong = 0;
//     let dem = 0;
//     for (let i = 0; i < n; i++) {
//         if (i % 2 === 0 && array[i] % 2 !== 0) {
//             tong = tong + array[i];
//             dem++;
//         }
//     }

//     if (dem == 0) {
//         console.log("Không có số lẻ nào ở vị trí chẵn cả! ");
//     }

//     alert("trung bình cộng các số lẻ ở vị trí chẵn là: ", tong / dem)

// }

// Bai01();

// bai02
// array = [1,2,3]
// function Bai02() {
//     let max = array[0];
//     for (i = 0; i < n; i++) {
//         if (max < array[i + 1]) {
//             max = array[i + 1]
//         }
//     }
//     console.log('Số lớn nhất trong mảng là: ' + max);
// }

// Bai02();


// bai03: Ngược lại bài 02

// bai04: Số chính phương là gì? Số mà ở dạng bình phương của 1 số: VD: 4
// function Bai04() {
//     let dem = 0;
//     for (let i = 0; i < n; i++) {
//         if (Math.sqrt(array[i]) % 1 == 0) {
//             dem++;
//         }
//     }

//     console.log(`Có tổng cộng ${dem} số chính phương trong mảng`);
// }

// Bai04();


// Bai05

//Bai06
function Bai06() {
    for (let i = 0; i < n; i++) {
        if (array[i] < 0) {
            array[i] = 0;
            // array.splice(i,1,0)
        }
    }
    console.log(`Mảng sau khi thay các phần tử âm = số 0 là: ${array}`);
}

// Bai06();

//Bai07;
// function Bai07() {
//     let mangAm = [];
//     for (i = 0; i < n; i++) {
//         if (array[i] < 0) {
//             mangAm.push(i);
//         }
//     }

//     // arr = [-1,-2,3,4];
//     //arr.splice()
//     // arr =[-2,3,4]
//     for(let j=mangAm.length-1;j>0;j--){
//         array.splice(j,1);
//     }

//     console.log(`Mảng sau khi xóa bỏ các phần tử âm là: ${array}`);
// }

// Bai07()

// Bai08():