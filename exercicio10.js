
const estaEntre = function(numero,minimo,maximo){
 
    if(numero >= minimo && numero <= maximo){

         return true
    }else{
        return false
    }
}

console.log(estaEntre(10,100,50))