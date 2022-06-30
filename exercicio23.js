
function getRandomInt(min, max,x) {
    min = Math.ceil(min);
    max = Math.floor(max);
   
    let numberRandom =  Math.floor(Math.random() * (max - min)) + min;
    
    if(x == numberRandom){
 
        return `Parabéns! O número sorteado foi ${x}`
    }else{
        return `Que pena! O número sorteado foi o ${numberRandom} `
    }
    
  }

  console.log(getRandomInt(0,10,1))