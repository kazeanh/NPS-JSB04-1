function phonepayment(){
    let total_time = window.prompt("Số phút hộ gia đình đã gọi điện thoại: ");
    var sum = 0;
    if(total_time <= 0){
        alert("Hãy điền thời gian phù hợp!");
        return 0;
    }
    for(let time = 1 ; time <= total_time ; time ++){
        
        if(time >= 1 && time <= 50)
        {
            sum = sum + 600;
        }
        else if(time > 50 && time <= 200){
            sum = sum + 400;
        }
        else if(time > 200)
        {
            sum = sum + 200;
        }
    }
    var total = sum + 25000;
    alert("Số tiền cước phải trả: " + total + " VND");

}
phonepayment();
