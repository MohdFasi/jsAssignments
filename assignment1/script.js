var str1 = "java script";
var str2 = "Hello World"
console.log(str1);
console.log(str1.toUpperCase());
console.log(str1.toLowerCase());
console.log(str2.slice(6));

var str3 = "Facebook, Google, Microsoft, Apple, IBM, Oracle,Amazon"
console.log(str3.split(","))

console.log(str1)
console.log("first \"a\" is at "+str1.indexOf("a"))
console.log("last occurance of \"a\" in "+str1+" is at "+str1.lastIndexOf("a"))

var str4 = "Javascript is used "
var str5 = "to add functionalities to the web app"
console.log(str4+str5)
var str6 = "This course is all about Javascript"
console.log(str6.includes("Javascript"))
// console.log(Math.round(Math.random()*100))
comp();
function comp(){
    var num1 = Math.round(Math.random()*100);
    if(num1>=50){
        console.log(num1)

    }
    else{
        comp();
    }
}

console.log("11111\n21248\n313927\n4141664\n51525125")

var str7 = "'He earns 50000 from salary per month, 10000 annual bonus."
function myGeeks() {
 
    // Input string
    let str = "He earns 50000 from salary per month, 10000 annual bonus.";
    console.log(str)
 
    // Using match with regEx
    let matches = str.match(/(\d+)/);
       let str2 = str.split(matches[0]);
       let match2 = str2[1].match(/(\d+)/);
       console.log(parseInt(matches[0])*12+parseInt(match2[0]));
}
 
// Function call

myGeeks();