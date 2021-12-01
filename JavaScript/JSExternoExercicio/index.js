const olderPersonName = prompt('Digite o nome da pessoa mais velha:')
const olderPersonAge = prompt('Digite a idade da pessoa mais velha:')
const youngerPersonName= prompt('Digite o nome da pessoa mais nova:')
const youngerPersonAge= prompt('Digite a idade da pessoa mais nova:')

const ageDifference = olderPersonAge - youngerPersonAge

alert('Nome da pessoa mais velha: ' + olderPersonName + '\nIdade da pessoa mais velha: ' + olderPersonAge + 
    '\n\nNome da pessoa mais nova: ' + youngerPersonName + '\nIdade da pessoa mais nova: ' + youngerPersonAge + 
    '\n\nDiferença de idade: ' + ageDifference)