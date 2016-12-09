"use strict";

module.exports = function (sequelize, DataTypes) {

  var Sequelize = require('sequelize');
  var User = sequelize.define('User', {
    username: Sequelize.STRING,
    password: Sequelize.STRING
  });

  return User;
};