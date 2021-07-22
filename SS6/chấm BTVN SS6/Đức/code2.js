function age()
{
    let age = window.prompt("Nhập tuổi của học sinh: ");
    if(age <= 0){
        alert("Xin nhập số tuổi hợp lệ !");
    }
    else if((age > 0 && age < 16) || (age > 16)){
        alert("Không đủ điều kiện");
    }
    else{
        alert("Đủ điều kiện vào lớp 10");
    }
}
age();