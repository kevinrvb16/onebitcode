function registerHouse() {
    let bairro = document.getElementById('bairro').value
    let n = document.getElementById('numero').value
    let area = document.getElementById('area').value
    let cidade = document.getElementById('cidade').value
    let elementDIV = document.getElementById('list')
    let conteudoNovo = document.createTextNode('Bairro:' + bairro + '\nÁrea:' + area + '\nCidade: ' + cidade + '\nNúmero: ' + n)
    elementDIV.appendChild(conteudoNovo)
}
