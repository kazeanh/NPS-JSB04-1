function bai1(){
for (let i = 1; i < 10; i += 2){
    for (let j = 0; j < 4 - i / 2; j++){
        document.write("&nbsp;");
    }
    for (let k = 0; k < i; k++){
        document.write("1");
    }
    document.write(`<br>`);
}
}
bai1()

function bai2(){
myArr = [9,7,9,0,7,8,387,123,456];
for(let i = 0; i < myArr.length; i++){
    if(myArr[i] % 2 ==0){
        console.log(myArr[i]);
    }
}
}
bai2()

function bai3(){
let myAnswer = [];
let a = prompt("Bạn sẵn sàng trả lời câu hỏi chứ? (Yes/No)");
myAnswer.push(a);
if (a == "Yes"){
    let b = prompt("Bạn có cảm thấy vui không? (Yes/No)");
    myAnswer.push(b);
    if (b == "Yes"){
        let c = prompt("Bạn đã có mùa hè đáng nhớ chứ? (Yes/No)");
        myAnswer.push(c);
        if (c == "Yes"){ 
            let d = prompt("Bạn đã sẵn sàng cho một năm học bận rộn? (Yes/No)");
            myAnswer.push(d);
            if (d == "Yes"){
                let e = prompt ("Bạn sẽ cố gắng chứ? (Yes/No)");
                myAnswer.push(e);
                if (e == "Yes"){
                    alert("Cảm ơn bạn đã trả lời câu hỏi. Chúc bạn gặp nhiều may mắn.")
                }
            }
        }
    }  
}
console.log (myAnswer);
}
bai3()