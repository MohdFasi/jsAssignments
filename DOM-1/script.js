var p = document.querySelector("p");
p.style.backgroundColor = "teal";
console.log(p);

var p1 = document.getElementsByTagName("p")[0];
p1.style.color = "red";

var p2 = document.querySelector("#b");
p2.style.backgroundColor = "red";
p2.style.color = "yellow"

var p3 = document.getElementById("b");
p3.style.fontSize = "50px";

var p4 = document.querySelectorAll("p");
console.log(p4);

var p5 = document.getElementsByTagName("p")[2];

console.log(p5);
p5.style.backgroundColor = "yellow";


var p6 = document.getElementById("d");
p6.innerHTML = "<i>Forth Paragraph</i>";


// for (var i = 0; i < 4 ; i++) {
//     var p7 = document.querySelectorAll("p")[i];
//     p7.setAttribute("class", "para"+i);
//     p7.setAttribute("id", "para"+i);
// }

p7 = document.querySelectorAll("p");
//method 1
p7[0].setAttribute("class", "firstclass");
p7[0].setAttribute("id", "para1"); 
//method 2
p7[1].id="para2";
//method 3
p7[2].classList.add("secondclass");
//method 4
p7[3].className="thirdclass";



for (var i = 0; i < 4; i++) {
    var p8 = document.querySelectorAll("p")[i];
    p8.style.backgroundColor = "cyan"
    p8.style.color = "red"
    p8.style.fontSize = "50px"
    p8.style.fontFamily = "cursive";
    p8.style.border = "1px solid black"
}
var colorarray = ["red", "green", "blue","yellow", "pink","orange","purple","black","gray","tomato"]
var i = 0;
// function target() {
//     i++
//     var p9 = document.querySelector("h1");
//     p9.style.color = colorarray[i];
//     i==colorarray.length-1? i=0:i;
// }
setInterval(()=>document.querySelector("h1").style.color = colorarray[i<colorarray.length? i++:i=0], 100);