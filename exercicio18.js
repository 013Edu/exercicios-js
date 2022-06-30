
const checarAnoBissexto = function(ano){

     if(ano % 4 == 0 ){
         return true
     }else if(ano % 400 == 0){
         return true
     }else if(ano % 100 !== 0){
        return false
     }
  
}
console.log(checarAnoBissexto(2011))
