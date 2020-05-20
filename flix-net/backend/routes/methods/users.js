// Methods available for handling users

getUsers = (req, res, next) => {
  req.models.User.find()
    .then((result) => {
      return res.status(200).send(result);
    })
    .catch((error) => {
      next(error)
    });
}

createUser = (req, res, next) => {
  req.models.User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  }).then((result) => {
    return res.status(201).send(result);
  }).catch((error) => {
    next(error);
  })
}

module.exports = {
  getUsers,
  createUser
};