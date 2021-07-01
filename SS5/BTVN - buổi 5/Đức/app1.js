function Name(){
    var firstName = window.prompt("Your first name is: ");
    var surName = window.prompt("Your surname is: ");
    var lastName = window.prompt("Your last name is: ");
    var name = firstName + " " + surName + " " + lastName;
    alert("Your full name is " + name);
}
Name();