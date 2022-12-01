const createCategories = require('./createCategories');

exports.run = async () => {
    await createCategories()

    try {
        await db.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
    
}