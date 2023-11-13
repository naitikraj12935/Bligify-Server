const post = require('../models/post');
const follow = require('../models/followmodel');

const getnotification = async (req, res) => {
  try {
    console.log(req.query.userName);
    const followingTo = await follow.find({ followby: req.query.userName });
    console.log(followingTo);
    
    
    console.log('FollowingTo:', followingTo);
const notificationdata = await Promise.all(followingTo.map(async (el) => {
  const posts = await post.find({ userName: el.followto, createDate: { $gte: Date.now() - 3 * 24 * 60 * 60 * 1000 } });
  console.log(`Posts for ${el.followto}:`, posts);
  return posts;
}));
console.log('Notification Data:', notificationdata);

    res.status(200).json({
      status:'ok',
      data:{
        notificationdata
      }
    })
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { getnotification };

  