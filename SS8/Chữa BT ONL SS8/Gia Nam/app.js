//Object
//tạo đối tượng rỗng
//c1 literal
// const dog = {};
//c2 constructor
// const cat = new Object();
//c3 static
// const horse = Object.create();
// dog.name = "Bình"
// dog.characteristic = "nói nhiều"
let car = {
    model: "Lexus",
    type: "500",
    color: "white",
    race: function(){
        alert("You are number one on this map")
    }
}
console.log(car.model);
console.log(car.type);
console.log(car.color);
car.yearStart = 1900;
delete car.color;
console.log(car);
car.race()