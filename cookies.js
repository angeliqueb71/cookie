
// console.log("hello");
// document.cookie = "hello=test"
var lemonButton=document.querySelectorById("#lemon");
var lemon = 0
var sugarButton=document.querySelectorById("#sugar");
var sugar = 0
var chocoButton=document.querySelectorById("#choco");
var choco = 0

Cookies.set('sugarButton', 'Sugar')
Cookies.set('lemonButton', 'Lemon')
Cookies.set('chocoButton', 'Chocolate')

Cookies.get('sugarButton');
Cookies.get('lemonButton');
Cookies.get('chocoButton');


$(document).ready(function () {
 $("button").on("click", function () {
 })
})
///cookies - button
sugarButton.addEventListener("click", function () {
  var x = sugar
  document.getElementById("sugar").value;
  document.getElementById("2").innerHTML = "You have selected our sUgAr sUgAr fab cookie: " + x;
  sugar++
  console.log("Sugar: ", sugar);
})

lemonButton.addEventListener("click", function () {
  var x = lemon
  document.getElementById("lemon").value;
  document.getElementById("1").innerHTML = "You have selected our Lavender Lemon sugar cookie: " + x;
  lemon++
  console.log("Lemon: ", lemon);
})

chocoButton.addEventListener("click", function () {
  var x = choco
  document.getElementById("choco").value;
  document.getElementById("3").innerHTML = "You have selected our White Chocolate sugar cookie: " + x;
  choco++
  console.log("Chocolate: ", choco);
})


function myFunction() {
    var x = lemon
    document.getElementById("lemon")select.value;
    document.getElementById("1").innerHTML = "You have selected our Lavender Lemon sugar cookie: " + x;
    lemon++

    // check which cookie was clicked by using select.value
    // if lemon then write document.getElementById("1").innerHTML = "You have selected our Lavender Lemon sugar cookie: " + x
    // else if sugar then write document.getElementById("1").innerHTML = "You have selected our sUgAr sUgAr fab cookie: " + x
    // else if choco then write document.getElementById("1").innerHTML = "You have selected our White Chocolate sugar cookie: " + x
}

function myFunction() {
    var x = sugar
    document.getElementById("sugar").value;
    document.getElementById("2").innerHTML = "You have selected our sUgAr sUgAr fab cookie: " + x;
    sugar++
}

function myFunction() {
    var x = choco
    document.getElementById("choco").value;
    document.getElementById("3").innerHTML = "You have selected our White Chocolate sugar cookie: " + x;
    choco++
}
