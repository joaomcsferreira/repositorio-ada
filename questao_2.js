function contadorDePalavras(frase) {
  palavras = 1

  for (let letra of frase) {
    if (letra === letra.toUpperCase()) palavras++
  }

  return palavras
}

console.log(
  contadorDePalavras(
    "façaMercadoNoIfoodEntregamosTudoOQueVocêPrecisaNaPortaDaSuaCasa"
  )
)
