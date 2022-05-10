const {Post} = require('../models');

const postdata =[
    {
        "postTitle": "Beautiful Day",
        "postContent": "This is a beautiful day",
        "userId": 1
    },
    {
        "postTitle": "Incredible experience",
        "postContent": "Worth trying",
        "userId": 2
    },
    {
        "postTitle": "Go for it!",
        "postContent": "Try to update it every month!",
        "userId": 3
    }
];

const seedPost= ()=> Post.bulkCreate(postdata);

module.exports = seedPost;