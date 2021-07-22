// dùng for()
function prime(){
    var n = window.prompt("Hãy điền một số nguyên dương n bất kì: ");
    console.log("Các số nguyên tố từ 0 đến " + n);
    for(let i = 1; i <= n ; i++)
        {
            var total = 0;
            for(let j = 2 ; j < i ; j++)
            {
                if(i % j == 0)
                {
                   total ++;
                }
            }
            if(total == 0)
            {
            console.log(i);
            }
}
}
prime();
