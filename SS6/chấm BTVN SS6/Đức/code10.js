function cal(){
    var n = window.prompt("Nhập số nguyên dương n bất kì để tính biểu thức S: ");
    var plus = 0;
    for(var i = 2 ; i <= n ; i++){
        var mauSo = i * i * i;
        var number = 1 / mauSo;
        plus = plus + number;
    }
    var total = plus + 1;
    total = +total.toFixed(5);
    console.log("Kết quả của biểu thức S với n = " + n + ": " + total);
}
cal();