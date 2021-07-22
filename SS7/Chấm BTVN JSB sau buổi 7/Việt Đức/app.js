function draw(){
let line = prompt("Độ cao của tam giác cân: ");
for(var i = 1 ; i <= line ; i++){
    for(let j = 1 ; j <= line - i ; j++){
        //&nbsp; : dùng để tạo khoảng trống trong document mà ko xuống dòng (entity)
                document.write('&nbsp;');
    }
    for(let k = 1 ; k <= i ; k++){
                document.write('1');   
    }
		     document.write('<br>');
}
}
draw();




function numbersort(){
    let myArr = [9, 7, 9, 0, 7, 8, 387, 123, 456];
    alert("Array ban đầu: " + myArr);
    for(let i = 0; i < myArr.length ; i++){
        if(myArr[i] % 2 == 0 || myArr[i] == 0){
            myArr.splice(i, 1, );
        }
    }
    alert("Array sau khi lọc: " + myArr);
}
numbersort();


function story(){
    var myAnswer = [];
    var question = ["Bạn có hay thức khuya không?" , "Bạn có người yêu chưa?" , "Bạn có thích đọc sách hơn là chơi game không?" ,"Môn học bạn yêu thích nhất là gì?", "Ước mơ của bạn là gì?"];
    for(let i = 0 ; i < 5 ; i++){
        myAnswer[i] = prompt(question[i]);
}
    alert(myAnswer);
}
story();