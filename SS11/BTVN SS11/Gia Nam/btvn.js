function nhapSo(){
    const a = prompt("Nhập số chứng minh thư");
    document.getElementById("number").innerHTML += a;
}
function nhapTen(){
    const b = prompt("Nhập họ và tên");
    document.getElementById("name").innerHTML += b;
}
function nhapNgaySinh(){
    const c = prompt("Nhập ngày tháng năm sinh");
    document.getElementById("birthday").innerHTML += c;
}
function nhapGioiTinh(){
    const d = prompt("Nhập giới tính");
    document.getElementById("gender").innerHTML += d;
}
function nhapQuocTich(){
    const e = prompt("Nhập quốc tịch");
    document.getElementById("nationality").innerHTML += e;
}
function nhapQue(){
    const f = prompt("Nhập quê quán");
    document.getElementById("hometown").innerHTML += f;
}
function nhapDiaChi(){
    const g = prompt("Nhập địa chỉ thường trú");
    document.getElementById("address").innerHTML += g;
}
function showPreviewOne(event){
    if(event.target.files.length > 0){
      let src = URL.createObjectURL(event.target.files[0]);
      let preview = document.getElementById("preview");
      preview.src = src;
      preview.style.height = "200px";
      preview.style.width = "200px";
      preview.style.marginLeft = "10px";
      preview.style.marginBottom = "10px";
    }
}