//1 xong
function a() {
    console.clear()
    let luong=Number(prompt('Nhập lương vào đây'))
    let thue
    if(luong===15000000){
        thue=luong/100*30
    }
    if(luong>=7000000 && luong<15000000){
        thue=luong/100*20
    }
    if(luong<7000000){
        thue=luong/10
    }
    luong-=thue
    console.log('thuế', thue)
    console.log('lương ròng', luong)
}
//2 xong
function b() {
    console.clear()
    let tuoi = Number(prompt('Nhập tuổi của bạn vào đây'))
    if(tuoi===16) {
        console.log('Bạn đủ điều kiện để vào lớp 10')
    }
    if (tuoi<16) {
        console.log('Bạn chưa đủ tuổi để lên lớp 10')
    }
    if (tuoi>16) {
        console.log('Rất tiếc! Chúng tôi không nhận học sinh đúp')
    }
}
//3
function c() {
    console.clear()
    let t=Number(prompt('Nhập số tiền:'))
    if (t<=100000000)
        t/=20
    if (t<=300000000)
        t/=10
    if (t>300000000)
        t/=5
    console.log("Số tiền hoa hồng nhận được là:", t)
}
//4 xong
function d() {
    console.clear()
    let cuoc
    let phut=Number(prompt('Nhập số phút gọi điện thoại:'))
    if(phut<=50) {
        cuoc=600*phut
    }
    if(phut>50 && phut<=200) {
        cuoc=600*50+400*(phut-50)
    }
    if(phut>200) {
        cuoc=600*50+400*150+200*(phut-200)
    }
    cuoc+=25000
    console.log('Tiền cước là:', cuoc, 'đồng')
}
//5 xong
function e() {
    console.clear()
    let no=Math.floor(Number(prompt('Nhập số nguyên:')))
    let a=1
    console.log('Dòng số lẻ:')
    while(a<no) {
        k(a)
        a++
    }
    console.log('Dòng số chẵn:')
    a=1
    while(a<no) {
        t(a)
        a++
    }
    function k(n) {
        let flag=true
        if(n%2===1) {
            flag=false
            console.log(n)
        }
    }
    function t(a) {
        let flag=true
        if(a%2===0) {
            flag=false
            console.log(a)
        }
    }
}
//6 xong
function f() {
    console.clear()
    let no=Math.abs(Number(prompt('Nhập số nguyên dương:')))
    let a
    for(a=1;a<no;a++) {
        k(a)
    }
    function k(n)
    {
        // Biến cờ hiệu
        let flag = true;
  
        // Nếu n bé hơn 2 tức là không phải số nguyên tố
        if (n < 2){
            flag = false;
        }
        else{
            // lặp từ 2 tới n-1
            for (let i = 2; i < n-1; i++)
            {
                if (n % i == 0){
                    flag = false;
                    break;
                }
            }
        }
  
        // Kiểm tra biến flag
        if (flag == true){
            console.log(n)
        }
    }
}
//7 xong
function g() {
    console.clear()
    let no=Math.abs(Number(prompt('Nhập số nguyên dương:')))
    let a=0
    while(a<no) {
        a++
        k(a)
    }
    function k(n)
    {
        // Biến cờ hiệu
        let flag = true;
  
        // Nếu n bé hơn 2 tức là không phải số nguyên tố
        if (n < 2){
            flag = false;
        }
        else{
            // lặp từ 2 tới n-1
            for (let i = 2; i < n-1; i++)
            {
                if (n % i == 0){
                    flag = false;
                    break;
                }
            }
        }
  
        // Kiểm tra biến flag
        if (flag == true){
            console.log(n)
        }
    }
}
//8 xong
function h() {
    console.clear()
    let n =Math.abs(Number(prompt('Nhập số nguyên dương:')))
    let fibb=1
    let fib=0
    let no=1
    while (no!==n) {
        fibb+=fib
        fib=fibb-fib
        no++
    }
    console.log("Phần tử thứ", n, 'của dãy Fibonacci là:',fibb)
}
//9 xong
function i() {
    console.clear()
    let x =Math.abs(Number(prompt('Nhập số nguyên dương:')))
    let gt=x
    let a=x
    let nhan
    while(a>1) {
        a-=1
        gt*=a
    }
    console.log("Giai thừa của x:", gt)
}
//10 xong
function j() {
    console.clear()    
    let s=1
    let a=1
    let n =Math.abs(Number(prompt('Nhập số nguyên dương:')))
    while(a<n){
        a++
        s+=1/a**3
    }
    s=s.toFixed(5)
    console.log(s)
}