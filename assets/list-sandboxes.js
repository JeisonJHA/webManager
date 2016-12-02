const fs = require('fs')
const path = require('path')

const sandboxList = document.querySelector('#sandbox-list')

// List all files in a directory in Node.js recursively in a synchronous fashion
var walkSync = function(dir, filelist) {
  var files = fs.readdirSync(dir);

  filelist = filelist || [];
  files.forEach(function(file, i) {
    var dir_aux = dir + '\\' + file 
    var rg=/^\./;

    if (fs.statSync(dir_aux).isDirectory() && !(rg.test(file))) {
      filelist.push(file);
      
      var node = document.createElement("li");              

      var button = document.createElement("button");         
      button.className = 'nav-button sandbox'
      button.type = 'button'
      button.textContent = file
      button.setAttribute('data-section','sandbox')
      button.setAttribute('data-path',dir_aux)
      button.id = "sandbox-" + i
      node.appendChild(button);                              
      sandboxList.appendChild(node);
    }
  });
  return filelist;
};

const workspaces = ['e:\\rtc', 'd:\\rtc']
workspaces.forEach(function(element, index, array) {
  var dir = [];
  try {
    walkSync(element, dir);
  } catch (error) {
    console.error(error)
  }
})

    
var buttonlist = document.querySelectorAll('.sandbox')
for (var i = 0; buttonlist[i]; i++) {    
    buttonlist[i].addEventListener('click', function(event){
      console.log(event.target)
      console.log(app)
    })
}