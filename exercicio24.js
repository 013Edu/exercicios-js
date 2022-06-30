
const frase = "Iae meu amigo"


let quantidade = 0

    const contarPalavra = function(letra){

         for(let i = 0; i < frase.length; i++){

         if(frase[i] == letra){
             
         quantidade++

         }
       }
       return quantidade
   }


console.log(contarPalavra("i"))