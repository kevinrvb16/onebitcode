const hitchedSpaceships = [
    ["Fenix", 8, true],
    ["Golias", 10, true],
    ["Helmet", 5, false],
    ["Elemental", 3, true],
    ["Darwth", 15, false]
];
let result = ''

const filteredSpaceships = hitchedSpaceships.filter((value) => {
    return value[1] > 9
})
result += 'Espaçonaves com mais de 9 tripulantes: '
filteredSpaceships.forEach((value) => {
    result +=`${value[0]}, `
})
result +='\nPlataform com processo de engate: '

const indexOfSpaceship = hitchedSpaceships.findIndex((value) => {
    return value[2] === false
})

result += `${indexOfSpaceship + 1}, `

result += '\nEspaçonaves destacadas: '

hitchedSpaceships.slice().forEach((value) => {result += `${value[0].toUpperCase()}, `})

result += '\n'

alert(result)
console.log(result)