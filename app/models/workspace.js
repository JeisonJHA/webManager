"use strict";

var Sequelize = require('sequelize');

module.exports = function (sequelize, DataTypes) {

  var Workspace = sequelize.define('Workspace', {
    directory: Sequelize.STRING
  });

  return Workspace;
};