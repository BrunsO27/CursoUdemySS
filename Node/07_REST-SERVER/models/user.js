const { DataTypes } = require('sequelize');
const {dbCafe} = require('../database/config');

const Usuario = dbCafe.define('usuarios', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(100),
        unique: true,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    google: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    role_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'roles',
            key: 'id'
        }
    },
    img: {
        type: DataTypes.STRING,
    },
    estado: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    }
},
{
    freezeTableName: true,
    timestamps: false,
});

// Asegurar que el método toJSON funcione correctamente
Usuario.prototype.toJSON = function () {
    return {
        id: this.id,
        nombre: this.nombre,
        email: this.email,
        role_id: this.role_id,
        img: this.img,
        google: this.google,
        estado: this.estado
    };
};

module.exports = Usuario;