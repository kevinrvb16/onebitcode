class App{
    cadProperty() {
        event.preventDefault();
        let property = document.querySelector('input[name=type]').value;
        let area = document.querySelector('input[name=area]').value;
        let isRent = document.querySelector('input[name=isRent]:checked').value;
        
        let house = new Property(property, area, isRent)
        let ulElem = document.getElementById('propertyList')
        let ilElem = document.createElement('li');
        ulElem.appendChild(ilElem);
        if (isRent == 'ALUGADO') {
            ilElem.innerText = isRent + '\n\nTipo de propriedade: ' + property + "\n Área: " +  area + "\nEstá alugado? "
            ilElem.classList.add('alugado')
        } else {
            ilElem.innerText = 'Tipo de propriedade: ' + property + "\n Área: " +  area + "\n" + isRent
        }
        let button = document.createElement('button');
        ilElem.appendChild(button);
        ilElem.classList.add('li');
        button.setAttribute('onclick', 'removeProperty(this)')
        button.innerText = "Remover"
        button.style.width = "120px"
        button.style.padding = "6px"
        document.querySelector('form').reset();
    }
    
    removeProperty(button) {
        let propertyToRemove = button.parentNode
        document.getElementById('propertyList').removeChild(propertyToRemove);
    }
}