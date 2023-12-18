// var arr = ["html","css","js"];

// var result = arr.map((e)=>e.toUpperCase());
// console.log(result);

// var arr1 = [1,2,3,4,5,6,7,8,9]

// var result1 = arr1.map((e)=>e*e);

// console.log(result1);

// var arr2 = [
//     {
//         product : "a",
//         price : 10,
//     },
//     {
//         product : "b",
//         price : 20,
//     },
//     {
//         product : "c",
//         price : 30,
//     },
//     {
//         product : "d",
//         price : 40,
//     },
//     {
//         product : "f",
//         price : 50,
//     }
// ];
// var result2 = arr2.map((e) => e.product);
// console.log(result2);

// var arr3 = [10,20,30,40,50,];

// var result3 = arr3.map((e) => (e*9/5)+32);
// console.log(result3);

// var arr4 = [
//     {
//         name: "fasi",
//         age: 20
//     },
//     {
//         name: "Mustafa",
//         age: 20
//     },
//     {
//         name: "Akash",
//         age: 23
//     },
//     {
//         name: "noman",
//         age: 21
//     },
//     {
//         name: "ishtiyaq",
//         age: 22
//     }
// ]

// var result4 = arr4.map((e) => {
//     return{
//         name: e.name.toUpperCase(),
//         yearofbirth: 2023-e.age
//     }
// }
// )
// console.log(result4)

// FILTER


// var arr5 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35]

// var result5 = arr5.filter((e)=>e%2==0);
// console.log(result5);

// var countries = ["United States", "China", "Russia", "Germany", "United Kingdom", "South Korea", "France", "Japan", "Saudi Arabia", "UAE","Ethiopia", "Egypt", "Ecuador"];

// var result6 = countries.filter((e)=>e.length<6);
// console.log(result6);

// var result7 = countries.filter((e)=>e[0]=="E");
// console.log(result7);

// var arr6 = [
//     {
//         product:"a",
//         Price: 10
//     },
//     {
//         product:"b",
//         Price: 12
//     },
//     {
//         product:"c",
//         Price: 6
//     },
//     {
//         product:"d",
//         Price: 8
//     },
//     {
//         product:"f",
//         Price: 20
//     }
// ]

// var result6 = arr6.filter((e)=>e.Price<10);
// console.log(result6)

// var arr7 = [
//     {
//         name: "fasi",
//         salary: 100000,
//     },
//     {
//         name: "Mustafa",
//         salary: 200000,
//     },
//     {
//         name: "Akash",
//         salary: 30000,
//     },
//     {
//         name: "noman",
//         salary: 40000,
//     },
//     {
//         name: "ishtiyaq",
//         salary: 50000,
//     }
// ]
// var result7 = arr7.filter((e)=>e.salary >= 50000);

// console.log(result7);






// reduce

var arr8 = [10,20,30,40,50,60,]

var result8 = arr8.reduce((p,c)=>p+c,0)

console.log(result8);

var arr9 = ["welcome", "to", "asdc"]
console.log(arr9);
var result9 = arr9.reduce((c,p)=>c+" "+p);
console.log(result9);

var arr10 = [
    {
        product : "a",
        price : 100
    },
    {
        product : "b",
        price : 200
    },
    {
        product : "c",
        price : 300
    },
    {
        product : "d",
        price : 400
    }
];
var result10 = arr10.reduce((p,c)=>p+c.price,0);
console.log(result10);

var arr11 = [
    {
        type : "credit",
        amount : 1000
    },
    {
        type : "debit",
        amount : 500
    },
    {
        type : "debit",
        amount : 200
    },
    {
        type : "credit",
        amount : 500
    },
    {
        type : "debit",
        amount : 100
    }
]
var result11 = arr11.reduce((p,c)=>c.type=="credit"?p+c.amount:p-c.amount,0);
console.log(result11);
