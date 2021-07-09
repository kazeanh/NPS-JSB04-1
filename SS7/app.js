// // let arr = []; // khai bao mang = cach 1

// // let arr1 = new Array(); // khai báo mảng cách 2 thành công

// // console.log(typeof(arr)); // kiem tra xem la kieu dl gi ==> typeof để kiểm tra có phải mảng ko vô dụng


// // console.log(Array.isArray(arr)); // true => là kiểu dl mảng
// // flase: không phải kiểu mảng;

// // console.log(Array.isArray(arr1));


// ///////// C
// //// thêm 1 phần tử vào cuối mảng;
// let arr = [1, 2]; // dau tien mang co 2 phan tu
// console.log(arr);

// arr.push(3);
// console.log("mang sau khi them 1 phan tu la: " + arr);
// // arr: 1,2,3
// //// thêm 1 phần tử vào đầu mảng: thêm số 0
// arr.unshift(0);
// console.log("mang sau khi them 1 phan tu vào đầu mảng là: " + arr);
// // arr: 0,1,2,3
// //// thêm 1 phần tử vào vị trí bất kỳ trong mảng:
// /////


// //////// R: read 
// console.log("arr", arr);
// // arr: 0,1,2,3

// //////// U: update phần tử đầu tiên => 0.5
// arr.splice(0, 1, 0.5); // sau buổi này sẽ luyện tập về cái này là nhiều nhé
// console.log("arr sau khi update vi tri so 0 la: ", arr);
// /// update số 2 => 2.5 thì sao?
// arr.splice(2, 1, 2.5);
// console.log("arr sau khi update vi tri so 2 la: ", arr);
// // arr = [0.5, 1, 2.5, 3]
// //////C2:
// arr[3] = 4;
// console.log("arr sau khi update vi tri so 3 la: ", arr);


// ////// D: delete phần tử trong mảng
// // arr = [0.5, 1, 2.5, 4]
// /// xoa phần tử 0.5 trong mảng đi;
// arr.splice(0, 1,);
// console.log("arr sau khi xóa vi tri so 0 la: ", arr);



/**
 * Đề bài: cho 1 list animals được lưu trong mảng animals = ["dog", "cat", "fish"];
 * Yêu cầu: Viết 1 trương trình thỏa mãn các điều kiện như sau:
 *         có sử dụng đầy Đủ C,R,U,D: 
 *          
 * Yêu cầu hoạt động: Đầu tiên vào web: alert( mảng)
 * Sau đó yêu cầu người dùng nhập chữ: 
 * 
 * a. Kiểm tra nếu là chữ C: => bắt người dùng nhập tên animal muốn thêm vào mảng
 *  (và in ra mảng đó);
 * 
 * b. Kiểm tra nếu là chữ R: => alert(các phần tử trong mảng)
 * c. Kiểm tra nếu là chữ U: => bắt người dùng nhập tên animal muốn update và
 * tên động vật muốn update vào đó: vd: (người người dùng nhập tên animal muốn update: dog
 * => người dùng nhập tên animal mới: chick). Sau đó in ra mảng mới: [chick, cat, fish]
 * 
 * d. Kiểm tra nếu là chữ D: => bắt người dùng nhập tên animal muốn delete và xóa nó đi
 * Sau đó in ra mảng mới: 
 */


// code Tuấn Bình: 
