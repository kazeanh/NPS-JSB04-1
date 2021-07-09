function money(){
    var total = window.prompt("Tổng doanh số bán hàng (Triệu VND): ");
    var tip = 0;
    var get = 0;
    if(total > 0 && total <= 100){
        tip = 0.05;
        get = total - (tip * total);      
    }
    else if(total > 100 && total <= 300){
        tip = 0.1;
        get = total - (tip * total);      
    }
    else if(total > 300){
        tip = 0.2;
        get = total - (tip * total);      
    }
    else{
        alert("Hãy điền số doanh thu hợp lệ !");
    }
    alert("Tổng tiền hoa hồng nhận được từ doanh thu " + total +" triệu VND là: " + "\n" + get + " triệu VND");
}
money();