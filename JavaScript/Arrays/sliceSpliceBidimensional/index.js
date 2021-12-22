const hitchedSpaceships = [
    ["Fenix", 8, true],
    ["Golias", 10, true],
    ["Helmet", 5, false],
    ["Elemental", 3, true],
    ["Darwth", 15, false]
];
let result = ''

const filteredSpaceships = hitchedSpaceships.filter((value) => {
    return value[0].length >= 9
})

filteredSpaceships.forEach((value) => {
    result +=`${value[0]}, `
})
result +='\n'

const indexOfSpaceship = hitchedSpaceships.findIndex((value) => {
    return value[2] === false
})
if (indexOfSpaceship) {
    result += `${hitchedSpaceships[indexOfSpaceship][1]}, `
}
result += '\n'

hitchedSpaceships.slice().forEach((value) => {result += `${value[0].toUpperCase()}, `})

result += '\n'

alert(result)
console.log(result)