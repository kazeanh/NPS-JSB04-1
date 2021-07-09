function fibonacci(){
    var n = window.prompt("Nhập số phần tử của dãy fibonacci: ");
    var a = 0;
    var b = 1;
    var c = 0;
    console.log(n + " phần tử đầu của dãy fibonacci: ");
    while( n >= 1 ){  
        console.log(c);
        c = a + b;
        a = b;
        b = c;
        n --;
    }
}
fibonacci();