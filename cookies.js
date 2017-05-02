document.addEventListener("DOMContentLoaded", function (){

var sugar = document.querySelector("#button1");
var chocolate = document.querySelector("#button2");
var lemon = document.querySelector("#button3");
var clear = document.querySelector("#button4");
var title = document.getElementById("h2");

var sugarValue = 0;
var chocolateValue = 0;
var lemonValue = 0;

// Cookies.set("Sugar", sugarValue);
// Cookies.set("Chocolate", chocolateValue);
// Cookies.set("Lemon", lemonValue);

sugar.addEventListener("click", function(){
  event.preventDefault();
    alert("You have just added a Sugar Cookie!");
    sugarValue += 1;
    Cookies.set("Sugar", sugarValue);
    sugar.innerHTML = sugarValue;
    title.innerHTML = sugarValue + chocolateValue + lemonValue;
});

chocolate.addEventListener("click", function(){
  event.preventDefault();
    alert("You have just added a Chocolate Cookie!");
    chocolateValue += 1;
    Cookies.set("Chocolate", chocolateValue);
    chocolate.innerHTML = chocolateValue;
    title.innerHTML = sugarValue + chocolateValue + lemonValue;
});

lemon.addEventListener("click", function(){
  event.preventDefault();
    alert("You have just added a Lemon Cookie!");
    lemonValue += 1;
    Cookies.set("Lemon", lemonValue);
    lemon.innerHTML = lemonValue;
    title.innerHTML = sugarValue + chocolateValue + lemonValue;
});

clear.addEventListener("click", function(){
  event.preventDefault();
    alert("Are you sure that you want to do that?");
    sugar.innerHTML = sugarValue = 0;
    chocolate.innerHTML = chocolateValue = 0;
    lemon.innerHTML = lemonValue = 0;
    title.innerHTML = 0;
 });

 function lemonType (){
  lemon.innerHTML = Cookies.get("Lemon");
 };
 function sugarType (){
  sugar.innerHTML = Cookies.get("Sugar");
 };
 function chocolateType (){
  chocolate.innerHTML = Cookies.get("Chocolate");
 };
 window.onload = lemonType();
 window.onload = sugarType();
 window.onload = chocolateType();

});
