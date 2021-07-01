// khai báo biến trong Javascript: let, var, const.
// let a = "let"; // gias tri bien a la 1 String
// var b = "var"
// const c = "const"; // const là hằng số. Sau khi khai báo xong cannot change


// so sanh let && var


// {
//     // let a = 2;
//     // {
//     //     let a = 2;// Biến a sẽ chỉ tồn tại trong khối thứ 2 
//     // }
//     console.log(a); // in ra 2 Khong? => không vì nó ở khối thứ 1 mà a chưa đc định nghĩa

// }


// {
//     {
//         {{{{{{{{{{{{{var a = 2;}}}}}}}}}}}}}
//     }
//     console.log(a);// in ra 
// }

// console.log(a);

// let a =1; // a là kiểu dl gì nhỉ?? 
// let chuoi = 'This is String';
// let boolean = 2<1; //  boolean = false or true
// let binh ; // Biến này có tồn tại, nhưng giá trị của biến là không xác định được
// let Giang = null ;
// console.log("Kieu du lieu: ",typeof(a));
// console.log("Kieu du lieu: ",typeof(chuoi));
// console.log("Kieu du lieu: ", typeof(boolean));
// console.log("Kieu du lieu", typeof(binh));
// console.log("Kieu du lieu", (Giang));

// let HieuAge = 17;

// if (HieuAge == 17) { // điều kiện để trả về true or false
//     console.log("Hieu is young");
// }
// else if (HieuAge == 18) { // dieu kien con
//     console.log("Anh co thanh xuan");
// }
// else if (HieuAge < 18) {
//     console.log("Anh chua 18");
// }
// else { // các trường hợp còn lại
//     console.log("Hieu is old");
// }


// let a = 1;
// let b = "1";
// console.log(a==b); // in ra gì: true: Chỉ so sánh về giá trị, không so sánh kiểu DL.
// console.log(a===b);// in ra gì: Vì giá trị = 1 đúng. Nhưng kiểu dl sai: => false

// let HieuAge = 24;
// console.log(
//     (3 !== 4) ? "Grow up" : "young"
// );

/// Lập trình 1 game cơ bản đoán số; Sử dụng if else

/**
 * Mô tả bài toán: cho người dùng đoán 6 lần để đoán chính xác số từ 0-100;
 */

/// in ra số từ 1 -> 1000 vd với vòng lặp while


// let i = 1;
// while(i<=1000){ // true
//     console.log(i); // in ra 1 nào, in ra 2 nào 
//     i = i+1;  // i = 1 + 1; => i =2 || i = 2 + 1 => i =3.
// }
////



/// cú pháp do while
// let i = 1;
// do {
//     console.log(i);
//     i = i + 1;
// }
// while (i <= 1000);

/// cú pháp for
// let i;
// for (i = 1; i <= 1000; i = i + 1) {
//     console.log(i);
// }


/**
 * Yêu cầu: đoán số tối đa 5 lần. các từ 0 - 100. Nếu đúng => in ra kết quả
 * Sai thì in ra "sai bét".
 * Lần đoán đầu tiên sai => Đoán là 70 => in ra: số cần tìm nhỏ hơn 70 và lớn hơn 0
 * Lần đoán thứ 2 => Đoán là 40 => in ra: sô cần tìm nhỏ hơn 40 và lớn hơn 0
 *  */
let ketQua =Math.floor(Math.random()*100);
// console.log(ketQua);
let dem = 0;
let input;
let min = 0;
let max = 100;
while (dem <= 6) {
    input = Number(prompt(`Nhập vào lần đoán số ${dem + 1}`));
    if (input > ketQua) {
        max = input;
        alert(`số cần tìm lớn hơn ${min} và nhỏ hơn ${max}`)
    }
    /**
     * Lần 1
     * min =0
     * ketqua 30
     * max = 70
     * 
     * in ra số cần tìm lớn hơn 0 và nhỏ hơn 70
     * 
     * Lần 2 nhâp 20
     * 
     * 
     */
    else {
        min = input;
        alert(`số cần tìm lớn hơn ${min} và nhỏ hơn ${max}`);
    }
    dem++;

    if (input === ketQua && dem <=5) {
        alert(" You win");
    }
}