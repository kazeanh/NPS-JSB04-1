// Bỏ phần số nguyên âm vì nó cũng ko khác lắm
// Em nghĩ là làm bằng for() hoặc while() thông thường thì dễ rồi nên thử làm bằng array xem sao
function numberprint(){
    let n = window.prompt("Nhập một số nguyên dương n bất kì khác 1: ");
    const chan = [];
    const le = [];
    var number = 1;
    var x = 0;
    var y = 0;
    while(number <= n)
    {
        if(number % 2 == 0){
            chan[x] = number;
            x ++;
        }
        else if(number % 2 != 0){
            le[y] = number;
            y ++;
        }
        number ++;
    }
    console.log("Các số lẻ và chẵn từ 0 đến " + n);
    console.log("Số lẻ:");
    for(let i = 0 ; i < y ; i++)
    {
        console.log( le[i]);
    }
    console.log("Số chẵn:");
    for(let i = 0 ; i < x ; i++)
    {
        console.log( chan[i]);
    }
}
numberprint();