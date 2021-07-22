function salary()
{
    let a = window.prompt("Nhập lương của bạn (Triệu VND)_Tối đa 15 triệu VND :")
    if(a < 7 && a > 0)
    {
        let tax = 0.1;
        let lr = a - (a * tax);
        alert("Lương ròng sau khi trừ thuế:  " + lr + " triệu VND");
    }
    else if(a >= 7 && a < 15)
    {
        let tax = 0.2;
        let lr = a - (a * tax);
        alert("Lương ròng sau khi trừ thuế:  " + lr + " triệu VND");
    }
    else if( a == 15)
    {
        let tax = 0.3;
        let lr = a - (a * tax);
        alert("Lương ròng sau khi trừ thuế:  " + lr + " triệu VND");
    }
    else{
        alert("Xin hãy điền số tiền hợp lệ !");
    }
    
}
salary();