//procurar o botão
document.querySelector('#add-time')
.addEventListener('click', cloneField)
// quando clicar no botao 
// executar uma ação
function cloneField(){
// duplicar os campos
   const newfieldsContainer =  document.querySelector('.schedule-item').cloneNode(true)

// pegar os campos
    const fields = newfieldsContainer.querySelectorAll('input')
// para cada campo limpar
    fields.forEach(function(field) {
        field.value = '';
    });

// colocar na pagina
   document.querySelector('#schedule-items').appendChild(newfieldsContainer)

}
