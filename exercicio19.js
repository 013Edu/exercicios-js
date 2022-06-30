
const array = [
     {nome: "Jornal online", categoria: "Informação", preco: 89.99},
     {nome: "Cinema", categoria: "Entretenimento", preco: 150}
]


const getPreco = array.map(p => p.preco).reduce(function(acumulador,atual){
    return acumulador + atual
},0)

console.log(getPreco)
