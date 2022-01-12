function registerHouse() {
    let bairro = document.getElementById('bairro').value;
    let n = document.getElementById('numero').value;
    let area = document.getElementById('area').value;
    let cidade = document.getElementById('cidade').value;
    let elementDIV = document.createElement('div');
    document.body.appendChild(elementDIV);
    let conteudoNovo = document.createTextNode('Bairro:' + bairro + '\nÁrea:' + area + '\nCidade: ' + cidade + '\nNúmero: ' + n);
    let button = document.createElement('button');
    button.textContent = 'Remover'
    elementDIV.appendChild(conteudoNovo);
    elementDIV.appendChild(button);
    button.addEventListener('click',deleteHouse , false);
}

function deleteHouse(e) {
    let deletedDIV = e.currentTarget.parentNode
    deletedDIV.remove();
}