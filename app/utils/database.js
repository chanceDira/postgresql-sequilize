const Sequelize = require('sequelize');


const sequelize = new Sequelize(
    process.env.PGDATABASE,
    process.env.PGUSER,
    process.env.PGPASSWORD,
    {
        host: process.env.PGHOST,
        // host: '127.0.0.1',
        dialect: 'postgres'
    }
);

module.exports = sequelize;