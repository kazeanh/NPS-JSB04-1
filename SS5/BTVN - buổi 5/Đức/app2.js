function math(){
    alert("Cho hai số nguyên dương a và b khác 0");
    var a = window.prompt("Điền số bị chia: ");
    var b = window.prompt("Điền số chia: ");
    var remainder = a % b;
    if( a <= 0 || b <= 0){
        alert("Hãy điền số nguyên dương khác 0!");
        return 0;
    }
    else if((a % 2 == 0 || a % 2 == 1) && (b % 2 == 0 || b % 2 == 1)) {
        alert("Số dư là: " + remainder);
    }  
    else{
        alert("Ai cho điền số thập phân?");
    }    
}
math();