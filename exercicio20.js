
const array = [1,3,10,23,90]

let soma = 0

     for(let i = 0; i < array.length; i++){

          soma+= array[i]
     }

     const calcularMedia = function(){
 
        return soma/array.length
     }

console.log(calcularMedia())


//const reducer = (acumulador,atual) => acumulador + atual

//console.log(array.reduce(reducer))