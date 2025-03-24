const mysql = require('mysql')
const { Sequelize } = require('sequelize')

const dbCafe = new Sequelize(process.env.DB_NAME, 
                             process.env.DB_USER, 
                             process.env.DB_PASSWORD,
                             {
    //host: 'localhost',
    host: 'mysql',
    dialect: 'mysql',
    logging: false,
});

module.exports = {
    dbCafe
}