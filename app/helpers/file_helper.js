"use strict";

const fs = require('fs')
const path = require('path')

module.exports = class FileHelper {

  get_diretories(dir) {
    try {
      let files = fs.readdirSync(dir);

      let filelist = [];
      files.forEach(function (file, i) {
        let dir_aux = dir + '\\' + file
        let rg = /^\./;

        if (fs.statSync(dir_aux).isDirectory() && !(rg.test(file))) {
          filelist.push(file);

        }
      });
      return filelist;
    } catch (error) {
      console.error(error);
    }
  };

}