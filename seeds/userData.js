const {User} = require('../models');

const userData =[
    {
        "username":"Dani",
        "password":"password"
    },
    {
        "username":"Ian",
        "password":"password"
    },
    {
        "username":"Santi",
        "password":"password"
    }
];

const seedUser =()=>User.bulkCreate(userdata,{
    individualHooks: true,
    returning: true,
});
module.exports = seedUser;