const User = require('../models/userModels');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { mysecret } = require('../../config');

const createUser = (req, res) => {
  // there should be a user object set on req
  // use that req.user object to create a user and save it to our Mongo instance.
  const user = req.user;
  const newUser = new User(user);
  if (!user.username || !user.password) res.status(422).json({ error: 'Please provide username and password' });
  newUser.save()
    .then((user) => {
      const payload = {
        username: user.username
      };
      const token = jwt.sign(payload, mysecret); 
      if (!user) res.status(422).json({ error: 'User created failed' });
      res.status(201).json({ success: 'User created successfully', user, token });
    })
    .catch((error) => {
      res.status(422).json({ error: error.message });
    });
};

module.exports = {
  createUser
};
