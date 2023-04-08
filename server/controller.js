const Sequelize = require('sequelize');
require('dotenv').config()

const { CONNECTION_STRING } = process.env;

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})

module.exports = {
     signUp(req, res) {
        const email = req.body.email;
        try {
          sequelize.query(`
          INSERT INTO newsletter (email) 
          VALUES ('${email}')`);
          res.send("Thank you for signing up!");
        } catch (error) {
          console.error(error);
          res.status(400).send('Error signing up');
        }
      }
    
}