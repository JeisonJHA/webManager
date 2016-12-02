const shell = require('electron').shell
const os = require('os')
const actions_list = document.querySelector('#actions-list')

var actions = [
    {describe: 'Delphi 5', app: 'C:\Program Files (x86)\Borland\Delphi5\Bin\delphi32.exe', params: ''},
    {describe: 'Gerador de Petições', app: 'C:\SAJ\Gerar Petição\GerarPeticoesIniciaisInt.exe', params: ''}
  ]

actions.forEach(function(element, index, array) {
  try {

    var li = document.createElement("li")              
    var div_demo = document.createElement("div")   
    var div_wrapper = document.createElement("div") 

    div_demo.className = 'demo'
    div_wrapper.className = 'demo-wrapper'

    var button = document.createElement("button");         
    button.className = 'demo-button'
    button.type = 'button'
    button.textContent = element.describe
    button.setAttribute('data-section','sandbox')
    button.setAttribute('data-app', element.app)
    button.setAttribute('data-app-params', element.params)
    button.id = "action-" + index

    div_demo.appendChild(div_wrapper)
    div_wrapper.appendChild(button)
    li.appendChild(div_demo);                              
    actions_list.appendChild(li);

    button.addEventListener('click', function(event){
      shell.openItem(event.target.getAttribute('data-app') + ' ' + event.target.getAttribute('data-app-params'))
    })

  } catch (error) {
    console.error(error)
  }
})