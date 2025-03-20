const { DataTypes } = require('sequelize');
const {dbCafe} = require('../database/config');

const Role = dbCafe.define('roles', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    role: {
        type: DataTypes.STRING(20),
        allowNull: false,
    }
},
{
    freezeTableName: true,
    timestamps: false,
})

module.exports = Role;