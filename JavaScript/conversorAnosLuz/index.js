const distAnosLuz = prompt("Digite a distância em anos-luz\n")
let optConvert = prompt("Para qual unidade deseja converter?\n1- Parsec(pc)\n2- Unidade Astrônomica(AU)\n3- Quilômetros(Km)\n")
let conversaodesejada
let convertedDistance

switch(optConvert){
    case '1':
        conversaodesejada = "Parsec(pc)"
        convertedDistance = distAnosLuz * 0.306601
        break
    case '2':
        conversaodesejada = "Unidade Astrônomica(AU)"
        convertedDistance = distAnosLuz * 63241.1
        break
    case '3':
        conversaodesejada = "Quilômetros(Km)"
        convertedDistance = distAnosLuz * 9.5 * Math.pow(10, 12)
        break
    default:
        conversaodesejada = "Unidade não identificada"
        convertedDistance = "Conversão fora do escopo"
}

alert(`Distância em Anos-luz: ${distAnosLuz}\n${conversaodesejada}: ${convertedDistance}`)