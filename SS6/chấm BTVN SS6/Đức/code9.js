function factorial(){
    var n = window.prompt("Nhập số nguyên dương n bất kì: ");
    var factor = 1;
    for(let i = 1 ; i <= n ; i++){
        factor = factor * i;
    }
    console.log("Giai thừa của " + n +"! là: " + factor);
}
factorial();