let number = ""


const simboloMais = function(nVezes = 3){
 
  for(let i = 0; i < nVezes; i++){
    number+= "+"

  }
  return number
}

console.log(simboloMais(3))