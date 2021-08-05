function validateForm() {
    var ho = document.forms["myForm"]["ho"].value;
    if (ho == "") {
        alert("Họ không được để trống");
        return false;
    }
    var ten = document.forms["myForm"]["ten"].value;
    if (ten == "") {
        alert("Tên không được để trống");
        return false;
    }
    var email = document.forms["myForm"]["email"].value;
    var aCong = email.indexOf("@");
    var dauCham = email.lastIndexOf(".");
    if (email == "") {
        alert("Email không được để trống");
        return false;
    }
    else if ((aCong < 1) || (dauCham < aCong + 2) || (dauCham + 2 > email.length)) {
        alert("Email không chính xác");
        return false;
    }
    var dienThoai = document.forms["myForm"]["dienThoai"].value;
    var kiemTraDT = isNaN(dienThoai);
    if (dienThoai == "") {
        alert("Điện thoại không được để trống");
        return false;
    }
    if (kiemTraDT == true) {
        alert("Điện thoại phải để ở dạng số");
        return false
    }
}
