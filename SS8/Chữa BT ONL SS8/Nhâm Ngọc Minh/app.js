// //object
// //tạo đối tượng rỗng trong js
// //literal
// const dog = {};
// // constructor C2
// const cat = new Object();
// //static method C3
// const horse = Object.create();
// //dog.name = "John";
// //console.log(dog);
// const dog = {
//     name: "John",
//     age: 18,
//     address: "HN",
//     sayhello: function(){
//         alert("bark");
//     }
// }
// console.log(dog);
// dog.sayhello();

const Car = {
    model: "Lexus",
    type: "500",
    color: "white"
}
console.log(Car.model);
console.log(Car.type);
console.log(Car.white);
Car.yearStart = 2020;
Car.race = function(){
    alert("You are number one on this map")
};
delete Car.color;
console.log(Car);
