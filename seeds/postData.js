const {Post} = require('../models');

const postdata =[
    {
        "title": "Beautiful Day",
        "content": "This is a beautiful day",
        "user_id": 1
    },
    {
        "title": "Incredible experience",
        "content": "Worth trying",
        "user_id": 2
    },
    {
        "title": "Go for it!",
        "content": "Try to update it every month!",
        "user_id": 3
    }
];

const seedPosts= ()=> Post.bulkCreate(postdata);

module.exports = seedPosts;