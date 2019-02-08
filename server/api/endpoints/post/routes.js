const router = require('express').Router();
const controller = require('./controller');
const { isAdmin } = require('../utils');

// setup boilerplate route just to satisfy a request
// for building
router.param('id', controller.params);

router
  .route('/')
  .get(controller.get)
  .post(isAdmin, controller.post);

router
  .route('/:id')
  .get(controller.getOne)
  .put(isAdmin, controller.update)
  .delete(isAdmin, controller.delete);

module.exports = router;
