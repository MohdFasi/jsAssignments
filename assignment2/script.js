// var arr = [];
// console.log(arr);
// var count = [1, 2, 3, 4, 5, 6, 7, 8]

// console.log(count.length);
// console.log(count);
// console.log(count[0]);

// console.log(count[Math.round(count.length / 2) - 1]);
// console.log(count[count.length - 1])

// var mixeddatatype = [1, 'a', "hello", 0.5, true, "world", 5]

// console.log(mixeddatatype.length);

// var itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]

// console.log(itCompanies);

// console.log(itCompanies.length);
// console.log(itCompanies[0]);
// console.log(itCompanies[Math.round(itCompanies.length / 2) - 1]);
// console.log(itCompanies[itCompanies.length - 1])

// console.log("\n\nitCompanies to upppercase\n")
// for (var i = 0; i < itCompanies.length; i++) {
//     console.log(itCompanies[i].toUpperCase());
// }

// var last = itCompanies.pop();

// console.log(itCompanies.join()+ " and " + last + " are big IT companies.")

// let company = "Google"
// if (itCompanies.includes(company)) {
//     console.log(company);
// } else {
//     console.log('A company is not found');
// }



// --------------arrays II --------------------------------

// var shoppingCart = ['Milk','Coffee','Tea','Honey']

// shoppingCart.unshift("meat")

// if(!shoppingCart.includes("sugar")){
//     shoppingCart.push("sugar")
// }


// console.log(shoppingCart);
// shoppingCart.splice(shoppingCart.indexOf("Honey"),1)

// shoppingCart.splice(shoppingCart.indexOf("Tea"),1,"Green Tea")
//     console.log(shoppingCart);

// var countries = ["america",'japan','china','south africa','nepal']

// var country = "india"

// function checkcountry(c) {
// if (countries.includes(country)) {
//     console.log(c ,' is in countries')
//    return c.toUpperCase()
// }
// else{
//     countries.push(c)
//     console.log(c,' is not in countries. Pushing ',c ," in countries")
//     return c.toUpperCase();
// }
// }
// console.log(checkcountry(country)) 

// let frontend = ['HTML','CSS','JS','React'] 
// let backend = ['Node','Express','MongoDB']

// let fullStack = frontend.concat(backend)
// console.log(frontend)
// console.log(backend)
// console.log(fullStack)


// // ----------------array -3---------------

var ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
console.log(ages)
console.log("\nafter sorting\n")
ages.sort()
console.log(ages)

console.log("min age: ",ages[0])
console.log("max age: ",ages[ages.length-1])

var medianAge;
if (ages.length % 2 === 0) {
    var middleIndex1 = ages.length / 2 - 1;
    var middleIndex2 = ages.length / 2;
    medianAge = (ages[middleIndex1] + ages[middleIndex2]) / 2;
} else {
    var middleIndex = Math.floor(ages.length / 2);
    medianAge = ages[middleIndex];
}
console.log("Median age: " , medianAge);
var sum = ages.reduce((p,n)=>{
    return p+n
},0);
var averageAge = (sum/(ages.length));
console.log("average age: " , averageAge);


console.log(ages[0],"-",ages[ages.length-1]);

console.log("comparing minimum average age and maximum average age: ");
console.log(ages[0]-averageAge,)
