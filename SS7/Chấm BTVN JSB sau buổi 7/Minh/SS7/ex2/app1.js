var myArr = [9, 7, 9, 0, 7, 8, 387, 123, 456];
var i;
let arrFilter = []
for (i = 0; i < myArr.length; i++) {
  if (myArr[i] % 2 == 0 ){
    arrFilter.push(myArr[i])
  }
}

console.log("Mảng sau khi lọc là", arrFilter);