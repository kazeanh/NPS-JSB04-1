let Car = {
    modal: 'Lexus',
    type: '500',
    color: 'white',
}
console.log(Car.modal);
console.log(Car.type);
console.log(Car.color);
Car.yearStart = '----------------------------1'
Car.race = function () {
    alert("You are number one on this map");
}
delete Car.color;
console.log(Car);
