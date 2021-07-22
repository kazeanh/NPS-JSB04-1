let dayso = [];
let daysole = []; 
for(let i=1;i<=10;i++){
    var x = prompt("Nhập số nguyên n bất kỳ")
    dayso.push(x)
}
///////  bai 1
// for(let t=0;t<=9;t++){
//     if(dayso[t]%2!=0,t%2==0){
//         daysole.push(dayso[t])
//     }
//     else{

//     }
// }
// let m = daysole.length;
// let l = 0;
// for(let k=0;k<=m-1;k++){
//     l+=parseInt(daysole[k])
// }
// document.write("Trung bình cộng các số lẻ ở vị trí chẵn là: " + l/m)



///////   bai 2
// var solonnhat = Math.max.apply(Math, dayso);
// document.write("Giá trị lớn nhất là " + solonnhat);



///////   bai 3
// let vitri = [];
// var sonhonhat = Math.min.apply(Math, dayso);
// let k = 0;
// for(;k<=9;k++){
//     if(parseInt(dayso[k])==sonhonhat){
//         vitri.push(k)
//     }
//     else{

//     }
// }
// document.write("Vị trí của các số nhỏ nhất là " + vitri);




////////   bai 5
// let prime = false;
// let snt = [];
// let k = 0;
// for (let i=2;i<dayso[k];i++){
//     if(dayso[k]%i==0){
//         prime = false;
//         k=k+1;
//         i=2;
//     }
//     else{
//         prime = true;
//         if(i+1==dayso[k]){
//             snt.push(dayso[k]);
//             k=k+1;
//             i=2;
//         }
//         else{

//         }
//     }
// }
// if(prime = true){
//     document.write(snt)
// }
// else{

// }


///////     bai 6
// for(let k=0;k<10;k++){
//     if(dayso[k]<0){
//         dayso.splice(k,1,0)
//     }
//     else{

//     }
// }
// document.write(dayso)


///////     bai 7
// for(let k=0;k<10;k++){
//     if(dayso[k]<0){
//         dayso.splice(k,1)
//     }
//     else{

//     }
// }
// document.write(dayso)


///////     bai 8
// let newdayso = []
// for(let k=0;k<10;k++){
//     var sonhonhat = Math.min.apply(Math, dayso);
//     if(dayso[k]==sonhonhat){
//         newdayso.push(dayso[k]);
//         dayso.splice(k,1);
//         k=0;
//     }
//     else{

//     }
// }
// document.write(newdayso)
