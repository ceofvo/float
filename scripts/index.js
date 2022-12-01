const {createCategories} = require('./createCategories');
const db = require('../db');

exports.runScripts = async () => {
    await createCategories()

    try {
        await db.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
    
}