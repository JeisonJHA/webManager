const fs = require('fs')
const path = require('path')

const sandboxList = document.querySelector('#sandbox-list')
console.log(sandboxList)

// List all files in a directory in Node.js recursively in a synchronous fashion
    var walkSync = function(dir, filelist) {
      var fs = fs || require('fs'),
          files = fs.readdirSync(dir);
      filelist = filelist || [];
      files.forEach(function(file, i) {
          var dir_aux = dir + '/' + file 
        if (fs.statSync(dir_aux).isDirectory()) {
          filelist.push(file);
          
            var node = document.createElement("li");              

            var button = document.createElement("button");         
            button.className = 'nav-button'
            button.type = 'button'
            button.textContent = file
            button.setAttribute('data-section','sandbox')
            button.setAttribute('data-path',dir_aux)
            button.id = "sandbox-" + i
            node.appendChild(button);                              
            sandboxList.appendChild(node);  

            console.log(sandboxList)
        }
      });
      return filelist;
    };
    var dir = [];
    console.log(walkSync('.', dir));