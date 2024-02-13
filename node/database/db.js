import { Sequelize } from "sequelize"

const db = new Sequelize('database_crud', 'root','Manolo28!',{
    host:'localhost',
    dialect: 'mysql'

})
//prueba

export default db

