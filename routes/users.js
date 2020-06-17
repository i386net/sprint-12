const usersRouter = require('express').Router();
const path = require('path');
const users = require('../middlewares/users');

const dataPath = path.join(__dirname, '../data/users.json');

usersRouter.get('/', (req, res) => {
  users({ dataPath, res });
});

usersRouter.get('/:id', (req, res) => {
  users({ res, req, dataPath });
});

module.exports = usersRouter;
