function apiCall(url) {
    let xhr = new XMLHttpRequest()

    xhr.responseType = 'json'
    xhr.onprogress = function () {
        console.log("loading...")
    }

    let promise = new Promise(function (resolve, reject) {
        xhr.onload = function () {
            resolve(xhr.response)
        }
        xhr.onerror = function () {
            reject("err")
        }
    })

    xhr.open('GET', url)
    xhr.send()

    return promise

}
let price
let total;
let total1;
function api(){

apiCall('https://dummyjson.com/carts/1')
.then((data)=> {
    console.log(data)
    return data
}).then((data)=> {
    total = data.products.reduce((p,n)=>p+n.total,0)
    console.log("total amount:",total);
    return data
})
.then((data)=> {total = data.products.reduce((p,n)=>p+n.price,0)
    console.log("total price of cart 1:",total)
    return data
}).then((data)=> {
   return apiCall('https://dummyjson.com/carts/2')
}).then((data)=> {total1 = data.products.reduce((p,n)=>p+n.price,0)
    console.log("total price of cart 2:",total)
    console.log("total price of carts:",total+total1)
})
}