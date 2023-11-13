const express=require('express');
const Authenticate=require('../controller/jwtcontroller');
const {follower,followtoperson}=require('../controller/follower')
const { getnotification } = require('../controller/notificationcontroller');

const followRoute=express.Router();

followRoute
.route('/follow')
.post(Authenticate,follower);

followRoute
.route('/followers')
.get(followtoperson);

followRoute
.route('/notification')
.get(getnotification);










module.exports=followRoute;