function changeHandler(events){
    events.stopPropagation();
    events.preventDefault();
    // tránh sự kiện load lại trang

    let files = events.target.files;
    let file = files[0];
    let fileReader = new FileReader();
    fileReader.onload = function(progressEvent){
        let url = fileReader.result;
        document.getElementById("image").src = url;
    }
    fileReader.readAsDataURL(file);
}

function edit1(){
    let a = prompt("Nhập vào họ và tên:");
    document.getElementById("name").innerText = "Họ và tên: " + a;
}