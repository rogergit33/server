import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE,
    dialect: 'mysql',
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
})


export default sequelize;