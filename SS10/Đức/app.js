var x = document.getElementsByClassName("container1");
var z = document.getElementsByClassName("container2");
document.getElementById("btn2").addEventListener("click", function(){
    x[0].style.display = "none";
    z[0].style.display = "inline-flex";
});
document.getElementById("btn3").addEventListener("click", function(){
    x[0].style.display = "inline-flex";
    z[0].style.display = "none";
})



