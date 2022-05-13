const { User } = require('../models');

const userData = [{
        username: 'Dani',
        password: 'dani12'

    },
    {
        username: 'Ian',
        password: '12345'
    },
    {
        username: 'Joe',
        password: '4567'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;