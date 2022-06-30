
const arrayVazio = []

const Repetir = function(repetir,vezesRepetir){
     
   for(let i = 0; i < vezesRepetir; i++){
    arrayVazio.push(repetir)
   }
   return arrayVazio
}

console.log(Repetir(1,4))
