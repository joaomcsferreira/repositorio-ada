function verificaRepetidos(numeros) {
  aux_numeros = []
  repetidos = []

  for (let numero of numeros) {
    if (aux_numeros.includes(numero)) repetidos.push(numero)
    else aux_numeros.push(numero)
  }

  for (let numero of repetidos) {
    let index = aux_numeros.indexOf(numero)
    aux_numeros.splice(index, 1)
  }

  return aux_numeros
}

numeros = [12, 17, 15, 19, 22, 17, 19, 12]
console.log(verificaRepetidos(numeros))
