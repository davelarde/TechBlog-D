const sequelize = require('../config/connection');
const seedUser = require('../seeds/userData');
const seedPost = require('./postData');

const seedAll = async()=>{
    await sequelize.async({force: true});

    await seedUser();

    await seedPost();

    process.exit(0);
};

seedAll();