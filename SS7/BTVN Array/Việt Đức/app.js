let n = prompt("Nhập số phần tử trong mảng: ");
let numberArray = [];
for(let i = 0 ; i < n ; i++){
    let number = prompt("Phần tử thứ " + (i + 1));
    numberArray[i] = number;
}
console.log("Các phần tử vừa chọn: " + numberArray);
// Bai 1
function one(){
    let total = 0;
    let count = 0;
    for(let i = 0 ; i < n ; i++){
        if(i % 2 == 0 && numberArray[i] % 2 != 0){
            total = total + Number(numberArray[i]);
            count ++;
        }
    }
    if(count == 0){
        console.log("Không có số lẻ nào ở vị trí chẵn !");
        return 0;
    }
    console.log("TBC các số lẻ ở vị trí chẵn là: " + (total / count));  
}
one();
// Bai 2
function two(){
    let maxnum = Number(numberArray[0]);
    for (i = 0; i < n; i++){
        if(maxnum < Number(numberArray[i  + 1])){
            maxnum = Number(numberArray[i + 1]);
        }
      
    }
    console.log("Số lớn nhất trong mảng là: " + maxnum)

}
two();
// Bai 3
function three(){
    let minnum = Number(numberArray[0]);
    for(let i = 0 ; i < n ; i++){
        if(Number(numberArray[i + 1]) < minnum){
            minnum = Number(numberArray[i + 1]);
        }
    }
    console.log("Minnumber là " + minnum);
    console.log("Các vị trí của minnum trong mảng: ");
    for(let k = 0 ; k < n ; k++){
        if(Number(numberArray[k]) == minnum){
            console.log(k);
        }
    }
}
three();
// Bai 4 (tinh ca 0 cung la 1 so chinh phuong)
function four(){
    let count = 0;
    for(let i = 0 ; i < n ; i++){
        if((Math.sqrt(Number(numberArray[i]))) % 1 == 0 ){
            count ++;
        }
    }
    console.log("Có tổng cộng " + count + " số chính phương trong mảng");
}
four();
// Bai 5:
function five(){
    let count = 0;
    let sum = 0;
    console.log("Các số nguyên tố trong mảng là: ");
    for(let i = 0 ; i < n ; i++){
        if(Number(numberArray[i]) > 0){
        count = 0;
        if(Number(numberArray[i]) > 0){
            for(let k = 2 ; k < n ; k++){
                if(Number(numberArray[i]) % k == 0){
                    count ++;
                }
            }
        } 
        if(count == 0){
            console.log(numberArray[i]);
            sum ++;
        }
    }
    if(sum == 0){
        console.log("Không có số nguyên tố nào trong mảng !");
    }
    }

}
five(); 

// Bai 6
function six(){
    for(let i = 0 ; i < n ; i++){
        if(Number(numberArray[i]) < 0){
            numberArray.splice(i , 1 , '0');
        }
    }
    console.log("Mảng sau khi thay các phần tử âm bằng số 0: " + numberArray);
}
six();

//De bai 6 hoac 7 hoat dong thi a de 1 trong 2 trong comment 

// Bai 7
function seven(){
    for(let i = 0 ; i < n ; i++){
        if(Number(numberArray[i]) < 0){
            numberArray.splice(i , 1);       
        }
    }
    console.log("Mảng sau khi xóa bỏ các phần tử âm: " + numberArray);
}
seven();

// Bai 8 (Neu muon hoat dong thi anh de ca bai 6 va bai 7 trong comment)
function eight(){
    let k = 0;
    let x = 0;
    let sub = 0;
    while( k == 0){ 
        x = 0;
        for(let i = 0 ; i < n ; i++){
           if(Number(numberArray[i]) > Number(numberArray[i + 1])){
               sub = Number(numberArray[i]);
               numberArray[i] = numberArray[i + 1];
               numberArray[i + 1] = sub;  
               x ++;       
        }   

    }
       if(x == 0){
           break;
       }

    
}
   console.log("Array sắp xếp theo thứ tự từ nhỏ -> lớn: " + numberArray);
}
eight();