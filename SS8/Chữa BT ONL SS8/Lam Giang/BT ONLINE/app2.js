let Car = {
    model: "Lexus",
    type: `500`,
    color: "white"
}
console.log(Car.model);
console.log(Car.type);
console.log(Car.color);
Car.yearStart = `2020`
Car.race = function(){
    alert("You are number one on this map");
}
delete Car.color;
console.log(Car);