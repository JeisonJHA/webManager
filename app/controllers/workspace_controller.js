"use strict";

const FileHelper = require('../helpers/file_helper');
const Models = require('../models');
const IndexView = require('../views/workspace/index');

module.exports = class WorkspaceController {

  constructor() {
    this.list = document.querySelector('#sandbox-list')
  }

  index() {
    let file = new FileHelper();
    let workspaces = ['e:\\rtc', 'd:\\rtc'];

    workspaces.forEach(function (element, index, array) {
      IndexView(file.get_diretories(element));
    });
  }
}