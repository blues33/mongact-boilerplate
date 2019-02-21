const router = require('express').Router();

const controller = require('./controller');
const { isAdmin, isAuthenticated } = require('../utils');

// setup boilerplate route just to satisfy a request
// for building

router.param('id', controller.params);

router
  .route('/')
  .get(isAuthenticated, controller.get)
  .post(isAuthenticated, isAdmin, controller.post);

router
  .route('/:id')
  .get(controller.getOne)
  .put(controller.update)
  .delete(controller.delete);

module.exports = router;
