const { DataTypes } = require('sequelize');
const dbCafe = require('../database/config');

const Usuario = dbCafe.define('usuarios', {
    id: {
        type: DataTypes.INET,
        primaryKey: true,
    }
})