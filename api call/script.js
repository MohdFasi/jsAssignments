let title = document.querySelector('#title');
let list = document.querySelector('.list')
let  xhr= new XMLHttpRequest();
xhr.responseType="json"
function load(){
  xhr.onload = function(){
    xhr.response.products.map((e)=>{
      content.innerHTML += `<div class="product">
    <div class="first">
        <img src="${e.images[0]}" alt="">
    </div>
    <div class="second">
        <h1>${e.brand.toUpperCase()} ${e.title}</h1>
        <p>${Math.round(e.rating*10)/10} <i class="fa fa-star" aria-hidden="true"></i></p>
        <h3>${e.description}</h3>
    </div>
    <div class="third">
        <h1>$${e.price}</h1>
    </div>
</div>`
    })
  }
  xhr.open('GET', 'https://dummyjson.com/products/');
  xhr.send();
}
load()
function api(url){
  xhr.onprogress = function(){
    // list.style.display="block";
    // content.style.display="none";
    list.innerHTML = "loading..."
    console.log("loading...")
  }
xhr.onload=function(){
  list.innerHTML = ""
  console.log(xhr.response)
  // list.innerHTML=" "
  xhr.response.products.map((e)=>{
    list.innerHTML+=`<li>${e.title}</li>`
  })
}
xhr.onerror=function(){
  list.innerHTML= "Error"
}
xhr.open('GET',url);
xhr.send();

}

let content = document.querySelector('.container')
let sb = document.querySelector('#search-bar')
function search(url){
    xhr.onprogress = function(){
        content.innerHTML = '<h1> Loading...</h1>'
        // list.style.display="none"
        // content.style.display="block";

    }
    xhr.onload = function() {
        console.log(xhr.response.products)
        content.innerHTML = ''

        let sbval = sb.value.toLowerCase();
        let found = false;
        xhr.response.products.map((e)=>{
            if(e.title.toLowerCase() === sbval || e.brand.toLowerCase() === sbval || e.category.toLowerCase() === sbval){
                found = true;
                content.innerHTML += `<div class="product">
                <div class="first">
                    <img src="${e.images[0]}" alt="">
                </div>
                <div class="second">
                    <h1>${e.brand.toUpperCase()} ${e.title}</h1>
                    <p>${Math.round(e.rating*10)/10} <i class="fa fa-star" aria-hidden="true"></i></p>
                    <h3>${e.description}</h3>
                </div>
                <div class="third">
                    <h1>$${e.price}</h1>
                </div>
            </div>`
            }})
            if(!found){
               content.innerHTML= "Not found"
            }
            else{

            }
    }
    xhr.open('GET', 'https://dummyjson.com/products/');
    xhr.send();
}

