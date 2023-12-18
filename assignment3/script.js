// for(var i=0;i<=100;i++) {
//     if(i%2==0){
//         console.log(i);
//     }
// }
// for(var i=0;i<=100;i++) {
//     if(i%2!=0){
//         console.log(i);
//     }
// }
var sum = 0;
for(var i=0;i<=100;i++) {
    sum += i;
}
console.log(sum);

sum = 0;
var sumarray = [0,0]
for(var i=0;i<=100;i++) {
    if(i%2==0){
        sum += i;
        sumarray[0] = sumarray[0] + i;
    }
}

console.log("sum of even:",sum);
sum = 0;
for(var i=0;i<=100;i++) {
    if(i%2!=0){
        sum += i;
        sumarray[1] = sumarray[1] + i;
    }
}
console.log("sum of odd:",sum);


console.log(sumarray)

var countries = ["ALBANIA","BOLIVIA","CANADA","DENMARK","ETHIOPIA","FINLAND","GERMANY","HUNGARY","IRELAND","JAPAN","KENYA"]

var countriesLength = []
for(var i=0;i<countries.length;i++) {
    countriesLength[i] = countries[i].length;
}
console.log(countriesLength)

var indexbiggest = countriesLength.reduce((p,c)=>{
    return c>p?c:p;
},0);
console.log(countries[countriesLength.indexOf(indexbiggest)])


console.log();
var country5 = []
for (var i=0; i<countries.length; i++) {
    if (countries[i].length == 5){
        country5.push(countries[i])
    }
}
console.log(country5);

var temp = [];
for (var i=0; i<countries.length; i++){
    temp.unshift(countries[i]);
}

console.log(temp);

