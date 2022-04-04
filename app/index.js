const express = require('express');

const dotEnv = require('dotenv');

const sequelize = require('./utils/database');
const User = require('./models/users');
dotEnv.config()

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin','*')
    res.setHeader('Access-Control-Allow-Methods','GET', 'POST', 'PUT', 'DELETE')
    next();
})

app.use('/dev', require('./routes/dev'));
app.use('/users', require('./routes/users'));

(async () => {
    try {
        await sequelize.sync(
            {force: false}
        );

        console.log('Started')
        app.listen(process.env.EXTERNAL_PORT || 8005);
    } catch (error) {
        console.error(error);
    }
})()




