
const removerPropriedade = function(propDeletada){
    let obj = {
        a: 1,
        b: 2
    }
   
    if(propDeletada == "a"){

         delete obj.a
    }
    if(propDeletada == "b"){

         delete obj.b
    }

    return obj
}

console.log(removerPropriedade("a"))