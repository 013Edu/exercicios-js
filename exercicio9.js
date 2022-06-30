
const inverso = function(n){
 

    if(n === true){

         return false

    }else if(n === false){

        return true
    }
    
    if(n >= 0){

         return n * -1

    }else if(n<= 0){

        return n * -1
    
    }else{

        return  "booleano ou número esperados, mas o parâmetro é do tipo "
    }
}
console.log(inverso(1))