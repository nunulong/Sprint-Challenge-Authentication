const User = require('../models/userModels');
const bcrypt = require('bcrypt');

const createUser = (req, res) => {
  // there should be a user object set on req
  // use that req.user object to create a user and save it to our Mongo instance.
  const user = req.user;
  const newUser = new User(user);
  if (!user.username || !user.password) res.status(422).json({ error: 'Please provide username and password' });
  newUser.save()
    .then((user) => {
      if (!user) res.status(422).json({ error: 'User created failed' });
      res.status(201).json({ success: 'User created successfully', user });
    })
    .catch((error) => {
      res.status(422).json({ error: error.message });
    });
};

module.exports = {
  createUser
};
