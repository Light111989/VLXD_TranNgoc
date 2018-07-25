'use strict'
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define(
    'User',
    {
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      roles: DataTypes.STRING,
    },
    {}
  )
  User.associate = function(models) {
    // associations can be defined here
  }
  return User
}