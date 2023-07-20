const User = require("../models/user");
const jwt = require('jsonwebtoken');

//handel errors 
const handleErrors = (err) => {
  // console.log(err.message, err.code);
  let errors = { email: '', password: '' }
  // email is already registered
  if (err.code === 11000) {
    errors.email = 'that email is already registered';
    console.log(errors.email);
    return errors;
  }
  // incorrect email
  if (err.message === 'incorrect email') {
    errors.email = 'That email is not registered';
  }

  // incorrect password
  if (err.message === 'incorrect password') {
    errors.password = 'That password is incorrect';
  }


  //duplicare error code
  if (err.message.includes('user validation failed')) {
    (Object.values(err.errors)).forEach(properties => {
      errors[properties.path] = properties.message;
    });
  }
  return errors;
}
const maxage = 3 * 24 * 60 * 60;
//jwt tokern 
const createToke = (id) => {
  return jwt.sign({ id }, 'dragon12345', {
    expiresIn: maxage
  });
}
// controller actions
module.exports.signup_get = (req, res) => {
  res.render('signup');
}

module.exports.login_get = (req, res) => {
  res.render('login');
}

module.exports.signup_post = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.create({ email, password });
    const token = createToke(user._id);
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxage * 1000 })
    res.status(201).json({ user: user._id });
  }
  catch (err) {
    const errors = handleErrors(err);
    console.log(errors);
    res.status(400).json({ errors });
  }
}

module.exports.login_post = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);
    const token = createToke(user._id);
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxage * 1000 })
    res.status(200).json({ user: user._id });
  } catch (err) {
    const errors = handleErrors(err)
    res.status(400).json({ errors });
  }
}
module.exports.logout_get= async (req, res) => {
  res.cookie('jwt','' , {maxage : 1});
  res.redirect('/');
}