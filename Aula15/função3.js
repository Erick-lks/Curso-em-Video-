let v = function(x){
    return x *2 
}

console.log(v(5))

//Outro tipo de função em javascript 

function fatoria(n){
    let fat = 1
    for(let c= n ; c > 1 ; c--){
        fat *= c
    }
    return fat
}

console.log(fatoria(5))