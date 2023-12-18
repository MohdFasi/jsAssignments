
let xhr = new XMLHttpRequest();
xhr.responseType = 'json';
function api(url, callback){
    xhr.onload = function(){
        callback(xhr.response)        
    }
    xhr.onerror= function(){
        callback("ERROR");
    }
    xhr.open('GET',url)
    xhr.send();
}
function seqCall(){
    api('https://dummyjson.com/users',(data)=>{
        console.log(data.users);
        api(`https://dummyjson.com/users/${data.users[1].id}`,(data)=>{
            console.log(data);
            api(`https://dummyjson.com/users/${data.id}/todos`,(data)=>{
                console.log(data);
                api(`https://dummyjso.com/users/${data}`,(data)=>{
                    console.log(data);
                })
                })
            })
         })
    }