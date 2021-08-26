//  upload anh + hien thi anh

// const fileUpload = document.querySelector(".container"); // lay ra the div co class la container
// fileUpload.addEventListener("change",(event)=>{
//   // event: event.target
//   const {files} = event.target;
//   // cu phap desubString

//   for(const file of files){
//     const {name, type, size, lastModified} = file;
//     console.log(file);
//   }

// })


let images = []; // mảng này để chứa các src ảnh của mình

const image_input = document.querySelector('#image_input');
let uploaded_image = '';
image_input.addEventListener('change', function () {
  const reader = new FileReader();
  reader.addEventListener('load', () => {
    uploaded_image = reader.result; // this is link anh duoc convert sang base 64
    console.log(uploaded_image); // convert sang  base 64

    // tạo ra 1 thẻ div có class là img-box
    const imgBox = document.createElement("div");
    imgBox.classList = "img-box";
    // Xac dinh vi tri cua the div moi tao nay
    document.querySelector(".container").appendChild(imgBox);

    // tao ra 1 the img co class = "img"
    const img = document.createElement("img");
    img.classList = 'img';
    // Xac dinh vi tri cua the img moi tao nay


    // nem link anh: uploaded_image vao thuoc tinh scr cua img
    img.src = uploaded_image;

    imgBox.appendChild(img); // the img nam trong the div co class = "img-box"
  });
  reader.readAsDataURL(this.files[0]);
});
