const router = require('express').Router();
const controller = require('./controller');
const { isAuthenticated, isAdmin } = require('../utils');

// setup boilerplate route just to satisfy a request
// for building
router.param('id', controller.params);

router
  .route('/')
  .get(isAuthenticated, isAdmin, controller.get)
  .post(controller.post);

router
  .route('/:id')
  .get(controller.getOne)
  .put(controller.update)
  .delete(controller.delete);

module.exports = router;
