let car = {
    modal:"Lexus",
    type:'500',
    color:"white",
    yearStart:'1995',
    callout: function (){
        alert("You are number one on this map");
    }
};
console.log(car.modal);
console.log(car.type);
console.log(car.color);
delete car.color;
car.callout();
alert(car.yearStart);
console.log(car);





