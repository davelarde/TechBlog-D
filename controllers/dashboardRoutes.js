const router = require('express').Router();
const { Post, User } = require('../models/');
const withAuth = require('../utils/auth');

// ALL POSTS DASHBOARD
router.get('/', withAuth, async (req, res) => {
  try {
    // store the results of the db query in a variable called postData. should use something that "finds all" from the Post model. may need a where clause!

    const postData = await Post.findAll({
      where:{"userId": req.session.userId},
      include: [User]
    });
    // this sanitizes the data we just got from the db above (you have to create the above)
    const posts = postData.map((post) => post.get({ plain: true }));
console.log(posts);
    // fill in the view to be rendered -DONE!
    res.render('all-posts', {
      // this is how we specify a different layout other than main! no change needed
      layout: 'dashboard',
      // coming from line 10 above, no change needed
      posts,
    });
  } catch (err) {
    res.redirect('login');
  }
});

// AFTER CLICK ON NEW POST BUTTON
router.get('/new', withAuth, (req, res) => {
  // what view should we send the client when they want to create a new-post? (change this next line) - DONE!
  res.render('new-post', {
    // again, rendering with a different layout than main! no change needed
    layout: 'dashboard',
  });
});